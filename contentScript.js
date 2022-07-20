(() => {

    chrome.runtime.onMessage.addListener((obj, sender, response) => {
        const {videoId, listId} = obj;

        console.log("videoID:\t", videoId);
        console.log("listId:\t", listId);

        // id = queue
        // id = contents

    });

})();