import { paddingDefault, testBorder } from "@/constants";
import { Box, Typography } from "@mui/material";
import Image from "next/image";

const AboutPage = () => {
  return (
    <Box
      bgcolor="#1a1a1a"
      minHeight="calc(100vh - 100px)"
      padding={paddingDefault}
    >
      <Box
        width="100%"
        display="flex"
        justifyContent="space-between"
        padding="24px 0px"
      >
        <Box position="relative" width="50%">
          <Image
            fill
            objectFit="contain"
            alt="Jevon Cochran, Black Diasporer"
            src="/jevon_cochran_detroit.jpg"
          />
        </Box>
        <Box width="50%">
          <Typography variant="h3" textAlign="center">
            ABOUT
          </Typography>
          <Typography mt="24px">
            A few days into my first trip abroad as adult, I remember excitedly
            Skyping my mother to tell her about my visit to the Afro-Brazilian
            Museum in São Paulo, Brazil. Before I could get into my story, she
            unexpectedly Interrupted. I will never forget her questions: There
            are blacks in Brazil? But are they real black people? Is their hair
            like ours? Often in my travels outside of the US, black people from
            the places I visit tell me that I am the first black American
            they’ve ever met. Similar to my mother’s confusion, some are even
            surprised to learn that there are black people in the US at all.
          </Typography>
          <Typography mt="12px">
            Such disconnect is understandable given the low rates at which black
            people travel internationally. Comparatively, black Americans seldom
            venture outside the US and when we do, it’s usually to resorts and
            tourist traps where genuine connection and interaction with local
            culture is limited.
          </Typography>
          <Typography mt="12px">
            For me, the most disheartening part of this reality is knowing how
            it is tied to the enslavement of our people. It is widely known that
            as a tactic of control, the perpetrators of slavery attempted to
            destroy our culture, language and ties to one another.
          </Typography>
          <Typography mt="12px">
            With that realization, Black Diasporer is an attempt to push back
            against the lingering effects of that history and forge present-day
            connections between black peoples across the diaspora. This blog is
            about discovery, resistance, and shifting narratives. It is a
            personal journey that I am feel compelled to share with all of you.
            Welcome!
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default AboutPage;
