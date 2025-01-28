import './Notification.css'

const Notification = ({message}) => {
    if(message === null){
        return null
    }
    else{
        return (
            <div className="Notification">
                <h3>{message}</h3>
            </div>
            
        )
    }
}

export default Notification