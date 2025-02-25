import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

const useAuthStatus = () => {
  const { user } = useSelector((state) => state.auth);

  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [checkStatus, setCheckStatus] = useState(true);

  useEffect(() => {
    user ? setIsLoggedIn(true) : setIsLoggedIn(false);
    setCheckStatus(false);
  }, [user]);

  return { isLoggedIn, checkStatus };
};

export default useAuthStatus;
