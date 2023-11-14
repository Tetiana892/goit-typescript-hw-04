import React, { useState, ChangeEvent } from "react";

type FormInput = {
  value: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
};

export function FormComponent(initialValue: string): FormInput {
  const [value, setValue] = useState(initialValue);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };

  return <input type="text" value={value} onChange={handleChange} />;
}
