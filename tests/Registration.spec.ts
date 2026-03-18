import{test, expect} from '@playwright/test'


test.beforeEach(async ({page}) => {
    await page.goto('https://practice.expandtesting.com/register')
})


test.describe('Registration flow', () => {



    test('Successfull registration', async ({page}) => {
        await page.locator('#username').fill('autotest') 
        await page.locator('#password').fill('Kazama122!')   
        await page.locator('#confirmPassword').fill('Kazama122!')
        await page.getByRole('button', { name: "Register"}).click()
    


    })

    test('Entering wrong confimation password', async ({page}) => {
        await page.locator('#username').fill('autotest') 
        await page.locator('#password').fill('Kazama122!')  
        await page.locator('#confirmPassword').fill('password122!')
        await page.getByRole('button', { name: "Register"}).click()
        await expect(page.locator('#flash')).toHaveText('Passwords do not match.')



    })

    test('Missing username', async ({page}) => {
        await page.locator('#password').fill('Kazama122!')  
        await page.locator('#confirmPassword').fill('password122!')
        await page.getByRole('button', { name: "Register"}).click()
        await expect(page.locator('#flash')).toHaveText('All fields are required.')

    })

    test('Missing passwords', async ({page}) => {
        await page.locator('#username').fill('autotest') 
        await page.getByRole('button', { name: "Register"}).click()
        await expect(page.locator('#flash')).toHaveText('All fields are required.') 
    })


})