import React from "react";
import HomeCard from "../common/HomeCard";
import Container from "../common/Container";
import brandLogo from "../../assets/img/brand.png"
import foundationLogo from "../../assets/img/foundations.png"
import componnetsLogo from "../../assets/img/components.png"
import contentLogo from "../../assets/img/content.png"
import patternLogo from "../../assets/img/pattern.png"
import resourcesLogo from "../../assets/img/resources.png"

const Data = [
  {
    id: 1,
    BrandLogo: brandLogo,
    heading: "Brand",
    text: "Brand visualization is all about the consistent use of colours, patterns, and components.......",
    linkText: "Explore our Brand",
    link : '/ui-docs/brand'
  },
  {
    id: 2,
    BrandLogo: foundationLogo,
    heading: "Foundations",
    text: '"Keep it Simple" is the central theme guiding the DIGIT platform design principles....',
    linkText: "Explore our Foundations",
    link : '/ui-docs/foundations'
  },
  {
    id: 3,
    BrandLogo: componnetsLogo,
    heading: "Components",
    text: "A complete guide to use and apply the various visual components used on the DIGIT platform.....",
    linkText: "Explore our Components",
    link : '/ui-docs/components'
  },
  {
    id: 4,
    BrandLogo: contentLogo,
    heading: "Content",
    text: "Standardized content layouts, fonts, templates define the basic framework for .....",
    linkText: "Explore our Content",
    link : '/ui-docs/content'
  },
  {
    id: 5,
    BrandLogo: patternLogo,
    heading: "Patterns",
    text: "A deep dive into the patterns used across the platform, design solutions for defined....",
    linkText: "Explore our Patterns",
    link : '/ui-docs/patterns'
  },
  {
    id: 6,
    BrandLogo: resourcesLogo,
    heading: "Resources",
    text: "Access design resources, links, and media for standardized application design.....",
    linkText: "Explore our Resources",
    link : '/ui-docs/resources'
  },
];

const HomeContent = () => {
  return (
    <Container>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-8 my-16">
        {Data.map((item) => {
          return (
            <HomeCard
              key={item.id}
              brandLogo={item.BrandLogo}
              heading={item.heading}
              text={item.text}
              linkContent={item.linkText}
              link ={item.link}
            />
          );
        })}
      </div>
    </Container>
  );
};

export default HomeContent;
