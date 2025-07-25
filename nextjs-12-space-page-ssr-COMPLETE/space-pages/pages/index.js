import Head from 'next/head'

import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';

import AgencyCard from '@components/AgencyCard';
import NavBar from '@components/NavBar';

import { getAgencies } from '@utils/api/agencies'


export async function getServerSideProps(context) {
  const agencies = await getAgencies()
  return {
    props: {
      agencies: agencies
    }, // will be passed to the page component as props
  }
}


export default function Home(props) {
  const agenciesData = props.agencies.results
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
            Space Agencies
          </Typography>
          <Box
            sx={{
              marginTop: 2,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            {props.agencies.results.map((agency)=> {
              return <AgencyCard
                key={agency.id}
                id={agency.id}
                imageUrl={agency.image_url}
                name={agency.name}
                abbreviation={agency.abbrev}
                description={agency.description}
              />
            })}

          </Box>
        </Container>

    </div>
  )
}
