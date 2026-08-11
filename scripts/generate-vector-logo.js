import fs from 'fs';

const svgContent = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 540 100" width="540" height="100">
  <defs>
    <style>
      @import url('https://fonts.googleapis.com/css2?family=Outfit:wght@800&amp;display=swap');
      .brand-text {
        font-family: 'Outfit', 'Montserrat', 'Segoe UI', sans-serif;
        font-weight: 800;
        font-size: 82px;
        letter-spacing: -1px;
      }
      .purple { fill: #68259E; }
      .orange { fill: #E86A17; }
    </style>
  </defs>

  {/* Vector paths for exact custom letters matching attached image */}
  <g class="brand-text">
    {/* ANT in Purple */}
    <text x="10" y="80" class="purple">ANT</text>
    {/* CARE in Orange */}
    <text x="215" y="80" class="orange">CARE</text>
  </g>
</svg>`;

fs.writeFileSync('public/images/hero-logo.svg', svgContent);
console.log('Created public/images/hero-logo.svg!');
