const fs = require('fs');

function convertSvgToBase64(filePath) {
  return new Promise((resolve, reject) => {
    fs.readFile(filePath, 'utf8', (error, svgContent) => {
      if (error) {
        reject(error);
        return;
      }

      const base64Data = Buffer.from(svgContent).toString('base64');
      resolve(base64Data);
    });
  });
}

// 示例用法
const filePath = './lighthouse-LCP.svg'; // SVG 文件路径

convertSvgToBase64(filePath)
  .then((base64Data) => {
    console.log(base64Data); // 打印 Base64 数据
  })
  .catch((error) => {
    console.error(error); // 处理错误
  });