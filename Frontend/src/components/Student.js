import * as React from "react";
import {useState,useEffect} from "react";
import Box from "@mui/material/Box";
// import makeStyles from '@mui/material/styles';
import TextField from "@mui/material/TextField";
import {Container,Button} from "@mui/material";
import Paper from "@mui/material/Paper";
// const useStyles = makeStyles((theme) => ({
//   root:{
//     '& > *': {
//       margin: theme.spacing(1),
//       width: '25ch',
//     },
//   },
// }));

export default function Student() {
  // const classes = useStyles();
  const paperStyle = {padding:'50px 20px', width:600, margin: "20px auto"}
  const [name,setName] = useState('')
  const [address,setAddress] = useState('')
  const [students,setStudents]= useState([])
  const buttonStyle = {width:100, background:"#E30B5C"}

  const handleClick = (e)=>{
    e.preventDefault()
    const student = {name,address}
    // console.log(student)
    fetch("http://localhost:8080/student/add",{
      method:"POST",
      headers:{"Content-Type":"application/json"},
      body:JSON.stringify(student)
    })
    // .then(()=>{
    //   console.log("new add")
    // })
  }

  useEffect(()=>{
    fetch("http://localhost:8080/student/getAll")
    .then(res=>res.json())
    .then((result)=>{
      setStudents(result);
    })
  })

  return (
    // <form className={classes.root} noValidate autoComplete="off">
    // <TextField id="outlined-basic" label="Student Name" variant="outlined" />
    // <TextField id="outlined-basic" label="Student Address" variant="outlined" />
    // </form>

    <Container>
      <Paper elevation={3} style={paperStyle}>
        <h1 style={{color:"black"}}><u>Add Student</u></h1>
        <Box component="form" sx={{ "& > :not(style)": { m: 1, width: 500 }, maxWidth: '100%'}} noValidate autoComplete="off">
          <TextField id="outlined-basic" label="Student Name" variant="outlined" fullWidth value={name} onChange={(e)=>setName(e.target.value)}/>
          <TextField id="outlined-basic" label="Student Address" variant="outlined" fullWidth value={address} onChange={(e)=>setAddress(e.target.value)}/>
          <Button variant="contained" style={buttonStyle} onClick={handleClick}>Submit</Button>
        </Box>
        {/* {name}
        {address} */}

      </Paper>
        <h1>Students</h1>
      <Paper elevation={3} style={paperStyle}>
        {students.map(student=>(
          <Paper elevation={6} style={{margin:"10px",padding:"15px",textAlign:"left"}} key={student.id}>
            ID : {student.id}<br/>
            Name : {student.name}<br/>
            Address : {student.address}
          </Paper>
        ))}
      </Paper>
    </Container>

// import * as React from 'react';
// import Box from '@mui/material/Box';
// import TextField from '@mui/material/TextField';

// export default function FullWidthTextField() {
//   return (
//     <Box
//       sx={{
//         width: 500,
//         maxWidth: '100%',
//       }}
//     >
//       <TextField fullWidth label="fullWidth" id="fullWidth" />
//     </Box>
//   );
// }



    // <Box  component="form" sx={{    '& > :not(style)': { m: 1, width: '25ch' },}} noValidate autoComplete="off">
    // <TextField id="outlined-basic" label="Student Name" variant="outlined" />
    // <TextField id="outlined-basic" label="Student Address" variant="outlined" />
    // </Box>

    // <Container>
    //   <form>
    //   <TextField id="outlined-basic" label="Student Name" variant="outlined" />
    //   <TextField id="outlined-basic" label="Student Address" variant="outlined" />
    // </form>
    // </Container>
  );
}
