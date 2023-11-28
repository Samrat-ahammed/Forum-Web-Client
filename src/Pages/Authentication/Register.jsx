import { useContext } from "react";
import { Helmet } from "react-helmet-async";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import useAxiosPublic from "../../CustomHooks/useAxiosPublic";

const Register = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const form = location.state?.from?.pathname || "/";

  const { createdUser, updateUserProfile } = useContext(AuthContext);
  const axiosPublic = useAxiosPublic();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    createdUser(data.email, data.password)
      .then((result) => {
        console.log(result.user);

        updateUserProfile(data.name, data.photoUrl).then(() => {
          console.log("user profile info updated");
          const userInfo = {
            name: data.name,
            email: data.email,
            badge: "Bronze",
          };
          axiosPublic.post("/users", userInfo).then((res) => {
            if (res.data.insertedId) {
              console.log("user add in database");

              Swal.fire({
                position: "top-end",
                icon: "success",
                title: "User created successfully.",
                showConfirmButton: false,
                timer: 1500,
              });
              navigate(form, { replace: true });
            }
          });
        });

        // const userInfo = {
        //   name: data.name,
        //   email: data.email,
        // };
        // axiosPublic.post("/users", userInfo).then((res) => {
        //   if (res.data.insertedId) {
        //     console.log("user add in database");
        //     Swal.fire({
        //       position: "top-end",
        //       icon: "success",
        //       title: "User created successfully.",
        //       showConfirmButton: false,
        //       timer: 1500,
        //     });
        //   }
        // });

        // Swal.fire({
        //   title: "Created Your Account",
        //   showClass: {
        //     popup: `
        //       animate__animated
        //       animate__fadeInUp
        //       animate__faster
        //     `,
        //   },
        //   hideClass: {
        //     popup: `
        //       animate__animated
        //       animate__fadeOutDown
        //       animate__faster
        //     `,
        //   },
        // });
      })
      .catch((err) => console.error(err));
  };

  return (
    <div>
      <Helmet>
        <title>Dev || Register</title>
      </Helmet>
      <div>
        <div
          className="hero min-h-screen"
          style={{
            backgroundImage: "url(https://i.ibb.co/r0RVK4R/loginImg.jpg)",
          }}
        >
          <div className="hero-overlay"></div>

          <div className="w-[600px] text-center text-neutral-content">
            <div className="">
              <label className="text-4xl font-bold">Register Now!</label>
              <div className="flex-col w-full">
                <div className="w-full shadow-2xl">
                  <form
                    onSubmit={handleSubmit(onSubmit)}
                    className="card-body w-full"
                  >
                    <div className="form-control">
                      <label className="label">
                        <span className="label-text">Your Name</span>
                      </label>
                      <input
                        {...register("name", { required: true })}
                        type="text"
                        placeholder="name"
                        className="input input-bordered"
                        required
                      />
                    </div>
                    {errors.name && (
                      <span className="text-red-700">
                        Name field is required
                      </span>
                    )}
                    <div className="form-control">
                      <label className="label">
                        <span className="label-text">Email</span>
                      </label>
                      <input
                        {...register("email", { required: true })}
                        type="email"
                        placeholder="email"
                        className="input input-bordered"
                        required
                      />
                    </div>
                    {errors.name && (
                      <span className="text-red-700">Email Field required</span>
                    )}
                    <div className="form-control">
                      <label className="label">
                        <span className="label-text">Photo URL</span>
                      </label>
                      <input
                        {...register("photoUrl", { required: true })}
                        type="text"
                        placeholder="URL"
                        className="input input-bordered"
                        required
                      />
                    </div>
                    {errors.photoUrl && (
                      <span className="text-red-700">
                        PhotoURL Field is required
                      </span>
                    )}
                    <div className="form-control">
                      <label className="label">
                        <span className="label-text">Password</span>
                      </label>
                      <input
                        {...register("password", { required: true })}
                        type="password"
                        placeholder="password"
                        className="input input-bordered"
                        required
                      />

                      {errors.password && (
                        <span className="text-red-700">
                          Password Field is required
                        </span>
                      )}
                      <label className="label">
                        <a href="#" className="label-text-alt link link-hover">
                          Forgot password?
                        </a>
                      </label>
                    </div>
                    <div className="form-control mt-6">
                      <button
                        type="submit"
                        className="btn btn-outline btn-primary"
                      >
                        SignUp
                      </button>
                      <h3 className="mt-10 text-black font-semibold">
                        Already Have an Account ?
                        <Link
                          to={"/login"}
                          className="font-bold text-blue-900 btn btn-ghost"
                        >
                          Login
                        </Link>
                      </h3>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
