import cloud from "./cloud";

const db = cloud.database();
const collection = db.collection("ec-posts");

const list = () =>
  collection
    .orderBy("add_at", "desc")
    .field({
      _id: 1,
      title: 1,
      content: 1,
      cover: 1,
      tags: 1,
      hot: 1,
      liked: 1,
      type: 1,
      add_at: 1,
      edit_at: 1,
    })
    .get()
    .then((res) => res.data);

export default {
  list,
};
