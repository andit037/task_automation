
/**
 * sub page containing specific selectors and methods for a specific page
 */
class RegisterPage{
    /**
     * define selectors using getter methods
     */
    get inputEmail () {
        return $('input#email');
    }

    get inputHandphone () {
        return $('input#mobilePhone');
    }

    get inputKataSandi () {
        return $('input#password');
    }

    get inputUlangKataSandi () {
        return $('input#confirmPassword');
    }

    get inputNamaDepan () {
        return $('input#firstName');
    }

    get inputNamaBelakang () {
        return $('input#lastName');
    }

    get inputKabupatenKota () {
        return $('input#cityAndProvince');
    }

    get clickDaftarButton () {
        return $('button[data-button-name="register-new"]');
    }

    /**
     * a method to encapsule automation code to interact with the page
     * e.g. to login using username and password
     */
    async register (email,no_handphone,katasandi,ulangikatasandi,nama_depan,nama_belakang,kabupaten_kota) {
        await this.inputEmail.waitForDisplayed({timeout:30000});
        await this.inputEmail.setValue(email);
        await this.inputHandphone.setValue(no_handphone);
        await this.inputKataSandi.setValue(katasandi);
        await this.inputUlangKataSandi.setValue(ulangikatasandi);
        await this.inputNamaDepan.setValue(nama_depan);
        await this.inputNamaBelakang.setValue(nama_belakang);
        await this.inputKabupatenKota.setValue(kabupaten_kota);
        await $(`//button/div[contains(text(),"${kabupaten_kota}")]`).click();
    }

    async submitButton () {
        await this.clickDaftarButton.click();
    }
}

module.exports = new RegisterPage();
