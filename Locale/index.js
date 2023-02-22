const childPathWhiteList = [
  "products",
  "company",
  "features",
  "landingPage",
  "compare",
];

const glob = require("glob");
const path = require("path");
const {
  readFileSync,
  writeFileSync,
  ensureDirSync,
  ensureFileSync,
  readJsonSync,
} = require("fs-extra");
const prettier = require("prettier");

const filePath = "/Users/ONES-Projects/ones-com/assets/locales";

function createJsonFile(path, name, content) {
  const filePath = `${path}/index.ts`;
  ensureFileSync(filePath);

  content = prettier.format(
    `
    const ${name} = ${JSON.stringify(content)};

    

    export default ${name}

  `,
    { parser: "typescript" }
  );

  writeFileSync(filePath, content);

  return filePath;
}

function traverseDir(jsonContent, callback) {
  const keys = Object.keys(jsonContent);

  keys.forEach((name) => {
    const val = jsonContent[name];

    callback(name, val);
  });
}

glob(`${filePath}/**/*.json`, (err, files) => {
  files.forEach((file) => {
    const allFiles = [];
    const parentPath = path.dirname(file);
    const jsonContent = readJsonSync(file);

    traverseDir(jsonContent, (name, val) => {
      if (childPathWhiteList.includes(name)) {
        traverseDir(val, (childName, childVal) => {
          const filePath = createJsonFile(
            `${parentPath}/${name}/${childName}`,
            childName,
            childVal
          );

          allFiles.push(filePath);
        });
      } else {
        const filePath = createJsonFile(`${parentPath}/${name}`, name, val);

        allFiles.push(filePath);
      }
    });

    console.log("files", files);

    const indexPath = `${parentPath}/index.ts`;

    ensureFileSync(indexPath);

    const newFiles = allFiles.map((filename) => {
      const relativePath = filename.replace(parentPath, ".");
      let baname = path.basename(filename);
      const pathArr  =  filename.split("/").reverse()
      
      let  filenameeee = pathArr[1];
      let parentFilename =""

      if(childPathWhiteList.includes(parentFilename)){
        parentFilename = parentFilename
      }

      return {
        filename: filenameeee,
        parentName:parentFilename,
        path: relativePath,
      };
    })
    

    const importContent = newFiles
      .map((item) => {
        return `import ${item.filename} from "${item.path.replace(
          "/index.ts",
          ""
        )}";`;
      })
      .join(" ");

    const exportContent = newFiles
      .map((item) => {
        return `${item.filename}:${item.filename}`;
      })
      .join(",");

    let content = prettier.format(
      `
      ${importContent}

      const localeData =  {
        ${exportContent}
      }

      export default localeData

    `,
      { parser: "typescript" }
    );

    writeFileSync(indexPath, content);
  });
});
