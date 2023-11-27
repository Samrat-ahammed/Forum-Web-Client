import { Helmet } from "react-helmet-async";
import Banner from "../Home/Banner";
import { TfiAnnouncement } from "react-icons/tfi";
import useAxiosSecure from "../../CustomHooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";

const AnnouncementPage = () => {
  const axiosPublic = useAxiosSecure();

  const { data: announcement = [] } = useQuery({
    queryKey: ["announcements"],
    queryFn: async () => {
      const res = await axiosPublic.get("/announcements");
      console.log(res.data);
      return res.data;
    },
  });

  return (
    <div className="">
      <Helmet>
        <title>Dev || Announcement</title>
      </Helmet>

      <Banner
        image={"https://i.ibb.co/LCK4HWM/SL-030420-28660-06.jpg"}
        title={"Announcement"}
        subtitle={
          "Announcements are a great way to communicate important information, updates, or events to the users of your forum. You can create a dedicated section for announcements or display them prominently on the homepage. Here's a simple example of how you can structure announcements in your forum"
        }
      />

      {announcement.map((item) => (
        <div key={item._id} className="">
          <div className="bg-slate-300 p-4 rounded-sm mb-24 space-y-5 w-1/2 mx-auto">
            <h2 className="text-3xl font-bold flex items-center text-center">
              Announcement <TfiAnnouncement className="ml-5 text-blue-900" />
            </h2>
            <div className="divider divider-success text-2xl font-semibold text-stone-500">
              {item.title}
            </div>
            <p className="font-semibold">{item.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default AnnouncementPage;
