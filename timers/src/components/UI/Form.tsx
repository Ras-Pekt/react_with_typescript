import { ComponentPropsWithoutRef, FormEvent, useRef } from "react";

type FormProps = ComponentPropsWithoutRef<"form"> & {
  onSave: (value: unknown) => void;
};

const Form = ({ onSave, children, ...props }: FormProps) => {
  const formRef = useRef<HTMLFormElement>(null);
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const data = Object.fromEntries(formData);
    onSave(data);
    event.currentTarget.reset();
  };
  return (
    <form onSubmit={handleSubmit} {...props} ref={formRef}>
      {children}
    </form>
  );
};

export default Form;
