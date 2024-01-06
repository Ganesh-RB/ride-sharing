import React from "react";

import {
  Card,
  Input,
  CardHeader,
  CardBody,
  Divider,
  Checkbox,
  Button,
} from "@nextui-org/react";
import JourneyCard from "../component/JourneyCard";

function CompletedJourneyCard() {
  return (
    <Card className="shadow-md min-w-[1400px] min-h-[500px]">
        <CardHeader>
            Completed Journeys
        </CardHeader>
        <Divider />
        <CardBody className="flex flex-row gap-10 flex-wrap justify-evenly">
            <JourneyCard
                from="Lagos"
                to="Abuja"
                date="12/12/2021"
                time="12:00pm"
                price="N5000"
                seats="2"
            />
            <JourneyCard
                from="Lagos"
                to="Abuja"
                date="12/12/2021"
                time="12:00pm"
                price="N5000"
                seats="2"
            />
            <JourneyCard
                from="Lagos"
                to="Abuja"
                date="12/12/2021"
                time="12:00pm"
                price="N5000"
                seats="2"
            />

            </CardBody>
    </Card>


  );
}

function NewJourneyCard() {
  return (
    <Card className="min-w-[400px]">
      <CardHeader className="flex gap-3">New Journey</CardHeader>
      <Divider />
      <CardBody className="flex flex-col gap-5 p-10">
        <Input
          variant="bordered"
          label="From"
          labelPlacement="outside"
          placeholder="From"
          className="max-w-xs"
          defaultValue="
            "
        />
        <Input
          variant="bordered"
          placeholder="To"
          label="To"
          labelPlacement="outside"
          className="max-w-xs"
        />
        <Input
          variant="bordered"
          placeholder="Date"
          label="Date"
          labelPlacement="outside"
          className="max-w-xs"
        />
        <Input
          variant="bordered"
          placeholder="Time"
          label="Time"
          labelPlacement="outside"
          className="max-w-xs"
        />
        <Input
          variant="bordered"
          placeholder="Price"
          label="Price"
          labelPlacement="outside"
          className="max-w-xs"
        />
        <Input
          variant="bordered"
          placeholder="Seats"
          label="Seats"
          labelPlacement="outside"
          className="max-w-xs"
        />
        <button className="bg-primary-500 text-whit hover:bg-primary-600 focus:outline-none px-5 py-2 rounded-md text-sm">
          Create
        </button>
      </CardBody>
    </Card>
  );
}

function HomeHeader() {
  return (
    <div className="flex flex-row justify-between w-full px-10 gap-10">
      <button className="bg-primary-500 text-white hover:bg-primary-600 focus:outline-none px-5 py-2 rounded-md text-sm">
        New
      </button>
      <div className="flex flex-row gap-5 items-center">
        <Input placeholder="url" className="max-w-xs" />
        <Button className="bg-primary-500 text-white hover:bg-primary-600 focus:outline-none px-5 py-2 rounded-md text-sm">
          Join
        </Button>
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <div className="App flex flex-col items-center h-screen gap-10 pt-10">
      <HomeHeader />
      <CompletedJourneyCard />
      <CompletedJourneyCard />
    </div>
  );
}
