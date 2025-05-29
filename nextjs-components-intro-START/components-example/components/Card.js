export default function Card(props) {
    return (
        <>
            <h2>{props.children}</h2>
            <img src={props.img}></img>
        </>
    );
}