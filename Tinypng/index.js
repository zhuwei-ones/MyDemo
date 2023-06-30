const { readFileSync, writeFileSync, ensureFileSync, pathExistsSync } = require("fs-extra");
const { glob } = require("glob");
const path  = require("path");
const { TinyPNG } = require("tinypng");


// Head over to https://tinypng.com/developers to get an API key

const dirName = "u0082_paper"

const entryPath = '/Users/Person/MyDemo/Tinypng/imgs/'+dirName
const outputPath = "/Users/Person/MyDemo/Tinypng/imgs/"+dirName+"-compress"

"1x/pageName/imageName.png"
const client = new TinyPNG("rzM9CLpPSBWmZ27jqrvQBJHsW9nBYK4x");

client.instance

async function compress(path,outputPath){

const file = await client.compress(readFileSync(path));

ensureFileSync(outputPath)
writeFileSync(outputPath,file.data)
console.log("ok--->",outputPath);
}

// const entryPath = '/Users/Person/MyDemo/Tinypng/images'

glob(`${entryPath}/**/*.png`, async (err, files) => {

    console.log("begin",files);


    for (let index = 0; index < files.length; index++) {
        const file = files[index];
        const filename = path.basename(file)

        const beishu = filename.match(/@(.+?)(\.|\-)/)[1]
    
        const pagename = file.replace(entryPath,"").split("/")[1]

        const finalFilename = filename.replace(`@${beishu}`,"")

        let finalOutput = `${outputPath}/${beishu}/${pagename}/${finalFilename}`

        console.log("finalOutput",pathExistsSync(finalOutput),finalOutput);

        if(pathExistsSync(finalOutput)){
            continue
        }


        await  compress(file,finalOutput)
    }

    console.log("complete");



})