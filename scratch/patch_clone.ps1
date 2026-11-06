Add-Type -AssemblyName System.Drawing

$srcPath = "C:\Users\HP\.gemini\antigravity\brain\94a319eb-9147-4a45-821b-24d735dfe143\current_hero_bg.jpg"
$img = [System.Drawing.Bitmap]::FromFile($srcPath)

$bmp = New-Object System.Drawing.Bitmap $img.Width, $img.Height
$g = [System.Drawing.Graphics]::FromImage($bmp)
$g.DrawImage($img, 0, 0, $img.Width, $img.Height)

# Logo bounds are roughly X: 975 to 1090, Y: 490 to 575.
# Let's define the mask for the logo and pocket seam.
# Any pixel where the logo or pocket seam exists will be replaced.
# Source texture: X: 840 to 940, Y: 490 to 575.
# Notice the offset: dx = 140 (i.e. x_source = x_target - 140).
# Let's inspect the average color difference between source region and target background:
# Background around logo (X: 960, Y: 530) vs source (X: 820, Y: 530):
$cTargetBg = $img.GetPixel(960, 530)
$cSourceBg = $img.GetPixel(820, 530)

$diffR = $cTargetBg.R - $cSourceBg.R
$diffG = $cTargetBg.G - $cSourceBg.G
$diffB = $cTargetBg.B - $cSourceBg.B

Write-Host "Target BG: $($cTargetBg.R), $($cTargetBg.G), $($cTargetBg.B)"
Write-Host "Source BG: $($cSourceBg.R), $($cSourceBg.G), $($cSourceBg.B)"
Write-Host "Diff: R=$diffR, G=$diffG, B=$diffB"

# Center of logo is (1030, 535)
$centerX = 1030
$centerY = 535
$radiusX = 58
$radiusY = 48

for ($y = 480; $y -le 630; $y++) {
    for ($x = 960; $x -le 1100; $x++) {
        # Normalized distance from logo center (elliptical)
        $nx = ($x - $centerX) / $radiusX
        $ny = ($y - $centerY) / $radiusY
        $dist = [Math]::Sqrt($nx * $nx + $ny * $ny)
        
        # Check if inside logo patch (with 0.3 feathering)
        if ($dist -lt 1.3) {
            # Source pixel
            $srcX = $x - 140
            $srcY = $y
            $cSrc = $img.GetPixel($srcX, $srcY)
            
            # Adjusted color matching target lighting gradient
            $adjR = [Math]::Min(255, [Math]::Max(0, [int]($cSrc.R + $diffR)))
            $adjG = [Math]::Min(255, [Math]::Max(0, [int]($cSrc.G + $diffG)))
            $adjB = [Math]::Min(255, [Math]::Max(0, [int]($cSrc.B + $diffB)))
            
            # Alpha feathering
            $alpha = 1.0
            if ($dist -gt 1.0) {
                # Smooth cosine feather from 1.0 down to 0.0
                $t = ($dist - 1.0) / 0.3
                $alpha = (1.0 + [Math]::Cos($t * [Math]::PI)) / 2.0
            }
            
            $orig = $bmp.GetPixel($x, $y)
            $finalR = [int]($adjR * $alpha + $orig.R * (1.0 - $alpha))
            $finalG = [int]($adjG * $alpha + $orig.G * (1.0 - $alpha))
            $finalB = [int]($adjB * $alpha + $orig.B * (1.0 - $alpha))
            
            $bmp.SetPixel($x, $y, [System.Drawing.Color]::FromArgb(255, $finalR, $finalG, $finalB))
        }
    }
}

# Also soften/remove the vertical and horizontal seam lines of the pocket:
# Pocket bottom seam: around Y: 605-615, X: 980-1080
for ($y = 600; $y -le 620; $y++) {
    for ($x = 980; $x -le 1080; $x++) {
        $c = $bmp.GetPixel($x, $y)
        # Check seam shadow
        if ($c.R -lt 165 -and $c.G -lt 150) {
            $above = $bmp.GetPixel($x, $y - 12)
            $below = $bmp.GetPixel($x, $y + 12)
            $r = [int](($above.R + $below.R) / 2)
            $gCol = [int](($above.G + $below.G) / 2)
            $b = [int](($above.B + $below.B) / 2)
            $bmp.SetPixel($x, $y, [System.Drawing.Color]::FromArgb(255, $r, $gCol, $b))
        }
    }
}

# Pocket right vertical seam: around X: 1070-1085, Y: 560-610
for ($y = 560; $y -le 610; $y++) {
    for ($x = 1070; $x -le 1088; $x++) {
        $c = $bmp.GetPixel($x, $y)
        if ($c.R -lt 165 -and $c.G -lt 150) {
            $left = $bmp.GetPixel($x - 10, $y)
            $right = $bmp.GetPixel($x + 10, $y)
            $r = [int](($left.R + $right.R) / 2)
            $gCol = [int](($left.G + $right.G) / 2)
            $b = [int](($left.B + $right.B) / 2)
            $bmp.SetPixel($x, $y, [System.Drawing.Color]::FromArgb(255, $r, $gCol, $b))
        }
    }
}

# Save full retouched image & crop
$bmp.Save("C:\Users\HP\.gemini\antigravity\brain\94a319eb-9147-4a45-821b-24d735dfe143\hero_clean_nologo.jpg", [System.Drawing.Imaging.ImageFormat]::Jpeg)

$rectCrop = New-Object System.Drawing.Rectangle 850, 400, 350, 350
$cropBmp = New-Object System.Drawing.Bitmap 350, 350
$cg = [System.Drawing.Graphics]::FromImage($cropBmp)
$cg.DrawImage($bmp, (New-Object System.Drawing.Rectangle 0, 0, 350, 350), $rectCrop, [System.Drawing.GraphicsUnit]::Pixel)
$cropBmp.Save("C:\Users\HP\.gemini\antigravity\brain\94a319eb-9147-4a45-821b-24d735dfe143\clean_chest_crop.jpg", [System.Drawing.Imaging.ImageFormat]::Jpeg)

# Also save full woman crop to see the full body
$rectWoman = New-Object System.Drawing.Rectangle 514, 137, 686, 778
$cropW = New-Object System.Drawing.Bitmap 686, 778
$cw = [System.Drawing.Graphics]::FromImage($cropW)
$cw.DrawImage($bmp, (New-Object System.Drawing.Rectangle 0, 0, 686, 778), $rectWoman, [System.Drawing.GraphicsUnit]::Pixel)
$cropW.Save("C:\Users\HP\.gemini\antigravity\brain\94a319eb-9147-4a45-821b-24d735dfe143\clean_woman_crop.jpg", [System.Drawing.Imaging.ImageFormat]::Jpeg)

$cw.Dispose()
$cropW.Dispose()
$cg.Dispose()
$cropBmp.Dispose()
$g.Dispose()
$bmp.Dispose()
$img.Dispose()

Write-Host "Done feathered patch clone!"

