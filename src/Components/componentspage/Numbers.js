import { Header, Label, MobileNumber, OTPInput } from "@egovernments/digit-ui-react-components";
import React, { useState } from "react";

const Numbers = () => {

    const [otp, setOtp] = useState("");
    const isMobile = window.innerWidth < 768;

    const onOtpChange =(e)=>{
      setOtp(e)
      console.log(e)
    }
  return (
    <div className="md:w-5/6 w-full mb-60" style={isMobile ? {width: "200%"} : {}}>
      <div className="mb-4">
        <Header>Number</Header>
      </div>
      <div className="pb-4">
        <h2 className="2xl:text-2xl xl:text-2xl md:text-xl sm:text-sm font-bold">Overview</h2>
        <p className="md:text-xs lg:text-sm 2xl:text-base">
          {`Lorem ipsum <MobileNumber name="numebr" value={number} onChange={(e)=>handleMobileNumber(e)} /> dolor sit, amet consectetur adipisicing elit. Repudiandae delectus pariatur doloremque a accusamus debitis deleniti facilis ex non nobis neque quis sunt quam molestiae iusto molestias dignissimos, dolorem fugit.`}
        </p>
      </div>
      <form>
          <Label>Number</Label>
          <MobileNumber name="numebr"  />
      </form>
      <div className="mb-4">
        <Header>OTP</Header>
      </div>
      <div className="pb-4">
        <h2 className="sm:text-xl font-bold">Overview</h2>
        <p className="md:text-xs lg:text-sm 2xl:text-base">
          {`Lorem ipsum <Header>Header</Header> dolor sit, amet consectetur adipisicing elit. Repudiandae delectus pariatur doloremque a accusamus debitis deleniti facilis ex non nobis neque quis sunt quam molestiae iusto molestias dignissimos, dolorem fugit.`}
        </p>
      </div>
      <form>
          <Label>Enter otp</Label>
          <OTPInput length={6} onChange={onOtpChange} value={otp} />
      </form>
    </div>
  );
};

export default Numbers;
