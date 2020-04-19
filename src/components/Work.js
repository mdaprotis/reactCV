import React, { useContext } from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  ExpansionPanel,
  ExpansionPanelDetails,
  ExpansionPanelSummary,
  Typography,
  Box,
  Grid,
} from "@material-ui/core";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import EN from "../lang_source/EN.json";
import SP from "../lang_source/SP.json";
import { LanguageContext } from "../contexts/LanguageContext";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    flexBasis: "33.33%",
    flexShrink: 0,
  },
  secondaryHeading: {
    fontSize: theme.typography.pxToRem(15),
    color: theme.palette.text.secondary,
    float: "right",
  },
  position: {
    color: theme.palette.text.secondary,
  },
}));

export default function ControlledExpansionPanels({ t }) {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);
  const { lang } = useContext(LanguageContext);
  const language = lang === "EN" ? SP : EN;

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  function WorkItem({ panel, place, from, until, pos, description }) {
    return (
      <ExpansionPanel
        expanded={expanded === "panel" + panel}
        onChange={handleChange("panel" + panel)}
      >
        <ExpansionPanelSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panelbh-content"
          id="panelbh-header"
        >
          <Grid
            container
            direction="row"
            justify="flex-start"
            alignItems="center"
          >
            <Typography className={classes.heading} variant="h6">
              {place}
            </Typography>
            {pos ? (
              <Box fontStyle="oblique" m={1}>
                <Typography variant="h6" className={classes.position}>
                  {pos}
                </Typography>
              </Box>
            ) : (
              ""
            )}
          </Grid>
          <Grid
            container
            direction="row"
            justify="flex-end"
            alignItems="center"
          >
            <Typography
              className={classes.secondaryHeading}
              display="block"
              align="right"
            >
              {from} - {until}
            </Typography>
          </Grid>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <Typography variant="subtitle1">{description}</Typography>
        </ExpansionPanelDetails>
      </ExpansionPanel>
    );
  }

  return (
    <div className={classes.root}>
      <Box
        display="flex"
        justifyContent="center"
        m={1}
        p={1}
        fontWeight="fontWeightBold"
      >
        <Typography variant="h4">{t("navbar.work")}</Typography>
      </Box>
      {language.work.map((k, i) => {
        return (
          <WorkItem
            key={`work_${i}`}
            place={k.place}
            from={k.from}
            until={k.until}
            description={k.description}
            pos={k.position}
            panel={i}
          />
        );
      })}
    </div>
  );
}
