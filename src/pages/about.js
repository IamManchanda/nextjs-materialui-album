import { Fragment } from "react";
import Head from "next/head";
import {
  CssBaseline,
  AppBar,
  Toolbar,
  Typography,
  Container,
  Grid,
  Button,
} from "@material-ui/core";
import { PhotoCamera } from "@material-ui/icons";
import NextMuiLink from "../components/next-mui-link";
import useStyles from "../assets/styles/use-styles";

function PageIndex() {
  const classes = useStyles();

  return (
    <Fragment>
      <Head>
        <title>Next.js MaterialUI (Photo) Album</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Fragment>
        <CssBaseline />
        <AppBar position="relative" color="primary">
          <Toolbar>
            <PhotoCamera />
            <Typography variant="h6" color="inherit" noWrap>
              Photo Album
            </Typography>
          </Toolbar>
        </AppBar>
        <main>
          <div className={classes.container}>
            <Container maxWidth="sm">
              <Typography
                variant="h2"
                align="center"
                color="textPrimary"
                gutterBottom
              >
                About Page
              </Typography>

              <Typography
                variant="h5"
                align="center"
                color="textSecondary"
                paragraph
              >
                Hello everyone, this is an about page and I am trying to make
                this sentence as something short and leading about the
                collection below.
                <br />
                <br />
                Trying to make it short and sweet, but not too short so folks
                don&apos;t simply skip over it entirely.
              </Typography>
              <div>
                <Grid container spacing={2} justify="center">
                  <Grid item>
                    <NextMuiLink href="/" color="initial" underline="none">
                      <Button variant="contained" color="primary">
                        Back to Home Page
                      </Button>
                    </NextMuiLink>
                  </Grid>
                </Grid>
              </div>
            </Container>
          </div>
        </main>
      </Fragment>
    </Fragment>
  );
}

export default PageIndex;
