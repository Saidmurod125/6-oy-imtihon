import { useState } from "react";
import Step1 from "./tes";
import Home from "./Home";

const ParentComponent = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirmation, setPasswordConfirmation] = useState("");

  const handleNext = () => {
    setCurrentStep(currentStep + 1);
  };

  const handlePrevious = () => {
    setCurrentStep(currentStep - 1);
  };

  const handleLoginChange = (event) => {
    setLogin(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handlePasswordConfirmationChange = (event) => {
    setPasswordConfirmation(event.target.value);
  };

  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return (
          <Step1
            onNext={handleNext}
            login={login}
            password={password}
            passwordConfirmation={passwordConfirmation}
            onLoginChange={handleLoginChange}
            onPasswordChange={handlePasswordChange}
            onPasswordConfirmationChange={handlePasswordConfirmationChange}
          />
        );
      case 2:
        return <Home onNext={handleNext} onPrevious={handlePrevious} />;
      default:
        return null;
    }
  };

  return <div>{renderStep()}</div>;
};

export default ParentComponent;
