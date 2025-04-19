
class RegistrationPage {
    get firstName() { return $('#firstname'); }
    get lastName() { return $('#lastname'); }
    get email() { return $('#email_address'); }
    get password() { return $('#password'); }
    get confirmPassword() { return $('#password-confirmation'); }
    get submitButton() { return $('button[title="Create an Account"]'); }

    async register(first, last, email, pass) {
        await this.firstName.setValue(first);
        await this.lastName.setValue(last);
        await this.email.setValue(email);
        await this.password.setValue(pass);
        await this.confirmPassword.setValue(pass);
        await this.submitButton.click();
    }
}

export default new RegistrationPage();
