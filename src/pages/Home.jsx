import { AppBar, Grid, FormControl, TextField, Button } from "@mui/material";

import { useState } from "react";
import Nav from "../components/Nav";
import Posts from "../components/Posts/Posts";

const INIT = {
  country: "",
  city: "",
  company: "",
  date_start: "",
  date_end: "",
};

const Home = () => {
  const [formData, setFormData] = useState(INIT);

  return (
    <>
      <Nav />
      <Posts />
      <Grid
        container
        justifyContent="space-between"
        alignItems="stretch"
        spacing={3}
      >
        <Grid item xs={12} sm={6} md={9}>
          <Posts />
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <AppBar position="static" color="inherit">
            <FormControl>
              <TextField
                label="Country"
                variant="outlined"
                value={formData.country}
                onChange={(e) =>
                  setFormData((prev) => ({ ...prev, country: e.target.value }))
                }
              />
              <TextField
                label="City"
                variant="outlined"
                value={formData.city}
                onChange={(e) =>
                  setFormData((prev) => ({ ...prev, city: e.target.value }))
                }
              />
              <TextField
                label="Company"
                variant="outlined"
                value={formData.company}
                onChange={(e) =>
                  setFormData((prev) => ({ ...prev, company: e.target.value }))
                }
              />
              <TextField
                label="Start Time"
                type="datetime-local"
                value={formData.date_start}
                onChange={(e) =>
                  setFormData((prev) => ({
                    ...prev,
                    date_start: e.target.value,
                  }))
                }
              />

              <Button>Submit</Button>
            </FormControl>
          </AppBar>
        </Grid>
      </Grid>
    </>
  );
};

export default Home;
