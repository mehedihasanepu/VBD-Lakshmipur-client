import { Helmet } from "react-helmet";
import { Link, useLocation, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import loginImg from "../../assets/icon/login.gif"
import SocialLogin from "../../component/SocialLogin/SocialLogin";
import useAuth from "../../hook/useAuth";


const Login = () => {
    const { singIn } = useAuth()

    const navigate = useNavigate()
    const location = useLocation();

    const from = location.state?.from?.pathname || "/";



    const handleLogin = (e) => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);

        singIn(email, password)
            .then((result) => {
                const user = result.user;
                console.log(user);

                toast?.success(`${user.displayName} login successfully`)

                navigate(from, { replace: true });
            })
            .catch(error => {
                console.error(error);
                toast.error(`${error.message}`)

            })
    };


    return (

        <>
            <Helmet>
                <title>VBD-Lakshmipur | Login</title>
            </Helmet>
            <div className="hero login py-5 px-7 md:px-16 lg:px-24">

                <div className="hero-content bg-slate-50 bg-opacity-30 w-full flex flex-col lg:flex-row-reverse p-10 shadow-2xl rounded-2xl ">
                    <div className="text-center md:w-1/2 lg:text-left">
                        <img src={loginImg} alt="" />
                    </div>

                    <div className="w-full lg:w-1/2 rounded-xl border-2 border-gray-300 border-opacity-60" >
                        <h2 className="text-center text-4xl pt-4 pb-1 font-bold">Login</h2>
                        <div className="card bg-opacity-50 bg-base-100 pb-5">

                            <form onSubmit={handleLogin} className="pt-3 px-5">
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Email</span>
                                    </label>
                                    <input
                                        type="email"
                                        name="email"
                                        placeholder="email"
                                        className="input input-bordered"
                                    />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Password</span>
                                    </label>
                                    <input
                                        type="password"
                                        name="password"
                                        placeholder="password"
                                        className="input input-bordered"
                                    />
                                    <label className="label">
                                        <a href="#" className="label-text-alt link link-hover">
                                            Forgot password?
                                        </a>
                                    </label>
                                </div>

                                <div className="form-control mt-6">
                                    <input
                                        className="btn bg-[#9eddff] font-bold text-black"
                                        type="submit"
                                        value="Login"
                                    />
                                </div>
                                <p>
                                    <small>
                                        New Here?{" "}
                                        <Link to="/signUp">
                                            <span className="text-blue-700 font-semibold">
                                                Create an account
                                            </span>
                                        </Link>{" "}
                                    </small>
                                </p>
                            </form>

                            <SocialLogin></SocialLogin>
                        </div>
                    </div>
                </div>
            </div>

        </>

    );
};

export default Login