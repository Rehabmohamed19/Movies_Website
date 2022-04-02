// import axios from "axios";
// export const getUsersList = (data) => async (dispatch) => {
//   return axios
//     .get("/users", {
//       params: {
//         limit: 5,
//       },
//       headers: {
//         "Accept-language": "ar",
//       },
//     })
//     .then((res) =>
//       dispatch({
//         type: "GET_USERS_LIST",
//         payload: res.data,
//       })
//     )
//     .catch((err) => console.log(err));
// };