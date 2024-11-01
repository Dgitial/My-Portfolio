import React from "react";
import styled from "styled-components";
import {
  BlogCard,
  CardInfo,
  ExternalLinks,
  GridContainer,
  HeaderThree,
  Hr,
  Tag,
  TagList,
  TitleContent,
  UtilityList,
  Img,
} from "./ProjectsStyles";
import {
  Section,
  SectionDivider,
  SectionTitle,
} from "../../styles/GlobalComponents";
import { projects } from "../../constants/constants";
import Button from "../../styles/GlobalComponents/Button";

const CustomButton = styled(Button)`
  background: linear-gradient(270deg, #00dbd8 0%, #b133ff 100%);
  width: 1rem;
  height: 1rem;
  font-size: 0.2rem;
  padding: 12px 24px;
  &:hover {
    background: linear-gradient(270deg, #00f5e5 0%, #c966ff 100%);
  }
`;
const ButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
`;

const Projects = () => (
  <Section nopadding id="projects">
    <SectionDivider />
    <SectionTitle main>Projects</SectionTitle>
    <GridContainer>
      {projects.map(
        ({ id, image, title, description, tags, source, visit }) => (
          <BlogCard key={id}>
            <Img src={image} alt="" />
            <TitleContent>
              <HeaderThree title>{title}</HeaderThree>
              <Hr />
            </TitleContent>
            <CardInfo>{description}</CardInfo>
            <div>
              <TitleContent>Stack</TitleContent>
              <TagList>
                {tags.map((tag, i) => (
                  <Tag key={i}>{tag}</Tag>
                ))}
              </TagList>
            </div>
            <UtilityList>
              <ExternalLinks href={visit}>Code</ExternalLinks>
              <ExternalLinks href={source}>Source</ExternalLinks>
            </UtilityList>
          </BlogCard>
        )
      )}
    </GridContainer>
    {/* Use CustomButton with custom styles */}
    <ButtonContainer>
      <CustomButton
        alt={true}
        onClick={() => (window.location = "https://github.com/Dgitial")}
      >
        And More
      </CustomButton>
    </ButtonContainer>
  </Section>
);

export default Projects;
