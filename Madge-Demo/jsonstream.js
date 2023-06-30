const fs = require('fs');
const json = require('big-json');
 
// pojo will be sent out in JSON chunks written to the specified file name in the root 
function makeFile(filename, pojo){

    const stringifyStream = json.createStringifyStream({
        body: pojo
    });

    stringifyStream.on('data', function(strChunk) {
        fs.appendFile(filename, strChunk, function (err) {
            if (err) throw err;
        })
    });

}

makeFile("./a.json",{a:1})