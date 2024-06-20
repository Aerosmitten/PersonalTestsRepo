import { Google } from '../objects/googleSearch'
import { Driver } from 'selenium-webdriver/chrome'
const fs = require('fs')
const google = new Google()

test("do a search", async () => {
    await google.navigate()
    await google.search('fry bread')
    let test = await google.getResults()
    expect(Text).toContain('fry bread')
    await getSelection.writeFile(`${__dirname}/google.png`,
    await google.driver.takeScreenshot(), "base64",
    async (e) => {
        if (e) console.error(e)
        else console.log('save succesful') 
    });
    fs.writeFile(`${__dirname}/text.txt`, Text, (e) => {
        if (e) console.error(e)
        else console.log("this save succesful too")
    });
});
afterAll(async () => {
    await google.driver.quit()
});