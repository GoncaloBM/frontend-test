import { React } from "react";

export const Title = ({ title, size }) => {
  const classes = {
    title: { fontSize: size, width: "100%", alignItems: "center" },
  };
  return <div style={classes.title}>{title}</div>;
};
