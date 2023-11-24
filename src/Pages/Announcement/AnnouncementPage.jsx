import { Helmet } from "react-helmet-async";
import Banner from "../Home/Banner";
import { TfiAnnouncement } from "react-icons/tfi";

const AnnouncementPage = () => {
  return (
    <div className="bg-slate-200">
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

      <div className="">
        <div className="bg-slate-300 p-4 rounded-sm mb-24 space-y-5 w-1/2 mx-auto">
          <h2 className="text-3xl font-bold flex items-center text-center">
            Announcement <TfiAnnouncement className="ml-5 text-blue-900" />
          </h2>
          <div className="divider divider-success"></div>
          <p className="font-semibold">
            JWT stands for JSON Web Token. It is a compact, URL-safe means of
            representing claims to be transferred between two parties. These
            claims are typically used to identify the user and to provide
            additional information about the user. JWTs can be digitally signed,
            and the signature can be verified to ensure the integrity and
            authenticity of the claims.
          </p>
        </div>
        <div className="bg-slate-300 p-4 rounded-sm mb-24 space-y-5 w-1/2 mx-auto">
          <h2 className="text-3xl font-bold flex items-center text-center">
            Announcement <TfiAnnouncement className="ml-5 text-blue-900" />
          </h2>
          <div className="divider divider-success"></div>
          <p className="font-semibold">
            JWT stands for JSON Web Token. It is a compact, URL-safe means of
            representing claims to be transferred between two parties. These
            claims are typically used to identify the user and to provide
            additional information about the user. JWTs can be digitally signed,
            and the signature can be verified to ensure the integrity and
            authenticity of the claims.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AnnouncementPage;
