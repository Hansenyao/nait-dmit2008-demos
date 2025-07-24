// 1. create the space page based on the pages we've been using.
// 2. to take a look at the space craft api from the backend.
// create the endpoint.
// 3. get the dynamic identifier from the page, with useRouter
// 4. create a useEffect (with some useState) that will listen to this identifier
// handle the wierd cases.
// 5. handle the loading states and the data (just print the title.)
import { useEffect, useState } from "react"
// I want you to import the router
import { useRouter } from "next/router"

import Container from "@mui/material/Container"
import Typography from "@mui/material/Typography"

import NavBar from "@components/NavBar"
import LoadingCircle from "@components/LoadingCircle"

// get the api for the spacecraft configuration set
import { getSpaceCraft } from "@utils/api/spaceCraft"


// handle the loading state
// render the title.

export default function Spacecraft() {
  // a stateful value for spacecraft data
  const [spacecraftData, setSpacecraftData] = useState()

  // get the dynamic id.
  const router = useRouter()
  const {spacecraftId} = router.query

  // useEffect for the api fetch call.
  useEffect(()=> {
    // handle when the router isn't ready
    if (!spacecraftId) {
      return
    }
    loadSpaceCraft()

  }, [spacecraftId])


  // load the data here.
  const loadSpaceCraft = async () => {
    // make the api call with the spacecraftId
    const data = await getSpaceCraft(spacecraftId)

    // set the state
    setSpacecraftData(data)
  }

  // handle the loading state
  if (!spacecraftData) {
    // return a loading state
    return <>
      <NavBar />
      <LoadingCircle />
    </>
  }

  return (
    <div>
        <NavBar />
        <Container sx={{paddingTop:2}} component="main" maxWidth="xs">
          <Typography variant="h3">
            {spacecraftData.name}
          </Typography>
        </Container>
    </div>
  )
}