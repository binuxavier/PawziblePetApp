import { Avatar, Divider, Grid, Paper } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { useStyles } from "./styles";

const img = require("./Assets/Dog1.jpg");

const pets = require("./data.json");

console.log("pets", pets);

export default function ShowPetsDetails() {
  const classes = useStyles();

  return (
    <div>
      <Box m={2}>
        <Paper elevation={2}>
          {pets.map((pet) => {
            return (
              <>
                <Grid
                  container
                  md={12}
                  className={classes.petdetail}
                  justifyContent="left"
                >
                  <Grid item md={2}>
                    <Avatar
                      alt="Remy Sharp"
                      src={img}
                      className={classes.petimg}
                      variant="square"
                    />
                  </Grid>

                  <Grid item md={10}>
                    <Grid container md={12} justifyContent="left">
                      <Grid item md={12}>
                        <h5 className={classes.title}> {pet.name}</h5>
                      </Grid>
                      <Grid item md={12} className={classes.desc}>
                        {pet.desc}
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>
                <Divider />
              </>
            );
          })}
        </Paper>
      </Box>
    </div>
  );
}
