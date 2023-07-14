const nodeHtmlToImage = require("node-html-to-image");
const fs = require("fs");

const content = fs.readFileSync("./report.html", "utf8");
nodeHtmlToImage({
  output: "./image.png",
  html: content,
}).then(() => console.log("The image was created successfully!"));
