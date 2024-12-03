export const PageItems = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  {
    name: "Services",
    path: "",
    submenu: [
      {
        name: "Managed Services",
        path: "/services/managed-services",
      },
      {
        name: "Carrier Services",
        path: "/services/carrier-services",
      },
      {
        name: "Data Science, Engineering and Operations",
        path: "/services/data-Science-engineering-and-operations",
      },
      {
        name: "CyberSecurity and Compliance",
        path: "/services/cyberSecurity-and-compliance",
        submenu: [
          {
            name: "Infrastructure Security",
            path: "/services/cyberSecurity-and-compliance/infrastructure-security",
          },
          {
            name: "Identity Security",
            path: "/services/cyberSecurity-and-compliance/identity-security",
          },
          {
            name: "Threat Management ",
            path: "/services/cyberSecurity-and-compliance/threat-management",
          },
          {
            name: "Secure Access Service Edge (SASE)",
            path: "/services/cyberSecurity-and-compliance/secure-access-service-edge",
          },
        ],
      },
      {
        name: "Technology Engineering and Consultancy Services",
        path: "/services/technology-engineering-and-consultancy-services",
      },
      // {
      //   name: "Datacenter & Transformation",
      //   path: "/services/datacenter-and-transformation",
      // },
    ],
  },
  { name: "Insights", path: "/insights" },
  { name: "Careers", path: "careers" },
  { name: "REDAPi Care", path: "redapicare" },
  { name: "Contact Us", path: "/contacts" },
  { name: "Press Release", path: "/press-release" },
];
