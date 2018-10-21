import React from "react";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import { Link } from "react-router-dom";

const Show = props => {
  const show = props.show.show !== undefined ? props.show.show : props.show;
  return (
    <div>
      {props.show ? (
        <Card>
          <CardMedia
            style={{ height: 0, paddingTop: "56.25%" }}
            image={show.image !== null ? show.image.medium : ""}
            title={show.name !== null ? show.name : ""}
          />
          <CardContent>
            <Typography gutterBottom variant="headline" component="h2">
              {show.name !== null ? show.name : ""}
            </Typography>
            <Typography component="p">
              {show.genres !== null ? show.genres + " " : ""}
            </Typography>
            <Typography component="p">
              {show.rating.average !== null ? show.rating.average + "/10" : ""}
            </Typography>
          </CardContent>
          <Link to={`/details/${show.id}`}>Details</Link>
          <CardActions />
        </Card>
      ) : null}
    </div>
  );
};
export default Show;
