import React from "react";
import Card from "../common/Card";
import ColorsIcon from "../../assets/img/foundations/colors.png";
import TypoIcon from "../../assets/img/foundations/typo.png";
import IconoIcon from "../../assets/img/foundations/icono.png";
import AccessibilityIcon from "../../assets/img/foundations/Accessibility.png"
import { Header } from "@egovernments/digit-ui-react-components";
import arrowSign from "../../assets/img/arrow.png";
import { Link } from "react-router-dom";

const isMobile = window.innerWidth < 1024;
const FoundationsPage = () => {
  const CardData = [
    {
      id: 1,
      heading: "Colors",
      Image: ColorsIcon,
      para: "Color distinguishes our brand and helps us create consistent experiences across products.",
      linkItem: "Explore",
      link: "/ui-docs/foundations/colors",
    },
    {
      id: 2,
      heading: "Typography",
      Image: TypoIcon,
      para: "Typography is our system of fonts. Each font conveys the appropriate sentiment to assist our users through each stage of their journey.",
      linkItem: "Explore",
      link: "/ui-docs/foundations/typography",
    },
    {
      id: 3,
      heading: "Iconography",
      Image: IconoIcon,
      para: "Icons are visual representations of commands, devices, directories, or common actions.",
      linkItem: "Explore",
      link: "/ui-docs/foundations/iconography",
    },
    {
      id: 4,
      heading: "Accessibility",
      Image: AccessibilityIcon,
      para: "Accessible design lets people of all abilities interact with, understand, and navigate our product.",
      linkItem: "Explore",
      link: "/ui-docs/foundations/accessibility",
    }

  ];
  return (
    <div className="md:w-5/6 w-full mb-60" style={ isMobile? {maxWidth: "200%", width: "max-content"} : {}}>
      <div className="pb-2">
        <Header>Foundations</Header>
      </div>
      <div className="sm:w-3/5 w-full pb-4">
        <p className="md:text-xs lg:text-sm 2xl:text-base py-2">
          "Keep it Simple" is the central theme guiding the DIGIT platform
          design principles. Learn more about the key principles underlying the
          DIGIT design system.
        </p>
      </div>
      <div className="grid md:grid-cols-2 grid-cols-1 gap-4">
        {CardData.map((item) => {
          return (
            <Card key={item.id}>
              <div className="p-8 flex">
                <img style={{width:"64px"}} src={item.Image} alt={item.heading}/>
                <div className="pl-4">
                  <h2 className="py-3 2xl:text-2xl sm:text-xl">
                    {item.heading}
                  </h2>
                  <p className="md:text-xs lg:text-sm 2xl:text-base">
                    {item.para}
                  </p>
                  <Link
                    to={item.link}
                    className="text-border xl:text-base md:text-sm sm:text-xs flex items-center"
                  >
                    {item.linkItem}{" "}
                    <span>
                      <img src={arrowSign} alt="->" className="w-4 pl-1" />
                    </span>
                  </Link>
                </div>
              </div>
            </Card>
          );
        })}
      </div>
    </div>
  );
};

export default FoundationsPage;
