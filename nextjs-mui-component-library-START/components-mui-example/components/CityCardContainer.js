import { Stack } from "@mui/material";
import CityCard from "./CityCard";

export default function CityCardContainer({data}) {
  return (
    <Stack direction="row" spacing={2}>
        {data.map((item,index)=><CityCard key={index} data={item}/>)}
    </Stack>
  )
}
