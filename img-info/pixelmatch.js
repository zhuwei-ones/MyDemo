const fs = require('fs');
const PNG = require('pngjs').PNG;
const pixelmatch = require('pixelmatch');

const img1 = PNG.sync.read(fs.readFileSync('./img/pic_pms_ja.png'));
const img2 = PNG.sync.read(fs.readFileSync('./img/pic_pms_ja_min.png'));
const {width, height} = img1;
const diff = new PNG({width, height});

console.log("img",img1);

pixelmatch(img1.data, img2.data, diff.data, width, height, {threshold: 0.1});

fs.writeFileSync('diff.png', PNG.sync.write(diff));