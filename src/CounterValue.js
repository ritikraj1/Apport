import "./App.css";

function CounterValue(props){
    return(
        <div>
        <p
          style={{
            fontWeight: "bold",
            left: "5%",
            top: "100%",
            color: "black",
            position: "absolute",
          }}
        >
          Counter value
        </p>
        <p
          style={{
            left: "5%",
            top: "120%",
            color: "black",
            position: "absolute",
          }}
        >
          {props.count}
        </p>
        </div>
    );
}
export default CounterValue;
