Add-Type -AssemblyName System.Drawing

$src = "C:\Users\HP\.gemini\antigravity\brain\94a319eb-9147-4a45-821b-24d735dfe143\current_hero_bg.jpg"
$img = [System.Drawing.Image]::FromFile($src)

# Let's crop just the young woman and her shirt to inspect closely
# img size: let's check
Write-Host "Size: $($img.Width) x $($img.Height)"

# The young woman is roughly in the left-center of the human cluster
# Let's crop her torso & shirt
$w = $img.Width
$h = $img.Height

$cropX = [int]($w * 0.30)
$cropY = [int]($h * 0.15)
$cropW = [int]($w * 0.40)
$cropH = [int]($h * 0.85)

$rect = New-Object System.Drawing.Rectangle $cropX, $cropY, $cropW, $cropH
$bmp = New-Object System.Drawing.Bitmap $cropW, $cropH
$g = [System.Drawing.Graphics]::FromImage($bmp)
$g.DrawImage($img, (New-Object System.Drawing.Rectangle 0, 0, $cropW, $cropH), $rect, [System.Drawing.GraphicsUnit]::Pixel)

$outPath = "C:\Users\HP\.gemini\antigravity\brain\94a319eb-9147-4a45-821b-24d735dfe143\woman_crop.jpg"
$bmp.Save($outPath, [System.Drawing.Imaging.ImageFormat]::Jpeg)

$g.Dispose()
$bmp.Dispose()
$img.Dispose()
Write-Host "Saved woman crop to $outPath"

