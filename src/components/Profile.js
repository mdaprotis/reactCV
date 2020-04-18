import React from "react";
import { Box, Typography } from "@material-ui/core";

function Profile({ t }) {
  //const classes = useStyles();
  return (
    <Box>
      <Box
        display="flex"
        justifyContent="center"
        m={1}
        p={1}
        fontWeight="fontWeightBold"
      >
        <Typography variant="h4">{t("navbar.about_me")} </Typography>
      </Box>
      <Box display="flex">
        <Box>{t("profile")}</Box>
      </Box>
    </Box>
  );
}

export default Profile;
