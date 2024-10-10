describe("Forgot Password", () => {
  beforeEach(() => {
    cy.visit(
      "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login"
    );
  });

  it("Forgot Password", () => {
    cy.get("p.orangehrm-login-forgot-header").click();
    cy.get("h6.orangehrm-forgot-password-title").should(
      "exist",
      "Reset Password"
    );
    cy.get('input[name="username"]').type("Admin");
    cy.get("button.orangehrm-forgot-password-button--reset").click();
    cy.get("h6.orangehrm-forgot-password-title").should(
      "exist",
      "Reset Password link sent successfully"
    );
  });

  it("Empty Fields Validation", () => {
    cy.get("p.orangehrm-login-forgot-header").click();
    cy.get("button.orangehrm-forgot-password-button--reset").click();
    cy.get("span").should("exist", "Required");
  });
});
