import MemberTable from "./Member-Table.jsx";
import UserInformation from "./UserInformation.js";

const MemberDashboard = () => {
  return (
    <section className="max-w-[1280px]  m-auto border-2 border-red-500 w-11/12 ">
      <p className="headingBold">Members Dashboard</p>
      <UserInformation />
      <div className="flex justify-between mt-8 gap-12 ">
        <div className="w-[50%] rounded-md shadow-cardsShadow">
          <MemberTable />
        </div>
        <div className="w-[50%] rounded-md shadow-cardsShadow">
          Add member form
        </div>
      </div>
    </section>
  );
};

export default MemberDashboard;
