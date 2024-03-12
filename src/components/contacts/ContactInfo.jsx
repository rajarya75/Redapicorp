import { Box, Typography } from "@mui/material";
import Link from "next/link";
import React from "react";

export default function ContactInfo() {
  return (
    <Box className="contact-info">
      <Box className="gen-enquiry">
        <Typography variant="h3">General Enquiries</Typography>
        <Typography variant="body1">
          Explore REDAPi Portfolio for the full range of service offerings for
          your operational excellence and business continuity.
        </Typography>
        <Typography variant="h6" pt={3}>
          Email:{" "}
          <Link href={"mailto:info@redapicorp.com"}>info@redapicorp.com</Link>{" "}
        </Typography>
      </Box>

      <Box className="regional-sales">
        <Typography variant="h3">Regional Sales</Typography>
        <Typography variant="body1">
          If you want to reach our regional sales team directly please email
        </Typography>
        <Typography variant="h6" pt={3}>
          Europe, Middle-East and Africa <br />
          <Link href={"mailto:sales-emea@redapicorp.com"}>
            sales-emea@redapicorp.com
          </Link>
        </Typography>
        <Typography variant="h6" pt={3.5}>
          Asia-Pacific
          <br />
          <Link href={"mailto:sales-apac@redapicorp.com"}>
            sales-apac@redapicorp.com
          </Link>
        </Typography>
        <Typography variant="h6" pt={3.5}>
          United Kingdom and Ireland <br />
          <Link href={"mailto:sales-ukie@redapicorp.com"}>
            sales-ukie@redapicorp.com
          </Link>
        </Typography>
        <Typography variant="h6" pt={3.5}>
          United States of America <br />
          <Link href={"mailto: sales-usa@redapicorp.com"}>
            sales-usa@redapicorp.com
          </Link>
        </Typography>
      </Box>
    </Box>
  );
}
