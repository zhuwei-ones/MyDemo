const { normalize, schema } = require("normalizr");
let response = require("./data");

// users 表示抽离到第一层的key
const person = new schema.Entity("users");

const person_backup = new schema.Entity("person");

const text = new schema.Values("text");

// Define your comments schema
const comment = new schema.Entity("cs", {
  commenter: person,
});

// 这里开始把原数据的 key 和 schema 对应起来
// schema 会把对应的key 都收集起来，比如 hoho，hoho2，commenter
const article = new schema.Entity(
  "articles",
  {
    hoho: person,
    comments: [comment],
    hoho2: person,
    hoho3: person,
    title: text,
  },
  {
    idAttribute: "uuid",
  }
);

response = normalize(response, article);

console.log("responace", JSON.stringify(response, null, 4));
