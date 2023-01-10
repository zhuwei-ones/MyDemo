const fs = require("fs-extra");
var stats = fs.statSync("./assets/images/3x/bg_project_integration.png");
var fileSizeInBytes = stats.size;
// Convert the file size to megabytes (optional)
var fileSizeInMegabytes = fileSizeInBytes / 1024;

console.log("fileSizeInMegabytes", fileSizeInMegabytes);
console.log("stats", stats);

//import convert from 'webp-batch-convert';
const cwebp = require("./cwebp");
const cwebpUtil = require("./cweb-util");
let res;

// 示例一: 生成 img 目录下的图片文件至 webp 目录

// 清空输出目录
cwebpUtil.delDir("./assets/images-webp");
// 示例二: 生成 img 目录下的图片文件至 webp 目录，附带质量等参数
// 更多参数参考：https://developers.google.com/speed/webp/docs/cwebp?csw=1#options
// 也可以执行如下命令通过 cwebp 帮助信息了解： `yarn cwebp --longhelp`
const cwebpOpts = {
  /** don't print anything */
  quiet: true,
  /** quality factor (0:small..100:big), default=75 */
  q: 75,
  /** transparency-compression quality (0..100), default=100 */
  alpha_q: 100,
  /** spatial noise shaping (0:off, 100:max), default=50 */
  sns: 50,
  /** filter strength (0=off..100), default=60 */
  f: 60,
  /** use simple filter instead of strong */
  nostrong: false,
};

res = cwebp("./assets/images", "./assets/images-webp", cwebpOpts);

console.log("total: ", res);
