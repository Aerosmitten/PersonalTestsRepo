import { By } from "selenium-webdriver"
import { BasePage } from "./basePage"

export class lilRed extends BasePage {
    box: By = By.id('footer');
    carrot: By = By.xpath('//a[@class="btn btn-primary shadow"]');

    //locators go here
    constructor () {
        super ({url: "https://www.powwows.com/"});
    };
    async scroll() {
        const frame = await this.driver.findElement(this.box)
        await this.driver.actions()
            .move({origin: frame})
            .perform();
    };
};