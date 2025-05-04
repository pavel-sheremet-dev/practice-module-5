import { useEffect, useState } from "react";
import { Link, useLocation, useSearchParams } from "react-router-dom";

const UsersPage = () => {
  const [users, setUsers] = useState([]);
  const location = useLocation();

  const [searchParams, setSearchParams] = useSearchParams();

  const maxAge = searchParams.get("maxAge");

  useEffect(() => {
    // API call fetchAllUsers()

    setUsers([
      {
        id: "1234",
        name: "Pavlo",
        email: "test@mail.com",
        age: 30,
      },
      {
        id: "333",
        name: "Nadiiya",
        email: "test2@mail.com",
        age: 20,
      },
      {
        id: "tesadsfds",
        name: "Sasha",
        email: "sasha@mail.com",
        age: 25,
      },
    ]);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;

    const value = form.elements.age.value;

    if (!value) {
      searchParams.delete("maxAge");
      setSearchParams(searchParams);
      return;
    }

    searchParams.set("maxAge", value);
    setSearchParams(searchParams);
  };

  const filteredUsers = users.filter((user) => {
    if (!maxAge) return true;
    return user.age < Number(maxAge);
  });

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          MAX AGE:
          <input type="number" name="age" defaultValue={maxAge} />
        </label>
        <button type="submit">SET AGE</button>
      </form>
      {filteredUsers.map((user) => (
        <Link to={`/users/${user.id}`} key={user.id} state={location}>
          {user.name}
        </Link>
      ))}
    </div>
  );
};

export default UsersPage;
