import React from "react";
import EventCard from "../../components/EventCard/EventCard";
import "./EventList.css";
import Navigation from "../../components/Navigation/Navigation";
import { eventList } from "../../utils/EventDatabase";
const EventList = () => {
  const renderEventCard = () => {
    return eventList.map(({ id, date, heading, location, img }) => {
      return (
        <EventCard
          key={id}
          id={id}
          date={date}
          heading={heading}
          location={location}
          img={img}
        />
      );
    });
  };

  return (
    <div>
      <Navigation/>
      <div className="event-list-wrapper">
        <div className="event-list">
      {eventList.length > 0 ? renderEventCard() : <p>No events available</p>}
      </div>
      </div>
    </div>
  );
};

export default EventList;
