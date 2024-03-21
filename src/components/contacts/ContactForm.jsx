import React, { useState } from "react";
import {
  Box,
  Typography,
  TextField,
  Checkbox,
  FormControlLabel,
  Button,
  InputLabel,
  MenuItem,
  FormControl,
  Select,
  CircularProgress,
} from "@mui/material";
import axios from "axios";
import Swal from "sweetalert2/dist/sweetalert2.js";
import "sweetalert2/src/sweetalert2.scss";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    companyName: "",
    email: "",
    phone: "",
    region: "",
    country: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const [countryOptions, setCountryOptions] = useState([]);

  const regions = {
    "Europe, Middle-East and Africa": [
      "Germany",
      "France",
      "Italy",
      // Add more countries as needed
    ],
    "Asia-Pacific": [
      "China",
      "Japan",
      "India",
      // Add more countries as needed
    ],
    "United Kingdom and Ireland": [
      "United Kingdom",
      "Ireland",
      // Add more countries as needed
    ],
    "United States of America": [
      "United States",
      // Add more countries as needed
    ],
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    if (name === "region") {
      setFormData((prevFormData) => ({
        ...prevFormData,
        [name]: value,
        country: "",
      }));
      setCountryOptions(regions[value]);
    } else {
      setFormData((prevFormData) => ({
        ...prevFormData,
        [name]: value,
      }));
    }
  };

  const isFormValid = () => {
    return (
      formData.firstName.trim() !== "" &&
      formData.lastName.trim() !== "" &&
      formData.companyName.trim() !== "" &&
      formData.email.trim() !== "" &&
      formData.phone.trim() !== "" &&
      formData.region.trim() !== "" &&
      formData.country.trim() !== "" &&
      formData.message.trim() !== ""
    );
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);
    try {
      await axios.post("/api/sendemail", formData);
      Swal.fire({
        title: "Welcome to REDAPi",
        text: "Thank you for contacting us! We will get back to you shortly.",
        icon: "success",
      });
      // Clear form fields after successful submission
      setFormData({
        firstName: "",
        lastName: "",
        companyName: "",
        email: "",
        phone: "",
        region: "",
        country: "",
        message: "",
      });
    } catch (error) {
      console.error("Error sending email:", error);
    } finally {
      setLoading(false);
    }
  };

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

      <Box className="form" component={"form"} onSubmit={handleSubmit}>
        <Box className="flex-between" gap={3} mb={4}>
          <TextField
            id="outlined-basic"
            label="First name"
            variant="outlined"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            fullWidth
            required
          />
          <TextField
            id="outlined-basic"
            label="Last name"
            variant="outlined"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            fullWidth
            required
          />
        </Box>
        <Box className="flex-between" gap={3} mb={4}>
          <TextField
            id="outlined-basic"
            label="Company name"
            variant="outlined"
            name="companyName"
            value={formData.companyName}
            onChange={handleChange}
            fullWidth
            required
          />
          <TextField
            id="outlined-basic"
            label="Business email"
            type="email"
            variant="outlined"
            name="email"
            value={formData.email}
            onChange={handleChange}
            fullWidth
            required
          />
        </Box>
        <Box className="flex-between" gap={3} mb={4}>
          <TextField
            id="outlined-basic"
            label="Phone number"
            type="number"
            variant="outlined"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            fullWidth
            required
          />
          <FormControl fullWidth>
            <InputLabel id="select-region">Please select the region</InputLabel>
            <Select
              labelId="select-region"
              id="select-region-select"
              name="region"
              value={formData.region}
              label="Please select the region"
              onChange={handleChange}
              required
            >
              <MenuItem value="Europe, Middle-East and Africa">
                Europe, Middle-East and Africa
              </MenuItem>
              <MenuItem value="Asia-Pacific">Asia-Pacific</MenuItem>
              <MenuItem value="United Kingdom and Ireland">
                United Kingdom and Ireland
              </MenuItem>
              <MenuItem value="United States of America">
                United States of America
              </MenuItem>
            </Select>
          </FormControl>
        </Box>
        <Box mb={4}>
          <FormControl fullWidth>
            <InputLabel id="select-country">
              Please select the country
            </InputLabel>
            <Select
              labelId="select-country"
              id="select-country-select"
              name="country"
              value={formData.country}
              label="Please select the country"
              onChange={handleChange}
              required
            >
              {countryOptions.map((country) => (
                <MenuItem key={country} value={country}>
                  {country}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Box>
        <Box mb={2}>
          <TextField
            id="outlined-basic"
            label="How can we help you?"
            variant="outlined"
            name="message"
            value={formData.message}
            onChange={handleChange}
            fullWidth
            multiline
            rows={3}
            required
          />
        </Box>
        <Box mb={3}>
          <FormControlLabel
            control={<Checkbox defaultChecked />}
            label="I would like to receive emails about your latest news, products & services. By ticking this box I consent to receive communications from REDAPi in accordance with its Privacy Policy. I understand I may unsubscribe at any time."
          />
        </Box>
        <Button
          type="submit"
          variant="contained"
          color="primary"
          size="large"
          fullWidth
          disabled={!isFormValid()}
        >
          Submit
          {loading && (
            <CircularProgress color="inherit" size={18} sx={{ ml: 1 }} />
          )}
        </Button>
      </Box>
    </Box>
  );
}
