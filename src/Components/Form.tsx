// src/Components/Form.tsx

import { useMutation } from "@tanstack/react-query";
import { useState } from "react";
import { mutateUser } from "../api/api"; 
import { useNavigate } from "react-router-dom";

interface User {
  first_name: string;
  email: string;
}



const Form = () => {
  const [user, setUser] = useState<User>({
    first_name: "",
    email: "",
  });

  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    mutation.mutate(user);
  };

  const mutation = useMutation({
    mutationFn: mutateUser,
    onSuccess: () => {
      navigate('/')
    },
  });

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter First Name"
          value={user.first_name}
          onChange={(e) => setUser({ ...user, first_name: e.target.value })}
        />
        <br />
        <input
          type="text"
          placeholder="Enter Email"
          value={user.email}
          onChange={(e) => setUser({ ...user, email: e.target.value })}
        />
        <button type="submit">Add</button>
      </form>
    </div>
  );
};

export default Form;
