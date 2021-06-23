import {useState, useEffect} from 'react'
import MusicList from '../components/MusicList'

const MusicContainer = () => {

    const [musicList, setMusicList] = useState([])

    useEffect(() => {
        getMusicList()
    }, [])


    const getMusicList = function() {
        fetch('https://itunes.apple.com/gb/rss/topsongs/limit=20/json').then(response => response.json()).then(musicList => setMusicList(musicList.feed.entry));
    }

    console.log(musicList)
    

    return(
        <>
            <h1>Itunes Top 20</h1>
            <MusicList musicList={musicList}/>
        </>
    )
}

export default MusicContainer