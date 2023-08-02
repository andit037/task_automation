const { Given, When, Then } = require('@wdio/cucumber-framework');

const RegisterPage = require('../pageobjects/register.page');
const VerificationPage = require('../pageobjects/verification.page');


Given(/^I am on the register page$/, async () => {
	await browser.url(`https://www.cermati.com/gabung`)
	await browser.pause(7000)
});

When(/^I register with (.*) and (.*) and (.*) and (.*) and (.*) and (.*) and(.*)$/, async (email,no_handphone,katasandi,ulangikatasandi,nama_depan,nama_belakang,kabupaten_kota) => {
	await RegisterPage.register(email+Date.now()+'@gmail.com',no_handphone,katasandi,ulangikatasandi,nama_depan,nama_belakang,kabupaten_kota.trimStart())
});


When(/^I click daftar button$/, async () => {
	await RegisterPage.submitButton()
});


When(/^I should see a message saying (.*)$/, async (message) => {
    await browser.pause(3000)
	await expect(VerificationPage.headerMessage).toHaveTextContaining(message);
});


When(/^I click kirim sms button$/, async () => {
	await VerificationPage.submitSmsButton()
});


Then(/^I see message text about (.*)$/, async(message_text) => {
	await expect(VerificationPage.headerChildMessage).toHaveTextContaining(message_text);
});