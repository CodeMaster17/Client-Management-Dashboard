import React, { useEffect, useState } from 'react'
import { allusergetfunc } from '../../services/Apis';
import Card from 'react-bootstrap/Card';
// import person from "../../../public/person.png"
import members from "../../assets/people-outline.svg"
import male from "../../assets/man-outline.svg"
import female from "../../assets/woman-outline.svg"
import active from "../../assets/flash-outline.svg"
import inactive from "../../assets/flash-off-outline.svg"
import CardComponent from '../../utils/CardsComponent/CardComponent';

// get all user

const Cards = () => {
  const [alluserdata, setAllUserData] = useState([]);
  const [maleData, setMaledata] = useState([])
  const [femaleData, setFemaledata] = useState([])
  const [activeMembersData, setActiveMembersData] = useState([])
  const [inactiveMembersData, setInActiveMembersData]=useState([])


  const allUserGet = async () => {
    const response = await allusergetfunc();
    if (response.status === 200) {
      // console.log(response.data.userdata)
      setAllUserData(response.data);
      const MaleData = alluserdata.filter(item => item.gender === "Male")
      const FemaleData = alluserdata.filter(item => item.gender === "Female")
      const filteredActiveMembers = alluserdata.filter(item => item.status === "Active")
      const filteredInActiveMembers = alluserdata.filter(item => item.status == "InActive")
      setMaledata(MaleData)
      setFemaledata(FemaleData)
      setActiveMembersData(filteredActiveMembers)
      setInActiveMembersData(filteredInActiveMembers)
    } else {
      console.log("error for get all user data")
    }
  }


  useEffect(() => {
    allUserGet();
    setTimeout(() => {
    }, 1200)
  }, [alluserdata])


  return (
    <>
      <CardComponent title={"Total Members"} src={members} text={alluserdata.length} />
      <CardComponent title={"Male Members"} src={male} text={maleData.length} />
      <CardComponent title={"Female Members"} src={female} text={femaleData.length} />
      <CardComponent title={"Active Members"} src={active} text={activeMembersData.length} />
      <CardComponent title={"InActive Members"} src={inactive} text={inactiveMembersData.length}/>
    </>
  )
}

export default Cards