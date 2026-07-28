import { useEffect, useState } from "react";

export default function UserListPage() {
  const [users, setUsers] = useState<TypeUser[]>([]);
  async function getUsers() {
    try {
      const res = await fetch("https://fakestoreapi.com/users");
      const data = await res.json();
      setUsers(data as TypeUser[]);
    } catch (err) {
      console.error(err);
    }
  }
  useEffect(() => {
    getUsers();
  }, []);
  return (
    <main>
      <style>{`
                table, th, td {
  border:1px solid black;
  padding: 1rem;
}
                `}</style>
      <section>
        <table>
          <tr>
            <th>id</th>
            <th>usernam</th>
            <th>email</th>
            <th>password</th>
          </tr>
          {users.map((user) => {
            return (
              <tr key={user.id}>
                <td>{user.id}</td>
                <td>{user.username}</td>
                <td>{user.email}</td>
                <td>{user.password}</td>
              </tr>
            );
          })}
        </table>
      </section>
    </main>
  );
}

type TypeUser = {
  id: number;
  username: string;
  email: string;
  password: string;
};
