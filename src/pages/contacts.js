import ContactForm from "@/components/contacts/ContactForm";
import ContactInfo from "@/components/contacts/ContactInfo";
import ContactSlider from "@/components/contacts/ContactSlider";
import { Container, Grid } from "@mui/material";
import React from "react";

export default function Contacts() {
  return (
    <>
      <ContactSlider />
      <Container>
        <Grid container spacing={3}>
          <Grid item md={6}>
            <ContactForm />
          </Grid>
          <Grid item md={6}>
            <ContactInfo />
          </Grid>
        </Grid>
      </Container>
    </>
  );
}
