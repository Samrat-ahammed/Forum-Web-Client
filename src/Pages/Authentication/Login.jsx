import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import SocialLogin from "../../Shared/SocialLogin";
import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import Swal from "sweetalert2";

const Login = () => {
  const { signInUser } = useContext(AuthContext);

  const handleLogin = (event) => {
    event.preventDefault();

    const from = event.target;
    const email = from.email.value;
    const password = from.password.value;

    console.log(email, password);

    signInUser(email, password)
      .then((result) => {
        Swal.fire({
          icon: "success",
          title: "Login Successfully",
          text: "",
          footer: "",
        });
        console.log(result.user);
      })
      .catch((err) => console.error(err));
  };

  return (
    <div>
      <Helmet>
        <title>Dev || Login</title>
      </Helmet>
      <div
        className="hero min-h-screen"
        style={{
          backgroundImage: "url(https://i.ibb.co/r0RVK4R/loginImg.jpg)",
        }}
      >
        <div className="hero-overlay"></div>

        <div className="w-[600px] text-center text-neutral-content">
          <div className="">
            <label className="text-4xl font-bold">Login Now!</label>
            <div className="flex-col w-full">
              <div className="w-full shadow-2xl">
                <form onSubmit={handleLogin} className="card-body w-full">
                  <SocialLogin></SocialLogin>
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">Email</span>
                    </label>
                    <input
                      name="email"
                      type="email"
                      placeholder="email"
                      className="input input-bordered"
                      required
                    />
                  </div>
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">Password</span>
                    </label>
                    <input
                      name="password"
                      type="password"
                      placeholder="password"
                      className="input input-bordered"
                      required
                    />
                    <label className="label">
                      <a href="#" className="label-text-alt link link-hover">
                        Forgot password?
                      </a>
                    </label>
                  </div>
                  <div className="form-control mt-6">
                    <input
                      className="btn btn-outline btn-primary"
                      type="submit"
                      value="Login"
                    />

                    <h3 className="mt-10 text-black font-semibold">
                      New Here ?
                      <Link
                        to={"/register"}
                        className="font-bold text-blue-900 btn btn-ghost"
                      >
                        Register
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
  );
};

export default Login;
