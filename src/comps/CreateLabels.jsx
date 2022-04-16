import React from 'react'
import '../styles/labels/createLabels.css'
import { MdOutlineNewLabel, MdLabel, MdDelete } from '../utils/getIcons';
import { useNote } from '../helpers/context/note-context';
import { toast } from 'react-toastify';

function CreateLabels() {
  const {label, setLabel, labelsList, setLabelsList} = useNote();
  
  const addLabelHandler = (item) => {
    if(label === ''){
      toast.error('Label cannot be empty!')
    } else if(labelsList.includes(label)){
      toast.error(`${label} already exists!`);
      setLabel('')
    } else {
      toast.error(`${label} added to labels!`);
      setLabelsList([...labelsList, label]);
      setTimeout(() => {
        setLabel('')
      }, 200)
    }
  }

  const removeLabelHandler = (item) => {
    toast.error(`${item} removed from labels!`);
    setLabelsList(labelsList.filter((label) => label !== item))
  }

  return (
    <div className='createLabels'>
      <div className="createLabels_input-wrapper">
        <input value={label} onChange={(e) => setLabel(e.target.value)} placeholder='Add a label...' type="text" className="createLabels_input" />
        <MdOutlineNewLabel onClick={(item) => addLabelHandler(item)} title="Add label" className="createLabels-icon" />
      </div>

      { labelsList.length !== 0 &&
      <div className='labels-list-wrapper'>
        {
          labelsList.length !== 0 && labelsList.map((item) => {
            return (
              <div className="label-item-wrapper" key={item}>
                <span className="label-item-icons-container">
                  <MdLabel title="Delete label" size='1.3em' className='label-item-icon label'/>
                  <MdDelete title="Delete label" size='1.3em' className='label-item-icon trash' onClick={() => removeLabelHandler(item)} />
                </span>
                <span className="label-item-container-right">
                  <h3 className="lbel-item-text">{item}</h3>
                </span>
              </div>
            )
          })
        }
      </div>}
    </div>
  )
}

export default CreateLabels