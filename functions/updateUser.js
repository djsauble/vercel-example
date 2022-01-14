
   
const { getCollection } = require("./utils/astraClient");

exports.handler = async (event, context) => {
  const users = await getCollection();
  const body = JSON.parse(event.body);

  try {
    const res = await users.update(body.documentId, body.user);
    return {
      statusCode: 200,
      body: JSON.stringify(res),
    };
  } catch (e) {
    return {
      statusCode: 400,
      body: JSON.stringify(e),
    };
  }
};