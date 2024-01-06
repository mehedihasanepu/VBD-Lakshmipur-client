import { Helmet } from "react-helmet";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import useAxiosPublic from "../../hook/useAxiosPublic";
import useAuth from "../../hook/useAuth";
import SocialLogin from "../../component/SocialLogin/SocialLogin";
import singUp from "../../assets/icon/singup.gif"
import Loading from "../../component/Loading/Loading";
import { useState } from "react";

const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;


const SignUp = () => {
  const axiosPublic = useAxiosPublic()
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const { createUser, updateUserProfile } = useAuth();
  const navigate = useNavigate();


  // image hosting 



  const onSubmit = async (data) => {
    console.log(data);
    setLoading(!loading)
    const imageFile = { image: data.image[0] }
    const res = await axiosPublic.post(image_hosting_api, imageFile, {
      headers: {
        'content-type': 'multipart/form-data'
      }
    })


    if (res.data.success) {
      createUser(data.email, data.password)
        .then((result) => {
          const loggedUser = result.user;
          console.log(loggedUser);
          let status = "pending";

          if (
            data.position === "General Member" ||
            data.position === "Visitor" ||
            data.position === "other"
          ) {
            status = "approve";
          }
          else {
            status = "padding"
          }
          updateUserProfile(data.name, res.data.data.display_url)
            .then(() => {
              console.log('user profile info updated')
              const userInfo = {
                name: data.name,
                email: data.email,
                image: res.data.data.display_url,
                position: data.position,
                status: status
              }
              console.log(userInfo);
              axiosPublic.post('/users', userInfo)
                .then(res => {
                  if (res.data.insertedId) {
                    console.log('user added to the database');
                    reset();
                    setLoading(!loading)
                    Swal.fire({
                      position: 'top-end',
                      icon: 'success',
                      title: 'User created successfully.',
                      showConfirmButton: false,
                      timer: 1500
                    });
                    navigate('/');
                  }
                })
            })
        })
        .catch((error) => {
          console.error(error)
          setError(error.message)
          setLoading(false)
        });


    }


  };
  return (
    <>
      <Helmet>
        <title>ShareRank| Sign Up</title>
      </Helmet>
      {loading ? <Loading></Loading> : null}
      <div className="hero sign-up pt-3 pb-12 px-7 md:px-16 lg:px-24">
        <div className="hero-content bg-slate-50 bg-opacity-30 w-full flex flex-col lg:flex-row  p-6 shadow-2xl rounded-2xl">
          <div className="text-center md:w-1/2 lg:text-left">
            <img src={singUp} alt="" />
          </div>

          <div className=" w-full lg:w-1/2 rounded-2xl border-2 border-gray-300 border-opacity-60">
            <h2 className="text-center text-4xl  text-blue-900 font-bold pt-4 pb-1">Sign Up</h2>
            <div className="card  bg-opacity-50 bg-base-100 pb-5">
              <form onSubmit={handleSubmit(onSubmit)} className="pt-3 px-5">
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Name</span>
                  </label>
                  <input
                    type="text"
                    {...register("name", { required: true })}
                    name="name"
                    placeholder="name"
                    className="input input-bordered"
                  />
                  {errors.name && (
                    <span className="text-red-600">Name is required</span>
                  )}
                </div>
                <div className="form-control pt-2">
                  <label>Position</label>
                  <select {...register("position")} className="p-2 outline outline-1  outline-gray-300 rounded-md">
                    <option value="General Member">General Member</option>
                    <option value="Institute Representative">Institute Representative</option>
                    <option value="Core Volunteer">Core Volunteer</option>
                    <option value="Committee Member">Committee Member</option>
                    <option value="District Board Member">District Board Member</option>
                    <option value="Visitor">Visitor</option>
                    <option value="other">other</option>
                  </select>
                  {errors.position && (
                    <span className="text-red-600">Position is required</span>
                  )}
                </div>

                <div className="form-control w-full my-6">
                  <input {...register('image', { required: true })} type="file" className="file-input file-input-bordered file-input-info w-full max-w-xs" />
                </div>


                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Email</span>
                  </label>
                  <input
                    type="email"
                    {...register("email", { required: true })}
                    name="email"
                    placeholder="email"
                    className="input input-bordered"
                  />
                  {errors.email && (
                    <span className="text-red-600">Email is required</span>
                  )}
                </div>

                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Password</span>
                  </label>
                  <input
                    type="password"
                    {...register("password", {
                      required: true,
                      minLength: 6,
                      maxLength: 20,
                      pattern:
                        /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z])/,
                    })}
                    name="password"
                    placeholder="password"
                    className="input input-bordered"
                  />
                  {errors.password?.type === "required" && (
                    <p className="text-red-600">Password is required</p>
                  )}
                  {errors.password?.type === "minLength" && (
                    <p className="text-red-600">
                      Password must be 6 characters
                    </p>
                  )}
                  {errors.password?.type === "maxLength" && (
                    <p className="text-red-600">
                      Password must be less than 20 characters
                    </p>
                  )}
                  {errors.password?.type === "pattern" && (
                    <p className="text-red-600">
                      Password must have one Uppercase one lower case, one
                      number and one special character.
                    </p>
                  )}
                  {
                    error && <p className="text-red-600">
                      {error}
                    </p> 
                  }
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
                    value="Sing Up"
                  />
                </div>
                <p className="pt-2">
                  <small >
                    Already have an account?{" "}
                    <Link to="/login">
                      <span className="text-blue-700 font-semibold">Login</span>
                    </Link>
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

export default SignUp;
