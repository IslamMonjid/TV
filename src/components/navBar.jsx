import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { Switch, Route, Link } from "react-router-dom";
import ShowsList from "../components/showsList";
import ShowDetails from "../components/showDetails";
import Button from "@material-ui/core/Button";

const NavBar = () => {
  return (
    <div>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="title" color="inherit">
            TV Shows
          </Typography>
          <Link to="/">
            <Button>Home</Button>
          </Link>
        </Toolbar>
      </AppBar>

      <Switch>
        <Route exact path="/" component={ShowsList} />
        <Route path="/details/:id" component={ShowDetails} />
      </Switch>
    </div>
  );
};

export default NavBar;
