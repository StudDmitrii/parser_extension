chrome.action.onClicked.addListener(async (tab)=>{
    chrome.sidePanel.open({
        tabId: tab.id,
        windowId: tab.windowId
    })
})

chrome.tabs.onActivated.addListener(async ()=>{
    executeScript()
})

async function executeScript(){
    const [tab] = await chrome.tabs.query({active:true, lastFocusedWindow:true})
    await chrome.scripting.executeScript({
        files:[
            "./content_scripts/content.js"
        ],
        injectImmediately:true,
        target: {tabId:tab.id}
    })
}

