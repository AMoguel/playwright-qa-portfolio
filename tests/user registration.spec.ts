import{test, expect} from '@playwright/test'


test.describe('Registration flow', () => {
    
    test('submitting registration', async ({page}) => {
        await page.goto('https://practice.expandtesting.com/register')
        await page.locator('#username').fill('autotest') 
        await page.locator('#password').fill('Kazama122!')   
        await page.locator('#confirmPassword').fill('Kazama122!')
        await page.getByRole('button', { name: "Register"}).click()
    


    })
})