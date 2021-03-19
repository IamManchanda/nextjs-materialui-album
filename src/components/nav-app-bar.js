import { AppBar, Toolbar, Typography } from "@material-ui/core";
import { PhotoCamera } from "@material-ui/icons";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  icon: {
    marginRight: theme.spacing(2),
  },
}));

function NavAppBar() {
  const classes = useStyles();
  return (
    <AppBar position="relative" color="primary">
      <Toolbar>
        <PhotoCamera className={classes.icon} />
        <Typography variant="h6" color="inherit" noWrap>
          Photo Album
        </Typography>
      </Toolbar>
    </AppBar>
  );
}

export default NavAppBar;
