import {useCallback} from "react";
import axios from "axios";
import {useLocation, useNavigate} from "react-router-dom";

export default function LogoutButton () {
  const navigate = useNavigate();
  const location = useLocation();

  const logout = useCallback(async () => {
    await axios.get("/api/app-users/logout");
    navigate("/login?redirect=" + encodeURIComponent(location.pathname + location.search));
    window.document.cookie = "";
  }, [location, navigate]);

  return (
    <button onClick={logout}>Logout</button>
  )
}