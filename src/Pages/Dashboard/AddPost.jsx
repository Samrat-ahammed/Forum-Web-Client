import { useForm } from "react-hook-form";
import SectionTitle from "../../Shared/SectionTitle";
import { Helmet } from "react-helmet-async";

const AddPost = () => {
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    console.log(data);
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
              {...register("title", { required: true })}
              type="text"
              placeholder="Post Title"
              className="input input-bordered w-full"
            />
          </div>
          <div className="flex space-x-5">
            <div className="w-1/2">
              <label className="label">
                <span className="label-text font-bold">UpVote</span>
              </label>
              <input
                {...register("upVote", { required: true })}
                type="text"
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
                type="text"
                placeholder="0"
                className="input input-bordered w-full"
              />
            </div>
          </div>
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
              <span className="label-text font-bold">DownVote</span>
            </label>
            <textarea
              {...register("description")}
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
