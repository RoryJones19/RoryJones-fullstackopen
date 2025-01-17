/* eslint-disable react/prop-types */
const PersonForm = (props) => {
    return (
        <form onSubmit={props.addPerson}>
        <div>
          name: <input value={props.newName} onInput={props.handleNameInput}></input>
        </div>
        <div>
          number: <input value={props.newNumber} onInput={props.handleNumberInput}></input>
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
    )
}

export default PersonForm