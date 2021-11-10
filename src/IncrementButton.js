import "./App.css";
import axios from "axios";
import {useState,useEffect} from 'react';
import CounterValue from "./CounterValue";

function IncrementButton(){

    const [count, setCount] = useState();
    const [currCount, setCurrCount] = useState(0);
  
  const text = (event) => {
    axios({
      method: "put",
      url: " https://interview-8e4c5-default-rtdb.firebaseio.com/front-end.json",
      data: {
        Ritik: Number(event.target.value),
      },
    });
    setCount(Number(event.target.value));
  };
  const decrease = () => {
    axios({
      method: "put",
      url: " https://interview-8e4c5-default-rtdb.firebaseio.com/front-end.json",
      data: {
        Ritik: count - 1,
      },
    });
    setCount(count - 1);
  };
  const increase = () => {
    axios({
      method: "put",
      url: " https://interview-8e4c5-default-rtdb.firebaseio.com/front-end.json",
      data: {
        Ritik: count + 1,
      },
    });
    setCount(count + 1);
  };
  useEffect(() => {
    if (currCount === 0) {
      setCurrCount(1);
      axios
        .get(
          " https://interview-8e4c5-default-rtdb.firebaseio.com/front-end/Ritik.json"
        )
        .then((res) => {
          if (res.data !== undefined) {
            setCount(Number(res.data));
          } else {
            setCount(1);
          }
        });
    }
  },[]);

    return(
        <div
        style={{
          left: "40%",
          top: "40%",
          display: "flex",
          width: "auto",
          position: "absolute",
        }}
      >
        <button onClick={decrease} class="Button1">
          -
        </button>
        <input class="Input" value={count} onChange={text}></input>
        <button onClick={increase} class="Button2">
          +
        </button>
        <body>
        <CounterValue count={count}/>
        </body>
      </div>
    );
}
export default IncrementButton;