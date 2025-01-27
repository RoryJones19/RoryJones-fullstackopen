const Persons = ({shownPersons, deletePerson}) => {

    return (
        <div>
            {shownPersons.map(person => (
                <div key={person.name}>
                <p>{person.name} {person.number}</p>
                <button onClick={() => deletePerson(person.id)}>delete</button>
                </div>
                ))}
        </div>
    )
}

export default Persons