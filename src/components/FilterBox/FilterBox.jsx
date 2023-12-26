import { useEffect, useState } from "react";
import { dataToRender, years, months } from "../../utils/DataRender";
import "./FilterBox.css";
const FilterBox = ({ getMonthYear }) => {
  const [selectedMonth, setselectedMonth] = useState("January");
  const [selectedYear, setselectedYear] = useState(2023);

  const monthToRender = () => dataToRender(months);

  const yearToRender = () => dataToRender(years);

  const handleMonthChange = (e) => {
    // console.log(e.target.value);
    setselectedMonth(e.target.value);
  };

  const handleYearChange = (e) => {
    // console.log(e.target.value);
    setselectedYear(Number(e.target.value));
  };

  useEffect(() => {
    const updateParent = () => {
      getMonthYear(selectedMonth, selectedYear);
    };

    updateParent();
  }, [selectedMonth, selectedYear, getMonthYear]);
  return (
    <div>
      <form className="filter-card">
        <div className="wrapper">
          <div className="date">
            <label htmlFor="month">Month : </label>
            <select value={selectedMonth} onChange={handleMonthChange}>
              {monthToRender()}
            </select>
          </div>
          <div className="date">
            <label htmlFor="year">Year : </label>
            <select value={selectedYear} onChange={handleYearChange}>
              {yearToRender()}
            </select>
          </div>
        </div>
      </form>
    </div>
  );
};

export default FilterBox;
