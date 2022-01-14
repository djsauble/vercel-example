const { getCollection } = require("./utils/astraClient");

exports.handler = async (event, context) => {
  const users = await getCollection();
  const body = JSON.parse(event.body);
  try {
    const user = await users.get(body.documentId);
    return {
      statusCode: 200,
      body: JSON.stringify(user),
    };
  } catch (e) {
    return {
      statusCode: 400,
      body: JSON.stringify(e),
    };
  }
};
