const getUser = async (documentId) => {
  const response = await fetch(`/.netlify/functions/getUser`, {
    body: JSON.stringify({ documentId }),
    method: "PUT",
  });
  return response.json();
};

const createUser = async (documentId, user) => {
  const response = await fetch("/.netlify/functions/createUser", {
    body: JSON.stringify({ documentId, user }),
    method: "POST",
  });
  return response.json();
};

const updateUser = async (documentId, user) => {
  const response = await fetch("/.netlify/functions/updateUser", {
    body: JSON.stringify({ documentId, user }),
    method: "PUT",
  });
  return response.json();
};

export default {
  getUser,
  createUser,
  updateUser,
};
