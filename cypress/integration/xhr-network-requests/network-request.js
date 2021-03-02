/// <reference types="cypress" />

describe("Network Requests", () => {
  let message = "Unable to find request!";
  beforeEach(() => {
    cy.visit("https://example.cypress.io/commands/network-requests");
    cy.server();
  });
  /**
   * Listne to GET to comments
   */
  it.skip("Get Request", () => {
    cy.intercept("GET", "**/comments/*").as("getComment");

    // we have code that gets a comment when
    // the button is clicked in scripts.js
    cy.get(".network-btn").click();

    // https://on.cypress.io/wait
    cy.wait("@getComment").its("response.statusCode").should("eq", 200);
  });

  it("Get Request Two", () => {
    cy.intercept({
      method: "GET",
      url: "**/comments/*",
      response: {
        postId: 1,
        id: 1,
        name: "id labore ex et quam laborum",
        email: "Eliseo@gardner.biz",
        body: "Hello World",
      },
      /**
       * moking our own response without having to rely on server
       */
    }).as("getComment");
    cy.get(".network-btn").click();

    cy.wait("@getComment").its("response.statusCode").should("eq", 200);
  });

  /**
   * Listen to POST to  comments
   */
  it("Post Request", () => {
    cy.intercept("POST", "**/comments").as("postComment");
    cy.get(".network-post").click();
    cy.wait("@postComment").should(({ request, response }) => {
      expect(request.body).to.include("email");
      expect(request.headers).to.have.property("content-type");
      expect(response && response.body).to.have.property(
        "name",
        "Using POST in cy.intercept()"
      );
    });
  });
  /**
   * Stub a response to PUT comments/ ***
   */
  it.only("PUT requests", () => {
    cy.intercept(
      {
        method: "PUT",
        url: "**/comments/*",
      },
      {
        statusCode: 404,
        body: { error: message },
        headers: { "access-control-allow-origin": "*" },
        delayMs: 500,
      }).as("putComment");

    cy.get(".network-put").click();

    cy.wait("@putComment");

    cy.get('.network-put-comment').should('contain', message)
  });
});
