import React, { Component } from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import Avatar from "@material-ui/core/Avatar";
import Typography from "@material-ui/core/Typography";
import red from "@material-ui/core/colors/red";

const styles = theme => ({
  card: {
    //maxWidth: 400
  },
  media: {
    height: 0,
    paddingTop: "56.25%" // 16:9
  },
  avatar: {
    backgroundColor: red[500]
  }
});

class ShowDetails extends Component {
  state = {
    show: ""
  };

  componentDidMount() {
    const {
      match: { params }
    } = this.props;

    const axios = require("axios");
    axios
      .get("http://api.tvmaze.com/shows/" + params.id)
      .then(response => {
        this.setState({ show: response.data });
      })
      .catch(function(error) {
        console.log("Error occurred while fetching Entries");
        console.error(error);
      });
  }

  render() {
    const { classes } = this.props;

    return (
      <Card className={classes.card}>
        <CardHeader
          avatar={
            <Avatar aria-label="Recipe" className={classes.avatar}>
              {this.state.show.rating !== undefined
                ? this.state.show.rating.average
                : ""}
            </Avatar>
          }
          title={this.state.show.name}
          subheader={this.state.show.genres + " "}
        />
        <CardMedia
          className={classes.media}
          image={
            this.state.show.image !== undefined &&
            this.state.show.image !== null
              ? this.state.show.image.original
              : ""
          }
          title={this.state.show.name}
        />
        <CardContent>
          <Typography component="p">{this.state.show.summary}</Typography>
        </CardContent>
      </Card>
    );
  }
}

ShowDetails.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(ShowDetails);
