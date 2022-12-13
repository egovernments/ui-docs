import React from "react";
// import { Body, TopBar } from "@egovernments/digit-ui-react-components"
import {
  AnnouncementIcon,
  ReceiptIcon,
  ArrowLeft,
  ArrowDown,
  DownloadIcon,
  Ellipsis,
  SearchIconSvg,
  Header,
} from "@egovernments/digit-ui-react-components";

import actionImg from '../../assets/img/foundations/iconography/action.jpg'
import communicationImg from '../../assets/img/foundations/iconography/communication.jpg'
import alertImg from '../../assets/img/foundations/iconography/alert.jpg'
import mapsImg from '../../assets/img/foundations/iconography/maps.jpg'
import socialImg from '../../assets/img/foundations/iconography/social.jpg'
import notificationImg from '../../assets/img/foundations/iconography/notification.jpg'
import imageImg from '../../assets/img/foundations/iconography/image.jpg'
import fileImg from '../../assets/img/foundations/iconography/file.jpg'
import contentImg from '../../assets/img/foundations/iconography/content.jpg'
import { Link } from "react-router-dom";

const isMobile = window.innerWidth < 768;
const Iconography = () => {
  return (
    <div className="md:w-5/6 w-full mb-60" style={isMobile ? {width: "200%"} : {}}>
      <div className="pb-2">
        <Header>Iconography</Header>
      </div>
      <div className="pb-4">
        <h2 className="sm:text-xl font-bold">Overview</h2>
        <p className="md:text-xs lg:text-sm 2xl:text-base">
        Icons in the DIGIT act as visual aids to help users complete tasks.  We are using the amazing     <Link 
                    to='//fonts.google.com/icons/' 
                    className="text-border xl:text-base md:text-sm sm:text-xs flex items-center "target="_blank" 
                  >  Google Material icon library </Link>
        </p>
      </div>
      {/* <div className="grid grid-cols-2 gap-4">
        <div className="py-2">
          <div className="grid grid-cols-10">
            <AnnouncementIcon />
            <ReceiptIcon />
            <ArrowLeft />
            <ArrowDown />
            <DownloadIcon />
            <Ellipsis />
          </div>
        </div>
        <div className="grid grid-cols-10">
          <SearchIconSvg />
        </div>
      </div> */}
      {/* <div className="grid grid-cols-2">
        
          <img className="object-none object-left-top" src={actionImg} alt="actions" />
          <br />
          <img className="object-none object-left" src={notificationImg} alt="actions" />
          <br />
          <img className="object-none object-left" src={socialImg} alt="actions" />
          <br />
          <img className= "object-none object-left-bottom" src={mapsImg} alt="actions" />
          <br/>
        
        
          <img className="object-none object-right-top" src={alertImg} alt="actions" />
          <br />
          <img className="object-none object-right" src={communicationImg} alt="actions" />
          <br />
          <img className="object-none object-right" src={contentImg} alt="actions" />
          <br />
          <img className="object-none object-right" src={fileImg} alt="actions" />
          <br />
          <img className="object-none object-right-bottom" src={imageImg} alt="actions" />
          <br />
        
      </div> */}
    
      {/* <div className="grid grid-cols-2">
        
          <img className="p-4 flex flex-row h-32" src={actionImg} alt="actions" />
          <img className="p-4 flex flex-row h-32" src={notificationImg} alt="actions" />
          <img className="p-4 flex flex-row h-32" src={socialImg} alt="actions" />
          <img className="p-4 flex flex-row h-32" src={mapsImg} alt="actions" />
  
          <img className="p-4 flex flex-col h-32" src={alertImg} alt="actions" />
          <img className="p-4 flex flex-col h-32" src={communicationImg} alt="actions" />
          <img className="p-4 flex flex-col h-32" src={contentImg} alt="actions" />
          <img className="p-4 flex flex-col h-32" src={fileImg} alt="actions" />
          <img className="p-4 flex flex-col h-32" src={imageImg} alt="actions" />
        
      </div> */}

      {/* <div className="grid grid-cols-2">
        
          <img className="p-1 flex flex-row h-32" src={actionImg} alt="actions" />
          <img className="p-1 flex flex-col h-32" src={alertImg} alt="actions" />
          <img className="p-1 flex flex-row h-32" src={notificationImg} alt="actions" />
          <img className="p-1 flex flex-col h-32" src={communicationImg} alt="actions" />
          <img className="p-1 flex flex-row h-32" src={socialImg} alt="actions" />
          <img className="p-1 flex flex-col h-32" src={contentImg} alt="actions" />          
          <img className="p-1 flex flex-row h-32" src={mapsImg} alt="actions" />
          <img className="p-1 flex flex-col h-32" src={fileImg} alt="actions" />
          
          <img className="p-1 flex flex-col h-32" src={imageImg} alt="actions" />
        
      </div> */}

      <div className="grid grid-cols-2 gap-4">
        
          <img className="p-2 row-span-4" src={actionImg} alt="actions" />
          <img className="p-2" src={alertImg} alt="actions" />
          <img className="p-2" src={communicationImg} alt="actions" />
          <img className="p-2" src={contentImg} alt="actions" />
          <img className="p-2" src={fileImg} alt="actions" />        
          <img className="p-2" src={notificationImg} alt="actions" />
          <img className="p-2 row-span-3" src={imageImg} alt="actions" />
          <img className="p-2" src={socialImg} alt="actions" />

          <img className="p-2" src={mapsImg} alt="actions" />

      </div>

    </div>
  );
};

export default Iconography;
