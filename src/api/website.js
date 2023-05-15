import cloud from "./cloud";

const db = cloud.database();
const infoCollection = db.collection("ec-website-info");
const commentCollection = db.collection("ec-website-comments");

const ramdomPickHandler = (value) => {
  if (!Array.isArray(value)) return value;
  // 随机取一个
  const index = Math.floor(Math.random() * value.length);
  return value[index];
};

const infoValueHandlers = {
  welcome: ramdomPickHandler,
  sub_title: ramdomPickHandler,
};

const getInfo = () =>
  infoCollection
    .where({
      _id: "6460519460a6862710aa02d6",
    })
    .field({
      _id: 0,
      welcome: 1,
      title: 1,
      sub_title: 1,
    })
    .getOne()
    .then((res) => res.data)
    .then((info) => {
      const result = {};
      const keys = Object.keys(info);
      keys
        .filter((key) => key !== "_id")
        .forEach((key) => {
          const value = info[key];
          const handler = infoValueHandlers[key];
          result[key] = handler ? handler(value) : value;
        });
      return result;
    });

const listComments = () =>
  commentCollection
    .field({
      _id: 1,
      content: 1,
    })
    .get()
    .then((res) => res.data);

export default {
  getInfo,
  listComments,
};
