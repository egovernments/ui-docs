import { Card, CardCaption, CardHeader, CardLabel, CardText, Header } from "@egovernments/digit-ui-react-components";
import React from "react";

const isMobile = window.innerWidth < 768;
const Cards = () => {
  return (
    <div className="md:w-5/6 w-full mb-60" style={isMobile ? {width: "200%"} : {}}>
      <div className="pb-2">
        <Header>Cards</Header>
      </div>
      <div className="pb-4"> 
        <h2 className="2xl:text-2xl xl:text-2xl md:text-xl sm:text-sm font-bold">Overview</h2>
        <p className="md:text-xs lg:text-sm 2xl:text-base">
         {`<Card>Card</Card> `} Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium voluptates quaerat officiis architecto nam repudiandae veniam in ipsam, repellendus accusantium cumque nostrum id officia aliquam dolore vitae expedita adipisci animi.
        </p>
      </div>
      <div>
        <Card>
          <CardHeader>This is card Header</CardHeader>
          <CardText>This is Card Text</CardText>
          <CardLabel>This is Card Label</CardLabel>
          <CardCaption>This is Card Caption</CardCaption>
        </Card>
      </div>
      <div className="pb-4">
        <h2 className="sm:text-lg font-bold">When to Apply</h2>
        <p className="md:text-xs lg:text-sm 2xl:text-base">
          adipisicing elit. Quaerat, quae. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repudiandae delectus pariatur doloremque a accusamus debitis.
        </p>
      </div>
      <div className="pb-4">
        <h2 className="sm:text-lg font-bold">When not to Apply</h2>
        <p className="md:text-xs lg:text-sm 2xl:text-base">
          adipisicing elit. Quaerat, quae Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus inventore dolores excepturi fuga nemo nesciunt tempore commodi pariatur eaque tenetur, itaque error odio architecto quae quidem labore nobis, illum alias?. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repudiandae delectus pariatur doloremque a accusamus debitis.
        </p>
      </div>
    </div>
  );
};

export default Cards;
