const starter_func = (tab) => {
  try {
    chrome.tabs.get(tab.tabId, (current_tab_info) => {
      if ((current_tab_info.status = "complete")) {
        console.log(current_tab_info.url.search("https://"));
        console.log(current_tab_info.url.search(".instagram.com/p/"));
        if (
          current_tab_info.url.search("https://") == 0 &&
          current_tab_info.url.search(".instagram.com/p/") > 0
        ) {
          chrome.tabs.executeScript(null, { file: "./foreground.js" });
          chrome.tabs.insertCSS(null, { file: "./mybtn.css" });
          console.log("You are in instagram tfFff");
        } else {
          console.log("You are not in instagram");
        }
      }
    });
  } catch (error) {
    console.log(error);
  }
};

chrome.tabs.onActivated.addListener((tab) => {
  starter_func(tab);
});

chrome.tabs.onUpdated.addListener(function (tabID, changeInfo, tab) {
  try {
    if (changeInfo.status || tab.status == "complete") {
      console.log("Updated tab (" + tabID + ")=>>> " + tab.url);
      if (
        tab.url.search("https://") == 0 &&
        tab.url.search(".instagram.com/p/") > 0
      ) {
        chrome.tabs.executeScript(null, { file: "./foreground.js" });
        chrome.tabs.insertCSS(null, { file: "./mybtn.css" });
        console.log("You are in instagram tfFff");
      } else {
        console.log("You are not in instagram");
      }
    }
  } catch (error) {
    console.log(error);
  }
});
