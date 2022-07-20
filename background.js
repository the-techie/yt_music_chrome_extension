chrome.tabs.onUpdated.addListener((tabId, tab) => {

    // console.log("url");
    // console.log(tab.url);
    // console.log("------");

    url = tab.url;

    if(url && url.includes("youtube.com/watch")){
        const urlParam =  url.split("?")[1];

        urlQueryParams = new URLSearchParams(urlParam);

        const videoId = urlQueryParams.get("v");
        const listId = urlQueryParams.get("list");
        // console.log("videoID:\t", videoID);
        // console.log("in background.js");

        // console.log(videoId)

        chrome.tabs.sendMessage(tabId, {
            "videoId" : videoId,
            "listId": listId,
        });
    
    }
});