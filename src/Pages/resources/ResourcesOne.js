import React from 'react';
import { Header } from '@egovernments/digit-ui-react-components';
import { Link } from 'react-router-dom';
import arrowSign from '../../assets/img/arrow.png';
import GitIcon from '../../assets/img/Resources/GitIcon.png';
import FigmaIcon from '../../assets/img/Resources/FigmaIcon.png';
import Card from '../../Components/common/Card';
const isMobile = window.innerWidth < 1024;
const ResourcesOne = () => {
  const CardData = [
    {
      id: 1,
      heading: 'Github',
      Image: GitIcon,
      para: 'Open Source Urban Governance Digital Platform for Public Good',
      linkItem: 'Explore',
      link: '//github.com/egovernments/DIGIT-OSS/tree/master/frontend/micro-ui',
    },
    {
      id: 2,
      heading: 'Figma',
      Image: FigmaIcon,
      para: 'This is a collection of styles, components and patterns for DIGIT Design System',
      linkItem: 'Explore',
      link: '//figma.com/file/MSZGHqbUfFxM1DMTYQaD8V/Digit-Design-System?node-id=0%3A1&t=M8Q9bjnfWOi0Fl6S-1',
    },
  ];
  return (
    <div
      className="md:w-5/6 w-full mb-60"
      style={isMobile ? { maxWidth: '200%', width: 'max-content' } : {}}
    >
      <div className="pb-2">
        <Header>Resources</Header>
      </div>
      <div className="grid md:grid-cols-2 grid-cols-1 gap-4">
        {CardData.map((item) => {
          return (
            <Card key={item.id}>
              <div className="p-8 flex">
                <img
                  style={{ width: '64px' }}
                  src={item.Image}
                  alt={item.heading}
                />
                <div className="pl-4">
                  <h2 className="py-3 2xl:text-2xl sm:text-xl">
                    {item.heading}
                  </h2>
                  <p className="md:text-xs lg:text-sm 2xl:text-base">
                    {item.para}
                  </p>
                  <Link
                    to={item.link}
                    className="text-border xl:text-base md:text-sm sm:text-xs flex items-center "
                    target="_blank"
                  >
                    {item.linkItem}{' '}
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
export default ResourcesOne;
