import {
  FormControl,
  FormControlLabel,
  FormLabel,
  Grid,
  Paper,
  RadioGroup,
} from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import Radio from "@mui/material/Radio";

import FilterAltIcon from "@mui/icons-material/FilterAlt";
import { useStyles } from "./styles";

export default function FilterCard(props) {
  const classes = useStyles();

  return (
    <Box m={2}>
      <Paper elevation={2} className={classes.filterpaper}>
        <Grid container md={12} direction="row" className={classes.filter}>
          <Grid item md={2}>
            <FilterAltIcon />
          </Grid>
          <Grid item md={3}>
            {" "}
            <h4> Filters</h4>
          </Grid>
        </Grid>

        <Grid container md={12} direction="row">
          <Grid item md={12}>
            {" "}
            <h5> Breeds</h5>
          </Grid>
          <Grid item md={12}>
            <FormControl>
              <RadioGroup
                aria-labelledby="demo-radio-buttons-group-label"
                defaultValue="female"
                name="radio-buttons-group"
              >
                <FormControlLabel
                  value="female"
                  control={<Radio />}
                  label="Akita"
                />
                <FormControlLabel
                  value="male"
                  control={<Radio />}
                  label="Barbet"
                />
                <FormControlLabel
                  value="other"
                  control={<Radio />}
                  label="Bichon"
                />
              </RadioGroup>
            </FormControl>{" "}
          </Grid>
        </Grid>

        <Grid container md={12} direction="row">
          <Grid item md={12}>
            {" "}
            <h5> Availability</h5>
          </Grid>
          <Grid item md={12}>
            <FormControl>
              <RadioGroup
                aria-labelledby="demo-radio-buttons-group-label"
                defaultValue="Adoption"
                name="radio-buttons-group"
              >
                <FormControlLabel
                  value="Adoption"
                  control={<Radio />}
                  label="Adoption"
                />
                <FormControlLabel
                  value="Cost"
                  control={<Radio />}
                  label="Cost"
                />
              </RadioGroup>
            </FormControl>{" "}
          </Grid>
        </Grid>

        <Grid container md={12} direction="row">
          <Grid item md={12}>
            {" "}
            <h5> Dog Type</h5>
          </Grid>
          <Grid item md={12}>
            <FormControl>
              <RadioGroup
                aria-labelledby="demo-radio-buttons-group-label"
                defaultValue="Adoption"
                name="radio-buttons-group"
              >
                <FormControlLabel
                  value="Adoption"
                  control={<Radio />}
                  label="Family Dog"
                />
                <FormControlLabel
                  value="Cost"
                  control={<Radio />}
                  label="Gaurd Dog"
                />

                <FormControlLabel
                  value="Cost"
                  control={<Radio />}
                  label="Toy Bread"
                />
              </RadioGroup>
            </FormControl>{" "}
          </Grid>
        </Grid>
      </Paper>
    </Box>
  );
}
