import { Card, Stack } from "react-bootstrap";
import UICard from "./UICard";

export default function UILibList(props) {
    return (
        <Stack direction="horizontal" gap={2}>
        {props.data.map((item, index) => {
            /*
            return (
                <Card key={index} body>{item.name} -  
                <a href={item.url}>Read More</a>
                </Card>
            )*/
            return (<UICard key={index} data={item}/>)
        })}
        </Stack>
    );
}
