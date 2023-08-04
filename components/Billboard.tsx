import React from "react";
import Image from "next/image";
import { Box } from "@mui/material";

const Billboard = () => {
  return (
    <Box height="calc(100vh - 100px)" position="relative">
      <Image
        fill
        alt="Black Diasporer"
        src="/black_diasporer_w_choco_kids.jpg"
        objectFit="cover"
      />
    </Box>
  );
};

export default Billboard;
