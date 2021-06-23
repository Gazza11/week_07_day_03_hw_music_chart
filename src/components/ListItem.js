const ListItem = ({song}) => {


    return(
        <li>
            <h1>{song['im:name'].label}</h1>
            <h4>By: {song['im:artist'].label}</h4>
            <img src={song['im:image'][2].label}></img>
        </li>
    )
}






export default ListItem ;