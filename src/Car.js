import "./CarStyle.css";

const Car = (props) => {

return (
    <div className="content">
        <p>{props.brand}</p>
        <span>{props.description}</span>
    </div>
)

}

export default Car;