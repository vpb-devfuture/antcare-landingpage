Add-Type -AssemblyName System.Drawing

$srcPath = "C:\Users\HP\.gemini\antigravity\brain\94a319eb-9147-4a45-821b-24d735dfe143\antcare_hero_banner_three_generations_1793873422548.jpg"
$desktopDst = "c:\my-projects\antcare\sourcecode\antcare-landingpage\public\images\hero-bg.jpg"
$mobileDst = "c:\my-projects\antcare\sourcecode\antcare-landingpage\public\images\hero-bg-mobile.jpg"

# 1. Copy full desktop hero
Copy-Item -Path $srcPath -Destination $desktopDst -Force
Write-Host "Desktop hero updated to: $desktopDst"

# 2. Open source image for mobile portrait crop
$srcImg = [System.Drawing.Image]::FromFile($srcPath)
Write-Host "Source image size: $($srcImg.Width) x $($srcImg.Height)"

# The three women are located in the right half of the image.
# In a 1920x1080 (or similar 16:9) image:
# Women are roughly from x = 50% to 100%, and y = 10% to 95%.
# Let's crop a portrait 3:4 or 4:5 focusing on the 3 women.
# If width = 1376 or 1920:
$w = $srcImg.Width
$h = $srcImg.Height

# Focus area around the women:
# Center of women is around x = 0.75 * w
# Let's crop a width of roughly 0.55 * w, and full height or 0.9 * h
$cropW = [int]($w * 0.54)
$cropH = [int]($h * 0.96)
$cropX = [int]($w * 0.46)
$cropY = [int]($h * 0.04)

Write-Host "Cropping rect: X=$cropX, Y=$cropY, W=$cropW, H=$cropH"

$cropRect = New-Object System.Drawing.Rectangle $cropX, $cropY, $cropW, $cropH
$targetBmp = New-Object System.Drawing.Bitmap $cropW, $cropH
$g = [System.Drawing.Graphics]::FromImage($targetBmp)
$g.InterpolationMode = [System.Drawing.Drawing2D.InterpolationMode]::HighQualityBicubic
$g.SmoothingMode = [System.Drawing.Drawing2D.SmoothingMode]::HighQuality
$g.PixelOffsetMode = [System.Drawing.Drawing2D.PixelOffsetMode]::HighQuality
$g.CompositingQuality = [System.Drawing.Drawing2D.CompositingQuality]::HighQuality

$destRect = New-Object System.Drawing.Rectangle 0, 0, $cropW, $cropH
$g.DrawImage($srcImg, $destRect, $cropRect, [System.Drawing.GraphicsUnit]::Pixel)

# Save with high quality JPEG (95)
$codec = [System.Drawing.Imaging.ImageCodecInfo]::GetImageEncoders() | Where-Object { $_.MimeType -eq "image/jpeg" }
$encoderParams = New-Object System.Drawing.Imaging.EncoderParameters 1
$encoderParams.Param[0] = New-Object System.Drawing.Imaging.EncoderParameter ([System.Drawing.Imaging.Encoder]::Quality, [long]95)

$targetBmp.Save($mobileDst, $codec, $encoderParams)

$g.Dispose()
$targetBmp.Dispose()
$srcImg.Dispose()

Write-Host "Mobile portrait hero created at: $mobileDst"

