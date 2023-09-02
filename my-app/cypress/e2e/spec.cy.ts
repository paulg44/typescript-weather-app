// Page Visit
describe("weather app end 2 end", () => {
  it("loads weather app page", () => {
    cy.visit("http://localhost:3000/weather");

    cy.get("input").type("derby");
    cy.get("button").contains("Search").click();
    cy.get("button").contains("Add to List").click();

    cy.contains(".list-group-item", "Derby").should("exist");
  });
});
