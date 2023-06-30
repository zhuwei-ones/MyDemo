


const madge = require('madge');

madge('/Users/Person/MyDemo/Madge-Demo')
.then((res) => res.svg())
	.then((output) => {
		console.log(output.toString());
	})
.then((res) => {
	console.log("obj",res.obj());
	console.log("circular",res.circular());
	console.log("circularGraph",res.circularGraph());
	console.log("depends",res.depends());
	console.log("obj",res.obj());
    return res
})
// .then((res) => res.image('./image.svg'))