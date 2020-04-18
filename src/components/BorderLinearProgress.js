import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import LinearProgress from "@material-ui/core/LinearProgress";

const StyledLinearProgress = makeStyles({
  root: (props) => ({
    height: 10,
    backgroundColor: "#bdbdbd",
    borderRadius: 20,
  }),
  bar: {
    borderRadius: 20,
    backgroundColor: (props) => props.bgColor,
  },
});

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  margin: {
    margin: theme.spacing(1),
  },
}));

export default function BorderLinearProgress({ ...props }) {
  const classes = useStyles();
  const classesLinear = StyledLinearProgress(props);

  return (
    <div className={` ${classes.root}`}>
      <LinearProgress
        classes={{
          root: classesLinear.root,
          bar: classesLinear.bar, //aplica a la barra
        }}
        variant="determinate"
        value={props.value}
      />
    </div>
  );
}
