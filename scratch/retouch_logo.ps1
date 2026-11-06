Add-Type -AssemblyName System.Drawing

$srcPath = "C:\Users\HP\.gemini\antigravity\brain\94a319eb-9147-4a45-821b-24d735dfe143\current_hero_bg.jpg"
$img = [System.Drawing.Bitmap]::FromFile($srcPath)

$bmp = New-Object System.Drawing.Bitmap $img.Width, $img.Height
$g = [System.Drawing.Graphics]::FromImage($bmp)
$g.DrawImage($img, 0, 0, $img.Width, $img.Height)

# Logo region: X: 960 to 1100, Y: 470 to 600
# Let's remove the logo using horizontal bilateral interpolation and texture synthesis
# For each pixel in logo:
# Sample clean fabric from left (X = 940-960) and clean fabric from right (X = 1100-1120)
# Weight by distance, and add slight natural noise/dithering so it doesn't look flat

$rnd = New-Object System.Random 42

for ($y = 460; $y -le 630; $y++) {
    for ($x = 955; $x -le 1105; $x++) {
        $c = $bmp.GetPixel($x, $y)
        
        # Check if pixel is part of logo or pocket seam
        # Ant body: purple/dark; Text: orange/white; Pocket seam line: darker crease
        $isLogo = ($c.R -lt 145 -and $c.G -lt 135 -and $c.B -gt 120) -or `
                  ($c.R -gt 190 -and $c.G -lt 130 -and $c.B -lt 100) -or `
                  ($c.R -gt 210 -and $c.G -gt 200 -and $c.B -gt 200 -and $c.R -gt $c.B) -or `
                  ($c.R -lt 150 -and $c.G -lt 130 -and $c.B -lt 210) # seam shadow
        
        # In the core logo bounding box (965-1095, 475-585), replace all pixels
        $inCoreLogo = ($x -ge 965 -and $x -le 1095 -and $y -ge 475 -and $y -le 585)
        
        if ($isLogo -or $inCoreLogo) {
            # Find left clean pixel
            $leftX = 950
            $rightX = 1110
            $cL = $bmp.GetPixel($leftX, $y)
            $cR = $bmp.GetPixel($rightX, $y)
            
            $t = ($x - $leftX) / ($rightX - $leftX)
            # Add subtle natural lighting curve (chest curves slightly)
            $noise = ($rnd.NextDouble() - 0.5) * 4.0
            
            $r = [Math]::Min(255, [Math]::Max(0, [int]($cL.R * (1 - $t) + $cR.R * $t + $noise)))
            $gCol = [Math]::Min(255, [Math]::Max(0, [int]($cL.G * (1 - $t) + $cR.G * $t + $noise)))
            $b = [Math]::Min(255, [Math]::Max(0, [int]($cL.B * (1 - $t) + $cR.B * $t + $noise)))
            
            $bmp.SetPixel($x, $y, [System.Drawing.Color]::FromArgb(255, $r, $gCol, $b))
        }
    }
}

# Apply a gentle 3x3 gaussian smoothing only across the patched zone to ensure seamless gradient
$tempBmp = New-Object System.Drawing.Bitmap $bmp
for ($y = 465; $y -le 620; $y++) {
    for ($x = 955; $x -le 1105; $x++) {
        $inZone = ($x -ge 960 -and $x -le 1100 -and $y -ge 470 -and $y -le 595)
        if ($inZone) {
            $sumR = 0; $sumG = 0; $sumB = 0; $count = 0
            for ($dy = -2; $dy -le 2; $dy++) {
                for ($dx = -2; $dx -le 2; $dx++) {
                    $p = $tempBmp.GetPixel($x + $dx, $y + $dy)
                    $weight = 1.0 / (1.0 + [Math]::Abs($dx) + [Math]::Abs($dy))
                    $sumR += $p.R * $weight
                    $sumG += $p.G * $weight
                    $sumB += $p.B * $weight
                    $count += $weight
                }
            }
            $bmp.SetPixel($x, $y, [System.Drawing.Color]::FromArgb(255, [int]($sumR / $count), [int]($sumG / $count), [int]($sumB / $count)))
        }
    }
}
$tempBmp.Dispose()

# Also remove the pocket seam line below the logo (from x: 960 to 1090, y: 580 to 750)
for ($y = 585; $y -le 780; $y++) {
    for ($x = 980; $x -le 1080; $x++) {
        $c = $bmp.GetPixel($x, $y)
        # Check if seam shadow/highlight
        $isSeam = ($c.R -lt 150 -and $c.G -lt 130) -or ($c.R -gt 215 -and $c.G -gt 205)
        if ($isSeam) {
            $cL = $bmp.GetPixel($x - 10, $y)
            $cR = $bmp.GetPixel($x + 10, $y)
            $r = [int](($cL.R + $cR.R) / 2)
            $gCol = [int](($cL.G + $cR.G) / 2)
            $b = [int](($cL.B + $cR.B) / 2)
            $bmp.SetPixel($x, $y, [System.Drawing.Color]::FromArgb(255, $r, $gCol, $b))
        }
    }
}

# Save output
$outPath = "C:\Users\HP\.gemini\antigravity\brain\94a319eb-9147-4a45-821b-24d735dfe143\hero_retouched_preview.jpg"
$bmp.Save($outPath, [System.Drawing.Imaging.ImageFormat]::Jpeg)

# Also save a crop of the retouched chest
$rect = New-Object System.Drawing.Rectangle 850, 400, 350, 350
$cropBmp = New-Object System.Drawing.Bitmap 350, 350
$cg = [System.Drawing.Graphics]::FromImage($cropBmp)
$cg.DrawImage($bmp, (New-Object System.Drawing.Rectangle 0, 0, 350, 350), $rect, [System.Drawing.GraphicsUnit]::Pixel)
$cropBmp.Save("C:\Users\HP\.gemini\antigravity\brain\94a319eb-9147-4a45-821b-24d735dfe143\retouched_chest_crop.jpg", [System.Drawing.Imaging.ImageFormat]::Jpeg)

$cg.Dispose()
$cropBmp.Dispose()
$g.Dispose()
$bmp.Dispose()
$img.Dispose()

Write-Host "Saved retouched preview and crop!"

