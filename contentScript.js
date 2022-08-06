(() => {
    chrome.runtime.onMessage.addListener((obj, sender, response) => {
        const {videoId, listId} = obj;

        console.log("videoID:\t", videoId);
        console.log("listId:\t", listId);

        var obj = {};

        var today = new Date();

        var date = today.getDate();
        var month = today.getMonth();
        var year = today.getFullYear();

        var key = date + "-" + month + "-" + year;

        var links = [];

        var storage = chrome.storage.local;

        storage.get(key, (result)=>{
            console.log("result:\t", result);
            let len = Object.keys(result).length;
            console.log("length:\t", len);
            // var links = [];
            if(len !== 0){
                console.log("Inside not 00");
                links = result[key];
            }
            console.log("key:\t", key);
            links.push([videoId, listId]);
            console.log("links:\t", links)
            console.log("value:\t", result);
            obj[key] = links;

            storage.set(obj, (result)=>{
                console.log("obj in write:\t", obj);
                console.log("result:\t", result);
                console.log("written successfully");
    
                chrome.storage.local.get(key, (result)=>{
                    console.log("neww result:\t", result);
                })
    
            });

        });

        
        // obj[videoId] = "videoooooo";


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