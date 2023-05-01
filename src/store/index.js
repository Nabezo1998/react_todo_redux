import { createStore } from "redux";

const initialState = {
  todos: [
    {
      id: '1',
      title: "勉強",
      detail: "React, Redux",
      complete: false,
    },
    {
      id: '2',
      title: "買い物",
      detail: "服、書籍",
      complete: true,
    },
    {
      id: '3',
      title: "掃除",
      detail: "寝室、玄関",
      complete: false,
    },
  ],
};

const reducer = (state = initialState, action) => {
  return state;
};


const store = createStore(reducer);

export default store;