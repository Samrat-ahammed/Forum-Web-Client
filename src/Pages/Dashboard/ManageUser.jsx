import { Helmet } from "react-helmet-async";
import SectionTitle from "../../Shared/SectionTitle";
import { GrUserAdmin } from "react-icons/gr";
import { IoPerson } from "react-icons/io5";
const ManageUser = () => {
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
              {/* row 1 */}
              <tr className="hover">
                <th>1</th>
                <td>Somu</td>
                <td>Nice@gmail.com</td>
                <td className="btn btn-outline btn-sm">
                  <GrUserAdmin />
                </td>
              </tr>
              {/* row 1 */}
              <tr className="hover">
                <th>1</th>
                <td>Somu</td>
                <td>Nice@gmail.com</td>
                <td className="btn btn-outline btn-sm">
                  <IoPerson />
                </td>
                <td>Membership</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ManageUser;
