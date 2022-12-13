import { Header } from "@egovernments/digit-ui-react-components";
import React from "react";

const isMobile = window.innerWidth < 768;
const Mission = () => {
  return (
    <div className="md:w-5/6 w-full mb-60" style={isMobile ? {width: "125%"} : {}}>
      <div className="mb-4">
        <Header>Mission</Header>
      </div>
      <div className="pb-4">
        <h2 className="sm:text-xl font-bold">Overview</h2>
        <p className="md:text-xs lg:text-sm 2xl:text-base py-2">
          Lorem Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Aspernatur nam vero fuga perspiciatis temporibus voluptatum unde
          excepturi assumenda blanditiis? Iusto consectetur non facilis sunt
          amet magni tenetur qui quo numquam. ipsum dolor sit amet consectetur
          adipisicing elit. Voluptas, neque eum, voluptate voluptatum qui
          voluptatibus, quo suscipit repellendus dolorum ab non blanditiis?
          Magnam necessitatibus itaque omnis reiciendis soluta, debitis nobis!
        </p>
        <p className="md:text-xs lg:text-sm 2xl:text-base py-2">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas,
          neque eum, voluptate voluptatum qui voluptatibus, quo suscipit
          repellendus dolorum ab non blanditiis? Magnam necessitatibus itaque
          omnis reiciendis soluta, debitis nobis!
        </p>
        <p className="md:text-xs lg:text-sm 2xl:text-base py-2">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas,
          neque eum, voluptate voluptatum qui voluptatibus, quo suscipit
          repellendus dolorum ab non blanditiis? Magnam necessitatibus itaque
          omnis reiciendis soluta, debitis nobis!
        </p>
        <p className="md:text-xs lg:text-sm 2xl:text-base py-2">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas,
          neque eum, voluptate voluptatum qui voluptatibus, Lorem ipsum dolor,
          sit amet consectetur adipisicing elit. Soluta cum, dignissimos
          asperiores consequatur expedita, eligendi id reiciendis rem earum
          sapiente culpa eveniet similique eum alias deleniti sequi optio non
          nihil. quo suscipit repellendus dolorum ab non blanditiis? Magnam
          necessitatibus itaque omnis reiciendis soluta, debitis nobis!
        </p>
      </div>
    </div>
  );
};

export default Mission;
