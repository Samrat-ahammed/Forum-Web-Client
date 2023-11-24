import SectionTitle from "../../Shared/SectionTitle";
import { AiOutlineLike } from "react-icons/ai";

const PostDetails = () => {
  return (
    <div className="mb-24">
      <SectionTitle title={"Jwt web Token"} subtitle={"Details"}></SectionTitle>
      <div className="bg-slate-300 mt-24 flex space-x-4 w-3/4 px-5 py-6  mx-auto">
        <div>
          <img
            className="w-[50px] rounded-full"
            src="https://i.ibb.co/vmTky5j/jake-nackos-IF9-TK5-Uy-KI-unsplash.jpg"
            alt=""
          />
          <h4>11:30 Hours</h4>
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
          <div>
            <AiOutlineLike className="text-3xl" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostDetails;
