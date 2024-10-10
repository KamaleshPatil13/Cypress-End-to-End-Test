describe("Dashboard", () => {
  beforeEach(() => {
    cy.visit(
      "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login"
    );
    cy.get("h5").should("exist", "Login");
    cy.get('input[name="username"]').type("Admin");
    cy.get('input[name="password"]').type("admin123");
    cy.get('button[type="submit"]').click();
  });

  it.only("User Login", () => {
    cy.get("h6").should("exist", "Dashboard");
    cy.get('p.oxd-userdropdown-name').should('not.be.empty');
  });

  it('Help',()=>{
    cy.get('button[tittle="help"]').click();
    
  })
});
