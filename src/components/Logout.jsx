import { useEffect } from "react";
import userServices from "../services/userServices";
import { useNavigate } from "react-router-dom";

const Logout = () => {

    const navigate = useNavigate();

    useEffect(() => {
        userServices.logout()
            .then(() => {
                // redirect the user to the home page
                setTimeout(() => {
                    navigate('/');
                }, 500);
            })
            .catch((error) => {
                navigate('/');
            });
    }, []);

  return (
    <div>Logging out...</div>
  )
}

export default Logout;