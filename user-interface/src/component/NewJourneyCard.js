import React from "react";

import {
    Button,
  Card,
  CardBody,
  CardHeader,
  Divider,
  NextUIProvider,
  Select,
  SelectItem,
} from "@nextui-org/react";

function SelectMenu(props) {
  const locations = [
    {
      id: 1,
      name: "IITH",
    },
    {
      id: 2,
      name: "Secunderabad",
    },
    {
      id: 3,
      name: "RGIA",
    },
  ];

  return (
    <div className="flex w-full flex-wrap md:flex-nowrap gap-4">
      <Select label="Select location" className="max-w-xs">
        {locations.map((location) => (
          <SelectItem key={location.id} value={location.id}>
            {location.name}
          </SelectItem>
        ))}
      </Select>
    </div>
  );
}

export default function NewJourneyCard() {
  return (
    <Card className="shadow-md overflow-x-auto min-w-[600px] overflow-auto">
      <CardHeader>New Journey</CardHeader>
      <Divider />
      <CardBody className="flex flex-row gap-10 flex-wrap justify-evenly overflow-y-auto flex-grow flex-start">
        <div className="flex flex-col gap-5 p-5 justify-evenly w-full flex-nowrap">
          <div className="text-primary-500 font-semibold flex flex-row gap-5 align-middle w-[40%]" >
            <div>From</div>
            <SelectMenu />
          </div>
          <div className="text-primary-500 font-semibold flex flex-row gap-5 align-middle w-[40%]">
            <div>To</div>
            <SelectMenu />
          </div>
        </div>
        <div className="flex flex-col gap-5 p-5 justify-evenly w-full">
          <div className=" flex flex-row gap-5 align-middle">
            <div className="text-primary-500 font-semibold">Start Date</div>
            <input type="date" defaultValue="2021-08-01" />
          </div>
          <div className=" flex flex-row gap-5 align-middle">
            <div className="text-primary-500 font-semibold">End Date</div>
            <input type="date" defaultValue="2021-08-01" />
          </div>
        </div>
        <div className="flex flex-col gap-5 p-5 justify-evenly w-full">
          <div className=" flex flex-row gap-5 align-middle">
            <div className="text-primary-500 font-semibold">Cab Number</div>
            <input type="text" defaultValue="TS 08 1234" />
          </div>
          <div className=" flex flex-row gap-5 align-middle">
            <div className="text-primary-500 font-semibold">Driver Name</div>
            <input type="text" defaultValue="John Doe" />
          </div>
        </div>
        <Divider />
        <div className="flex flex-col gap-5 p-5 justify-evenly w-full">
            <Button className="bg-primary-500 text-white hover:bg-primary-600 focus:outline-none px-5 py-2 rounded-md text-sm">
                Create
            </Button>
        </div>
      </CardBody>
    </Card>
  );
}
