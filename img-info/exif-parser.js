const fs = require('fs');
const ExifParser = require('exif-parser');

//读取图片文件
const buffer = fs.readFileSync('./img/pic_pms_ja.png');

//解析图片的 EXIF 元数据
const parser = ExifParser.create(buffer);
const exifData = parser.parse();

console.log('拍摄时间：' + exifData.tags.DateTimeOriginal); // 打印照片拍摄时间