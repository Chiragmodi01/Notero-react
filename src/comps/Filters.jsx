import React from 'react'
import { useNote } from '../helpers/context/note-context'
import '../styles/homepage/filters.css'

function Filters() {
    const {note, notesDispatch} = useNote();

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
        </div>
    </div>
  )
}

export default Filters