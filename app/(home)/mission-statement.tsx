import { paddingDefault } from "@/constants";
import { Box, Typography } from "@mui/material";
import React from "react";

const MissionStatement = () => {
  return (
    <Box minHeight="100vh" bgcolor="#1a1a1a" padding={paddingDefault}>
      <Typography align="center">THE MISSION</Typography>
      <Typography mt="24px">
        Black Diasporer is a project that aims to forge connections among the
        different peoples and parts of the global black diaspora. It is a
        platform for shifting narratives through positive content, giving space
        and voice to communities that are too often stigmatized and
        invisibilized. Ultimately, the goal is leverage story-telling and
        cultural exchange as a means to generate resources and opportunity in
        marginalized communities that need them the most.
      </Typography>
    </Box>
  );
};

export default MissionStatement;
