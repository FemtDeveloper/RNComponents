import {useState} from 'react';

export const useForm = <T extends Object>(initialData: T) => {
  const [stateForm, setStateForm] = useState(initialData);

  const onChange = <K extends Object>(value: K, field: keyof T) => {
    setStateForm({...stateForm, [field]: value});
  };

  return {setStateForm, onChange, stateForm};
};
