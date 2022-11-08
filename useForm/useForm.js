import { useState } from "react";

export const useForm = (initialForm = {}) => {
  const [formstate, setFormstate] = useState(initialForm);

  
  const onInputChange = ({ target }) => {
    const { name, value } = target;
    setFormstate({
      ...formstate,
      [name]: value,
    });    
  };

  const onResetForm = () => {
    setFormstate();
  };

  const aaa=(uno,dos)=>{
    return uno+dos;
  }

  return { ...formstate, formstate, onInputChange, onResetForm };
};
