import {
  ButtonSelector,
  DisplayPhotos,
  Header,
  ImageViewer,
} from "@egovernments/digit-ui-react-components";
import React, { useState } from "react";
import imageZoom from "../../assets/img/banner.png";

const Photots = [
    {
        Images : `https://randomwordgenerator.com/img/picture-generator/5ee6d1454b53b10ff3d8992cc12c30771037dbf85254794e722679d49445_640.jpg`,
    },
    {
        Images : `https://randomwordgenerator.com/img/picture-generator/55e3d1404351ab14f1dc8460962e33791c3ad6e04e507440762a7cd49348cc_640.jpg`,
    },
    {
        Images : `https://randomwordgenerator.com/img/picture-generator/57e0d1444250a414f1dc8460962e33791c3ad6e04e50744077297bd59445c2_640.jpg`,
    },
]

const handleDisplayPhotos =()=>{
    console.log("Hellooo")
}

const ImageViewers = () => {
  const [imageZoomShow, setImageZoomShow] = useState(false);
  const isMobile = window.innerWidth < 768;
  const handleClick = () => {
    setImageZoomShow(true);
  };
  const onCloseImageZoom = () => {
    setImageZoomShow(null);
  };
  return (
    <div className="md:w-5/6 w-full mb-60" style={isMobile ? {width: "200%"} : {}}>
      <div className="mb-4">
        <Header>Image Viewer</Header>
      </div>
      <div className="pb-4">
        <h2 className="2xl:text-2xl xl:text-2xl md:text-xl sm:text-sm font-bold">Overview</h2>
        <p className="md:text-xs lg:text-sm 2xl:text-base">
          {`Lorem ipsum <ImageViewer imageSrc={imageZoom} onClose={onCloseImageZoom} /> dolor sit, amet consectetur adipisicing elit. Repudiandae delectus pariatur doloremque a accusamus debitis deleniti facilis ex non nobis neque quis sunt quam molestiae iusto molestias dignissimos, dolorem fugit.`}
        </p>
        <div className="py-2">
          {imageZoomShow && (
            <ImageViewer imageSrc={imageZoom} onClose={onCloseImageZoom} />
          )}
          <ButtonSelector
            label="Click"
            onSubmit={handleClick}
          />
        </div>
      </div>
      <div className="mb-4">
        <Header>Display Photos</Header>
      </div>
      <div className="pb-4">
        <h2 className="sm:text-xl font-bold">Overview</h2>
        <p className="md:text-xs lg:text-sm 2xl:text-base">
          {`Lorem ipsum <DisplayPhotos srcs={Photots.map(img=> img.Images)} onClick={handleDisplayPhotos} /> dolor sit, amet consectetur adipisicing elit. Repudiandae delectus pariatur doloremque a accusamus debitis deleniti facilis ex non nobis neque quis sunt quam molestiae iusto molestias dignissimos, dolorem fugit.`}
        </p>
        <div className="py-2">
        <DisplayPhotos srcs={Photots.map(img=>img.Images)} onClick={handleDisplayPhotos} />
        </div>
      </div>
    </div>
  );
};

export default ImageViewers;
