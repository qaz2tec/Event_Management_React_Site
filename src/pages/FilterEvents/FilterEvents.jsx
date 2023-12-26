import React, { useCallback, useState } from "react";
import "./FilterEvents.css";
import FilterBox from "../../components/FilterBox/FilterBox";
import SearchEventList from "../../components/SearchEventList/SearchEventList";
import Navigation from "../../components/Navigation/Navigation";

const FilterEvents = () => {
  const [monthYear, setmonthYear] = useState({
    selectedMonth: null,
    selectedYear: null,
  });

  const getMonthYear = useCallback((selectedMonth, selectedYear) => {
    console.log(selectedMonth, selectedYear);
    setmonthYear({ selectedYear, selectedMonth });
  }, []);

  return (
    <div>
      <Navigation />
      <div className="find-events-wrapper">
        <FilterBox getMonthYear={getMonthYear} />
        <SearchEventList monthYear={monthYear} />
      </div>
    </div>
  );
};

export default FilterEvents;
