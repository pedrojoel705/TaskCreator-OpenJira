import { AppBar, IconButton, Toolbar, Typography } from "@mui/material";
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';

const Navbar = () => {
  return (
    <AppBar position="sticky" elevation={0}>
      <Toolbar>
        <IconButton
        size="large"
        edge="start"
        >
           <MenuRoundedIcon></MenuRoundedIcon>
        </IconButton>

        <Typography variant="h5">OpenJira</Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
