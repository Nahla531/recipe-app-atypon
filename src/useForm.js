import { useState } from "react";

const useForm = () => {
  const [values, setValues] = useState({
    searchQuery: "",
  });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    console.log(value);
    setValues({ ...values, [name]: value });
  };

  return { handleChange, values };
};

export default useForm;
