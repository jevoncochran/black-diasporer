import React from "react";
import Image from "next/image";
import { Box } from "@mui/material";
import { Barlow_Condensed } from "next/font/google";

const barlow = Barlow_Condensed({
  subsets: ["latin"],
  weight: "500",
  preload: false,
});

const Billboard = () => {
  return (
    <Box
      height="calc(100vh - 100px)"
      position="relative"
      bgcolor="#000"
      display="flex"
      justifyContent="center"
      alignItems="center"
      className={barlow.className}
    >
      <Image
        fill
        alt="Black Diasporer"
        src="/black_diasporer_w_choco_kids.jpg"
        objectFit="cover"
        style={{ opacity: "70%" }}
      />
      <Box
        height="200px"
        zIndex={1}
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="space-between"
      >
        <h2
          className={barlow.className}
          style={{ fontSize: "64px", fontWeight: 700, zIndex: 1 }}
        >
          CONNECTING
        </h2>
        <h2
          className={barlow.className}
          style={{ fontSize: "64px", zIndex: 1, letterSpacing: "8px" }}
        >
          - across -
        </h2>
        <h2
          className={barlow.className}
          style={{ fontSize: "64px", fontWeight: 700, zIndex: 1 }}
        >
          CONTINENTS
        </h2>
      </Box>
    </Box>
  );
};

export default Billboard;
