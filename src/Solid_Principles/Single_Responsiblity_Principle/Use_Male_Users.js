import React from "react";
import useUsers from "./Use_Users";
import getMaleUsers from "./utils";

export default function useMaleUsers() {
  const { users } = useUsers();
  const maleUsers = React.useMemo(() => {
    return getMaleUsers(users);
  }, [users]);
  return { maleUsers };
}
