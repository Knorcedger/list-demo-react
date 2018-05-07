import React from 'react';

const ListFilter = ({
  data,
  filterKey,
  onFilterData
}) => {
  const handleChange = event => {
    const filterTerm = event.target.value;

    const newData = data.filter(item => {
      return item[filterKey].includes(filterTerm);
    });

    onFilterData(newData);
  }

  return (
    <li><input onChange={handleChange} /></li>
  );
}

export default ListFilter;
