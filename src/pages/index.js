import { Fragment } from "react";
import Head from "next/head";
import {
  CssBaseline,
  Typography,
  Container,
  Grid,
  Button,
  Card,
  CardMedia,
  CardContent,
  CardActions,
} from "@material-ui/core";
import NextMuiLink from "../components/next-mui-link";
import NavAppBar from "../components/nav-app-bar";
import NavFooter from "../components/nav-footer";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  homeContainer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6),
  },
  homeButtons: {
    marginTop: theme.spacing(4),
  },
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },
  card: {
    height: "100%",
    display: "flex",
    flexDirection: "column",
  },
  cardMedia: {
    paddingTop: "56.25%", // 16:9
  },
  cardContent: {
    flexGrow: 1,
  },
}));

const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9];

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
              <div className={classes.homeButtons}>
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
          <Container className={classes.cardGrid} maxWidth="md">
            <Grid container spacing={4}>
              {cards.map((card) => (
                <Grid item key={card} xs={12} sm={6} md={4}>
                  <Card className={classes.card}>
                    <CardMedia
                      className={classes.cardMedia}
                      title={`Image title ${card}`}
                      image={`https://source.unsplash.com/random/40${card}x225`}
                    />
                    <CardContent className={classes.cardContent}>
                      <Typography gutterBottom variant="h5" component="h2">
                        Heading {card}
                      </Typography>
                      <Typography>
                        This is a media card. You can use this section to
                        describe the content.
                      </Typography>
                    </CardContent>
                    <CardActions>
                      <Button size="small" color="primary">
                        View
                      </Button>
                      <Button size="small" color="primary">
                        Edit
                      </Button>
                    </CardActions>
                  </Card>
                </Grid>
              ))}
            </Grid>
          </Container>
        </main>
        <NavFooter />
      </Fragment>
    </Fragment>
  );
}

export default PageIndex;
