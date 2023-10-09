import React, { useEffect, useState } from 'react'
import { allusergetfunc } from '../../services/Apis';
import Card from 'react-bootstrap/Card';
import person from "../../../public/person.png"

// get all user

const Cards = () => {
  const [alluserdata, setAllUserData] = useState([]);
  const [maleData, setMaledata] = useState(0)
  const [femaleData, setFemaledata] = useState(0)
  const [activeMembersData, setActiveMembersData] = useState(0)


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

      <Card style={{ width: '8rem' }}>
        <Card.Img variant="top" src={person} />
        <Card.Body>
          <Card.Title>Total Members</Card.Title>
          <Card.Text>
            {alluserdata.length}
          </Card.Text>
        </Card.Body>
      </Card>

      <Card style={{ width: '8rem' }}>
        <Card.Img variant="top" src={person} />
        <Card.Body>
          <Card.Title>Male Members</Card.Title>
          <Card.Text>
            {maleData.length}
          </Card.Text>
        </Card.Body>
      </Card>

      <Card style={{ width: '8rem' }}>
        <Card.Img variant="top" src={person} />
        <Card.Body>
          <Card.Title>Female Members</Card.Title>
          <Card.Text>
            {femaleData.length}
          </Card.Text>
        </Card.Body>
      </Card>
      <Card style={{ width: '8rem' }}>
        <Card.Img variant="top" src={person} />
        <Card.Body>
          <Card.Title>Active Members</Card.Title>
          <Card.Text>
            {activeMembersData.length}
          </Card.Text>
        </Card.Body>
      </Card>
    </>
  )
}

export default Cards