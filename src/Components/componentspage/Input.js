import {
  Header,
  KeyNote,
  Label,
  TextArea,
  TextInput,
} from "@egovernments/digit-ui-react-components";
import React, { useState } from "react";

const InputComponents = () => {
  const [name, setName] = useState("");
  const NoteKeyData = [
    {
      id: 1,
      heading: "Note Key Heading 1",
      text: "This is Note key data 1",
    },
    {
      id: 2,
      heading: "Note Key Heading 2",
      text: "This is Note key data 2",
    },
  ];

  const isMobile = window.innerWidth < 768;
  const handleTextArea = () => {
    console.log("Hello");
  };

  const handleChange = (e) => {
    setName(e.target.value);
    console.log(e.target.value);
  };

  return (
    <div className="md:w-5/6 w-full mb-60" style={isMobile ? {width: "200%"} : {}}>
      <div className="pb-2">
        <Header>Input</Header>
      </div>
      <div className="pb-4">
        <h2 className="sm:text-xl font-bold">Overview</h2>
        <p className="md:text-xs lg:text-sm 2xl:text-base">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium
          voluptates quaerat officiis architecto nam repudiandae veniam in
          ipsam, repellendus accusantium cumque nostrum id officia aliquam
          dolore vitae expedita adipisci animi.
        </p>
      </div>
      <div className="input-shadow bg-white px-3 py-5 cursor-pointer mb-4">
        <form>
          <div className="flex flex-col">
            <Label>Name</Label>
            <TextInput
              className="text-base"
              onChange={handleChange}
              value={name}
            />
          </div>
        </form>
      </div>
      <div className="pb-2">
        <Header>Text Area</Header>
      </div>
      <div className="pb-4">
        <h2 className="sm:text-xl font-bold">Overview</h2>
        <p className="md:text-xs lg:text-sm 2xl:text-base">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium
          voluptates quaerat officiis architecto nam repudiandae veniam in
          ipsam, repellendus accusantium cumque nostrum id officia aliquam
          dolore vitae expedita adipisci animi.
        </p>
      </div>
      <div className="pb-4">
        <TextArea name="textarea" onChange={handleTextArea} />
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
      <div className="mb-4">
        <Header>Key Note</Header>
      </div>
      <div className="pb-4">
        <h2 className="2xl:text-2xl xl:text-2xl md:text-xl sm:text-sm font-bold">Overview</h2>
        <p className="md:text-xs lg:text-sm 2xl:text-base">
          {`Lorem ipsum <Header>Header</Header> dolor sit, amet consectetur adipisicing elit. Repudiandae delectus pariatur doloremque a accusamus debitis deleniti facilis ex non nobis neque quis sunt quam molestiae iusto molestias dignissimos, dolorem fugit.`}
        </p>
      </div>
      <div className="pb-4">
        {NoteKeyData.map((data) => {
          return (
            <KeyNote key={data.id} keyValue={data.heading} note={data.text} />
          );
        })}
      </div>
    </div>
  );
};

export default InputComponents;
