import { useForm } from "react-hook-form";
import SectionTitle from "../../Shared/SectionTitle";
import { Helmet } from "react-helmet-async";
import { useContext, useEffect } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import useAxiosSecure from "../../CustomHooks/useAxiosSecure";
import Swal from "sweetalert2";
import useAdmin from "../../CustomHooks/useAdmin";

const AddPost = () => {
  const { user } = useContext(AuthContext);
  const { register, handleSubmit } = useForm();
  const axiosSecure = useAxiosSecure();
  const [isAdmin] = useAdmin();

  // console.log(profileData?.badge);
  // console.log(isAdmin);

  useEffect(() => {
    axiosSecure.get(`/singleUser/${user?.email}`).then((res) => {
      console.log(res.data);
    });
  }, [axiosSecure, user?.email]);

  const onSubmit = async (data) => {
    console.log(data);

    const userProfile = await axiosSecure.get(`/singleUser/${user?.email}`);

    console.log("Response from API:", userProfile.data);
    const userBadge = userProfile?.data?.badge;
    console.log("User Badge:", userBadge);

    if (userBadge === "Bronze") {
      const userPosts = await axiosSecure.get(
        `/singlePost?email=${user?.email}`
      );

      if (userPosts.data.length >= 5) {
        Swal.fire({
          icon: "error",
          title: "Oops...You have reached the limit",
          text: "You have reached the limit of 5 posts as a Bronze user! Go To Membership Page",
        });
        return;
      } else {
        const info = {
          author_name: user?.displayName,
          email: user?.email,
          author_image: user?.photoURL,
          post_title: data.post_title,
          post_description: data.post_description,
          tag: data.tag,
          // upVote: data.upVote,
          // downVote: data.downVote,
          post_time: new Date(),
        };

        axiosSecure.post("/posts", info).then((res) => {
          if (res.data?.insertedId) {
            Swal.fire({
              title: "Add Your Post",
              showClass: {
                popup: `
                animate__animated
                animate__fadeInUp
                animate__faster
              `,
              },
              hideClass: {
                popup: `
                animate__animated
                animate__fadeOutDown
                animate__faster
              `,
              },
            });
          }

          console.log(res.data);
        });
      }
    } else {
      const info = {
        author_name: user?.displayName,
        email: user?.email,
        author_image: user?.photoURL,
        post_title: data.post_title,
        post_description: data.post_description,
        tag: data.tag,
        // upVote: data.upVote,
        // downVote: data.downVote,
        post_time: new Date(),
      };

      axiosSecure.post("/posts", info).then((res) => {
        if (res.data?.insertedId) {
          Swal.fire({
            title: "Add Your Post",
            showClass: {
              popup: `
              animate__animated
              animate__fadeInUp
              animate__faster
            `,
            },
            hideClass: {
              popup: `
              animate__animated
              animate__fadeOutDown
              animate__faster
            `,
            },
          });
        }

        console.log(res.data);
      });
    }
  };

  return (
    <div className="bg-slate-300 p-8 mx-auto">
      <Helmet>
        <title>Dev || Add-Post</title>
      </Helmet>
      <SectionTitle
        title={"Add Post"}
        subtitle={"Add Your Post"}
      ></SectionTitle>

      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <div className="">
            <label className="label">
              <span className="label-text font-bold">Post Title</span>
            </label>
            <input
              {...register("post_title", { required: true })}
              type="text"
              placeholder="Post Title"
              className="input input-bordered w-full"
            />
          </div>
          {/* <div className="flex space-x-5">
            <div className="w-1/2">
              <label className="label">
                <span className="label-text font-bold">UpVote</span>
              </label>
              <input
                {...register("upVote", { required: true })}
                type="number"
                placeholder="0"
                className="input input-bordered w-full"
              />
            </div>
            <div className="w-1/2">
              <label className="label">
                <span className="label-text font-bold">DownVote</span>
              </label>
              <input
                {...register("downVote", { required: true })}
                type="number"
                placeholder="0"
                className="input input-bordered w-full"
              />
            </div>
          </div> */}
          <div className="w-1/2">
            <label className="label">
              <span className="label-text">Select Your Tag</span>
            </label>
            <select
              defaultValue={"default"}
              className="select select-primary w-full"
              {...register("tag")}
            >
              <option disabled value="default">
                Select Your Tag
              </option>
              <option value="HTML">HTML</option>
              <option value="ReactJS">ReactJS</option>
              <option value="Java">Java</option>
              <option value="Python">Python</option>
              <option value="CSS">CSS</option>
              <option value="NodeJS">NodeJS</option>
              <option value="Django">Django</option>
              <option value="MongoDB">MongoDB</option>
              <option value="SQLite">JavaScSQLiteript</option>
            </select>
          </div>
          <div className="w-full mt-3">
            <label className="label">
              <span className="label-text font-bold">Post Description</span>
            </label>
            <textarea
              {...register("post_description")}
              placeholder="Post Description"
              className="textarea textarea-bordered textarea-lg w-full"
            ></textarea>
          </div>
        </div>

        <input
          className="btn btn-outline btn-success items-center text-center mx-auto flex justify-center mt-10"
          type="submit"
          value="Add Post"
        />
      </form>
    </div>
  );
};

export default AddPost;
