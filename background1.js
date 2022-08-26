chrome.tabs.onUpdate.addListener((tabId, tab) => {
  if (tab.url && tab.url.includes("instagram.com/p/")) {
    const photo_id = tab.url.split("/p/")[1].replace("/", "");
    //const url_parameters = new URLSearchParams(photo_id)
    //(chrome.tabs.sendMessage(tabId, {
    //  type: "NEW",
    //  photoId: photo_id,
    //});)
    console.log("Photo id = " + photo_id);
  }
});
