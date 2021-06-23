const ListItem = ({song}) => {


    return(
        <li>
            <h1>{song['im:name'].label}</h1>
            <h4>By: {song['im:artist'].label}</h4>
            <img src={song['im:image'][2].label}></img>
            <audio controls>
                <source src={song.link[1].attributes.href}></source>
            </audio>
        </li>
    )
}






export default ListItem ;