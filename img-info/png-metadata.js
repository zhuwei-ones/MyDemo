const fs = require('fs');
const PNG = require('png-metadata');


console.log("PNG",PNG);

// 读取 PNG 文件
const buffer = fs.readFileSync("./img/pic_pms_ja.png");

// 解析 PNG 文件元数据
const png = new PNG(buffer);
const metadata = png.getMetadata();

console.log(metadata.exif);  // 打印图片的 Exif 元数据