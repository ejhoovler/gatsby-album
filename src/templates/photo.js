import React from "react";

import { graphql } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

import CssBaseline from "@material-ui/core/CssBaseline";
import { makeStyles } from "@material-ui/core/styles";
import CameraIcon from "@material-ui/icons/PhotoCamera";
import Paper from "@material-ui/core/Paper";
import Container from "@material-ui/core/Container";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";

import Footer from "../components/Footer.js";

export default function Work(props) {
  const useStyles = makeStyles(theme => ({
    icon: {
      marginRight: theme.spacing(2)
    },
    root: {
      maxWidth: `300px`,
      margin: `auto`,
      padding: theme.spacing(1)
    },
    title: {
      padding: theme.spacing(8, 0, 6)
    },
    footer: {
      backgroundColor: theme.palette.background.paper,
      padding: theme.spacing(6)
    }
  }));

  const classes = useStyles();

  const album = () => {
    const data = useStaticQuery(graphql`
      {
        allFile(filter: { sourceInstanceName: { eq: "images" } }) {
          edges {
            node {
              
              
            }
          }
        }
      }
    `)

      const image = getImage(data.file);


  return (
    <>
      <CssBaseline />
      <AppBar position="relative">
        <Toolbar>
          <CameraIcon className={classes.icon} />
          <Typography variant="h6" color="inherit" noWrap>
            LeeLee's Wreaths & Decor
          </Typography>
        </Toolbar>
      </AppBar>
      <Container className={classes.wrapper}>
        <Container className={classes.title}>
          <Typography
            component="h1"
            variant="h2"
            align="center"
            color="textPrimary"
            gutterBottom
          >
            {props.data.file.fields.exif.title}
          </Typography>
        </Container>
        <Paper className={classes.root}>
          <GatsbyImage image={image} />
        </Paper>
      </Container>
      <Footer />
    </>
  );
  }}