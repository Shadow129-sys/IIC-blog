import { Grid, makeStyles, Typography, useMediaQuery } from "@material-ui/core";
import LandingArt from "../Images/Icons/Wfh9";
import "./LandingArt.css";
function HomePage() {
  const classes = useStyles();
  // False for mobile devices
  const mediaQuery = useMediaQuery("(min-width:600px)");
  const mediaQuery1 = useMediaQuery("(min-width:400px)");
  return (
    <Grid
      container
      className={mediaQuery ? classes.content : classes.content_M}
    >
      <Grid item xs={6}>
        <Typography variant="h3" id="mainTitle1" className={mediaQuery1 ? classes.title1 : classes.title1_M}>
          Where ideas
        </Typography>
        <Typography variant="h3" id= "mainTitle2" className={mediaQuery1 ? classes.title2 : classes.title2_M}>
          come
        </Typography>
        <Typography
          variant="h5"
          id="subtitle"
          className={mediaQuery ? classes.sub : classes.sub_M}
        >
          ~ Through life
        </Typography>
      </Grid>
      <Grid item xs={6}>
        <LandingArt className={mediaQuery ? classes.art : classes.art_M} />
      </Grid>
    </Grid>
  );
}

export default HomePage;

const useStyles = makeStyles((theme) => ({
  content: {
    width: "100%",
    height: "60vh",
    backgroundImage: "linear-gradient(75deg, #ffffff 60%, #ff0057 40%)",
  },
  content_M: {
    width: "100%",
    height: "30vh",
    backgroundImage: "linear-gradient(75deg, #ffffff 60%, #ff0057 40%)",
  },
  title1: {
    marginTop: theme.spacing(10),
  },
  title1_M: {
    marginTop: theme.spacing(1),
  },
  title2: {
    marginTop: theme.spacing(5),
  },
  title2_M: {
    marginTop: theme.spacing(0.5),
  },  
  sub: {
    marginTop: theme.spacing(10),
  },
  sub_M: {
    marginTop: theme.spacing(0.4),
  },
  art: {
    width: "100%",
  },
  art_M: {
    position: "absolute",
    top: 80,
    right: -35,
    width: 300,
  },
}));
