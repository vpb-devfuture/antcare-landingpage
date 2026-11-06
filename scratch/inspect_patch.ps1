Add-Type -AssemblyName System.Drawing

$src = "C:\Users\HP\.gemini\antigravity\brain\94a319eb-9147-4a45-821b-24d735dfe143\current_hero_bg.jpg"
$img = [System.Drawing.Bitmap]::FromFile($src)

# Let's crop candidate clean fabric patches from the left of the woman's chest
# Her chest on the left (viewer's left) is around X: 780 to 920, Y: 460 to 620
$patchW = 150
$patchH = 150

$rect1 = New-Object System.Drawing.Rectangle 780, 470, $patchW, $patchH
$bmp1 = New-Object System.Drawing.Bitmap $patchW, $patchH
$g1 = [System.Drawing.Graphics]::FromImage($bmp1)
$g1.DrawImage($img, (New-Object System.Drawing.Rectangle 0, 0, $patchW, $patchH), $rect1, [System.Drawing.GraphicsUnit]::Pixel)
$bmp1.Save("C:\Users\HP\.gemini\antigravity\brain\94a319eb-9147-4a45-821b-24d735dfe143\clean_fabric_patch.jpg", [System.Drawing.Imaging.ImageFormat]::Jpeg)

$g1.Dispose()
$bmp1.Dispose()
$img.Dispose()
Write-Host "Saved clean fabric patch!"

