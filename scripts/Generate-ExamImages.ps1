param(
    [Parameter(Mandatory=$true)]
    [string]$FilePath,
    [Parameter(Mandatory=$true)]
    [string]$ApiKey
)

# Configuration
$ImageSize = "1024x1024"
$Model = "dall-e-3" # or dall-e-2
$ImagesDirName = "images"

# 1. Read File
if (-not (Test-Path $FilePath)) {
    Write-Error "File not found: $FilePath"
    exit 1
}

$FileContent = Get-Content -Path $FilePath -Raw -Encoding UTF8
$FileName = [System.IO.Path]::GetFileNameWithoutExtension($FilePath)
$FileDir = [System.IO.Path]::GetDirectoryName($FilePath)
$ImagesDir = Join-Path $FileDir $ImagesDirName

if (-not (Test-Path $ImagesDir)) {
    New-Item -ItemType Directory -Path $ImagesDir | Out-Null
    Write-Host "Created images directory: $ImagesDir"
}

# 2. Extract JSON
# Matches "window.Variable = [...]" or "const Variable = [...]"
# We assume the file structure is: window.VARNAME = [ ... ];
$Pattern = '^(window\.|const\s+)(\w+)\s*=\s*(\[[\s\S]*\]);?\s*$'
if ($FileContent -match $Pattern) {
    $Prefix = $matches[1]
    $VarName = $matches[2]
    $JsonString = $matches[3]
} else {
    Write-Error "Could not parse JS file structure. Expected 'window.VAR = [...]'"
    exit 1
}

try {
    $Questions = $JsonString | ConvertFrom-Json
} catch {
    Write-Error "Failed to parse JSON content: $_"
    exit 1
}

$Updated = $false

# 3. Iterate and Generate
foreach ($Q in $Questions) {
    if ([string]::IsNullOrWhiteSpace($Q.slideImagePath)) {
        Write-Host "Generating image for Question ID $($Q.id)..."
        
        # Generate Prompt
        $Prompt = "Medical illustration, educational style, clear and accurate. Category: $($Q.category). Context: $($Q.questionText)"
        # Truncate prompt if too long (max 4000 chars for DALL-E 3, but keep it safe)
        if ($Prompt.Length -gt 1000) { $Prompt = $Prompt.Substring(0, 1000) }

        # API Call
        $Headers = @{
            "Authorization" = "Bearer $ApiKey"
            "Content-Type"  = "application/json"
        }
        $Body = @{
            model  = $Model
            prompt = $Prompt
            n      = 1
            size   = $ImageSize
        } | ConvertTo-Json

        try {
            $Response = Invoke-RestMethod -Uri "https://api.openai.com/v1/images/generations" -Method Post -Headers $Headers -Body $Body -ErrorAction Stop
            $ImageUrl = $Response.data[0].url
            
            # Download Image
            $ImageFileName = "${VarName}_p$($Q.id).jpg"
            $LocalImagePath = Join-Path $ImagesDir $ImageFileName
            Invoke-WebRequest -Uri $ImageUrl -OutFile $LocalImagePath
            
            # Update Object
            $Q.slideImagePath = "$ImagesDirName/$ImageFileName"
            $Q.slideImageDescription = "AI Generated illustration for: $($Q.category)"
            
            $Updated = $true
            Write-Host "  -> Saved to $ImagesDirName/$ImageFileName"
        } catch {
            Write-Error "  -> Failed to generate image: $($_.Exception.Message)"
            if ($_.Exception.Response) {
                $Stream = $_.Exception.Response.GetResponseStream()
                $Reader = New-Object System.IO.StreamReader($Stream)
                Write-Error "  -> API Response: $($Reader.ReadToEnd())"
            }
        }
    }
}

# 4. Save File
if ($Updated) {
    # Convert back to JSON
    # Depth 10 to ensure nested objects are serialized correctly
    $NewJson = $Questions | ConvertTo-Json -Depth 10
    
    # Reconstruct File Content
    $NewContent = "${Prefix}${VarName} = ${NewJson};"
    
    # Write back
    Set-Content -Path $FilePath -Value $NewContent -Encoding UTF8
    Write-Host "Successfully updated $FilePath"
} else {
    Write-Host "No missing images found. File not updated."
}
