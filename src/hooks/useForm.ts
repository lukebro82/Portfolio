import { type ChangeEvent, useState } from "react";

export const useForm = <T extends Record<string, string>>(initialForm: T) => {
  const [formState, setFormState] = useState<T>(initialForm);

  const onInputChange = ({
    target,
  }: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = target;
    setFormState((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const onResetForm = () => {
    setFormState(initialForm);
  };

  return {
    ...formState,
    formState,
    onInputChange,
    onResetForm,
  };
};
