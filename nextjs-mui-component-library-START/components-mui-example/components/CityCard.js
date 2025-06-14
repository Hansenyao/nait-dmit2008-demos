 
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
 
export default function CityCard({data}) {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image={data.image}
        title={data.title}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {data.title}
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
          {data.description}
        </Typography>
      </CardContent>
    </Card>
  )
}
 
 
import { Stack } from "@mui/material";
import CityCard from "./CityCard";
 
export default function CityCardContainer({data}) {
  return (
    <Stack direction="row" spacing={2}>
        {data.map((item,index)=><CityCard key={index} data={item}/>)}
    </Stack>
  )
}
 
 