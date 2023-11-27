import { Helmet } from "react-helmet-async";
import SectionTitle from "../../Shared/SectionTitle";
import { useForm } from "react-hook-form";
import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import useAxiosSecure from "../../CustomHooks/useAxiosSecure";
import Swal from "sweetalert2";

const MakeAnnouncement = () => {
  const { register, handleSubmit } = useForm();

  const axiosSecure = useAxiosSecure();

  const { user } = useContext(AuthContext);

  const onSubmit = async (data) => {
    console.log(data);

    const info = {
      author_name: user?.displayName,
      email: user?.email,
      author_image: user?.photoURL,
      title: data.title,
      description: data.description,
    };

    const res = axiosSecure.post("/announcement", info).then((res) => {
      if (res.data?.insertedId) {
        Swal.fire({
          title: "Add Your Announcement",
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
    console.log(res);
  };

  return (
    <div className="bg-slate-200">
      <Helmet>
        <title>Dev || Announcement</title>
      </Helmet>
      <div></div>
      <SectionTitle
        title={"Make announcement"}
        subtitle={"Make announcement for your user"}
      ></SectionTitle>

      <div>
        <div className="bg-slate-300 p-8 mx-auto">
          <form onSubmit={handleSubmit(onSubmit)}>
            <div>
              <div className="">
                <label className="label">
                  <span className="label-text font-bold">
                    Announcement Title
                  </span>
                </label>
                <input
                  {...register("title", { required: true })}
                  type="text"
                  placeholder="Announcement Title"
                  className="input input-bordered w-full"
                />
              </div>

              <div className="w-full mt-3">
                <label className="label">
                  <span className="label-text font-bold">
                    Announcement Description
                  </span>
                </label>
                <textarea
                  {...register("description")}
                  placeholder="Announcement Description"
                  className="textarea textarea-bordered textarea-lg w-full"
                ></textarea>
              </div>
            </div>

            <input
              className="btn btn-outline btn-success items-center text-center mx-auto flex justify-center mt-10"
              type="submit"
              value="Add Announcement"
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default MakeAnnouncement;
