import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Link from "next/link";
import { PageItems } from "./PageItems";
import { useRouter } from "next/router";
import MenuItems from "./MenuItems";

export default function Navbar() {
  const router = useRouter();

  return (
    <>
      {/* <Box sx={{ display: { xs: "none", md: "flex" } }}>
        {PageItems.map((page, index) => {
          const depthLevel = 0;
          <Button
            key={index}
            className={router.pathname === page.path ? "active" : ""}
          >
            <Link href={page.path}>{page.name}</Link>
          </Button>;
        })}
      </Box> */}
      <nav>
        <ul className="menus">
          {PageItems.map((page, index) => {
            const depthLevel = 0;
            return (
              <MenuItems items={page} key={index} depthLevel={depthLevel} />
            );
          })}
        </ul>
      </nav>
    </>
  );
}
