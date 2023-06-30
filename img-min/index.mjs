import imagemin from 'imagemin';
import imageminJpegtran from 'imagemin-jpegtran';
import imageminPngquant from 'imagemin-pngquant';

const files = await imagemin(['/Users/hoho/Desktop/0095-img/new3/*.{jpg,png}'], {
	destination: '/Users/hoho/Desktop/0095-img-min/new3',
	plugins: [
		imageminJpegtran(),
		imageminPngquant({
			quality: [0.7, 0.8]
		})
	]
});

// const numDiffPixels = pixelmatch(img1, img2, diff, 800, 600, {threshold: 0.1});
// const fs = require('fs');
// const PNG = require('pngjs').PNG;
// const pixelmatch = require('pixelmatch');

// const img1 = PNG.sync.read(fs.readFileSync('img1.png'));
// const img2 = PNG.sync.read(fs.readFileSync('img2.png'));
// const {width, height} = img1;
// const diff = new PNG({width, height});

// pixelmatch(img1.data, img2.data, diff.data, width, height, {threshold: 0.1});

// fs.writeFileSync('diff.png', PNG.sync.write(diff));

// console.log(files);