import React from 'react';
import { Header,Card } from "@egovernments/digit-ui-react-components";
import BrandingImgOne from "../../assets/img/brand/Branding1.png"
import BrandingImgTwo from "../../assets/img/brand/Branding2.png"
import BrandingImgThree from "../../assets/img/brand/Branding3.png"

const isMobile = window.innerWidth < 768;
const Branding = () => {
  return (
      <div className="md:w-5/6 w-full mb-60" style={isMobile ? {width: "200%"} : {}}>
        <div className='mb-4' >
          <Header>Branding</Header>
        </div>
        <br />
        <h1 className="sm:text-2xl font-bold">Product and Platform Manifestation</h1>
        <br />
        <h2 className='font-bold text-gray-500'>If State does not own a Brand</h2>
        <Card className="py-4">
        <img  src={BrandingImgOne} alt="branding" />
        </Card>
        
        <h2 className='font-bold text-gray-500'>If State owns a Brand</h2>
        <Card className="py-4">
        <img  src={BrandingImgTwo} alt="branding" />
        </Card>

        <h2 className='font-bold text-gray-500'>Administrators & National</h2>
        <Card className="py-4">
        <img className='h-20 w-40' src={BrandingImgThree} alt="branding" />
        </Card>

        <h2 className='font-bold text-gray-500'>Products and Documentation</h2>

        
          <p className="py-4">
            As we enable the ecosystem to provide solutions to solve societal challenges, we are building on <br/> PRODUCTS. To maintain consistency in the terminology, Use DIGIT - Product name across all communication.<br/> 
            For instance, DIGIT - Property Tax, DIGIT - Trade License
          </p>
        
      </div>
  );
};

export default Branding;
