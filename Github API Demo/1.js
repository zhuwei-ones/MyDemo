const { default: fetch } = require("node-fetch");
const lack = require("lack-proxy");
const { encode } = require("js-base64");

const baseUrl = "https://api.github.com/";
let token = "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";

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

const githubFetch = (url, options = {}) => {
  return fetch(baseUrl + url, {
    headers: {
      Authorization: `token ${token}`,
      "Content-Type": "application/json",
    },
    ...options,
  })
    .then((res) => res.json())
    .then((res) => {
      console.log(res);
      if (res.message) {
        return Promise.reject(res.message);
      }
      return res;
    })
    .catch((e) => {
      console.log("报错了", e);
    });
};

const fetchLatestRelease = () => {
  return githubFetch("repos/xlzy520/ones-helper/releases/latest");
};

const fetchBranchList = ({ owner, repo }) => {
  return githubFetch(`repos/${owner}/${repo}/git/refs`);
};

const searchBranch = ({ owner, repo, head }) => {
  return githubFetch(`repos/${owner}/${repo}/git/matching-refs/heads/${head}`);
};

const fetchBranchSHA = ({ owner, repo, head }) => {
  return githubFetch(`repos/${owner}/${repo}/git/refs/heads/${head}`).then(
    (res) => {
      return res.object.sha;
    }
  );
};

const getLastCommit = ({ owner, repo, branch_name }) => {
  return githubFetch(`repos/${owner}/${repo}/branches/${branch_name}`);
};

const createBlob = ({ owner, repo }) => {
  return githubFetch(`/repos/${owner}/${repo}/git/blobs`, {
    method: "POST",
    body: JSON.stringify({
      content: "hello world",
      encoding: "utf-8",
    }),
  });
};

const createTree = ({ owner, repo }) => {
  return githubFetch(`/repos/${owner}/${repo}/git/trees`, {
    method: "POST",
    body: JSON.stringify({
      base_tree: "c62c01dce0f3a7a6c5963be97e706d60190f0cad",
      tree: [
        {
          path: "hoho/base64file.txt",
          mode: "100644",
          type: "blob",
          sha: "95d09f2b10159347eece71399a7e2e907ea3df4f",
        },
      ],
    }),
  });
};

const createCommit = ({ owner, repo }) => {
  return githubFetch(`repos/${owner}/${repo}/git/commits`, {
    method: "POST",
    body: JSON.stringify({
      message: "Add new files at once programatically",
      author: {
        name: "hohozhu",
        email: "JanQuadrantVincent16@rickandmorty.com",
      },
      parents: ["c62c01dce0f3a7a6c5963be97e706d60190f0cad"],
      tree: "03ba58c5acc8e5827a2fa33fa3b810f90fe1f3e1",
    }),
  });
};

const updateReferse = ({ owner, repo }) => {
  return githubFetch(
    `/repos/${owner}/${repo}/git/refs/heads/hoho_test_20221130`,
    {
      method: "POST",
      body: JSON.stringify({
        ref: "refs/heads/hoho_test_20221130",
        sha: "65e1c92b040825a3f0b6296b4d45989c7d696cb4",
      }),
    }
  );
};

const getFileContent = ({ owner, repo, branch_name }) => {
  return githubFetch(
    `repos/${owner}/${repo}/contents/.ones-config/development_online/index.js?ref=${branch_name}`
  );
};

const updateFileContent = ({ owner, repo, branch_name }) => {
  return githubFetch(
    `repos/${owner}/${repo}/contents/.ones-config/development_online/index.js`,
    {
      method: "PUT",
      body: JSON.stringify({
        message: "try to update github content",
        committer: {
          name: "zhuwei",
          email: "octocat@github.com",
        },
        sha: "a9b82171b538369dd2c02cd61061cba2918475ef",
        branch: branch_name,
        content: encode(``),
      }),
    }
  );
};

const createPullRequest = ({ owner, repo, branch_name }) => {
  return githubFetch(`/repos/${owner}/${repo}/pull`, {
    method: "POST",
    body: JSON.stringify({
      title: "Hoho",
      body: "Please pull these awesome changes in!",
      head: branch_name,
      base: "master",
    }),
  });
};

module.exports = {
  fetchLatestRelease,
  fetchBranchList,
  searchBranch,
  fetchBranchSHA,
  getLastCommit,
  createBlob,
  createTree,
  createCommit,
  updateReferse,
  getFileContent,
  updateFileContent,
  createPullRequest,
};
