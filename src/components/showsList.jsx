import React, { Component } from "react";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import Show from "../components/show";

class ShowsList extends Component {
  state = {
    shows: [],
    searchString: ""
  };
  constructor() {
    super();
    this.getShows();
  }

  getShows = () => {
    const axios = require("axios");
    axios
      .get("http://api.tvmaze.com/shows?page=0")
      .then(response => {
        this.setState({ shows: response.data });
      })
      .catch(function(error) {
        console.log("Error occurred while fetching Entries");
        console.error(error);
      });
  };

  searchShows = () => {
    const axios = require("axios");
    axios
      .get("http://api.tvmaze.com/search/shows", {
        params: {
          q: this.state.searchString
        }
      })
      .then(response => {
        this.setState({ shows: response.data });
      })
      .catch(function(error) {
        console.log("Error occurred while fetching Entries");
        console.error(error);
      });
  };
  onSearchInputChange = event => {
    console.log("Search changed ..." + event.target.value);
    if (event.target.value) {
      this.setState({ searchString: event.target.value });
    } else {
      this.setState({ searchString: "" });
      this.getShows();
    }
    this.searchShows();
  };
  render() {
    return (
      <div>
        <TextField
          style={{ padding: 24 }}
          id="searchInput"
          placeholder="Search for Shows"
          margin="normal"
          onChange={this.onSearchInputChange}
        />
        {this.state.shows ? (
          <div>
            <Grid container spacing={24} style={{ padding: 24 }}>
              {this.state.shows.map(currentShow => (
                <Grid item xs={12} sm={6} lg={4} xl={3}>
                  <Show show={currentShow} />
                </Grid>
              ))}
            </Grid>
          </div>
        ) : (
          "No shows found"
        )}
      </div>
    );
  }
}
export default ShowsList;
