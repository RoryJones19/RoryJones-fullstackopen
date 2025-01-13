import Header from './Header'
import Part from './Part'

const Course = ({ course }) => {

    const total = course.parts.reduce((sum, part) => {
        return sum += part.exercises
    }, 0)
    
    return (
        <div>
            <Header course={course}></Header>
            <ul>
                {course.parts.map(part => 
                    <Part key={part.id} part={part}></Part>
                )}
            </ul>
            <p>Total of {total} exercises</p>
        </div>
    )
}

export default Course