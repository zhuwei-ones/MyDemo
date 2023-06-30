var dependencyTree = require('dependency-tree');
const { ensureDirSync, writeJsonSync, ensureFileSync, writeFile, writeFileSync, appendFile } = require('fs-extra');

const json = require('big-json');

const list = []

const BlackList = [
  'node_modules/@ones-ai/dao',
  'node_modules/@ones-ai/dao',
  'node_modules/@ones-ai/lang',
  'node_modules/@ones-ai/utils',
  'node_modules/@ones-ai/perf-monitor',
  'node_modules/@ones-ai/bi',
  'node_modules/@ones-ai/hooks',
  'node_modules/@ones-ai/regions',
  'node_modules/@ones-ai/ted',
  'node_modules/@ones-ai/wiki',
  'node_modules/@ones-ai/gantt',
]
const WhiteList = [
  'node_modules/@ones-ai/components',
]

// Returns a dependency tree object for the given file
var tree = dependencyTree({
  filename: '/Users/ONES-Projects/ones-project-web/src/scripts/ui/views/config_center/routerConfig.jsx',
  directory: '/Users/ONES-Projects/ones-project-web',
//   requireConfig: 'path/to/requirejs/config', // optional
//   webpackConfig: 'path/to/webpack/config', // optional
//   tsConfig: 'path/to/typescript/config', // optional
  nodeModulesConfig: {
    entry: 'module'
  }, // optional
  filter: path => {
    const isNodeModule = path.indexOf('node_modules') >-1;
    const isOnesModule = path.indexOf('node_modules/@ones-ai') > -1;
    const isJsFile = /.(js|jsx|ts|tsx)$/.test(path)
    const isBlack = BlackList.some(item=>path.indexOf(item)>-1) &&!/.(jsx|tsx)$/.test(path);
    const isWhite = WhiteList.some(item=>path.indexOf(item)>-1) 
    const isInclude = (!isNodeModule ||  (isOnesModule&&!isBlack && isWhite))&&isJsFile;
    console.log("path--->",path,isInclude);

    if(isInclude){
      list.push(path)
    }
    return  isInclude// optional
  },
  nonExistent: [], // optional
  noTypeDefinitions: false // optional
});

// pojo will be sent out in JSON chunks written to the specified file name in the root 
function makeFile(filename, pojo){

  const stringifyStream = json.createStringifyStream({
      body: pojo
  });

  stringifyStream.on('data', function(strChunk) {
      appendFile(filename, strChunk, function (err) {
          if (err) throw err;
          console.log("data");
      })
  }).on('end',function(){
    console.log("end");
  })

}

console.log("tree ok");


ensureFileSync("./depend-tree.json");
ensureFileSync("./depend-list.json");


writeJsonSync("./depend-list.json", list, { spaces: 2 });
makeFile("./depend-list.json",tree)





// console.log("tree",JSON.stringify(tree,null,2));

// Returns a post-order traversal (list form) of the t/ree with duplicate sub-trees pruned.
// This is useful for bundling source files, because the list gives the concatenation order.
// Note: you can pass the same arguments as you would to dependencyTree()
// var list = dependencyTree.toList({
//     filename: '/Users/Person/MyDemo/Madge-Demo/1.js',
//   directory: '/Users/Person/MyDemo/Madge-Demo'
// });
// console.log("list",list);
