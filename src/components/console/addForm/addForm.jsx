import React, { useState } from "react";
import FirstForm from "./firstForm/firstForm";
import SecondForm from "./secondForm/secondForm";

const Addform = ({ onXClick }) => {
  const [stage, setStage] = useState(1);

  return (
    <>{stage === 1 ? <FirstForm onXClick={onXClick} /> : <SecondForm />}</>
  );
};

export default Addform;
