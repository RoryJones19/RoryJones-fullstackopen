/* eslint-disable react/prop-types */
const Note = ({ note, toggleImportance }) => {
  const label = note.important ? 'Make unimportant' : 'Make important'
    return (
      <div>
       <li className="note">
          {note.content}
          <button onClick={toggleImportance}> {label}</button>
          </li>
      </div>
    )
  }
  
  export default Note