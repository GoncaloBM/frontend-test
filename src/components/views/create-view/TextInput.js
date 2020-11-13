import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
      width: "25ch",
    },
  },
}));

export const TextInput = ({ label, setState }) => {
  const classes = useStyles();
  return (
    <form className={classes.root} noValidate autoComplete="off">
      <TextField
        id="standard-basic"
        label={label}
        onChange={(event) => {
          setState(event.target.value);
        }}
      />
    </form>
  );
};
