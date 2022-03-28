import { Grid } from "@mui/material";
import React from "react";
import FilterCard from "./FilterCard";
import ShowPetsDetails from "./ShowPetsDetails";
import { useStyles } from "./styles";

export default function FindPetHome(props) {
  const classes = useStyles();

  return (
    <Grid container md={12} className={classes.root}>
      <Grid item md={3}>
        <FilterCard />
      </Grid>
      <Grid item md={9}>
        <ShowPetsDetails />
      </Grid>
    </Grid>
  );
}
