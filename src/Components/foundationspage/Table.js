import React from 'react';
import tickImg from "../../assets/img/foundations/tick.png"
import crossImg from "../../assets/img/foundations/cross.png"
const Table = () => {
  return (
    <table className='border-collapse border border-gray-500'>
        <tr >
            <th className="border border-gray-500">Success Criteria</th>
            <th className="border border-gray-500">Recommendation</th>
            <th className="border border-gray-500">Status</th>
        </tr>
        <tr >
            <td rowSpan={7} className="border border-gray-500" >
                Non Text Content
            </td>
            <td className="border border-gray-500" >
                Images, form image buttons, and image map hot spots have appropriate, equivalent alternative text.
            </td>
            <td className="border border-gray-500">
                <img src={tickImg} className='h-6 w-7 m-4' alt="tickImg"/>
            </td>
        </tr>

        <tr>
            <td className="border border-gray-500">
                Images that do not convey content, are decorative, or contain content that is already conveyed in text are given empty alternative text (alt="") or implemented as CSS backgrounds. All linked images have descriptive alternative text.
            </td>
            <td className="border border-gray-500">
                <img src={crossImg} className='h-6 w-7 m-4' alt="crossImg"/>
            </td>
        </tr>

        <tr>
            <td className="border border-gray-500">
               Equivalent alternatives to complex images are provided in context or on a separate linked page.
            </td>
            <td className="border border-gray-500">
                <img src={crossImg} className='h-6 w-7 m-4' alt="crossImg"/>
            </td>
        </tr> 

        <tr>
            <td className="border border-gray-500">
                Form buttons have a descriptive value.
            </td>
            <td className="border border-gray-500">
                <img src={tickImg} className='h-6 w-7 m-4' alt="tickImg"/>
            </td>
        </tr>       

        <tr>
            <td className="border border-gray-500">
               Form inputs have associated text labels.
            </td>
            <td className="border border-gray-500">
                <img src={crossImg} className='h-6 w-7 m-4' alt="crossImg"/>
            </td>
        </tr>

        <tr>
            <td className="border border-gray-500">
               Embedded multimedia is identified via accessible text.
            </td>
            <td className="border border-gray-500">
                <img src={tickImg} className='h-6 w-7 m-4' alt="tickImg"/>
            </td>
        </tr>

        <tr>
            <td className="border border-gray-500">
               Frames and iframes are appropriately titled.
            </td>
            <td className="border border-gray-500">
                <img src={crossImg} className='h-6 w-7 m-4' alt="crossImg"/>
            </td>
        </tr>    

        
    </table>
  );
};

export default Table;
