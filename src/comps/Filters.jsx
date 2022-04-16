import React from 'react'
import { useNote } from '../helpers/context/note-context'
import '../styles/homepage/filters.css'

function Filters( ) {
    const { notesDispatch, labelsList} = useNote();

  return (
      <div className="Filters">
        <div className='Filter_Wrapper'>
            <h3 className="filter-title">Sort by date</h3>
            <div className="sort-wrapper">
                <label htmlFor='sort-date-newest' className="sort-container">
                    <input type="radio" name="sortByDate" id="sort-date-newest" className='sort-date-input' onClick={() => notesDispatch({type: 'SORT_NEW_FIRST', payload: note})}/>
                    Newest first
                </label>
                <label htmlFor='sort-date-oldest' className="sort-container">
                    <input type="radio" name="sortByDate" id="sort-date-oldest" className='sort-date-input' onClick={() => notesDispatch({type: 'SORT_OLD_FIRST', payload: note})}/>
                    Oldest first
                </label>
            </div>

            <h3 className="filter-title">Filter by label</h3>
            <div className="sort-wrapper">
                    <p className="labelOptions-item-text clear" onClick={() => notesDispatch({type: 'FILTER_LABEL_CLEAR'})}>
                        clear filter
                    </p>
                {labelsList.map((item) => {
                    return (
                    <label htmlFor={`filter-label-${item}`} className="sort-container" key={item}>
                        <input type="radio" name="filterByLabel" id={`filter-label-${item}`} className='filter-label-input'
                        onClick={() => notesDispatch({type: 'FILTER_LABEL', payload: item})}/>
                        {item}
                    </label>
                    )
                })}
            </div>
        </div>
    </div>
  )
}

export default Filters