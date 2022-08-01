(() => {
    chrome.runtime.onMessage.addListener((obj, sender, response) => {
        const {videoId, listId} = obj;

        console.log("videoID:\t", videoId);
        console.log("listId:\t", listId);

        var obj = {};

        obj[videoId] = "videoooooo";

        chrome.storage.local.set(obj, ()=>{
            console.log("written successfully");
        })

        chrome.storage.local.get([videoId], (result)=>{
            console.log("value:\t", result);
        });

        response({"result": "Okay"});
            
        

        
        // setTimeout(printSongsInfo, 2000);
        
        
        // title: t1.getElementsByClassName("song-title style-scope ytmusic-player-queue-item")[0].innerText
        
        // id = queue
        // id = contents
        // const songs_queue = document.getElementById("contents");
        // return Promise.resolve("");
        // return true;
    });
    
    // function printSongsInfo(){
    //     all_songs = document.querySelectorAll("ytmusic-player-queue-item");
        
    //     console.log("allsongs", all_songs);
        
    //     // for(let song in all_songs)
    //     // {
    //     //     title = song.getElementsByClassName("song-title style-scope ytmusic-player-queue-item")[0].innerText;
    //     //     console.log("title:\t", title);
    //     //     names = song.getElementsByClassName("style-scope yt-formatted-string");

    //     //     for(let name in names)
    //     //         console.log(name.innerText);

    //     // }

    // }

})();