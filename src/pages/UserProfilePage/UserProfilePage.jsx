import { useEffect, useState } from "react";
import {
  Link,
  NavLink,
  Outlet,
  useLocation,
  useNavigate,
  useParams,
} from "react-router-dom";

const UserProfilePage = () => {
  const { userId } = useParams();
  const location = useLocation();

  const navigate = useNavigate();

  const [userData, setUserData] = useState(null); // { }

  console.log("location", location);

  useEffect(() => {
    // API call fetchUserInfo(userId)

    const user = null;

    if (!user) {
      navigate("/users");
    }

    setUserData({
      id: userId,
      name: "Pavlo",
      email: "test@test.com",
      age: "30",
    });
  }, [userId, navigate]);

  const onGoBackClick = () => {
    navigate(location.state ?? "/users");
  };

  return (
    <div>
      {/* <Link to={location.state ?? "/users"}>Go back</Link> */}
      <button onClick={onGoBackClick}>Go back</button>
      user {userId} profile page
      {userData && (
        <div>
          <p>Name: {userData.name}</p>
          <p>Email: {userData.email}</p>
          <p>Age: {userData.age}</p>
        </div>
      )}
      <>
        <NavLink to="personal">Personal</NavLink>
        <NavLink to="education">Education</NavLink>
      </>
      <Outlet />
    </div>
  );
};

export default UserProfilePage;
