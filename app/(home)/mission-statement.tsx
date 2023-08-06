import { paddingDefault } from "@/constants";
import { Box, Typography } from "@mui/material";
import React from "react";

interface MissionPillar {
  pillar: string;
  description: string;
}

const missionPillars: MissionPillar[] = [
  {
    pillar: "Story-Telling",
    description:
      "The diaspora abounds with vibrance and culture that is seldom spotlighted in traditional travel content. The stories that do get told tend to overly-focus on the negative. Such narratives unfairly stigmatize whole communities and stiffen potential. The diaspora is full of good, talented and beautiful human beings whose stories deserve to be told. There is a such a need to shift the narrative and this project intends to do so.",
  },
  {
    pillar: "Authentic Connection",
    description:
      "So much of travel content is focused on entertainment and consumerism. As the tag line implies--Connecting Across Continents—our project is rooted in forging ties and building community across the many destinations we have the privilege of visiting. As opposed to showcasing luxury resorts and overly visited tourist zones, we spotlight the humans that make up the vibrant communities of the Diaspora. ",
  },
  {
    pillar: "Mission-Driven",
    description:
      "Beyond just sharing content for the sake of entertainment, I intend to use this platform to generate much-needed resources and opportunity in the different communities I visit. Black folks from first world countries like the US, have such potential to pool our resources, invest and improve the lives and conditions of our counterparts in other parts of the diaspora. Additionally, this project transcends race and we invite people of all colors and cultures to join in and support our work. ",
  },
];

const MissionStatement = () => {
  return (
    <Box minHeight="100vh" bgcolor="#1a1a1a" padding={paddingDefault}>
      <Typography variant="h3" align="center">
        THE MISSION
      </Typography>
      <Typography
        variant="body1"
        mt="24px"
        borderBottom="1px solid #FFF"
        paddingBottom="24px"
      >
        Black Diasporer is a project that aims to forge connections among the
        different peoples and parts of the global black diaspora. It is a
        platform for shifting narratives through positive content, giving space
        and voice to communities that are too often stigmatized and
        invisibilized. Ultimately, the goal is to leverage story-telling and
        cultural exchange as a means to generate resources and opportunity in
        marginalized communities that need them the most.
      </Typography>
      <Typography variant="h4" align="center" marginTop="24px">
        MUCH MORE THAN A TRAVEL VLOG
      </Typography>
      <Box display="flex" justifyContent="space-between" padding="12px 0px">
        {missionPillars.map((pillar) => (
          <Box
            key={pillar.pillar}
            // border="1px dashed white"
            width="30%"
            padding="12px 0px"
          >
            <Typography
              variant="h5"
              align="center"
              textTransform="uppercase"
              fontWeight="bold"
            >
              {pillar.pillar}
            </Typography>
            <Box padding="12px 0px">
              <Typography variant="body1">{pillar.description}</Typography>
            </Box>
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default MissionStatement;
