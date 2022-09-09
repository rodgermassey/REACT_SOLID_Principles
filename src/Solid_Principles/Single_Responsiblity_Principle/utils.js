export default function getMaleUsers(users) {
  const maleUsers = users.filter((user) => user.gender === "male");
  return maleUsers;
}
