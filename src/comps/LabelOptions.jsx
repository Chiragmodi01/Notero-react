import React from 'react'
import { useNote } from '../helpers/context/note-context';
import { editNoteService } from '../helpers/services';
import '../styles/noteCard/labelOptions.css';

function LabelOptions({ showLabelOptions, fromCreateNote, note }) {
    const { labelsList, notesDispatch, setNote } = useNote();

    const changeLabel = (e) => {
        if(fromCreateNote){
            setNote({ ...note, label: e.target.value})
        } else {
            editNoteService(notesDispatch, {...note, label: e.target.value });
        }
    }

  return (
    <div className={showLabelOptions ? 'LabelOptions' : 'LabelOptions hidden'}>
          { labelsList.length === 0 && <p>No labels available!</p> }
          {note.label && <label htmlFor='none' className="labelOptions-item-text">
            <input value='' type="radio" name="label" id='none' onClick={(e) => changeLabel(e)}/>
                none
          </label>}
        {
        labelsList.map((item) => {
            return(
                <div className="labelOptions-item" key={item}>
                    <label htmlFor={item} className="labelOptions-item-text">
                    <input checked={item === note.label} value={item} type="radio" name="label" id={item} onClick={(e) => changeLabel(e)}/>
                        {item}
                    </label>
                </div>
            )
        })
        }
    </div>
  )
}

export default LabelOptions