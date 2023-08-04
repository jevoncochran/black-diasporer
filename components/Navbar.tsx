import React from "react";
import { Box, Typography } from "@mui/material";
import Link from "next/link";
import Image from "next/image";

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
      padding="0px 86px"
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
        <Box
          position="relative"
          width="180px"
          height="84px"
          display="flex"
          justifyContent="flex-start"
        >
          <Image
            fill
            objectFit="contain"
            alt="Black Diasporer logo"
            src="/black_diasporer_logo.png"
            style={{ left: 0 }}
          />
        </Box>
        <Box
          width="45%"
          display="flex"
          justifyContent="space-between"
          alignItems="center"
        >
          {routes.map((route) => (
            <Link key={route.name} href={route.href}>
              <Typography textTransform="uppercase">{route.name}</Typography>
            </Link>
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default Navbar;
