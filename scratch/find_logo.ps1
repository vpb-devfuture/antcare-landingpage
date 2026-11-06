Add-Type -AssemblyName System.Drawing

$src = "C:\Users\HP\.gemini\antigravity\brain\94a319eb-9147-4a45-821b-24d735dfe143\current_hero_bg.jpg"
$img = [System.Drawing.Image]::FromFile($src)

# Let's crop just the chest area with the logo
# $img is 1716 x 916
# Let's locate the chest area:
# In woman_crop.jpg (which was x: 0.30*w = 514, y: 0.15*h = 137, w: 686, h: 778)
# In woman_crop:
# Woman's head is top center-right. Chest is below chin.
# Chin is around y=300 in woman_crop. Chest logo is around x=480-550, y=400-450 in woman_crop.

$cropX = 514 + 400
$cropY = 137 + 300
$cropW = 200
$cropH = 200

$rect = New-Object System.Drawing.Rectangle $cropX, $cropY, $cropW, $cropH
$bmp = New-Object System.Drawing.Bitmap $cropW, $cropH
$g = [System.Drawing.Graphics]::FromImage($bmp)
$g.DrawImage($img, (New-Object System.Drawing.Rectangle 0, 0, $cropW, $cropH), $rect, [System.Drawing.GraphicsUnit]::Pixel)

$bmp.Save("C:\Users\HP\.gemini\antigravity\brain\94a319eb-9147-4a45-821b-24d735dfe143\logo_crop.jpg", [System.Drawing.Imaging.ImageFormat]::Jpeg)

$g.Dispose()
$bmp.Dispose()
$img.Dispose()
Write-Host "Saved logo crop"

