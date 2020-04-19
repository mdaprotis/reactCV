import React, { useRef } from "react";
import { CssBaseline, Box, makeStyles, Container } from "@material-ui/core";
import NavBar from "./components/NavBar";
import Presentation from "./components/Presentation.js";
import Profile from "./components/Profile.js";
import Knowledge from "./components/Knowledge.js";
import Work from "./components/Work.js";
import { translate } from "react-switch-lang";

const useStyles = makeStyles((theme) => ({
  topic: {
    margin: "auto",
    paddingTop: "100px",
    paddingBottom: "100px",
  },
}));

function App({ t }) {
  const classes = useStyles();
  const [tabValue, setValue] = React.useState(0);
  const topics = [useRef(null), useRef(null), useRef(null), useRef(null)];
  const handleClickTab = (event, newValue) => {
    topics[newValue].current.scrollIntoView({
      block: "start",
      behavior: "smooth",
    });
    setValue(newValue);
  };

  return (
    <CssBaseline>
      <NavBar t={t} handleClickTab={handleClickTab} tabValue={tabValue} />
      <Container>
        <Box justifyContent="center">
          <Box className={classes.topic} ref={topics[0]}>
            <Presentation t={t} />
          </Box>
          <Box className={classes.topic} ref={topics[1]}>
            <Profile t={t} />
          </Box>
          <Box className={classes.topic} ref={topics[2]}>
            <Knowledge t={t} />
          </Box>
          <Box className={classes.topic} ref={topics[3]}>
            <Work t={t} />
          </Box>
        </Box>
      </Container>
    </CssBaseline>
  );
}

export default translate(App);
