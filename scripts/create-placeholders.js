const fs = require('fs');
const path = require('path');

const imagesDir = path.join(__dirname, '../public/images');

if (!fs.existsSync(imagesDir)) {
  fs.mkdirSync(imagesDir, { recursive: true });
}

const images = [
  'hero-olive-oil.jpg',
  'olive-oil-375ml.jpg',
  'olive-oil-500ml.jpg',
  'olive-oil-750ml.jpg',
  'dates-500g.jpg',
  'dates-1kg.jpg',
  'gift-set.jpg',
  'farm-landscape.jpg',
  'olive-grove.jpg',
  'harvest-process.jpg'
];

const svgTemplate = (text, width = 1200, height = 1200) => `
<svg width="${width}" height="${height}" xmlns="http://www.w3.org/2000/svg">
  <rect width="100%" height="100%" fill="#FBF6EE"/>
  <text x="50%" y="50%" font-family="Arial, sans-serif" font-size="48" fill="#254D3B" text-anchor="middle" dominant-baseline="middle">
    ${text}
  </text>
</svg>
`;

images.forEach(imageName => {
  const filePath = path.join(imagesDir, imageName);
  const text = imageName.replace('.jpg', '').replace(/-/g, ' ');
  const isLandscape = imageName.includes('landscape') || imageName.includes('grove') || imageName.includes('process') || imageName.includes('hero');
  const svg = svgTemplate(text, isLandscape ? 1920 : 1200, isLandscape ? 1080 : 1200);
  
  fs.writeFileSync(filePath.replace('.jpg', '.svg'), svg);
  console.log(`Created ${imageName.replace('.jpg', '.svg')}`);
});

console.log('\nPlaceholder images created successfully!');
console.log('Note: These are SVG files. For production, replace with actual JPG images.');
