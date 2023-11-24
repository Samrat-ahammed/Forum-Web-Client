import SectionTitle from "../../Shared/SectionTitle";
import {
  AiOutlineLike,
  AiOutlineDislike,
  AiOutlineShareAlt,
} from "react-icons/ai";
import { BiSolidCommentAdd } from "react-icons/bi";
const PostDetails = () => {
  return (
    <div className="mb-24">
      <SectionTitle
        title={"Jwt web Token"}
        subtitle={"Details...."}
      ></SectionTitle>
      <div className="bg-slate-300 mt-24 flex space-x-4 w-3/4 px-5 py-6  mx-auto">
        <div className="space-y-4">
          <img
            className="w-[50px] rounded-full"
            src="https://i.ibb.co/vmTky5j/jake-nackos-IF9-TK5-Uy-KI-unsplash.jpg"
            alt=""
          />
          <h4 className="font-bold">11:30 Hours</h4>
        </div>

        <div className="space-y-5">
          <h3 className="text-xl font-bold">JWT stands for JSON Web Token</h3>
          <p>
            JWT stands for JSON Web Token. It is a compact, URL-safe means of
            representing claims to be transferred between two parties. These
            claims are typically used to identify the user and to provide
            additional information about the user. JWTs can be digitally signed,
            and the signature can be verified to ensure the integrity and
            authenticity of the claims.
          </p>
          <div className="divider divider-start"></div>
          <div className="flex items-center text-center space-x-6">
            <button className="btn btn-outline btn-info">
              <AiOutlineLike className="text-2xl text-black" />
            </button>
            <button className="btn btn-outline btn-info">
              <AiOutlineDislike className="text-2xl text-black" />
            </button>

            <div className="btn btn-outline btn-info flex">
              <button>
                <BiSolidCommentAdd className="text-2xl text-black" />
              </button>
              <h2 className="text-black">Comment....</h2>
            </div>
            <button className="btn btn-outline btn-info">
              <AiOutlineShareAlt className="text-2xl text-black" />
            </button>
          </div>
        </div>
      </div>
      <div className="flex bg-slate-300 mt-24 text-center justify-center space-x-5 py-3">
        <h2 className="btn btn-outline btn-accent">jwt</h2>
        <h2 className="btn btn-outline btn-accent">React</h2>
        <h2 className="btn btn-outline btn-accent">java script</h2>
        <h2 className="btn btn-outline btn-accent">Html</h2>
      </div>
    </div>
  );
};

export default PostDetails;
