import React, { useContext } from "react";
import Toolbar from "@material-ui/core/Toolbar";
import AppBar from "@material-ui/core/AppBar";
import { ThemeContext } from "../contexts/ThemeContext";
import {
  makeStyles,
  Icon,
  Tab,
  Tabs,
  Box,
  IconButton,
  Avatar,
  Grid,
} from "@material-ui/core";
import { LanguageContext } from "../contexts/LanguageContext";

const useStyles = makeStyles((theme) => ({
  title: {
    flexGrow: 1,
  },
  container: {
    margin: "auto",
    maxWidth: "70%",
  },
  topic: {
    margin: "auto",
    paddingTop: "100px",
  },
  small: {
    width: theme.spacing(2.5),
    height: theme.spacing(2.5),
  },
}));

export default function NavBar({ t, handleClickTab, tabValue }) {
  const classes = useStyles();
  const [icon, setIcon] = React.useState("brightness_2");
  const { test, toggleTheme } = useContext(ThemeContext);
  const { handleClickLang } = useContext(LanguageContext);
  const handleClick = (e) => {
    toggleTheme();
    setIcon(icon === "brightness_7" ? "brightness_2" : "brightness_7");
  };

  return (
    <div>
      {test}
      <AppBar position="fixed" color="primary">
        <Toolbar varian="condense" className={classes.titlebar}>
          <Grid container direction="row" justify="space-between">
            <Grid item xs={9}>
              <Box display="flex" justifyContent="flex-start">
                <Tabs
                  value={tabValue}
                  indicatorColor="secondary"
                  onChange={handleClickTab}
                  variant="scrollable"
                  scrollButtons="auto"
                  aria-label="scrollable auto tabs example"
                >
                  <Tab label={t("navbar.profile")} />
                  <Tab label={t("navbar.about_me")} />
                  <Tab label={t("navbar.knowledge")} />
                  <Tab label={t("navbar.work")} />
                </Tabs>
              </Box>
            </Grid>
            <Grid item xs={3}>
              <Box display="flex" justifyContent="flex-end">
                <IconButton onClick={handleClickLang}>
                  <Avatar className={classes.small}>
                    <Box fontWeight="fontWeightBold" fontSize={12} m={1}>
                      {t("lang") === "SP" ? "EN" : "SP"}
                    </Box>
                  </Avatar>
                </IconButton>
                <IconButton>
                  <Icon onClick={handleClick}>{icon}</Icon>
                </IconButton>
              </Box>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
    </div>
  );
}
