import React from "react";

export default function useUsers() {
  const [users, setUsers] = React.useState([]);

  React.useEffect(() => {
    const fetchUsers = async () => {
      const response = await fetch(`https://randomuser.me/api/?results=100`);
      const { results } = await response.json();
      setUsers(results);
    };
    fetchUsers();
  }, []);

  return { users };
}
