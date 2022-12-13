import {
  Dropdown,
  Header,
  MultiSelectDropdown,
  SectionalDropdown,
} from "@egovernments/digit-ui-react-components";
import React, { useState } from "react";

const DropDowns = () => {
  const [selected, setSelected] = useState();

  const cityDataNew = [
    {
      city: "Lucknow",
    },
    {
      city: "Kanpur",
    },
    {
      city: "Aligarh",
    },
  ];

  const cityName = [
    {
      city: "Lucknow",
    },
    {
      city: "Kanpur",
    },
    {
      city: "Aligarh",
    },
  ];

 const cityData = [{heading:"head 1",options:[{city:"a"}]},{heading:"head 2",options:[{city:"b"}]}]

 const selectedDropDown = (e, option) => {
  // const { checked } = e?.target;
  // if (checked)
  // setSelected(
  //     ulbTenants.ulb
  //       .filter((ulb) => ulb.ddrKey === data.ddrKey)
  //       .map((ulb) => ulb.code)
  //   );
  // else
  //   removeULB(
  //     ulbTenants.ulb
  //       .filter((ulb) => ulb.ddrKey === data.ddrKey)
  //       .map((ulb) => ulb.code)
  //   );
  setSelected(option);
  console.log(e, option);
};
const isMobile = window.innerWidth < 768;

 
  const onSelectEmployee = () => {
    console.log("Hello");
  };
  return (
    <div className="md:w-5/6 w-full mb-60" style={isMobile ? {width: "200%"} : {}}>
      <div className="mb-4">
        <Header>Drop Down</Header>
      </div>
      <div className="pb-4">
        <h2 className="2xl:text-2xl xl:text-2xl md:text-xl sm:text-sm font-bold">Overview</h2>
        <p className="md:text-xs lg:text-sm 2xl:text-base">
          {`Lorem ipsum <DropDown /> dolor sit, amet consectetur adipisicing elit. Repudiandae delectus pariatur doloremque a accusamus debitis deleniti facilis ex non nobis neque quis sunt quam molestiae iusto molestias dignissimos, dolorem fugit.`}
        </p>
      </div>
      <Dropdown option={cityDataNew} optionKey="city"  />
      <div className="mb-4">
        <Header>Sectional DropDown</Header>
      </div>
      <div className="pb-4">
        <SectionalDropdown
          selected="selectedEmployee"
          menuData={cityData}
          displayKey="city"
          select={onSelectEmployee} 
        />
      </div>
      <div className="pb-4">
        <Header>Multi Selector</Header>
        <MultiSelectDropdown
          className="form-field"
          isMandatory={true}
          defaultUnit="Selected"
          options={cityName}
          optionsKey="city"
          onSelect={selectedDropDown}
          selected={selected}
        />
      </div>
    </div>
  );
};

export default DropDowns;
