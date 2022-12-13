import { Banner, Header } from "@egovernments/digit-ui-react-components";
import React from "react";

const isMobile = window.innerWidth < 768;
const Banners = () => {
  return (
    <div className="md:w-5/6 w-full mb-60" style={isMobile ? {width: "200%"} : {}}>
      <div className="pb-2">
        <Header>Banner</Header>
      </div>
      <div className="pb-4">
        <h2 className="2xl:text-2xl xl:text-2xl md:text-xl sm:text-sm font-bold">Overview</h2>
        <p className="md:text-xs lg:text-sm 2xl:text-base">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium
          voluptates quaerat officiis architecto nam repudiandae veniam in
          ipsam, repellendus accusantium cumque nostrum id officia aliquam
          dolore vitae expedita adipisci animi.
        </p>
      </div>
      <div className="pb-4">
        <Banner
          svg={
            <svg
              className="payment-svg"
              xmlns="http://www.w3.org/2000/svg"
              width="40"
              height="40"
              viewBox="0 0 40 40"
              fill="none"
            >
              <path
                d="M20 0C8.96 0 0 8.96 0 20C0 31.04 8.96 40 20 40C31.04 40 40 31.04 40 20C40 8.96 31.04 0 20 0ZM16 30L6 20L8.82 17.18L16 24.34L31.18 9.16L34 12L16 30Z"
                fill="white"
              />
            </svg>
          }
          message="CS_COMMON_PAYMENT_COMPLETE"
          info="CS_COMMON_RECIEPT_NO"
          successful={true}
        />
      </div>
      <div className="pb-4">
        <h2 className="sm:text-lg font-bold">When to Apply</h2>
        <p className="md:text-xs lg:text-sm 2xl:text-base">
          adipisicing elit. Quaerat, quae. Lorem ipsum dolor sit, amet
          consectetur adipisicing elit. Repudiandae delectus pariatur doloremque
          a accusamus debitis.
        </p>
      </div>
      <div className="pb-4">
        <h2 className="sm:text-lg font-bold">When not to Apply</h2>
        <p className="md:text-xs lg:text-sm 2xl:text-base">
          adipisicing elit. Quaerat, quae Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Voluptatibus inventore dolores excepturi fuga nemo
          nesciunt tempore commodi pariatur eaque tenetur, itaque error odio
          architecto quae quidem labore nobis, illum alias?. Lorem ipsum dolor
          sit, amet consectetur adipisicing elit. Repudiandae delectus pariatur
          doloremque a accusamus debitis.
        </p>
      </div>
      <div className="pb-4">
        <h2 className="sm:text-lg font-bold">How to Apply</h2>
        <ul className="list-disc list-inside">
          <li className="md:text-xs lg:text-sm 2xl:text-base">
            Lorem ipsum dolor sit amet consectetur adipisicing. tempore omnis!
            Iure?
          </li>
          <li className="md:text-xs lg:text-sm 2xl:text-base">
            Lorem ipsum dolor sit amet consectetur adipisicing. tempore omnis!
            Iure?
          </li>
          <li className="md:text-xs lg:text-sm 2xl:text-base">
            Lorem ipsum dolor sit amet consectetur adipisicing. tempore omnis!
            Iure?
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Banners;
