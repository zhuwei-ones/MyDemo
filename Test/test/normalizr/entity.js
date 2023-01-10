const { normalize, schema } = require("normalizr");

const data = {
  id_str: "123",
  url: "https://twitter.com",
  user: { id_str: "456", name: "Jimmy" },
};

const user = new schema.Entity("users", {}, { idAttribute: "id_str" });
const tweet = new schema.Entity(
  "tweets",
  { user },
  {
    idAttribute: "id_str",
  }
);

const normalizedData = normalize(data, tweet);

console.log("normalizedData", JSON.stringify(normalizedData, null, 2));
