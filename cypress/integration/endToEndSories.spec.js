/* eslint-disable no-undef */
describe("User Story - Create Book", () => {
  const title = Math.random().toString(36).substr(2, 5);
  const author = Math.random().toString(36).substr(2, 5);
  const editedTitle = Math.random().toString(36).substr(2, 5);
  it("Will Create Book for the Book Store", () => {
    cy.visit("/");
    // Click In the Create Button
    cy.contains("button", "Create").click();
    // Click in the Cancel Button in the Create View
    cy.contains("button", "Cancel").click();
    // Click In the Create Button to Return to Create View
    cy.contains("button", "Create").click();

    // Type new title
    cy.get("#Title").type(title);
    // Type new price
    cy.get("#Price").type("22");
    // Click Create Button
    cy.contains("button", "Create").click();
    // Error Message should appear because all inputs should be filled
    cy.get(".error-message");

    // Type new Author
    cy.get("#Author").type(author);

    // Click Create Button
    cy.contains("button", "Create").click();

    // Check if new Book is on Store
    cy.get(".book-title").contains(title);
  });

  it("Will edit Title Book", () => {
    cy.visit("/");
    // Click on the Created Book - Edit
    cy.get("div.edit-button").last().click();
    // In the Edit View, Title should have the value entered before
    cy.get("#Title").within(() => {
      cy.get("input").should("have.value", title);
    });
    // Input title with new field
    cy.get("#Title").type(editedTitle);
    // Click Edit Button
    cy.contains("button", "Edit").click();
    // There should be the edited book on the Store
    cy.get(".book-title").contains(editedTitle);
  });

  it("Will add books to Cart", () => {
    cy.visit("/");
    // click checkbox from first book
    cy.get(".book")
      .first()
      .within(() => {
        cy.get(".checkbox").click();
      });
    // Check if first book is on cart
    cy.get(".cart").within(() => {
      cy.get(".item-name")
        .first()
        .should("have.text", "Harry Potter and the Sorcerer's stone");
    });
    // Check if Book Quantity is correct
    cy.get(".cart-info").first().should("have.text", "Books Selected : 1");

    // Check if Books Price is correct
    cy.get(".cart-info").last().should("have.text", "Total Price : 12.34");

    // click checkbox from second book
    cy.get(".book")
      .eq(1)
      .within(() => {
        cy.get(".checkbox").click();
      });
    // Check if first book is on cart
    cy.get(".cart").within(() => {
      cy.get(".item-name").last().should("have.text", "Jurassic Park");
    });
    // Check if Book Quantity is correct
    cy.get(".cart-info").first().should("have.text", "Books Selected : 2");

    // Check if Books Price is correct
    cy.get(".cart-info").last().should("have.text", "Total Price : 23.56");
  });
});
