const fetch = require("node-fetch");
const lack = require("lack-proxy");

lack.proxy({
  host: "127.0.0.1",
  port: "8899",
  // allowlist: ['ke.qq.com', '*.ke.qq.com'],
  // blocklist: ['fudao.qq.com', '*.fudao.qq.com'],
  // filterRequest: (options, isSocket) => {
  //    return true || false;
  // }, // 可选，精确过滤请求
  // servername, // 可选，参见Node的HTTPS文档，设置SNI
  // headers, // 可选，设置代理请求头
});

function fetchWikiSpace() {
  return fetch("http://a.com/api/wiki")
    .then((res) => {
      return res.json();
    })
    .then((res) => {
      console.log("res", res);
      return res;
    });
}

fetchWikiSpace();

module.exports = {
  fetchWikiSpace,
};
