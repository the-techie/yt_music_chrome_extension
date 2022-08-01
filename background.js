chrome.tabs.onUpdated.addListener((tabId, tab) => {

    // console.log("url");
    // console.log(tab.url);
    // console.log("------");

    url = tab.url;
    // console.log("tab:\t", tab);

    // console.log("tabid, tab.tabid:\t", tabId, tab.id);

    if(url && url.includes("youtube.com/watch")){

        console.log("url:\t", url)

        const urlParam =  url.split("?")[1];
        // console.log("urlParams:\t", urlParam);
        urlQueryParams = new URLSearchParams(urlParam);

        const videoId = urlQueryParams.get("v");
        const listId = urlQueryParams.get("list");
        console.log("videoID:\t", videoId);
        console.log("tabId:\t", tabId);
        // console.log("in background.js");

        // console.log(videoId)
        console.log("Before send message");
        chrome.tabs.sendMessage(tabId, {
            "videoId" : videoId,
            "listId": listId,
        }).catch((error)=>{
            console.log("error:\t", error);
        });
    
    }
});