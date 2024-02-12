import { Box, Button, Typography } from "@mui/material";
import React from "react";

export default function Home() {
  return (
    <Box>
      <Typography variant="h1" sx={{ color: "primary.main" }}>
        hello
      </Typography>

      <Button variant="contained" color="primary">
        Primary
      </Button>
      <Button variant="contained" color="secondary">
        secondary
      </Button>

      <Button className="hello" variant="contained" color="error">
        <span>heloo</span>
        Primary
      </Button>
    </Box>
  );
}
