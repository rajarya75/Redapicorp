import {
  Box,
  Typography,
  TextField,
  Checkbox,
  FormControlLabel,
  Button,
} from "@mui/material";
import React from "react";

export default function ContactForm() {
  return (
    <Box className="contact-form">
      <Typography
        variant="h2"
        className="animated-heading"
        pb={3}
        color="primary"
      >
        Leave us a message
      </Typography>

      <Box className="form">
        <Box className="flex-between" gap={3} mb={4}>
          <TextField
            id="outlined-basic"
            label="First name *"
            variant="outlined"
            fullWidth
          />
          <TextField
            id="outlined-basic"
            label="Last name *"
            variant="outlined"
            fullWidth
          />
        </Box>
        <Box className="flex-between" gap={3} mb={4}>
          <TextField
            id="outlined-basic"
            label="Company name *"
            variant="outlined"
            fullWidth
          />
          <TextField
            id="outlined-basic"
            label="Business email *"
            variant="outlined"
            fullWidth
          />
        </Box>
        <Box className="flex-between" gap={3} mb={4}>
          <TextField
            id="outlined-basic"
            label="Phone number *"
            variant="outlined"
            fullWidth
          />
          <TextField
            id="outlined-basic"
            label="Please select the region *"
            variant="outlined"
            fullWidth
          />
        </Box>
        <Box mb={4}>
          <TextField
            id="outlined-basic"
            label="Please Enter the country name *"
            variant="outlined"
            fullWidth
          />
        </Box>
        <Box mb={2}>
          <TextField
            id="outlined-basic"
            label="How can we help you? *"
            variant="outlined"
            fullWidth
            multiline
            rows={3}
          />
        </Box>
        <Box mb={3}>
          <FormControlLabel
            control={<Checkbox defaultChecked />}
            label="I would like to receive emails about your latest news, products & services. By ticking this box I consent to receive communications from Redapicorp in accordance with its Privacy Policy. I understand I may unsubscribe at any time."
          />
        </Box>
        <Button variant="contained" color="primary" size="large" fullWidth>
          Submit
        </Button>
      </Box>
    </Box>
  );
}
