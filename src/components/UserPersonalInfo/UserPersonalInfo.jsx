import { useEffect } from "react";
import { useParams } from "react-router-dom";

const UserPersonalInfo = () => {
  const { userId } = useParams();

  useEffect(() => {
    // fetchUserPersonalInfo(userId)
  }, [userId]);

  return <h2>UserPersonalInfo</h2>;
};

export default UserPersonalInfo;
