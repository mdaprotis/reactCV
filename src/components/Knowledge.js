import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Grid, Box, Typography } from "@material-ui/core";
import BorderLinearProgress from "./BorderLinearProgress";
import ChipColor from "./ChipColor";
import EN from "../lang_source/EN.json";
import "react-circular-progressbar/dist/styles.css";
import Circular from "./Circular.js";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  item: {
    color: theme.palette.text.primary,
  },
  knowledgeSubt: {
    color: theme.palette.text.secondary,
  },
}));

export default function Knowledge({ t }) {
  const classes = useStyles();

  const years_of_experience = () => {
    const today = new Date();
    const past = new Date(2014, 3, 1);
    const diffTime = Math.abs(past - today);
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24) / 365);
    return diffDays;
  };

  function FormRow({ items, bgColor }) {
    return (
      <React.Fragment>
        {items.map((it, i) => {
          return (
            <Grid
              container
              key={it.title}
              item
              style={{ marginBottom: "10px", paddingLeft: "15px" }}
            >
              <Grid item xs={6} className={classes.item}>
                <ChipColor
                  title={t(it.title)}
                  bgColor={"#dce775"}
                  icon={it.icon}
                />
              </Grid>
              <Grid item xs={6}>
                <Typography align="right">{it.value}%</Typography>
              </Grid>
              <Grid item xs={12} style={{ marginTop: "5px" }}>
                <BorderLinearProgress value={it.value} bgColor={"#dce775"} />
              </Grid>
            </Grid>
          );
        })}
      </React.Fragment>
    );
  }

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <Box
            display="flex"
            justifyContent="center"
            m={1}
            p={1}
            fontWeight="fontWeightBold"
          >
            <Typography variant="h4">
              {t("work_translation.technical_skills")}
            </Typography>
          </Box>
          <Box
            display="flex"
            justifyContent="center"
            m={1}
            p={1}
            fontWeight="fontWeightBold"
          >
            <Typography variant="caption">
              {t("work_translation.percentage_description") +
                ` ( ${years_of_experience()} = 100% )`}
            </Typography>
          </Box>
          {EN.knowledge.work_related.map((k, i) => {
            return (
              <div key={t("work_translation." + k.title)}>
                <Box display="flex" justifyContent="start" m={1} p={1}>
                  <Typography
                    varian="subtitle2"
                    className={classes.knowledgeSubt}
                  >
                    {t("work_translation." + k.title)}
                  </Typography>
                </Box>

                <FormRow items={k.list} bgColor={k.bgColor} />
              </div>
            );
          })}
        </Grid>
        <Grid item xs={12} sm={6}>
          <Grid
            container
            direction="column"
            justify="center"
            alignItems="center"
          >
            <Box
              display="flex"
              justifyContent="center"
              m={1}
              p={1}
              fontWeight="fontWeightBold"
            >
              <Typography variant="h4">
                {t("work_translation.professional_skills")}
              </Typography>
            </Box>
            <Circular t={t} elems={EN.knowledge.professional_skills.list} />
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}
