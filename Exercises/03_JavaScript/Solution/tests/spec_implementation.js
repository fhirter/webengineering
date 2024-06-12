step("Open <url> in Browser", async function(url) {
    openBrowser();
    goto(url)
})

step("Write <address> into the input field", async function(address) {
    write(address, into(textBox()))
});

step("Click <buttonText>", async function(buttonText) {
    click(buttonText)
})


step("Temperature, Pressure and Humidity should be displayed", async function() {
    console.log("temp")
})