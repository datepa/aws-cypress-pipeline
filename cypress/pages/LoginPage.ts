export class LoginPage{
    private usernameInput = '#customer_email';
    private passwordInput = '#customer_password';
    private loginButton = 'input[value="Sign In"]';


    public navigate(){
        cy.visit('/account/login');
        return this;
    }

    public login(username: string, password: string) {
    cy.get(this.usernameInput).type(username);
    cy.get(this.passwordInput).type(password, { log: false });
    cy.get(this.loginButton).click();
  }
}