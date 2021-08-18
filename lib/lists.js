export async function getListData(id) {
  const data = require(`/content/lists/${id}.json`);
  return {
    id,
    data
  }
}