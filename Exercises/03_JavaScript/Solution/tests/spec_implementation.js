const {click, write, openBrowser, goto, into, textBox} = require('taiko');

step("Open <url> in Browser", async function(url) {
    await openBrowser();
    await goto(url)
})

step("Write <address> into the input field", async function(address) {
    await write(address, into(textBox()))
});

step("Click <buttonText>", async function(buttonText) {
    await click(buttonText)
})


step("Temperature, Pressure and Humidity should be displayed", async function() {
    console.log("temp")
})