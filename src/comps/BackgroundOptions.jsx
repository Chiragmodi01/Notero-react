import React from 'react'
import { useNote } from '../helpers/context/note-context'
import { editNoteService } from '../helpers/services';
import '../styles/noteCard/backgroundOptions.css'

function BackgroundOptions({color, showBgOptions, note, fromCreateNote }) {
    const { setNote, notesDispatch, utilsState } = useNote();

    const colorsObjDark={
      peach: '#e6784f80',
      green: '#345920',
      blue: '#1e3a5f',
      teal: '#16504b',
      pink: '#5b2245',
      red: '#5c2b29',
      brown: '#442f19',
      grey: '#3c3f43'
    }

    const colorsObjLight={
      peach: '#f4c7b6',
      green: '#ccff90',
      blue: '#aecbfa',
      teal: '#a7ffeb',
      pink: '#fdcfe8',
      red: '#f28b82',
      brown: '#e6c9a8',
      grey: '#e8eaed'
    }

    const colorsObj = utilsState.darkTheme ? colorsObjDark : colorsObjLight

    
    const changeBgColor = (e) => {
      { fromCreateNote ? setNote({ ...note, color: e.target.value}) :
      editNoteService(notesDispatch, {...note, color: e.target.value })}
    }
    
  return (
    <div className={showBgOptions ? 'backgroundOptions' : 'backgroundOptions hidden'}>
        <input checked={note.color === ''} type="radio" name='color' value='' onClick={(e) => changeBgColor(e)} className={color === '' ? "bgOption active" : "bgOption none"} title="none"/>
        <input checked={note.color === colorsObj.peach} type="radio" name='color' value={colorsObj.peach} onClick={(e) => changeBgColor(e)} className={color === 'peach' ? "bgOption active" : "bgOption peach"} title="peach"/>
        <input checked={note.color === colorsObj.green} type="radio" name='color' value={colorsObj.green} onClick={(e) => changeBgColor(e)} className={color === 'green' ? "bgOption active" : "bgOption green"} title="green"/>
        <input checked={note.color === colorsObj.blue} type="radio" name='color' value={colorsObj.blue} onClick={(e) => changeBgColor(e)} className={color === 'blue' ? "bgOption active" : "bgOption blue"} title="blue"/>
        <input checked={note.color === colorsObj.teal} type="radio" name='color' value={colorsObj.teal} onClick={(e) => changeBgColor(e)} className={color === 'teal' ? "bgOption active" : "bgOption teal"} title="teal"/>
        <input checked={note.color === colorsObj.pink} type="radio" name='color' value={colorsObj.pink} onClick={(e) => changeBgColor(e)} className={color === 'pink' ? "bgOption active" : "bgOption pink"} title="pink"/>
        <input checked={note.color === colorsObj.red} type="radio" name='color' value={colorsObj.red} onClick={(e) => changeBgColor(e)} className={color === 'red' ? "bgOption active" : "bgOption red"} title="red"/>
        <input checked={note.color === colorsObj.brown} type="radio" name='color' value={colorsObj.brown} onClick={(e) => changeBgColor(e)} className={color === 'brown' ? "bgOption active" : "bgOption brown"} title="brown"/>
        <input checked={note.color === colorsObj.grey} type="radio" name='color' value={colorsObj.grey} onClick={(e) => changeBgColor(e)} className={color === 'grey' ? "bgOption active" : "bgOption grey"} title="grey"/>
    </div>
  )
}

export default BackgroundOptions