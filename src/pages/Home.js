import React, { useEffect } from "react";
// import { styled } from '@mui/material/styles';
import {
  styled,
  Table,
  TableBody,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  TableCell,
  ButtonGroup,
  Button,
} from "@material-ui/core";
import { useSelector, useDispatch } from "react-redux";
import { deleteUser, loadUsers, userDelete } from "../redux/actions";
import {useNavigate} from "react-router-dom"

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${TableCell.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${TableCell.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

function Home() {
  const dispatch = useDispatch();
  let navigate = useNavigate()
  useEffect(() => {
    dispatch(loadUsers());
  }, []);

  const handleDelete=(id)=>{
    if(window.confirm("are you sure ")){
        dispatch(userDelete(id))
    }
  }

  const { users } = useSelector((state) => state.data);

  return (
    <div>
    <Button variant="contained" color="primary" onClick={()=>navigate("/addUser")}>ADD USER</Button>
    <br></br>
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead sx={{ backgroundColor: "black" }}>
          <TableRow>
            <StyledTableCell>Name</StyledTableCell>
            <StyledTableCell align="center">Email</StyledTableCell>
            <StyledTableCell align="center">Contact</StyledTableCell>
            <StyledTableCell align="center">Address</StyledTableCell>
            <StyledTableCell align="center">Aciton</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {users &&
            users.map((user) => (
              <StyledTableRow key={user.id}>
                <StyledTableCell component="th" scope="row">
                  {user.name}
                </StyledTableCell>
                <StyledTableCell align="center">{user.email}</StyledTableCell>
                <StyledTableCell align="center">{user.contact}</StyledTableCell>
                <StyledTableCell align="center">{user.address}</StyledTableCell>
                <StyledTableCell align="center">
                  <ButtonGroup variant="text" aria-label="text button group">
                    <Button color="primary" onClick={()=>navigate(`/editUser/${user.id}`)}>edit</Button>
                    <Button color="secondary" onClick={()=>handleDelete(user.id)}>delete</Button>
                  </ButtonGroup>
                </StyledTableCell>
              </StyledTableRow>
            ))}
        </TableBody>
      </Table>
    </TableContainer>
    </div>
  );
}

export default Home;
