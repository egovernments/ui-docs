import React from 'react';
import { Header } from "@egovernments/digit-ui-react-components";

const isMobile = window.innerWidth < 768;
const VoiceTone = () => {
  return (
    <div className='md:w-5/6 w-full mb-60' style={isMobile ? {width: "200%"} : {}}>
        <div className="mb-4">
            <Header className="font-bold">
                Voice & Tone
            </Header>
        </div>
    <br />
        <h1 className="sm:text-2xl font-bold">Empathetic</h1>
        <br/>
        <p>Being Citizens ourselves, we fathom the real time challenges and the gaps in our municipal services delivery, and our aim is to fill in these gaps to make work easier and efficient for civic employees thus improving the quality of life of all of us.</p>
        <br/>
        
        <h1 className="sm:text-2xl font-bold">Enabling</h1>
        <br/>
        <p>Gearing up for an era of Long-term economic development and community cohesion, we stand in the forefront to strengthen the capabilities and enable our ecosystem to resolve the civic challenges.</p>
        <br/>
        <h1 className="sm:text-2xl font-bold">Purposeful</h1>
        <br/>
        <p>Driven by shared goals to ensure a transparent accountable, effective and efficient delivery of services, we are determined to exoand the possibilities of better services and solutions which are limitless.</p>
        <br/>
        <h1 className="sm:text-2xl font-bold">Catalyzing</h1>
        <br/>
        <p>Knowing the pulse of our ecosystem, we propel the widened availability of municipal services backed by technology making our local governments fit into the rhythym of life citizens.</p>
        <br/>
        <h1 className="sm:text-2xl font-bold">Conversational</h1>
        <br/>
        <p>Enabling new digital avenues for collaboration and direct interactions between the public and the govt, we connect with the ecosystem to create civic engagement model a win-win for citizens and the local gov.</p>
        <br/>
        <h1 className="sm:text-2xl font-bold">Courageous</h1>
        <br/>
        <p>Bringing in a revolutionary change in the delivery of municipal services, our decisions and moves are bold an d transformative. Thus energizing, inspiring and enabling the ecosystem to be leaders in societal change.</p>
        <br/>

    </div>      
  );
};

export default VoiceTone;
