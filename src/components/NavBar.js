import React from "react";
import Toolbar from "@material-ui/core/Toolbar";
import AppBar from "@material-ui/core/AppBar";
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

export default function NavBar({
  t,
  onThemeTypeSwitch,
  handleClickLang,
  handleClickTab,
  tabValue,
}) {
  const classes = useStyles();
  const [themeType, setThemeType] = React.useState(true);
  const [icon, setIcon] = React.useState("brightness_2");
  const handleClick = (e) => {
    setThemeType(!themeType);
    onThemeTypeSwitch();
    setIcon(icon === "brightness_7" ? "brightness_2" : "brightness_7");
  };

  return (
    <div>
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
