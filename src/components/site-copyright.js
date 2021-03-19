import { Typography } from "@material-ui/core";
import NextMuiLink from "../components/next-mui-link";

function SiteCopyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {"Copyright ©"}
      <NextMuiLink color="inherit" href="/">
        CodeAndPhotoAlbum
      </NextMuiLink>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

export default SiteCopyright;
