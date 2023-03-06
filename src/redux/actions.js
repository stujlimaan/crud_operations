import * as types from "./actionTypes"
import axios from "axios"
const getUsers=(users)=>{
    return {
        type:types.GET_USERS,
        payload:users
    }
}

export const loadUsers=()=>{
    return function(dispatch){
        axios.get(`${process.env.REACT_APP_API}`).then((res)=>{
            console.log("res",res)
            dispatch(getUsers(res.data))
        }).catch((err)=>{console.log(err)})
    }
}

export const deleteUser=(users)=>{
    return {
        type:types.DELETE_USER,
        users:users
    }
}

export const userDelete=(id)=>{
    return function(dispatch){
        axios.delete(`${process.env.REACT_APP_API}/${id}`).then((res)=>{
            console.log("res",res)
            dispatch(deleteUser())
            dispatch(loadUsers())
        }).catch((err)=>{console.log(err)})
    }
}

const editUser = (users)=>{
    return {
        type:types.EDIT_USER,
        payload:users
    }
}

export const userEdit = (id)=>{
    return function(dispatch){
        axios.put(`${process.env.REACT_APP_API}/${id}`).then((res)=>{
            console.log("edit user",res)
            dispatch(editUser());
            dispatch(loadUsers());
        }).catch((err)=>{console.log(err)})
    }
}