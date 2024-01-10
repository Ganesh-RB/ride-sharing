import { Button, Card, CardBody, CardHeader, Divider } from "@nextui-org/react";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCopy } from "@fortawesome/free-solid-svg-icons";

export default function AdminJourneyCard(props) {
  const bookingId = props.bookingId;

  const [feedback, setFeedback] = React.useState("");

  return (
    <Card className="max-w-[500px] min-w-[400px] ">
      <CardHeader className="flex gap-3 justify-evenly p-5">
        <div className="text-primary-500 font-semibold">{props.from.name}</div>
        <div className="text-primary-500 font-semibold">to</div>
        <div className="text-primary-500 font-semibold">{props.to.name}</div>
      </CardHeader>
      <Divider />
      <CardBody className="flex flex-col gap-5 p-5 justify-evenly">
        <div className="flex justify-between items-center text-sm">
          <div className="text-sm">
            <span className="text-primary-500 font-semibold">Start:</span>{" "}
            {props.startDate}
          </div>
          <div className="text-sm">
            <span className="text-primary-500 font-semibold">End:</span>{" "}
            {props.endDate}
          </div>
        </div>
        <div className="flex justify-between items-center text-sm">
          <div className="text-sm">
            <span className="text-primary-500 font-semibold">Distance:</span>{" "}
            {"100KM"}
          </div>
          <div className="text-sm">
            <span className="text-primary-500 font-semibold">Price:</span>{" "}
            {props.price + "Rs"}
          </div>
        </div>
        <Divider />
        <div className="flex justify-between items-center text-sm justify-evenly">
          <div className="text-sm">
            <span className="text-primary-500 font-semibold">Cab details</span>
          </div>
        </div>
        <div className="flex justify-between items-center text-sm">
          <div className="text-sm">{props.cab.cabNumber}</div>
          <div className="text-sm">{props.cab.driverName}</div>
        </div>
      </CardBody>
    </Card>
  );
}
