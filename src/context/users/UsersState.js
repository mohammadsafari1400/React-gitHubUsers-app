import axios from "axios";
import { useReducer } from "react";
import UsersContext from "./usersContext";
const reducer = (state, action) => {
  switch (action.type) {
    case "get-users":
      return { ...state, users: action.payload, loading: false };
    case "get-singlePost":
      return { ...state, user: action.payload, loading: false };
    case "get-Links":
      return { ...state, links: action.payload, loading: false };
    case "set-loading":
      return { ...state, loading: true };
    case "delete-users":
      return { ...state, users: [] };

    default:
      return state;
  }
};
const UsersState = ({ children }) => {
  const initialState = {
    users: [],
    user: [],
    links: [],
    loading: false,
  };
  const [state, dispatch] = useReducer(reducer, initialState);
  //   getUsers
  const getUsers = async (userName) => {
    setLoading();
    const { data } = await axios.get(
      `https://api.github.com/search/users?q=${userName}&client_id=0c6cd4ccb1ce951c33e8&client_secret=476b4c701be79963758c85e5c53d8e5a2d75c8ec`
    );
    dispatch({ type: "get-users", payload: data.items });
  };
  //   deleteUsers
  const deleteUsers = () => {
    dispatch({ type: "delete-users" });
  };
  //   setLoading
  const setLoading = async () => {
    dispatch({ type: "set-loading" });
  };
  // getSinglePost
  const getSinglePost = async (user) => {
    setLoading();
    const { data } = await axios.get(
      `https://api.github.com/users/${user}?client_id=0c6cd4ccb1ce951c33e8&client_secret=476b4c701be79963758c85e5c53d8e5a2d75c8ec`
    );
    dispatch({ type: "get-singlePost", payload: data });
  };
  // getLinks
  const getLinks = async (user) => {
    setLoading();
    const { data } = await axios.get(
      `https://api.github.com/users/${user}/repos?per_page=5&sort=created:asc&client_id=0c6cd4ccb1ce951c33e8&client_secret=476b4c701be79963758c85e5c53d8e5a2d75c8ec`
    );
    dispatch({ type: "get-Links", payload: data });
  };

  return (
    <UsersContext.Provider
      value={{ ...state, getUsers, deleteUsers, getSinglePost, getLinks }}
    >
      {children}
    </UsersContext.Provider>
  );
};

export default UsersState;
