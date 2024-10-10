describe("Login", () => {
  beforeEach(() => {
    cy.visit(
      "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login"
    );
  });

  it(" Successful Login", () => {
    cy.get("h5").should("exist", "Login");
    cy.get('input[name="username"]').type("Admin");
    cy.get('input[name="password"]').type("admin123");
    cy.get('button[type="submit"]').click();
  });

  it("Login With Invalid Credential", () => {
    cy.get("h5").should("exist", "Login");
    cy.get('input[name="username"]').type("admin");
    cy.get('input[name="password"]').type("admin12");
    cy.get('button[type="submit"]').click();
    cy.get("p").should("exist", "Invalid credentials");
  });

  it("Empty Fields Validation", () => {
    cy.get("h5").should("exist", "Login");
    cy.get('button[type="submit"]').click();
    cy.get("span").should("exist", "Required");
  });
});
