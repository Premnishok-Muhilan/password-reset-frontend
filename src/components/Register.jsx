import { useDispatch, useSelector } from "react-redux"
import { useNavigate } from "react-router-dom";
import { selectEmail, selectName, selectPassword, setEmail, setName, setPassword } from "../features/users/registerSlice";
import userServices from "../services/userServices";

const Register = () => {

    const name = useSelector(selectName);
    const email = useSelector(selectEmail);
    const password = useSelector(selectPassword);

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleRegister = (e) => {
        e.preventDefault();
        
        userServices.register({ name, username: email, password })
            .then(response => {
                alert(response.data.message);
                
                // clear the form
                dispatch(setName(''));
                dispatch(setEmail(''));
                dispatch(setPassword(''));

                setTimeout(() => {
                    navigate('/login');
                }, 500);
            })
            .catch(error => {
                alert(error.response.data.message);
            });
    }

  return (
      <div className="container mt-5">
          <div className="row">
                <div className="col-md-6 offset-md-3">
                    <div className="card">
                        <div className="card-header">
                            <h4>Register</h4>
                        </div>
                        <div className="card-body">
                            <form onSubmit={handleRegister}>
                                <div className="mb-3">
                                    <label htmlFor="name" className="form-label">Name</label>
                                  <input type="text" className="form-control" id="name" 
                                      value={name}
                                      onChange={e => dispatch(setName(e.target.value))}
                                    />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="email" className="form-label">Email</label>
                                  <input type="email" className="form-control" id="email" 
                                        value={email}
                                        onChange={e => dispatch(setEmail(e.target.value))}
                                    />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="password" className="form-label">Password</label>
                                  <input type="password" className="form-control" id="password" 
                                        value={password}
                                        onChange={e => dispatch(setPassword(e.target.value))}
                                    />
                                </div>
                                <button type="submit" className="btn btn-primary">Register</button>
                            </form>
                        </div>
                    </div>
              </div>
          </div>
        </div>
  )
}

export default Register