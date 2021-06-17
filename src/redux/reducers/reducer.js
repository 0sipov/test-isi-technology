import { CREATE_USER, DELETE_USER, UPDATE_USER } from "../variables";

const initialState = {
  users: [
    {
      id: "1",
      userName: "Serg",
      firstName: "Serhii",
      lastName: "Osipov",
      email: "se@gmail.com",
      type: "Admin",
      password: "qwerty",
      passwordRepeat: "qwerty",
    },
    {
      id: "2",
      userName: "Strelok",
      firstName: "Yurii",
      lastName: "Krugovoi",
      email: "yu@gmail.com",
      type: "Driver",
      password: "qwerty",
      passwordRepeat: "qwerty",
    },
  ],
};
export default function handleTweetReducer(state = initialState, action) {
  switch (action.type) {
    case CREATE_USER:
      console.log(state);
      return {
        users: [...state.users, action.payload.newUser],
      };
    case DELETE_USER:
      return {
        users: [...state.users.filter((user) => user.id !== action.payload.id)],
      };
    case UPDATE_USER:
      return {
        users: [
          ...state.users.map((user) => {
            if (user.id === action.payload.id) {
              return action.payload.newUser;
            }
            return user;
          }),
        ],
      };
    default:
      return state;
  }
}
