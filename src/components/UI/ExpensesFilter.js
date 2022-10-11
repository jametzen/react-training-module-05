import { useState } from "react";

import './ExpensesFilter.css';

const ExpensesFilter = (props) => {
  const [filterData, setFilterData] = useState("");

  const onFilterChange = (event) => {
    event.preventDefault();

    let filterData = {
      year: event.target.value
    };

    // Rather than needing an anonymous function here, I'd probably just descructively read in an entire new set of values, one per field.
    /*
      setFilterData((prevState) => }
        return {...prevState, year: event.target.value}
      });
    */
    setFilterData(event.target.value);

    props.onFilterChange(filterData);
  };

  return (
    <div className='expenses-filter'>
      <div className='expenses-filter__control'>
        <label>Filter by year</label>
        <select onChange={onFilterChange}>
          <option value='2022'>2022</option>
          <option value='2021'>2021</option>
          <option value='2020'>2020</option>
          <option value='2019'>2019</option>
        </select>
      </div>
    </div>
  );
};

export default ExpensesFilter;