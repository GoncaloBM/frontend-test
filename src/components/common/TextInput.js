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

export const TextInput = ({ label, setState, initialValue }) => {
  const classes = useStyles();
  return (
    <form className={classes.root} noValidate autoComplete="off">
      <div id={label}>
        <TextField
          id={"standard-basic"}
          datatype={label}
          label={label}
          // if this is the input for the price it will convert the string input to number so we can add in the cart
          onChange={(event) => {
            label === "Price"
              ? setState(parseInt(event.target.value))
              : setState(event.target.value);
          }}
          type={label === "Price" ? "number" : "string"}
          // The initial value is for the edit view
          value={initialValue}
        />
      </div>
    </form>
  );
};
