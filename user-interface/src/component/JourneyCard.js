import {
  Button,
  Card,
  CardBody,
  CardHeader,
  Divider,
  RadioGroup,
} from "@nextui-org/react";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCopy, faDu, faStar } from "@fortawesome/free-solid-svg-icons";

export default function JourneyCard(props) {
  const [rating, setRating] = React.useState(0);

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
        <Divider />
        {/* Details about link as share invite via a copy button */}
        <div className="flex justify-between items-center text-sm">
          <div className="text-sm">
            <Button
              className="bg-primary-300 text-white hover:bg-primary-600 focus:outline-none px-5 py-2 rounded-md text-sm"
              onClick={() => {
                navigator.clipboard.writeText(props.trackUrl);
              }}
            >
              <FontAwesomeIcon icon={faCopy} />
              Track
            </Button>
          </div>
          <div className="text-sm">
            <Button
              className="bg-primary-300 text-white hover:bg-primary-600 focus:outline-none px-5 py-2 rounded-md text-sm"
              onClick={() => {
                navigator.clipboard.writeText(props.joinUrl);
              }}
            >
              <FontAwesomeIcon icon={faCopy} />
              Join
            </Button>
          </div>
        </div>
      </CardBody>
      <CardHeader className="flex gap-3 justify-evenly p-5">
        {/* create a 5 start  */}
        <div className="text-primary-200 font-semibold">Feedback</div>
        {/* unstared star */}
        <div className="text-white px-5 py-2 rounded-md text-sm bg-opacity-50 bg-grey-100">
          <RadioGroup name="radio" orientation="horizontal">
            {[...Array(5)].map((star, i) => {
              const ratingValue = i ;
              return (
                <label>
                  <input
                    type="radio"
                    value={ratingValue}
                    onClick={() => setRating(ratingValue)}
                    className="hidden"
                  />
                  <FontAwesomeIcon
                    icon={faStar}
                    className="cursor-pointer"
                    color={ratingValue <= rating ? "#ffc107" : "#e4e5e9"}
                  />
                </label>
              );
            })}
          </RadioGroup>
        </div>
      </CardHeader>
    </Card>
  );
}
