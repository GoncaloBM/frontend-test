import { React } from "react";

export const AppLayout = ({ children }) => {
  const classes = {
    app: {
      width: "100%",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    },
  };

  return <div style={classes.app}>{children}</div>;
};
