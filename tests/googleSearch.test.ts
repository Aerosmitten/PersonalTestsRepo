import { Google } from '../objects/googleSearch'
import { Driver } from 'selenium-webdriver/chrome'
const fs = require('fs')
const google = new Google()

// test goes here
test("do a search", async () => {
    //navigate to Google
    await google.navigate()
    //search for Fry Bread
    await google.search('fry bread')
    //Get search results
    let test = await google.getResults()
    //be sure the search contains the right search
    expect(Text).toContain('fry bread')
    //take screenshot
    // await getSelection.writeFile(`${__dirname}/google.png`,
    // await google.driver.takeScreenshot(), "base64",
    // async (e) => {
    //     if (e) console.error(e)
    //     else console.log('save succesful') 
    // });
    //Save the text resu;ts
    fs.writeFile(`${__dirname}/text.txt`, Text, (e) => {
        if (e) console.error(e)
        else console.log("this save succesful too")
    });
});
afterAll(async () => {
    await google.driver.quit()
});