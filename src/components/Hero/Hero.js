import React, { useEffect } from "react";
import {
  Section,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";
import Button from "../../styles/GlobalComponents/Button";
import { LeftSection } from "./HeroStyles";
import TypeIt from "typeit"; // Import TypeIt

const Hero = () => {
  useEffect(() => {
    new TypeIt("#typeit-title", {
      strings: ["Portfolio Welcome"],
      speed: 50,
    })
      .pause(1000)
      .delete(7)
      .go();
  }, []);

  return (
    <Section row nopadding>
      <LeftSection>
        <SectionTitle main center id="typeit-title">
          <span>DGitial</span>
        </SectionTitle>
        <SectionText>
          Hope you get the required information you need, looking forward to
          your reach out and collaborations.
        </SectionText>
        <Button onClick={() => (window.location = "https://google.com")}>
          Learn More
        </Button>
      </LeftSection>
    </Section>
  );
};

export default Hero;
