import{test, expect} from '@playwright/test'

test.beforeEach(async ({page}) => {
    await page.goto('https://practice.expandtesting.com/login')

});


test.describe('User login', () => {

    test('User Possitive log in', async ({page}) => {
        await page.locator('#username').fill('practice')
        await page.locator('#password').fill('SuperSecretPassword!')
        await page.getByRole('button', { name: "Login"}).click()
        await expect(page).toHaveURL('https://practice.expandtesting.com/secure')
        
        const banner = page.locator('#flash')

        await expect(banner).toBeVisible()
       
    })

    test('Invalid username log in', async ({page}) => {
        await page.locator('#username').fill('practiceing')
        await page.getByRole('button', { name: "Login"}).click()
        await expect(page.locator('#flash')).toHaveText('Your username is invalid!')
        await expect(page).toHaveURL('https://practice.expandtesting.com/login')
    })

    test('Invalid password log in', async ({page}) => {
        await page.locator('#password').fill('weakpassword')
        await page.getByRole('button', { name: "Login"}).click()
        await expect(page.locator('#flash')).toHaveText('Your password is invalid!')
        await expect(page).toHaveURL('https://practice.expandtesting.com/login')
    })

    test('User forgets password', async ({page}) => {
        await page.goto('https://practice.expandtesting.com/forgot-password')
        await page.locator('#email').fill('lowkeybugchaser@gmail.com')
        await page.getByRole('button', { name: "Retrieve password"}).click()

    })

})


