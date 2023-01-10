module.exports = {
	yolo:false, // Skip cleanup and testing (false by default).
	yarn: false, // Use yarn if possible (true by default).
	contents: 'dist', // Subdirectory to publish (. by default).
	branch:"master", // Name of the release branch (master by default).
	anyBranch:false, // Allow publishing from any branch (false by default).
	tests:true, //Run npm test
	cleanup:false, //Cleanup node_modules
	tag:true,  // Publish under a given dist-tag (latest by default).
	releaseDraft:true, // Open a GitHub release draft after releasing (true by default).

};