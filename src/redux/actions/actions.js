const createUserAction = (newUser) => ({
  type: "CREATE_USER",
  payload: {
    newUser,
  },
});

const deleteUserAction = (id) => ({
  type: "DELETE_USER",
  payload: {
    id,
  },
});

const updateUserAction = (id, newUser) => ({
  type: "UPDATE_USER",
  payload: {
    id,
    newUser,
  },
});
export { createUserAction, deleteUserAction, updateUserAction };
