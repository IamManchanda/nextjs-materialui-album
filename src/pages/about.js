import { Fragment } from "react";
import Head from "next/head";
import {
  CssBaseline,
  Typography,
  Container,
  Grid,
  Button,
} from "@material-ui/core";
import NextMuiLink from "../components/next-mui-link";
import NavAppBar from "../components/nav-app-bar";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  aboutWrapper: {
    backgroundColor: theme.palette.background.paper,
    height: "100vh",
  },
  aboutContainer: {
    backgroundColor: theme.palette.background.paper,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "90vh",
  },
  aboutButtons: {
    marginTop: theme.spacing(4),
  },
}));

function PageIndex() {
  const classes = useStyles();
  return (
    <Fragment>
      <Head>
        <title>About | Next.js MaterialUI (Photo) Album</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Fragment>
        <CssBaseline />
        <div className={classes.aboutWrapper}>
          <NavAppBar />
          <main>
            <div className={classes.aboutContainer}>
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
                  Hello everyone, this is an about page!
                </Typography>
                <div className={classes.aboutButtons}>
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
        </div>
      </Fragment>
    </Fragment>
  );
}

export default PageIndex;
