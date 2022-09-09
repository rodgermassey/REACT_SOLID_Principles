export default function UserItem({ user }) {
  return (
    <div>
      <li>
        {user.gender}
        <br />
        {user.name.first}
        <br />
        {user.name.last}
      </li>
      <br />
      <br />
    </div>
  );
}
