"use client";

import React from "react";

const types = {
  email: {
    regex:
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
    message: "Preencha um email válido",
  },
  password: {
    regex: /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/,
    message:
      "A senha deve ter pelo menos 8 dígitos, um símbolo, uma letra maiúscula, uma minúscula e um número.",
  },
  number: {
    regex: /^\d+$/,
    message: "Utilize números apenas.",
  },
};

export default function useForm(type?: keyof typeof types | false) {
  const [value, setValue] = React.useState("");
  const [error, setError] = React.useState<string | null>(null);

  function validate(inputValue: string) {
    if (type === false) return true;
    if (inputValue.length === 0) {
      setError("Preencha um valor.");
      return false;
    } else {
      setError(null);
    }
    if (type === undefined) return true;
    else if (types[type] && !types[type].regex.test(inputValue)) {
      setError(types[type].message);
      return false;
    } else {
      setError(null);
      return true;
    }
  }

  function onChange({ target }: React.ChangeEvent<HTMLInputElement>) {
    if (error) validate(target.value);
    setValue(target.value);
  }

  return {
    value,
    setValue,
    onChange,
    error,
    validate: () => validate(value),
    onBlur: () => validate(value),
  };
}
