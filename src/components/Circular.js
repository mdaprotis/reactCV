import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Grid, Box, Typography } from "@material-ui/core";
// Import react-circular-progressbar module and styles
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

const useStyles = makeStyles((theme) => ({
  circular_style: {
    marginTop: theme.spacing(2),
  },
  knowledgeSubt: {
    color: theme.palette.text.secondary,
  },
}));
export default function Circular({ t, elems }) {
  const classes = useStyles();
  return (
    <div style={{ padding: "40px" }}>
      <Grid container justify="center">
        {elems.map((item, i) => {
          return (
            <Grid key={`ps_${i}`} item xs={12} sm={6}>
              <Box
                display="flex"
                justifyContent="center"
                style={{ width: "50%", margin: "auto" }}
              >
                <Grid item className={classes.circular_style}>
                  <CircularProgressbar
                    value={item.value}
                    text={`${item.value}%`}
                  />
                </Grid>
              </Box>
              <Box display="flex" justifyContent="center" m={1} p={1}>
                <Typography
                  varian="subtitle2"
                  className={classes.knowledgeSubt}
                >
                  {t(`work_translation.${item.title}`)}
                </Typography>
              </Box>
            </Grid>
          );
        })}
      </Grid>
    </div>
  );
}
