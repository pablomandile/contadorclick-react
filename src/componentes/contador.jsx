import React from "react";
import '../css/contador.css';


function Contador (props) {
  return (
    <div className="contador">
      {props.numClicks}
    </div>
  );
}

export default Contador;