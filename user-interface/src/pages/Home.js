import React from "react";

import {
  Card,
  Input,
  CardHeader,
  CardBody,
  Divider,
  Checkbox,
  Button,
  useDisclosure,
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Select,
  SelectItem,
} from "@nextui-org/react";
import JourneyCard from "../component/JourneyCard";
import NewJourneyCard from "../component/NewJourneyCard";

function JourneyCardContainer(props) {
  return (
    <Card className="shadow-md overflow-y-auto">
      <CardHeader>{props.title}</CardHeader>
      <Divider />
      {props.journeys.length > 0 ? (
        <CardBody className="flex flex-row gap-10 flex-wrap justify-evenly overflow-y-auto flex-grow flex-start">
          {props.journeys.map((journey) => (
            <JourneyCard
              key={journey.id}
              from={journey.from}
              to={journey.to}
              startDate={journey.startDate}
              endDate={journey.endDate}
              cab={journey.cab}
              price={journey.price}
              joinUrl={journey.joinUrl}
              trackUrl={journey.trackUrl}
            />
          ))}
        </CardBody>
      ) : (
        <CardBody className="flex flex-row gap-10 flex-wrap justify-evenly overflow-y-auto flex-grow flex-start min-h-[300px] min-w-[400px]">
        <div className="text-center text-gray-500 text-sm p-10 w-full">
          No {props.title} journeys
        </div>
      </CardBody>
      )}
    </Card>
  );
}

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
      <Select label="Select location" className="max-w-xs" onSelectionChange={props.onSelectionChange}>
        {locations.map((location) => (
          <SelectItem key={location.id} value={location.id}>
            {location.name}
          </SelectItem>
        ))}
      </Select>
    </div>
  );
}

function HomeHeader(props) {

  console.log("HOME props", props)

  const [from, setFrom] = React.useState(1);
  const [to, setTo] = React.useState(1);
  const [startDate, setStartDate] = React.useState("2021-08-01");
  const [endDate, setEndDate] = React.useState("2021-08-01");

  const [url, setUrl] = React.useState(""); 

  const joinJourney = () => {
    const joinBody = {
      "userId": props.userId,
      "url": url,
    };

    fetch(`/api/booking/join`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + localStorage.getItem("token"),
      },
      body: JSON.stringify(joinBody),
    })
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
      });
  };

  const onCreateNewJourney = () => {
    let requestBody = {
      startDate: startDate,
      endDate: endDate,
      bookerId: props.userId,
      fromId: 1,
      toId: 2,
      price: 200,
      cabId: 2,
    };
    console.log(requestBody);

    console.log(requestBody);

    fetch("/api/booking/new", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + localStorage.getItem("token"),
      },
      body: JSON.stringify(requestBody),
    })
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
      });
  };

  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <div className="flex flex-row justify-between w-full px-10 gap-10">
      <div className="flex flex-row gap-5 items-center w-full">
        <button
          className="bg-primary-500 text-white hover:bg-primary-600 focus:outline-none px-5 py-2 rounded-md text-sm"
          onClick={onOpen}
        >
          New
        </button>
        <Modal size={"3xl"} isOpen={isOpen} onClose={onClose}>
          <ModalContent>
            {(onClose) => (
              <>
                <ModalHeader className="flex flex-col gap-1">
                  Create New Journey
                </ModalHeader>
                <ModalBody>
                  <Card className="shadow-md overflow-x-auto min-w-[600px] overflow-auto">
                    <CardBody className="flex flex-col gap-5 flex-wrap justify-evenly overflow-y-auto flex-grow flex-start">
                      <div className="flex flex-row gap-5 p-5 justify-between w-full flex-nowrap">
                        <div className="text-primary-500 font-semibold flex flex-row gap-5 align-middle w-[40%] border-2 border-primary-100 rounded-md p-5">
                          <div>From</div>
                          <SelectMenu onSelectionChange={setFrom} />
                        </div>
                        <div className="text-primary-500 font-semibold flex flex-row gap-5 align-middle w-[40%] border-2 border-primary-100 rounded-md p-5">
                          <div>To</div>
                          <SelectMenu onSelectionChange={setTo} />
                        </div>
                      </div>
                      <div className="flex flex-row gap-5 p-5 justify-between w-full">
                        <div className=" flex flex-row gap-5 align-middle bg-gray-100 rounded-md p-5">
                          <div className="text-primary-500 font-semibold">
                            Start Date
                          </div>
                          <input type="date" defaultValue="2021-08-01" onChange={(e) => setStartDate(e.target.value)} />
                        </div>
                        <div className=" flex flex-row gap-5 align-middle bg-gray-100 rounded-md p-5">
                          <div className="text-primary-500 font-semibold">
                            End Date
                          </div>
                          <input type="date" defaultValue="2021-08-01" onChange={(e) => setEndDate(e.target.value)} />
                        </div>
                      </div>
                    </CardBody>
                  </Card>
                </ModalBody>
                <ModalFooter>
                  <Button color="danger" variant="light" onPress={onClose}>
                    Close
                  </Button>
                  <Button color="primary" onPress={onClose} onClick={onCreateNewJourney}>
                    Create
                  </Button>
                </ModalFooter>
              </>
            )}
          </ModalContent>
        </Modal>
      </div>
      <div className="flex flex-row gap-5 items-center">
        <Input placeholder="url" className="max-w-xs" onValueChange={setUrl} />
        <Button className="bg-primary-500 text-white hover:bg-primary-600 focus:outline-none px-5 py-2 rounded-md text-sm" onClick={joinJourney}>
          Join
        </Button>
      </div>
    </div>
  );
}

export default function Home(props) {
  const [upcommingJourneys, setUpcommingJourneys] = React.useState([]);

  React.useEffect(() => {
    const fetchJourneys = async () => {
      const res = fetch(`/api/booking/upcoming?userId=${props.userId}`)
        .then((res) => res.json())
        .then((res) => {
          setUpcommingJourneys(res);
        });
      console.log(upcommingJourneys);
    };
    fetchJourneys();
  }, [props.userId, upcommingJourneys]);

  console.log("HOME props", props)

  const [completedJourneys, setCompletedJourneys] = React.useState([]);

  React.useEffect(() => {
    const fetchJourneys = async () => {
      const res = fetch(`/api/booking/completed?userId=${props.userId}`)
        .then((res) => res.json())
        .then((res) => {
          setCompletedJourneys(res);
        });
      console.log(completedJourneys);
    };
    fetchJourneys();
  }, [props.userId, completedJourneys ]);

  console.log(completedJourneys);

  return (
    <div className="App flex flex-col items-center gap-10 px-10 overflow-y-auto">
      <HomeHeader userId={props.userId} />
      <div className="flex flex-row gap-10 w-full">
        <JourneyCardContainer title="Upcomming" journeys={upcommingJourneys} />
        <JourneyCardContainer title="Completed" journeys={completedJourneys} />
      </div>
    </div>
  );
}
