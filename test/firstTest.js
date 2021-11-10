const { Builder, By, Key } = require("selenium-webdriver")
var should = require("chai").should();

//describe block
describe("add todo tests", function () {
    //it block
    it("Sata", async function () {

        //Launch the browser

        let driver = await new Builder().forBrowser("firefox").build();



        //Navigate to our application

        await driver.get("https://lambdatest.github.io/sample-todo-app/")

        //add a todo

        await driver.findElement(By.id("sampletodotext")).sendKeys("Learn Selenium", Key.RETURN);


        //asert

        let todoText = await driver
        .findElement(By.xpath("//li[last()]"))
        .getText()
        .then(function (value) {
            return value
        });




        //asert using chai should


        todoText.should.equal("Learn Selenium");


        //Close the browser

            await driver.quit();


    });
})









