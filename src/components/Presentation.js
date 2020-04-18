import React from "react";
import {
  Box,
  Avatar,
  Icon,
  IconButton,
  Typography,
  Grid,
  List,
  ListItem,
  ListItemText,
  ListItemAvatar,
  Divider,
  Chip,
  Card,
  CardHeader,
  CardContent,
  CardActions,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import PanToolRounded from "@material-ui/icons/PanToolRounded";
import image from "../media/pic4.png";
import {
  WhatsappShareButton,
  WhatsappIcon,
  FacebookMessengerShareButton,
  FacebookMessengerIcon,
  FacebookShareButton,
  FacebookIcon,
  LinkedinShareButton,
  LinkedinIcon,
} from "react-share";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    "& > *": {
      margin: theme.spacing(1),
    },
  },
  center: {
    margin: "auto",
  },
  card: {
    minWidth: theme.spacing(50),
  },
  avatar: {
    marginTop: theme.spacing(20),
  },
  small: {
    width: theme.spacing(3),
    height: theme.spacing(3),
  },
  large: {
    width: "330px",
    height: "330px",
    margin: "auto",
  },
  divisor: {
    width: "100%",
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
  iconShare: {
    marginLeft: "10px",
  },
}));

function Profile({ t }) {
  const classes = useStyles();
  const shareUrl = window.location.href;
  const title = "CV Daprotis Martin";

  return (
    <Grid
      container
      direction="row-reverse"
      justify="space-between"
      alignItems="flex-start"
    >
      <Grid item xs sm>
        <Box display="flex" justifyContent="center" className={classes.avatar}>
          <Avatar
            alt="Remy Sharp"
            src={image}
            className={`${classes.avatar} ${classes.large}`}
          />
        </Box>
      </Grid>
      <Grid item xs sm>
        <Box display="flex" justifyContent="flex-start" m={1} p={1}>
          <Chip icon={<PanToolRounded />} label={t("hi")} color="primary" />
        </Box>
        <Box
          display="flex"
          justifyContent="center"
          m={1}
          p={1}
          className={classes.card}
        >
          <Card>
            <CardHeader
              title={
                <Typography
                  gutterBottom
                  variant="h2"
                  fontWeight="fontWeightBold"
                >
                  Daprotis Martín
                </Typography>
              }
            ></CardHeader>
            <CardContent>
              <Typography
                className={classes.pos}
                variant="h4"
                color="textSecondary"
              >
                {t("study.university.degree")}
              </Typography>
              <Typography
                className={classes.pos}
                variant="h5"
                color="textSecondary"
              >
                {t("study.university.institution")}
              </Typography>
            </CardContent>
            <CardContent>
              <List className={classes.divisor}>
                <ListItem>
                  <ListItemAvatar>
                    <Avatar>
                      <Icon>calendar_today</Icon>
                    </Avatar>
                  </ListItemAvatar>
                  <ListItemText
                    primary={t("personal_data.bday")}
                    secondary={t("personal_data.bdate")}
                  />
                </ListItem>
                <Divider variant="inset" component="li" />
                <ListItem>
                  <ListItemAvatar>
                    <Avatar>
                      <Icon>email</Icon>
                    </Avatar>
                  </ListItemAvatar>
                  <ListItemText primary="mdaprotis@hotmail.com" />
                </ListItem>
                <Divider variant="inset" component="li" />
                <ListItem>
                  <ListItemAvatar>
                    <Avatar>
                      <Icon>location_on</Icon>
                    </Avatar>
                  </ListItemAvatar>
                  <ListItemText
                    primary={
                      t("personal_data.city") +
                      " - ( " +
                      t("personal_data.country") +
                      " )"
                    }
                  />
                </ListItem>
              </List>
            </CardContent>
            <CardActions disableSpacing>
              <IconButton
                aria-label="add to favorites"
                href="https://www.linkedin.com/in/martin-daprotis/"
                style={{ marginBottom: "5px" }}
              >
                <i className="cib-linkedin"></i>
              </IconButton>
              <WhatsappShareButton url={shareUrl} title={title}>
                <WhatsappIcon size={32} round />
              </WhatsappShareButton>
              <FacebookMessengerShareButton
                className={classes.iconShare}
                url={shareUrl}
                appId="521270401588372"
              >
                <FacebookMessengerIcon size={32} round />
              </FacebookMessengerShareButton>
              <FacebookShareButton
                className={classes.iconShare}
                url={shareUrl}
                quote={title}
              >
                <FacebookIcon size={32} round />
              </FacebookShareButton>
              <LinkedinShareButton className={classes.iconShare} url={shareUrl}>
                <LinkedinIcon size={32} round />
              </LinkedinShareButton>
            </CardActions>
          </Card>
        </Box>
      </Grid>
    </Grid>
  );
}

export default Profile;
