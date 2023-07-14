const { convert2img } = require("mdimg");


const convertRes =  convert2img({
    mdFile: "1.md",
    outputFilename: "output.png",
    width: 1920,
    cssTemplate: "github",
  });
  
  console.log(`Convert to image successfully!\nFile: ${convertRes.data}`);