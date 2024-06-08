import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from '../../provider/AuthProvider';
import Swal from 'sweetalert2';
import SocialLogin from '../../component/SocialLogin/SocialLogin';


const Login = () => {

    const { logIn, } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation()
    const from = location.state?.from?.pathname || "/";


    const handleSigIn = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        // console.log(email, password);
        logIn(email, password)
            .then(result => {
                const user = result.user;
                console.log(user)
                Swal.fire({
                    icon: "success",
                    title: "logged successfully",
                    timer: 1500
                });
                form.reset();
                navigate(from, { replace: true })
            })
            .catch(error => {
                console.log(error)
            })
    }

    return (
        <div className="min-h-screen bg-base-200 md:py-6">
            <div className="card mx-auto shrink-0 max-w-sm shadow-2xl bg-base-100">
                <div>
                    <h2 className='text-center pt-2 font-bold text-1xl'>Student SignIn</h2>
                </div>
                <form onSubmit={handleSigIn} className="card-body">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" name="email" placeholder="email" className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input type="password" name="password" placeholder="password" className="input input-bordered" />
                        <label className="label">
                            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                        </label>
                    </div>
                    <div className="form-control mt-6">
                        <input className="btn btn-outline" type="submit" value="logIn" />
                    </div>
                </form>
                <div className='text-center pb-2 capitalize'>
                    <p>New to account? <Link to={'/signUp'} className='text-red-400 hover:underline'>Sign Up</Link></p>
                    <SocialLogin></SocialLogin>
                </div>
            </div>
        </div>
    );
};

export default Login;