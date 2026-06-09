import { LoginPage } from "../pages/LoginPage";

describe("Sauce Demo Shopify - E2E Validation", () => {
  const loginPage = new LoginPage();

  it("should attempt authentication path using test credentials", () => {
    loginPage.navigate();
    loginPage.login("standard_user@example.com", "secret_sauce");
    
    // Assert redirect behavior
    cy.url().should("include", "/account");
  });
});