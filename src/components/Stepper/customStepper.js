import React, { useState, useEffect } from "react";
import "./MyStepper.css";

const MyStepper = (props) => {
  const [step, setStep] = useState(props.step);
  const maxSteps = 8; // número máximo de pasos

  useEffect(() => {

}, []);


  return (
    <div className="stepper-container">
        <div className="o-stepper-bar">
            <div className="o-stepper-bar-inner" style={{ height: ((props.step-1)/(maxSteps-1)) *100 + "%"}}>
                
            </div>

                <div className="round-step" style={{backgroundColor: props.step>=1?"#00902F":"#5B5A5A"}}>1</div>
                <div className="round-step" style={{backgroundColor: props.step>=2?"#00902F":"#5B5A5A"}}>2</div>
                <div className="round-step" style={{backgroundColor: props.step>=3?"#00902F":"#5B5A5A"}}>3</div>
                <div className="round-step" style={{backgroundColor: props.step>=4?"#00902F":"#5B5A5A"}}>4</div>
                <div className="round-step" style={{backgroundColor: props.step>=5?"#00902F":"#5B5A5A"}}>5</div>
                <div className="round-step" style={{backgroundColor: props.step>=6?"#00902F":"#5B5A5A"}}>6</div>
                <div className="round-step" style={{backgroundColor: props.step>=7?"#00902F":"#5B5A5A"}}>7</div>
                <div className="round-step" style={{backgroundColor: props.step>=8?"#00902F":"#5B5A5A"}}>8</div>
        </div>
    </div>
    
  );
};

export default MyStepper;