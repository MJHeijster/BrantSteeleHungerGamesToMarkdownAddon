
function onCreated() {
  if (browser.runtime.lastError) {
    console.log(`Error: ${browser.runtime.lastError}`);
  } else {
    console.log("Item created successfully");
  }
}

browser.menus.create({
  id: "battle-royale-to-markdown",
  title: "To Markdown",
  contexts: ["all"],
  documentUrlPatterns: ["https://brantsteele.net/*"]
}, onCreated);


browser.menus.onClicked.addListener((info, tab) => {
  switch (info.menuItemId) {
    case "battle-royale-to-markdown":
      browser.tabs.executeScript(tab.id, { file: "/content-script.js"})
        .then(
          // succesfull copy 
        )
        .catch((error) => {
          console.error("Failed to copy data: " + error);
        });
      break;
  }
})


