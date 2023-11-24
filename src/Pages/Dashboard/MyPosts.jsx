import { AiOutlineLike } from "react-icons/ai";
import { BiSolidCommentAdd } from "react-icons/bi";
import { MdDelete } from "react-icons/md";
import SectionTitle from "../../Shared/SectionTitle";
import { Helmet } from "react-helmet-async";

const MyPosts = () => {
  return (
    <div className="bg-slate-300 p-8 mx-auto space-y-5">
      <Helmet>
        <title>Dev || My-Post</title>
      </Helmet>
      <SectionTitle title={"My Posts"} subtitle={""}></SectionTitle>
      <div className="grid grid-cols-4 gap-5">
        <div className="card bg-base-100 shadow-xl">
          <div className="card-body">
            <h2 className="card-title">What is React?</h2>
            <div className="flex justify-between">
              <div>
                <p className="flex items-center text-blue-800 font-bold btn btn-sm btn-outline">
                  41
                  <AiOutlineLike />
                </p>
              </div>
              <div className="btn btn-sm btn-outline flex">
                <button>
                  <BiSolidCommentAdd className="text-2xl text-black" />
                </button>
              </div>
            </div>
            <div className="btn btn-outline btn-sm flex">
              <button>
                <MdDelete className="text-2xl text-black" />
              </button>
              <h2 className="text-black">Delete</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyPosts;
