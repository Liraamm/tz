import axios from "axios";
import React, { createContext, useContext, useState } from "react";
import { API } from "../utils/consts";

const postContext = createContext();

export const usePostContext = () => useContext(postContext);

const MainContext = ({ children }) => {
  const [posts, setPost] = useState([]);
  async function getPosts() {
    const { data } = await axios.get(API);
    setPost(data);
  }
  const value = { posts, getPosts };
  return <postContext.Provider value={value}>{children}</postContext.Provider>;
};

export default MainContext;
