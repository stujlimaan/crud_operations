import * as types from "./actionTypes";
import axios from "axios";
const getUsers = (users) => {
  return {
    type: types.GET_USERS,
    payload: users,
  };
};

export const loadUsers = () => {
  return function (dispatch) {
    axios
      .get(`${process.env.REACT_APP_API}`)
      .then((res) => {
        console.log("res", res);
        dispatch(getUsers(res.data));
      })
      .catch((err) => {
        console.log(err);
      });
  };
};

export const deleteUser = (users) => {
  return {
    type: types.DELETE_USER,
    users: users,
  };
};

export const userDelete = (id) => {
  return function (dispatch) {
    axios
      .delete(`${process.env.REACT_APP_API}/${id}`)
      .then((res) => {
        console.log("res", res);
        dispatch(deleteUser());
        dispatch(loadUsers());
      })
      .catch((err) => {
        console.log(err);
      });
  };
};

const editUser = (user) => {
  return {
    type: types.EDIT_USER,
    payload: user,
  };
};

export const userEdit = (user,id) => {
  return function (dispatch) {
    axios
      .put(`${process.env.REACT_APP_API}/${id}`,user)
      .then((res) => {
        console.log("edit user", res);
        dispatch(editUser());
        dispatch(loadUsers());
      })
      .catch((err) => {
        console.log(err);
      });
  };
};

const addUser = () => {
  return {
    type: types.ADD_USERS
  };
};


export const userAdd = (user) => {
  return function (dispatch) {
    axios
      .post(`${process.env.REACT_APP_API}`, user)
      .then((res) => {
        console.log("re", res);
        dispatch(addUser())
      })
      .catch((er) => console.log(er));
  };
};


const getSingleUser=(user)=>{
  return {
    type:types.GET_SINGLE_USER,payload:user
  }
}

export const singleUser=(id)=>{
  return function (dispatch) {
      axios.get(`${process.env.REACT_APP_API}/${id}`).then((res)=>{
        console.log("single user",res)
        dispatch(getSingleUser(res.data))
      }).catch((err)=>{console.log(err)})
    }
}