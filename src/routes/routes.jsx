import FilterEvents from "../pages/FilterEvents/FilterEvents";
import EventDetails from "../pages/EventDetails/EventDetails";
import EventList from "../pages/EventList/EventList";

export const routes = [
  { path: "/", element: <EventList /> },
  { path: "/find-events", element: <FilterEvents /> },
  { path: "events/:id", element: <EventDetails /> },
]