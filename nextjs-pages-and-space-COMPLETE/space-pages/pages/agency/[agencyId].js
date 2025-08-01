import Head from 'next/head'
import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';

import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Unstable_Grid2';

import LoadingCircle from '@components/LoadingCircle';
import NavBar from '@components/NavBar';
import SimpleDetailsCard from '@components/SimpleDetailsCard';

// import getAgencies from utils/api folder
import { getAgency } from '@utils/api/agencies';

export default function Agency() {
  const [agencyData, setAgencyData] = useState()
  // initialize the client side routing for this component.
  const router = useRouter()

  // for the path, your variable needs to be the same
  // as the file name except removing the [].
  const {agencyId} = router.query

  // useEffect that will listen agencyId
  // load that data.
  useEffect(()=> {
    // a quick fix to essentially pass this in.
    // if it doesn't exist I don't want to call anything
    if (!agencyId) {
      return
    }
    // load the agency data if agencyId exists.
    loadAgencyData()
  }, [agencyId])


  // update the state.
  const loadAgencyData = async () => {
    const data = await getAgency(agencyId)
    console.log(data)
    setAgencyData(data)
  }

  // look below at the calling of this
  // function.
  const navigateToSpaceCraftPage = (id) => {
    router.push(`/spacecraft/${id}`)
  }
  if (!agencyData) {
    // return a loading state
    return <>
      <NavBar />
      <LoadingCircle />
    </>
  }
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <NavBar />

        <Container sx={{paddingTop:2}} component="main" maxWidth="xs">
          <Typography variant="h3">
            {agencyData.name} ({agencyData.abbrev})
          </Typography>
          <Grid container spacing={2}>
            <Grid size={6}>
              {/* General information about the agency */}
              <Typography variant="h5">General Info</Typography>
              <SimpleDetailsCard
                title="description"
                subDescription={agencyData.description}
              />
              <SimpleDetailsCard
                title="Administrator"
                description={agencyData.administrator}
              />
            </Grid>
            <Grid size={6}>
              {/* list the spacecrafts and make a page for them. */}
              <Typography variant="h5">Spacecrafts</Typography>
              {/* loop through the spacecrafts and see
              if you can pass in a function that will use the id
              and navigate to /spacecraft/idofthespacecraft,
              using the simpledetailscard */}
              {agencyData.spacecraft_list.map((craft)=> {
                return <SimpleDetailsCard
                  key={craft.id}
                  description={craft.name}
                  buttonCallback={()=> {
                    // use the craft id from the look from above.
                    navigateToSpaceCraftPage(craft.id)
                  }}
                  buttonName={"Navigate to spacecraft"}
                />
              })}
            </Grid>
          </Grid>
        </Container>
    </div>
  )
}
