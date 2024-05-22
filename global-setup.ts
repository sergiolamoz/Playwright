import { rimraf } from "rimraf";

async function globalSetup() {
    try {
        rimraf.sync('./allure-results');
        console.log('\nAllure-results directory removed');
    } catch (error) {
        console.log(error);
    }
}
export default globalSetup;