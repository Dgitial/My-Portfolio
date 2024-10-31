import React from "react";
import {
  DiCssTricks,
  DiFirebase,
  DiGithubBadge,
  DiJavascript,
  DiPhp,
  DiReact,
  DiZend,
} from "react-icons/di";
import {
  Section,
  SectionDivider,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";
import {
  List,
  ListContainer,
  ListItem,
  ListParagraph,
  ListTitle,
} from "./TechnologiesStyles";

const Technologies = () => (
  <Section id="tech">
    <SectionDivider />
    <br />
    <SectionTitle>Technologies</SectionTitle>
    <SectionText>
      I've worked with a vast amount of technologies in web development and my
      technicality in understanding this tech is one my strongest suit
    </SectionText>
    <List>
      <ListItem>
        <DiPhp size="3rem" />
        <ListContainer>
          <ListTitle>Front-End/Back-End</ListTitle>
          <ListParagraph>
            Database Management with PHP <br />
            with responsive Front-End.
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <DiFirebase size="3rem" />
        <ListContainer>
          <ListTitle>Cloud Database</ListTitle>
          <ListParagraph>Database storage with cloud</ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <DiJavascript size="3rem" />
        <ListContainer>
          <ListTitle>Web Dynamics/Node.js</ListTitle>
          <ListParagraph>
            Using JavaScript to effectively manipulate DOM <br />
            and package with Node.js.
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <DiGithubBadge size="3rem" />
        <ListContainer>
          <ListTitle>Merge and collaborations</ListTitle>
          <ListParagraph>Effective adapt with projects.</ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <DiCssTricks size="3rem" />
        <ListContainer>
          <ListTitle>UI/UX</ListTitle>
          <ListParagraph>
            Experience with
            <br />
            tools like Figma/Canva.
          </ListParagraph>
        </ListContainer>
      </ListItem>
    </List>
  </Section>
);

export default Technologies;
