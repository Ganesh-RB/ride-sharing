import React from "react";
import AdminJourneyCard from "../component/AdminJourneyCard";

export default function Admin(props) {
  const [allJourneys, setAllJourneys] = React.useState([]);

  React.useEffect(() => {
    const fetchJourneys = async () => {
      const res = fetch(`/api/booking/all`)
        .then((res) => res.json())
        .then((res) => {
          setAllJourneys(res);
        });
      console.log(allJourneys);
    };
    fetchJourneys();
  }, [allJourneys]);

  return allJourneys.length > 0 ? (
    <div className="flex flex-row gap-10 flex-wrap justify-evenly overflow-y-auto flex-grow flex-start">
      {allJourneys.map((journey) => (
        <AdminJourneyCard
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
    </div>
  ) : (
    <div className="flex flex-row gap-10 flex-wrap justify-evenly overflow-y-auto flex-grow flex-start min-h-[300px] min-w-[400px]">
      <div className="text-center text-gray-500 text-sm p-10 w-full">
        No {props.title} journeys
      </div>
    </div>
  );
}
