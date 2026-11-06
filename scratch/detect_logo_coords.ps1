Add-Type -AssemblyName System.Drawing

$srcPath = "C:\Users\HP\.gemini\antigravity\brain\94a319eb-9147-4a45-821b-24d735dfe143\current_hero_bg.jpg"
$img = [System.Drawing.Bitmap]::FromFile($srcPath)

# We want to clone/heal the logo area:
# In find_logo.ps1:
# $cropX = 514 + 400 = 914
# $cropY = 137 + 300 = 437
# Logo is inside this 200x200 box.
# Let's inspect exact logo bounding box inside $img:
# Let's sample colors:
# Ant body is deep purple (around R:80, G:40, B:140), ant belly has white/orange, text is orange and purple.
# Background fabric is lavender/periwinkle: R:180-210, G:160-190, B:230-255.

# Let's write a retouch function:
# For each pixel in the logo area:
# If the color is significantly darker or more saturated than the fabric,
# or if it's the orange/white text:
# We interpolate from the clean fabric to its left and right.

Write-Host "Image size: $($img.Width) x $($img.Height)"

# Let's create a working copy
$bmp = New-Object System.Drawing.Bitmap $img.Width, $img.Height
$g = [System.Drawing.Graphics]::FromImage($bmp)
$g.DrawImage($img, 0, 0, $img.Width, $img.Height)

# Let's inspect the bounding box of the logo around X: 970 to 1080, Y: 530 to 600
# Let's dump pixel colors in that range to find exact coordinates
$minX = 9999; $maxX = 0; $minY = 9999; $maxY = 0

for ($y = 480; $y -lt 620; $y++) {
    for ($x = 940; $x -lt 1100; $x++) {
        $c = $bmp.GetPixel($x, $y)
        # Ant body is dark purple (c.R < 130 and c.B > 130 and c.G < 110)
        # Orange text is (c.R > 210 and c.G > 80 and c.B < 80)
        # White patch is (c.R > 220 and c.G > 220 and c.B > 220)
        $isLogo = ($c.R -lt 140 -and $c.G -lt 130 -and $c.B -gt 130) -or `
                  ($c.R -gt 200 -and $c.G -lt 120 -and $c.B -lt 80) -or `
                  ($c.R -gt 220 -and $c.G -gt 220 -and $c.B -gt 220 -and $c.R -gt $c.B)
        if ($isLogo) {
            if ($x -lt $minX) { $minX = $x }
            if ($x -gt $maxX) { $maxX = $x }
            if ($y -lt $minY) { $minY = $y }
            if ($y -gt $maxY) { $maxY = $y }
        }
    }
}

Write-Host "Logo detected bounds: X=$minX to $maxX, Y=$minY to $maxY"

$g.Dispose()
$bmp.Dispose()
$img.Dispose()

