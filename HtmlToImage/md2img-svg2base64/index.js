const fs = require("fs");
const path = require("path");
const { convert2img } = require("mdimg");
process.env.PUPPETEER_FONT_PATH = '/usr/share/fonts/truetype/noto/NotoSansCJK-Regular.ttc'; // 替换为实际的字体路径
function convertImagesToBase64(mdContent) {
  // 正则表达式用于匹配图片路径
  const regex = /!\[.*?\]\((.*?)\)/g;
  let match;

  while ((match = regex.exec(mdContent)) !== null) {
    // 使用正则表达式获取图片路径
    const imageContent = match[1];

    console.log("imageContent", imageContent);
    const [imagePath] = imageContent.split(" ");

    // 获取图片的绝对路径
    const absoluteImagePath = path.resolve(__dirname, imagePath);

    // 读取图片文件并转换为 base64 编码
    const imageBase64 = fs.readFileSync(absoluteImagePath, "utf-8");
    const base64Data = Buffer.from(imageBase64).toString("base64");

    // 替换原始的图片路径为 base64 编码
    mdContent = mdContent.replace(
      imagePath,
      `data:image/svg+xml;base64,${base64Data}`
    );
    //  mdContent = mdContent.replace(/!\[.*?\]\((.*?)\)/, imageBase64);
  }

  return mdContent;
}
// 读取 Markdown 文件内容
const mdContent = fs.readFileSync(`${__dirname}/2.md`, "utf-8");

// 转换图片路径为 base64
const convertedContent = convertImagesToBase64(mdContent);

fs.mkdirSync("./publish_dir", { recursive: true })

const reportPath = `./publish_dir/report.md`;

fs.writeFileSync(reportPath, convertedContent);

convert2img({
  mdFile: reportPath,
  outputFilename: "./publish_dir/report.png",
  width: 1260,
  cssTemplate: "github",
});