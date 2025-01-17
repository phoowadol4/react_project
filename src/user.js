import  React, {useState, useEffect} from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Paper from "@mui/material/Paper";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Avatar from '@mui/material/Avatar';


export default function UserBlock() {
    const [items, setItems] = useState([]);

    useEffect(() => {
    fetch("https://www.melivecode.com/api/users")
      .then(res => res.json())
      .then(
        (result) => {
          setItems(result);
        },
      )
  }, [])

  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="lg" sx={{ p: 2 }}>
        <Paper sx={{p:2}}>
        <Box display="flex">
          <Box sx={{ flexGrow: 1 }} >
          <Typography variant="h6" gutterBottom component="div">
            User
          </Typography>
        </Box>
        <Box>
        <Button variant="contained">Add User</Button>
        </Box>
        </Box>
        <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>id</TableCell>
            <TableCell align="center">avatar</TableCell>
            <TableCell align="right">ชื่อ</TableCell>
            <TableCell align="right">นามสกุล</TableCell>
            <TableCell align="right">ชื่อผู้ใช้</TableCell>
            <TableCell align="right">action</TableCell>

          </TableRow>
        </TableHead>
        <TableBody>
          {items.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.id}
              </TableCell>
              <TableCell align="center">

                <Box display="flex" justifyContent="center">
                  <Avatar alt={row.username} src= {row.avatar} />
                </Box>

              </TableCell>
              <TableCell align="right">{row.fname}</TableCell>
              <TableCell align="right">{row.lname}</TableCell>
              <TableCell align="right">{row.username}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
        </Paper>
      </Container>
    </React.Fragment>
  );
}
