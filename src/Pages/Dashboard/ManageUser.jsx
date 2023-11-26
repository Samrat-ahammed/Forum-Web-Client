import { Helmet } from "react-helmet-async";
import SectionTitle from "../../Shared/SectionTitle";
import { GrUserAdmin } from "react-icons/gr";
import { IoPerson } from "react-icons/io5";
import useAxiosSecure from "../../CustomHooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import Swal from "sweetalert2";
const ManageUser = () => {
  const axiosSecure = useAxiosSecure();

  const { data: users = [], refetch } = useQuery({
    queryKey: ["user"],
    queryFn: async () => {
      const res = await axiosSecure.get("/users");
      return res.data;
    },
  });

  const handleMakeAdmin = (item) => {
    console.log(item._id);

    axiosSecure.patch(`/users/admin/${item._id}`).then((res) => {
      console.log(res.data);
      if (res.data.modifiedCount > 0) {
        refetch();
        Swal.fire({
          title: "Deleted!",
          text: "Your file has been deleted.",
          icon: "success",
        });
      }
    });
  };
  return (
    <div className="bg-slate-300 p-8">
      <Helmet>
        <title>Dev || Manage-User</title>
      </Helmet>
      <SectionTitle title={"Manage User"}></SectionTitle>
      <div className="mt-10">
        <div className="overflow-x-auto">
          <table className="table">
            {/* head */}
            <thead>
              <tr>
                <th>#</th>
                <th>User-Name</th>
                <th>User Email</th>
                <th>Make Admin</th>
                <th>Subscription Status</th>
              </tr>
            </thead>
            <tbody>
              {users.map((item, index) => (
                <tr key={item._id} className="hover">
                  <th>{index + 1}</th>
                  <td>{item.name}</td>
                  <td>{item.email}</td>
                  <td
                    onClick={() => handleMakeAdmin(item)}
                    className="btn btn-outline btn-sm"
                  >
                    {item.role === "admin" ? <GrUserAdmin /> : <IoPerson />}
                  </td>
                  <td>Membership</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ManageUser;
