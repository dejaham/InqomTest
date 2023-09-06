exports.AccountPage = class AccountPage {
    constructor(page) {
        // Eléments de la page Account
        this.page = page;
        this.loginButton = 'session-tab-login';
        this.connectButton = 'login-button-submit';
        this.emailField = 'account-edit-field-email';
        this.fileUploader = "input[type='file']";
        this.saveButton = 'account-edit-button-submit';
    }
  
    
    async gotoAccountPage() {
        await this.page.goto("https://www.welcometothejungle.com/fr/me/settings/account");
    }
  
    
    async clickLoginButton() {
        await this.page.getByTestId(this.loginButton).click();
    }
  
    
    async fillCredentials(email, password) {
        await this.page.getByTestId('login-field-email').fill(email);
        await this.page.getByTestId('login-field-password').fill(password);
    }
  
    
    async clickConnectButton() {
        await this.page.getByTestId(this.connectButton).click();
    }


    async accountSelected() {
        await this.page.waitForSelector('[data-testid="user-menu-link-settings"]');
        
        const isMonCompteSelected = await this.page.$eval('[data-testid="user-menu-link-settings"]', (element) => {
            return element.getAttribute('aria-selected') === 'true';
        });
    }
    
    
    
    async uploadImageProfile() {
        await this.page.setInputFiles(this.fileUploader, 'images/ProfilePic.jpg');
    }
  
    
    async verifyImageProfile() {
        await this.page.waitForSelector('img');
    }
  
    
    async saveChanges() {
        await this.page.getByTestId(this.saveButton).click();
    }

    
  };
  
  
  