import React from "react";
import {
  Card,
  CardHeader,
  CardContent,
  IconButton,
  Typography,
  makeStyles,
  Avatar,
} from "@material-ui/core";
import { DeleteOutlined } from "@material-ui/icons";
import { yellow, green, pink, blue } from "@material-ui/core/colors";

const useStyles = makeStyles({
  test: {
    background: (note) => {
      if (note.category === "work") {
        return green[300];
      }
      if (note.category === "money") {
        return blue[300];
      }
      if (note.category === "todos") {
        return yellow[300];
      }
        return pink[300];
    },
  },
  avatar: {
    backgroundColor: (note) => {
      if (note.category === "work") {
        return yellow[500];
      }
      if (note.category === "money") {
        return pink[500];
      }
      if (note.category === "todos") {
        return blue[500];
      }
      return green[500];
    },
  },
});

const NoteCard = ({ note, handleDelete }) => {
  const classes = useStyles(note);

  return (
    <div>
      <Card elevation={1} className={classes.test}>
        <CardHeader
          avatar={
            <Avatar className={classes.avatar}>
              {note.category[0].toUpperCase()}
            </Avatar>
          }
          action={
            <IconButton
              onClick={() => {
                handleDelete(note.id);
              }}
            >
              <DeleteOutlined />
            </IconButton>
          }
          title={note.title}
          subheader={note.category}
        />
        <CardContent>
          <Typography variant="body3">{note.details}</Typography>
        </CardContent>
      </Card>
    </div>
  );
};

export default NoteCard;
