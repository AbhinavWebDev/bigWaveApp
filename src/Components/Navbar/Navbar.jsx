import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { logOut } from '../../Redux/Actions/AuthAction';
import { useDispatch} from "react-redux";
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "95%",
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
  maxWidth: 360,
};
export default function ButtonAppBar() {
  const dispatch = useDispatch();
  const handleLogout=()=>dispatch(logOut())
  return (
    <>
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
         
          <Button variant="contained" color="success" onClick={handleLogout}>
  Logout
</Button>
        </Toolbar>
      </AppBar>
    </Box>


</>
  );
}