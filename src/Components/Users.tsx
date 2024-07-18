import { useQuery} from "@tanstack/react-query";
import { fetchUsers } from "../api/api";
import "../App.css";
import { useNavigate } from "react-router-dom";

interface User {
  id: number;
  first_name: string;
  email: string;
}

const Users = () => {

  const navigate = useNavigate();

  const {
    data: userData,
    isLoading,
    isError,
    error,
  } = useQuery<User[]>({
    queryKey: ["User"],
    queryFn: fetchUsers,
    staleTime:5000
  });

  if (isLoading) {
    return <h2>Loading...</h2>;
  }
  if (isError) {
    return <h2>Error: {error.message}</h2>;
  }

  

  return (
    <div>
      <button className="btn" onClick={()=>navigate("/Form")}>
        Add New User
      </button>
      {userData?.map((user: User) => (
        <div key={user.id} className="container">
          <p>Name: {user.first_name} </p>
          <p>Email: {user.email}</p>
        </div>
      ))}
    </div>
  );
};

export default Users;
