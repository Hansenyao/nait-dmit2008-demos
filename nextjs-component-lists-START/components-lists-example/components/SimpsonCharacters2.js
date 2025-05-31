function SimpsonsCharacters2({data}) {

    return (<ol>
         {data.map((characterName, index)=> {
            return <li key={index}>{characterName}</li>
    })}
    </ol>);
}

export default SimpsonsCharacters2;