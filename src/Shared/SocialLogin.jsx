import { FcGoogle } from "react-icons/fc";

const SocialLogin = () => {
  return (
    <button type="button" className="btn btn-outline btn-primary">
      <div className="text-center items-center flex justify-center text-black font-semibold">
        <FcGoogle className="mr-3" /> Google
      </div>
    </button>
  );
};

export default SocialLogin;
