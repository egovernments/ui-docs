import { Header } from "@egovernments/digit-ui-react-components";
import React from "react";

const isMobile = window.innerWidth < 768;
const Content = () => {
  return (
    <div className="md:w-5/6 w-full mb-60" style={isMobile ? {width: "125%"} : {}}>
      <div className="mb-4">
        <Header className="pl-0">Content</Header>
      </div>
      <div className="pb-4">
        <h2 className="sm:text-xl font-bold">Overview</h2>
        <p className="md:text-xs lg:text-sm 2xl:text-base py-2">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iure reiciendis dicta voluptatum amet error corporis delectus accusamus nesciunt magnam fuga, asperiores mollitia, possimus eos ducimus numquam architecto est totam autem?
        </p>
        <p className="md:text-xs lg:text-sm 2xl:text-base py-2">
        Lorem ipsum dolor Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rem modi necessitatibus velit delectus asperiores totam deleniti quia id placeat incidunt., sit amet consectetur adipisicing elit. Iure reiciendis dicta voluptatum amet error corporis delectus accusamus nesciunt magnam fuga, asperiores mollitia, possimus eos ducimus numquam architecto est totam autem?
        </p>
        <p className="md:text-xs lg:text-sm 2xl:text-base py-2">
        Lorem ipsum dolor, sit amet error corporis delectus accusamus nesciunt magnam fuga, asperiores mollitia, possimus eos ducimus numquam architecto est totam autem?
        </p>
        <p className="md:text-xs lg:text-sm 2xl:text-base py-2">
        Lorem Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident unde nihil fugiat nobis distinctio culpa atque repellat rem dolores enim. Suscipit corrupti sequi voluptatibus reiciendis, atque aliquam perferendis omnis dolor? ipsum dolor, sit amet consectetur adipisicing elit. Iure reiciendis dicta voluptatum amet error corporis delectus accusamus nesciunt magnam fuga, asperiores mollitia, possimus eos ducimus numquam architecto est totam autem?
        </p>
        <p className="md:text-xs lg:text-sm 2xl:text-base py-2">
        Lorem ipsum Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus, id. dolor, sit amet consectetur adipisicing elit. Iure reiciendis dicta voluptatum amet error corporis delectus accusamus nesciunt magnam fuga, asperiores mollitia, possimus eos ducimus numquam architecto est totam autem?
        </p>
      </div>
    </div>
  );
};

export default Content;
