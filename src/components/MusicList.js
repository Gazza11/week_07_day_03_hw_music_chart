import ListItem from "./ListItem"

const MusicList = ({musicList}) => {

    const musicItems = musicList.map((song, index) => {
        return <ListItem song={song} key={index}/>
    })


    return(
        <>
            <ol>
                {musicItems}
            </ol>
        </>
    )
}



export default MusicList