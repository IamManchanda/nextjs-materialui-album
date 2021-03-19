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
  homeContainer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6),
  },
}));

function PageIndex() {
  const classes = useStyles();

  return (
    <Fragment>
      <Head>
        <title>Home | Next.js MaterialUI (Photo) Album</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Fragment>
        <CssBaseline />
        <NavAppBar />
        <main>
          <div className={classes.homeContainer}>
            <Container maxWidth="sm">
              <Typography
                variant="h2"
                align="center"
                color="textPrimary"
                gutterBottom
              >
                Photo Album
              </Typography>

              <Typography
                variant="h5"
                align="center"
                color="textSecondary"
                paragraph
              >
                Hello everyone, this is a photo album and I am trying to make
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
                    <Button variant="contained" color="primary">
                      See my Photos
                    </Button>
                  </Grid>
                  <Grid item>
                    <NextMuiLink href="/about" color="initial" underline="none">
                      <Button variant="outlined" color="primary">
                        About Page
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
