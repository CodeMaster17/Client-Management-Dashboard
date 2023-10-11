import React, { useEffect, useState } from 'react'
import { allusergetfunc } from '../../services/Apis';
import Card from 'react-bootstrap/Card';
import person from "../../../public/person.png"
import CardComponent from '../../utils/CardsComponent/CardComponent';

// get all user

const Cards = () => {
  const [alluserdata, setAllUserData] = useState([]);
  const [maleData, setMaledata] = useState([])
  const [femaleData, setFemaledata] = useState([])
  const [activeMembersData, setActiveMembersData] = useState([])


  const allUserGet = async () => {
    const response = await allusergetfunc();
    if (response.status === 200) {
      // console.log(response.data.userdata)
      setAllUserData(response.data);
      const MaleData = alluserdata.filter(item => item.gender === "Male")
      const FemaleData = alluserdata.filter(item => item.gender === "Female")
      const filteredActiveMembers = alluserdata.filter(item => item.status === "Active")
      setMaledata(MaleData)
      setFemaledata(FemaleData)
      setActiveMembersData(filteredActiveMembers)
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
      <CardComponent title={"Total Members"} src={person} text={alluserdata.length} />
      <CardComponent title={"Male Members"} src={person} text={maleData.length} />
      <CardComponent title={"Female Members"} src={person} text={femaleData.length} />
      <CardComponent title={"Active Members"} src={person} text={activeMembersData.length} />
    </>
  )
}

export default Cards