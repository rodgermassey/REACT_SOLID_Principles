import React from "react";
import UserItem from "./User_Item";
import useMaleUsers from "./Use_Male_Users";

export default function Homepage() {
  const { maleUsers } = useMaleUsers();
  return (
    <ol>
      {maleUsers.map((user) => (
        <UserItem user={user} />
      ))}
    </ol>
  );
}

//    fetch('https://jsonplaceholder.typicode.com/posts')
//   .then((response) => response.json())
//   .then((json) => console.log(json));
