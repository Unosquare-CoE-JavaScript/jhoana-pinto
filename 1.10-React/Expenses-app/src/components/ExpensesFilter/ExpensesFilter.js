import './ExpensesFilter.css';

const ExpensesFilter = ( props ) => {
  function newFilterHandler(event){
    const year = event.target.value;
    const newExpenses = props.list.list.filter( item => year == item.date.getFullYear());
    props.onFilter(year);
    props.list.filteredListHandler(newExpenses);
  }

  return (
    <div className='expenses-filter'>
      <div className='expenses-filter__control'>
        <label>Filter by year</label>
        <select value={props.selectedYear} onChange={ newFilterHandler }>
          <option value='2022'>2022</option>
          <option value='2021'>2021</option>
          <option value='2020'>2020</option>
        </select>
      </div>
    </div>
  );
};

export { ExpensesFilter };