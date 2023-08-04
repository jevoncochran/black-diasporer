import React from "react";
import { Box, Typography } from "@mui/material";
import Link from "next/link";
import Image from "next/image";
import { SocialIcon } from "react-social-icons";

interface NavRoute {
  name: string;
  href: string;
}

interface SocialLink {
  url: string;
  network: string;
  bgColor?: string;
}

const routes: NavRoute[] = [
  { name: "About", href: "/about" },
  { name: "Videos", href: "/videos" },
  { name: "Blog", href: "/blog" },
  { name: "Contact", href: "/contact" },
];

const socials: SocialLink[] = [
  {
    url: "https://instagram.com/blackdiasporer?igshid=MmIzYWVlNDQ5Yg==",
    network: "instagram",
  },
  {
    url: "https://www.facebook.com/profile.php?id=100070851596684",
    network: "facebook",
  },
  {
    url: "https://www.youtube.com/channel/UC3xsE8Sd2KJs5Scb-ttms2w",
    network: "youtube",
  },
  {
    url: "https://www.tiktok.com/@blackdiasporer?_t=8eZPzg96L7V&_r=1",
    network: "tiktok",
    bgColor: "#FFF",
  },
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
        <Link href="/">
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
        </Link>
        <Box
          width="30%"
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
        <Box
          width="11%"
          display="flex"
          justifyContent="space-between"
          alignItems="center"
        >
          {socials.map((social) => (
            <SocialIcon
              url={social.url}
              network={social.network}
              bgColor={social.bgColor}
              style={{ height: 30, width: 30 }}
            />
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default Navbar;
