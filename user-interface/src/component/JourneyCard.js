import { Card, CardBody, CardHeader, Divider } from "@nextui-org/react";
import React from "react";

export default function JourneyCard(props) {
  return (
    <Card className="max-w-[500px] min-w-[400px] max-h-[300px] min-h-[300px]">
      <CardHeader className="flex gap-3 justify-evenly p-5">
        <div className="text-primary-500 font-semibold">{props.from}</div>
        <div className="text-primary-500 font-semibold">to</div>
        <div className="text-primary-500 font-semibold">{props.to}</div>
      </CardHeader>
      <Divider />
      <CardBody className="flex flex-col gap-5 p-5">
        <div className="flex justify-between items-center text-sm">
          <div className="text-sm">
            <span className="text-primary-500 font-semibold">Date:</span>{" "}
            {props.date}
          </div>
          <div className="text-sm">
            <span className="text-primary-500 font-semibold">Time:</span>{" "}
            {props.time}
          </div>
        </div>
        <div className="flex justify-between items-center text-sm">
          <div className="text-sm">
            <span className="text-primary-500 font-semibold">Price:</span>{" "}
            {props.price}
          </div>
          <div className="text-sm">
            <span className="text-primary-500 font-semibold">Seats:</span>{" "}
            {props.seats}
          </div>
        </div>
        <button className="bg-primary-400 hover:bg-primary-600 text-white py-2 rounded-md focus:outline-none w-full">
          Book
        </button>
        </CardBody>
    </Card>
  );
}
