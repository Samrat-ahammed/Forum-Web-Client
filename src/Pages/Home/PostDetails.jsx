import SectionTitle from "../../Shared/SectionTitle";
import {
  AiOutlineLike,
  AiOutlineDislike,
  AiOutlineShareAlt,
} from "react-icons/ai";
import { BiSolidCommentAdd } from "react-icons/bi";
import { useLoaderData } from "react-router-dom";
const PostDetails = () => {
  const singlePost = useLoaderData();
  console.log(singlePost);

  const formattedTime = new Date(singlePost.post_time).toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
  });

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
            src={singlePost.author_image}
            alt=""
          />
          <h4 className="font-bold">{formattedTime}</h4>
        </div>

        <div className="space-y-5">
          <div>
            <h3 className="text-xl font-bold">{singlePost.post_title}</h3>
            <a className="font-semibold">
              Tag:-
              <span className="text-blue-800 underline font-semibold">
                {singlePost.tag}
              </span>
            </a>
          </div>
          <p>{singlePost.post_description}</p>
          <div className="divider divider-start"></div>
          <div className="flex items-center text-center space-x-6">
            <button className="btn btn-outline btn-info">
              <AiOutlineLike className="text-2xl text-black" />
            </button>
            <button className="btn btn-outline btn-info">
              <AiOutlineDislike className="text-2xl text-black" />
            </button>

            <div
              onClick={() => document.getElementById("my_modal_5").showModal()}
              className="btn btn-outline btn-info flex"
            >
              <button>
                <BiSolidCommentAdd className="text-2xl text-black" />
              </button>
              <h2 className="text-black">Comment....</h2>
            </div>
            <button className="btn btn-outline btn-info">
              <AiOutlineShareAlt className="text-2xl text-black" />
            </button>
          </div>

          <div>
            <div className="divider divider-start"></div>
            <h2 className="flex justify-center mx-auto font-bold text-2xl">
              Comments..
            </h2>
            <div className="chat chat-start">
              <div className="chat-bubble chat-bubble-primary">
                What kind of nonsense is this
              </div>
            </div>
            <div className="chat chat-start">
              <div className="chat-bubble chat-bubble-secondary">
                Put me on the Council and not make me a Master!??
              </div>
            </div>
            <div className="chat chat-start">
              <div className="chat-bubble chat-bubble-accent">
                Thats never been done in the history of the Jedi. Its insulting!
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex bg-slate-300 mt-24 text-center justify-center space-x-5 py-3">
        <h2 className="btn btn-outline btn-accent">jwt</h2>
        <h2 className="btn btn-outline btn-accent">React</h2>
        <h2 className="btn btn-outline btn-accent">java script</h2>
        <h2 className="btn btn-outline btn-accent">Html</h2>
      </div>

      {/* Open the modal using document.getElementById('ID').showModal() method */}

      <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
        <div className="modal-box">
          <h3 className="font-bold text-lg">Please Give Your Comment </h3>
          <textarea
            className="textarea textarea-warning w-full mt-5"
            placeholder="Comment"
          ></textarea>
          <div className="modal-action">
            <form method="dialog">
              {/* if there is a button in form, it will close the modal */}
              <button className="btn btn-outline btn-accent">Submit</button>
            </form>
          </div>
        </div>
      </dialog>
    </div>
  );
};

export default PostDetails;
