import axios from "axios";
import SectionTitle from "../../Shared/SectionTitle";
import {
  AiOutlineLike,
  AiOutlineDislike,
  AiOutlineShareAlt,
} from "react-icons/ai";
import { BiSolidCommentAdd } from "react-icons/bi";
import { useParams } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { FacebookShareButton } from "react-share";
import useAxiosSecure from "../../CustomHooks/useAxiosSecure";
import { AuthContext } from "../../Provider/AuthProvider";
import Swal from "sweetalert2";

const PostDetails = () => {
  const { user } = useContext(AuthContext);
  const axiosSecure = useAxiosSecure();
  const [singlePost, setSinglePost] = useState({});
  const params = useParams();
  const [change, setIsChange] = useState(false);

  const [comments, setComments] = useState([]);
  const customRefetch = () => {
    setIsChange(!change);
  };

  const formattedTime = new Date(singlePost?.post_time).toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
  });

  // console.log(singlePost);

  const getPostDetails = async () => {
    const res = await axios.get(
      `https://forum-server-nine.vercel.app/posts/${params.id}`
    );
    setSinglePost(res.data);
  };

  const handleLike = async (id) => {
    console.log(id);
    try {
      await axios.put(`https://forum-server-nine.vercel.app/UpVote/${id}`);
      getPostDetails();
    } catch (error) {
      console.error("Error upvoting post:", error);
    }
  };
  const handleDisLike = async (id) => {
    console.log(id);
    try {
      await axios.put(`https://forum-server-nine.vercel.app/downVote/${id}`);
      getPostDetails();
    } catch (error) {
      console.error("Error upvoting post:", error);
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Fetch post details
        await getPostDetails();

        // Fetch comments only if singlePost is defined
        if (singlePost) {
          const response = await axios.get(
            `https://forum-server-nine.vercel.app/post-comments/${singlePost._id}`
          );
          setComments(response.data);
          console.log(response.data);
        }
      } catch (error) {
        console.error("Error fetching comments:", error);
      }
    };

    fetchData(); // Call the fetchData function
  }, [singlePost._id, change]);

  const handleComment = async (e, id) => {
    console.log(id);
    e.preventDefault();
    document.getElementById("my_modal_5").close();

    const commentText = e.target.comment.value;
    console.log(commentText);

    const myComment = {
      postId: id,
      email: user.email,
      name: user.displayName,
      comment: commentText,
    };

    const res = await axiosSecure.post("/comment", myComment).then((res) => {
      console.log(res.data);
      if (res.data?.insertedId) {
        customRefetch();
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Your work has been saved",
          showConfirmButton: false,
          timer: 1500,
        });
      }
    });

    console.log(res.data);
  };

  return (
    <div className="mb-24">
      <SectionTitle
        title={"Jwt web Token"}
        subtitle={"Details...."}
      ></SectionTitle>
      <div className="bg-slate-300 mt-24 md:w-4/4 lg:flex space-x-4 w-3/4 px-5 py-6 mx-auto">
        <div className="space-y-4">
          <img
            className="w-[50px] rounded-full"
            src={singlePost?.author_image}
            alt=""
          />
          <h4 className="font-bold">{formattedTime}</h4>
        </div>

        <div className="space-y-5">
          <div>
            <h3 className="text-xl font-bold">{singlePost?.post_title}</h3>
            <a className="font-semibold">
              Tag:-
              <span className="text-blue-800 underline font-semibold">
                {singlePost?.tag}
              </span>
            </a>
          </div>
          <p>{singlePost?.post_description}</p>
          <div className="divider divider-start"></div>
          <div className="space-x-3 lg:flex items-center text-center">
            <button
              onClick={() => handleLike(singlePost._id)}
              className="btn btn-outline btn-info"
            >
              <AiOutlineLike className="text-2xl text-black" />
              {singlePost.upVote}
            </button>
            <button
              onClick={() => handleDisLike(singlePost._id)}
              className="btn btn-outline btn-info"
            >
              <AiOutlineDislike className="text-2xl text-black" />
              {singlePost.downVote}
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
              <FacebookShareButton url={singlePost._id}>
                Facebook
              </FacebookShareButton>
              <AiOutlineShareAlt className="text-2xl text-black" />
            </button>
          </div>

          <div>
            <div className="divider divider-start"></div>
            <h2 className="flex justify-center mx-auto font-bold text-2xl">
              Comments..
            </h2>
            <div className="chat chat-start space-y-4 bg-white p-4 rounded-lg">
              {comments.map((item, index) => (
                <div key={index} className="chat-bubble chat-bubble-info">
                  <div>
                    <p className="font-extralight">{item.email}</p>
                    <h2 className="font-semibold">{item.comment}</h2>
                  </div>
                </div>
              ))}
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
          <form
            className="modal-action flex justify-end items-end mx-auto"
            onSubmit={(e) => handleComment(e, singlePost._id)}
          >
            <textarea
              name="comment"
              className="textarea textarea-warning w-full mt-5"
              placeholder="Comment"
            ></textarea>
            <div className="end" type="button">
              <button className="btn btn-outline btn-accent" type="submit">
                Submit
              </button>
            </div>
          </form>
        </div>
      </dialog>
    </div>
  );
};

export default PostDetails;
