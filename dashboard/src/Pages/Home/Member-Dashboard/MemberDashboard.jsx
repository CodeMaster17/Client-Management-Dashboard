import MemberTable from "./Member-Table.jsx";
import UserInformation from "./UserInformation.jsx";

const MemberDashboard = () => {
  return (
    <section className="max-w-[1280px]  m-auto w-11/12 ">
      <p className="headingBold">Members Dashboard</p>
      <UserInformation />
      <div className="flex justify-between mt-8 gap-12  w-full">
        <MemberTable />

      </div>
    </section>
  );
};

export default MemberDashboard;
