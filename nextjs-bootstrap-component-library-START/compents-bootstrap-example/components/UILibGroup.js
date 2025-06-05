import { ListGroup } from "react-bootstrap";

export default function UILibGroup(props) {
    return (
        <ListGroup>
            { props.children.map((uiLibrary, index)=> {
                return <ListGroup.Item key={index}>
                <a href={uiLibrary.url}>{uiLibrary.name}</a>
                </ListGroup.Item>
            })}
        </ListGroup>
    )
}
