import sharp from 'sharp';
await sharp('public/ether.svg').resize(1024,1024).png().toFile('public/ether.png');
