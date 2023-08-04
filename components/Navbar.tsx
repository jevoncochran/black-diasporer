import React from "react";
import { Box, Typography } from "@mui/material";
import Link from "next/link";

interface NavRoute {
  name: string;
  href: string;
}

const routes: NavRoute[] = [
  { name: "About", href: "/about" },
  { name: "Videos", href: "/videos" },
  { name: "Blog", href: "/blog" },
  { name: "Contact", href: "/contact" },
];

const Navbar = () => {
  return (
    <Box
      bgcolor="#000"
      height="100px"
      width="100%"
      padding="0px 32px"
      boxSizing="border-box"
      display="flex"
      alignItems="center"
    >
      <Box
        width="100%"
        display="flex"
        justifyContent="space-between"
        alignItems="center"
      >
        <Typography>Black Diasporer</Typography>
        <Box display="flex" justifyContent="space-between" alignItems="center">
          {routes.map((route) => (
            <Link key={route.name} href={route.href}>
              <Typography mr="96px" textTransform="uppercase">
                {route.name}
              </Typography>
            </Link>
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default Navbar;
