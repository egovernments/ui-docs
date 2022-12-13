import React, { useState } from "react";
import { Header, RadioButtons } from "@egovernments/digit-ui-react-components";
import RadioImg from "../../assets/img/all_fresh/Radio.png"

const isMobile = window.innerWidth < 768;
const Radio = () => {
  const [selectedOption, setSelectedOption] = useState();
    const name = ['hello', 'world']

    const handleSelect =(e)=>{
      setSelectedOption(e)
    }
  return (
    <div className="md:w-5/6 w-full mb-60" style={isMobile ? {width: "200%"} : {}}>
      <div className="mb-4">
        <Header>Radio</Header>
      </div>
      <div className="pb-4">
        <h2 className="2xl:text-2xl xl:text-2xl md:text-xl sm:text-sm font-bold">Overview</h2>
        <p className="md:text-xs lg:text-sm 2xl:text-base">
          {`Lorem ipsum <RadioButtons options ={name} /> dolor sit, amet consectetur adipisicing elit. Repudiandae delectus pariatur doloremque a accusamus debitis deleniti facilis ex non nobis neque quis sunt quam molestiae iusto molestias dignissimos, dolorem fugit.`}
        </p>
        <RadioButtons options ={name} onSelect={handleSelect} selectedOption={selectedOption} />
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
      <div className="pb-4">
        <h2 className="sm:text-lg font-bold">How to Apply</h2>
        <ul className="list-disc list-inside">
            <li className="md:text-xs lg:text-sm 2xl:text-base">Lorem ipsum dolor sit amet consectetur adipisicing. tempore omnis! Iure?</li>
            <li className="md:text-xs lg:text-sm 2xl:text-base">Lorem ipsum dolor sit amet consectetur adipisicing. tempore omnis! Iure?</li>
            <li className="md:text-xs lg:text-sm 2xl:text-base">Lorem ipsum dolor sit amet consectetur adipisicing. tempore omnis! Iure?</li>
        </ul>
      </div>
    </div>
  );
};

export default Radio;
