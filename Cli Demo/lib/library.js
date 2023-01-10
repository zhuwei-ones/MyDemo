

const glob =require('glob')
const path =require('path')

const imgExt = 'png|jpg|jpeg|bmp|gif';

 function getDirAllFile(dirPath) {
  const files = glob.sync(dirPath);
  return files;
}

 function getWatchDirAllFiles(dirPath) {

  console.log("dirPath",dirPath);
  return getDirAllFile(`${dirPath}/**/*.+(${imgExt})`);
}


const allFiles = getWatchDirAllFiles(path.resolve(process.cwd(),"./img"));

console.log("allFiles",allFiles.length,allFiles)