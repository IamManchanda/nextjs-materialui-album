import { AppBar, Toolbar, Typography } from "@material-ui/core";
import { PhotoCamera } from "@material-ui/icons";

function NavAppBar() {
  return (
    <AppBar position="relative" color="primary">
      <Toolbar>
        <PhotoCamera />
        <Typography variant="h6" color="inherit" noWrap>
          Photo Album
        </Typography>
      </Toolbar>
    </AppBar>
  );
}

export default NavAppBar;
