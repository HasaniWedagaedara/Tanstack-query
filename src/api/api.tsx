const fetchUsers = async () => {
  const response = await fetch("http://localhost:3000/data");

  if (!response.ok) {
    throw new Error("Something went wrong!");
  }
  const userData = await response.json();
  return userData;
};

interface User {
  first_name: string;
  email: string;
}

const mutateUser = async (userData: User) => {
  const response = await fetch("http://localhost:3000/data", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(userData),
  });

  if (!response.ok) {
    throw new Error("Failed to update user data");
  }
};

export { fetchUsers, mutateUser };
