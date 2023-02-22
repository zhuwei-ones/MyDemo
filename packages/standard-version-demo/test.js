const { promisify } = require('util')

const exec = promisify(require('child_process').exec)



async function a(){

    console.log("1");
    await exec("echo 9.9.9")
    console.log("2");


    await new Promise((res)=>{
        setTimeout(() => {
            res()
        }, 3000);
    })

}


a()