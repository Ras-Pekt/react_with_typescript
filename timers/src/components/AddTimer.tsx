import { useRef } from "react";
import Form from "./UI/Form";
import Input from "./UI/Input";
import Button from "./UI/Button";
import { useTimersContext } from "../store/useTimersContext";

const AddTimer = () => {
  const nameRef = useRef<HTMLInputElement>(null);
  const durationRef = useRef<HTMLInputElement>(null);

  const { addTimer } = useTimersContext();

  const handleSaveTimer = (data: unknown) => {
    const extractedData = data as { name: string; duration: string };
    if (!extractedData.name || !extractedData.duration) {
      alert("Please enter a valid name and duration.");
      throw new Error("Invalid timer data.");
    }
    addTimer({ name: extractedData.name, duration: +extractedData.duration });
  };

  return (
    <Form onSave={handleSaveTimer} id="add-timer">
      <Input label="Name" id="name" type="text" ref={nameRef} />
      <Input label="Duration" id="duration" type="number" ref={durationRef} />
      <p>
        <Button>Add Timer</Button>
      </p>
    </Form>
  );
};
export default AddTimer;
