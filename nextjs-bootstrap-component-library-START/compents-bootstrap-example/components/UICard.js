import { Card } from "react-bootstrap";

export default function UICard({data}) {
    return (
        <Card body> {data.name} - 
            <a href={data.url}>Read More</a>
        </Card>
    )
}