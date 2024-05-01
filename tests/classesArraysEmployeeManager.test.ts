//LOOPS CLASSES ARRAYS AND SELENIUM

//!first step is importing everything we need from selenium-webdriver
//usually this would go on a seperate .ts page, I'll try to figure that out next, but first, redoing the homework assignment which happened to be before we got to page object models
import { Builder, Capabilities, By, until, WebDriver, WebElement } from "selenium-webdriver";

const chromedriver = require("chromedriver"); 
const driver = new Builder().withCapabilities(Capabilities.chrome()).build(); 

//creating a reusable blueprint for new users

class Employees {
  name: string; 
  phone: number; 
  title: string; 
  
  //using this blueprint with constructor to create an object

  constructor(name:string, phone:number, title:string) {
      this.name = name;
      this.phone = phone;
      this.title = title;
  };
    
}; 

//creating a variable called employees that uses the blueprint made up above

let employees: Array<Employees> = [
    new Employees("Paul Atreides", 8008008080, "God Emperor's Dad"),
    new Employees("God Emperor", 9009009090, "Tyrant"),
    new Employees("Duncan Idaho", 6006006060, "Swordmaster"),
    new Employees("Hwi Noree", 7007007070, "Consort to God")
]

 //Below are all the various HTML elements that we will be testing with, these would go on the .ts page

const addEmployee: By = By.name("addEmployee");
const newEmployee: By = By.xpath('//li[text() = "New Employee"]');
const nameInput: By = By.name("nameEntry");
const phoneInput: By = By.name('phoneEntry');
const titleInput: By = By.name('titleEntry');
const saveBtn: By = By.id('saveBtn');

//creating a function which finds the variables described above and does something with them

let myFunc = async (employees) => {
    await driver.findElement(addEmployee).click();
    await driver.findElement(newEmployee).click();
    await driver.findElement(nameInput).clear();
    await driver.findElement(nameInput).sendKeys(employees.name);
    await driver.findElement(phoneInput).clear();
    await driver.findElement(phoneInput).sendKeys(employees.phone);
    await driver.findElement(titleInput).clear();
    await driver.findElement(titleInput).sendKeys(employees.title);
    await driver.findElement(saveBtn).click();
}; 

describe("Add employees to employee manager", () => {
    test("Can add employees using myFunc", async () => {

        //pull up the Employee Manager form page

        await driver.get("https://devmountain-qa.github.io/employee-manager/1.2_Version/index.html"); 

        //loop through each employee object and call myFunc on them adding them to employee register

        for(let i = 0; i < employees.length; i++) {
            await myFunc(employees[i]); 
        }; 

        //wait for 3 seconds

        await driver.sleep(3000); 

        //close out of the page
        
        await driver.quit(); 
    });
});