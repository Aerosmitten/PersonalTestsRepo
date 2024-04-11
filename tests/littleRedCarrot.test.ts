import { lilRed } from "../Pages/littleRedCarrot";
const page = new lilRed();
const fs = require('fs');

describe("Testing PowWows.com for Solo Capstone Project", () => {

    beforeEach(async () => {
        await page.navigate();
    });
    afterAll(async () =>{
        await page.driver.quit();
    });
    test("Testing to see if the little red carrot brings the user back up to the top of the page", async () => {
    //scroll to the bottom of the home page
    await page.scroll()
    //take a screenshot of the bottom of the page
    await fs.writeFile(`${__dirname}/lilRed.png`,
    await page.driver.takeScreenshot(), "base64",
    (e) => {
        if (e) console.error(e)
        else console.log("lil Red Saved Succesfully")
    });
    //Little Red Carrot should take us back to the top of the home page!
    await page.click(page.carrot)
    });
});