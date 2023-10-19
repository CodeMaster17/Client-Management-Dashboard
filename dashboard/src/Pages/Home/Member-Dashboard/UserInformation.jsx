import React, { useEffect, useState } from "react";

import { IoPersonOutline } from "react-icons/io5";
import { allusergetfunc } from "../../../Services/user-api-call";
const UserInformation = () => {
  const [alluserdata, setAllUserData] = useState([]);
  const [maleData, setMaledata] = useState([]);
  const [femaleData, setFemaledata] = useState([]);
  const [activeMembersData, setActiveMembersData] = useState([]);
  const [inactiveMembersData, setInActiveMembersData] = useState([]);

  const allUserGet = async () => {
    const response = await allusergetfunc();
    if (response.status === 200) {
      console.log(response.data)
      setAllUserData(response.data);
      const MaleData = alluserdata.filter((item) => item.gender === "Male");
      const FemaleData = alluserdata.filter((item) => item.gender === "Female");
      const filteredActiveMembers = alluserdata.filter(
        (item) => item.status === "Active"
      );
      const filteredInActiveMembers = alluserdata.filter(
        (item) => item.status == "InActive"
      );
      setMaledata(MaleData);
      setFemaledata(FemaleData);
      setActiveMembersData(filteredActiveMembers);
      setInActiveMembersData(filteredInActiveMembers);
    } else {
      console.log("error for get all user data");
    }
  };

  useEffect(() => {
    allUserGet();
    setTimeout(() => { }, 1200);
  }, []);


  return (
    <div className="flex w-full justify-between mt-8">
      <div className="w-[20%]  p-4 rounded-md shadow-cardsShadow">
        <div className="flex justify-between">
          <p>Total Members</p>
          <p> {React.createElement(IoPersonOutline, { size: "20" })}</p>
        </div>
        <p className="text-4xl headingBold font-bold">{alluserdata.length}</p>
        <p>comment</p>
      </div>

      <div className="w-[20%] p-4 rounded-md shadow-cardsShadow">
        <div className="flex justify-between">
          <p>Male Members</p>
          <p> {React.createElement(IoPersonOutline, { size: "20" })}</p>
        </div>
        <p className="text-4xl font-bold">{maleData.length}</p>
        <p>comment</p>
      </div>
      <div className="w-[20%] p-4 rounded-md shadow-cardsShadow">
        <div className="flex justify-between">
          <p>Female Members</p>
          <p> {React.createElement(IoPersonOutline, { size: "20" })}</p>
        </div>
        <p className="text-4xl font-bold">{femaleData.length}</p>
        <p>comment</p>
      </div>
      <div className="w-[20%] p-4 rounded-md shadow-cardsShadow">
        <div className="flex justify-between">
          <p>Active Members</p>
          <p> {React.createElement(IoPersonOutline, { size: "20" })}</p>
        </div>
        <p className="text-4xl font-bold">{activeMembersData.length}</p>
        <p>comment</p>
      </div>
    </div>
  );
};

export default UserInformation;
