const {
  fetchLatestRelease,
  fetchBranchList,
  getLastCommit,
  createBlob,
  createTree,
  createCommit,
  updateReferse,
  getFileContent,
  updateFileContent,
  createPullRequest,
} = require("./1");
const fs = require("fs");
const { decode } = require("js-base64");

// fetchLatestRelease().then((res) => {
//   console.log("res", res);
// });

// fetchBranchList({ owner: "BangWork", repo: "ones-project-web" });
// getLastCommit({
//   owner: "BangWork",
//   repo: "ones-project-web",
//   branch_name: "hoho_test_20221130",
// });

// createBlob({
//   owner: "BangWork",
//   repo: "ones-project-web",
//   branch_name: "hoho_test_20221130",
// });

// getFileContent({
//   owner: "BangWork",
//   repo: "ones-project-web",
//   branch_name: "hoho_test_20221130",
// }).then((res) => {
//   const { content } = res;
//   let buff = decode(content);
//   console.log("res", buff);
// });

// updateFileContent({
//   owner: "BangWork",
//   repo: "ones-project-web",
//   branch_name: "hoho_test_20221130",
// }).then((res) => {
//   const { content } = res || {};
//   console.log("content", content);
// });

createPullRequest({
  owner: "BangWork",
  repo: "ones-project-web",
  branch_name: "test_deploy_1",
}).then((res) => {
  const { content } = res || {};
  console.log("content", content);
});
