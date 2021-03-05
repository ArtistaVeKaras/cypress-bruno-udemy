/// <reference types="cypress" />

describe("Network Requests", () => {
  let message = "Unable to find request!";
  beforeEach(() => {
    cy.visit("https://example.cypress.io/commands/network-requests");
  });

  /**
   * Listen to GET to comments
   */
  it("Get Request", () => {
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
      //perform assertions against the res body
      console.log(response);
      expect(response.statusCode).to.eq(201);
      expect(response.statusMessage).to.eq("Created");
      expect(response.url).to.eq("https://jsonplaceholder.cypress.io/comments");
      expect(response.body.id).to.eq(501);
      expect(response.body.email).to.eq("hello@cypress.io");
      expect(response.body.body).to.include("You can change the method used");
      expect(response && response.body).to.have.property(
        "name",
        "Using POST in cy.intercept()"
      );

      //perform assertion against the req body
      console.log(request);
      expect(request.body).to.include("email");
      expect(request.body).to.include("body");
      expect(request.headers).to.have.property("content-type");
      expect(request.headers).to.have.property("content-length");
      expect(request.headers).to.have.property(
        "host",
        "jsonplaceholder.cypress.io"
      );
      expect(request.headers.host).to.eq("jsonplaceholder.cypress.io");
    });
  });
  /**
   * Stub a response to PUT comments/ ***
   */
  it("PUT requests", () => {
    cy.intercept(
      {
        method: "PUT",
        url: "**/comments/*",
      },
      {
        statusCode: 404,
        body: { error: message },
        headers: { "access-control-allow-origin": "*" },
        delay: 500,
      }
    ).as("putComment");

    cy.get(".network-put").click();

    cy.wait("@putComment");

    cy.get(".network-put-comment").should("contain", message);
  });
});
