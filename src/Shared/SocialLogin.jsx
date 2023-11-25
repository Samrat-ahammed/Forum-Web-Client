import { useContext } from "react";
import { FcGoogle } from "react-icons/fc";
import { AuthContext } from "../Provider/AuthProvider";

const SocialLogin = () => {
  const { googleSign } = useContext(AuthContext);

  const handleGoogleLogin = () => {
    googleSign()
      .then((result) => console.log(result.user))
      .catch((err) => console.error(err));
  };

  return (
    <button
      onClick={handleGoogleLogin}
      type="button"
      className="btn btn-outline btn-primary"
    >
      <div className="text-center items-center flex justify-center text-black font-semibold">
        <FcGoogle className="mr-3" /> Google
      </div>
    </button>
  );
};

export default SocialLogin;
