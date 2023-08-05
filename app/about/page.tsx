import { Box, Typography } from "@mui/material";
import Image from "next/image";

const AboutPage = () => {
  return (
    <Box bgcolor="#1a1a1a" minHeight="calc(100vh - 100px)" padding="36px 86px">
      <Typography textAlign="center">ABOUT</Typography>
      <Box position="relative" width="100%" height={500}>
        <Image
          fill
          objectFit="contain"
          alt="Black Diasporer"
          src="/black_diasporer.jpg"
          style={{ marginTop: "24px" }}
        />
      </Box>
    </Box>
  );
};

export default AboutPage;
