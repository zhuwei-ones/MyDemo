import fetch from "node-fetch";

function apiRequest(config) {
  // 如果没有设置config.data，则默认为{}
  if (config.data === undefined) {
    config.data = {};
  }

  // 如果没有设置config.method，则默认为post
  config.method = config.method;

  // 请求头设置
  let headers = {
    Authorization: `Bearer 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`,
  };
  let data = null;

  if (config.formData) {
    // 上传文件的兼容处理，如果config.formData=true，则以form-data方式发起请求。
    // fetch()会自动设置Content-Type为multipart/form-data，无需额外设置。
    data = new FormData();
    Object.keys(config.data).forEach(function (key) {
      data.append(key, config.data[key]);
    });
  } else {
    // 如果不长传文件，fetch()默认的Content-Type为text/plain;charset=UTF-8，需要手动进行修改。
    headers["Content-Type"] = "application/json;charset=UTF-8";
    data = JSON.stringify(config.data);
  }

  // 准备好请求的全部数据
  let axiosConfig = {
    method: config.method,
    headers: { ...headers, ...config.headers },
  };
  if (config.method !== "get") {
    const body = data;
    axiosConfig = { ...axiosConfig, body };
  }

  // 发起请求
  fetch(config.url, axiosConfig)
    .then((res) => res.json())
    .then((result) => {
      // 请求结束的回调
      config.done && config.done();
      // 请求成功的回调
      config.success && config.success(result);
    })
    .catch((e) => {
      console.log("请求异常：", e);
      // 请求结束的回调
      config.done && config.done();
      // 请求失败的回调
      config.fail && config.fail();
    });
}

const GPT_HOST = "https://api.openai.com/v1/";

const Completions = (config) => {
  apiRequest({
    ...config,
    url: GPT_HOST + "chat/completions",
    method: "post",

    data: {
      model: "gpt-3.5-turbo",
      messages: [
        {
          role: "user",
          content: "GPT-4 相比GPT-3 有什么提升？",
        },
      ],
      temperature: 0.2, // 0 ~ 1 越接近 1 越具有不确定性
      max_tokens: 2048, //
    },
    success: (res) => {
      console.log("success", res.choices);
      const message = res.choices[0].message;
      console.log("看一下请求结果", message);
    },
  });
};

const Model = (config) => {
  apiRequest({
    ...config,
    url: GPT_HOST + "models",
    method: "get",
    success: (res) => {
      console.log("success",res,res.data.map(item=>item.id));
    },
  });
};

const Image = (config) => {
  apiRequest({
    ...config,
    url: GPT_HOST + "images/generations",
    data: {
      prompt: "很帅的有肌肉的猛男",
      n: 2,
      size: "1024x1024",
    },
    method: "post",
    success: (res) => {
      console.log("success", res);
    },
  });
};


const Code = (config) => {
  apiRequest({
    ...config,
    url: " https://api.openai.com/v1/engines/davinci-codex/completions",
    data: {
      prompt: "给一段节流器代码",
      max_tokens: 1024,
      n: 1,
      stop: '\n',
      temperature: 0.7
    },
    method: "post",
    success: (res) => {
      console.log("success", res);
    },
  });
};



const moderations = (config) => {
  apiRequest({
    ...config,
    url: " https://api.openai.com/v1/moderations",
    data: {
      input: "你就是一个垃圾，我要杀了你",
    },
    method: "post",
    success: (res) => {
      console.log("success", JSON.stringify(res,null,2));
    },
  });
}

moderations({
  fail: (res) => {
    console.log("查看错误消息", res);
  },
});
