
/**
 * sub page containing specific selectors and methods for a specific page
 */
class VerificationPage{
    /**
     * define selectors using getter methods
     */
    get headerMessage () {
        return $('//h1');
    }

    get headerChildMessage () {
        return $('//h2');
    }

    get clickKirimSmsButton () {
        return $('button[data-button-name="send-otp-sms"]');
    }

    /**
     * a method to encapsule automation code to interact with the page
     * e.g. to login using username and password
     */
    async submitSmsButton () {
        await this.clickKirimSmsButton.click();
    }
}

module.exports = new VerificationPage();
