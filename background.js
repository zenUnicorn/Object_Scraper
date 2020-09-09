console.log('Background is running!');


chrome.browserAction.onClicked.addListener(buttonClicked);

function buttonClicked(tab) {
    console.log('Button Clicked!')
    let msg = {
        txt: alert("Scraper Clicked! --- Selcting similar objects")
    }
    chrome.tabs.sendMessage(tab.id, msg)
}
