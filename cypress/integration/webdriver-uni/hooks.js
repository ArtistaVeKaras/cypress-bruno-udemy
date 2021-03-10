describe("Hooks", () => {
  before(() => {
    cy.log("runs once before all the tests in the bloc");
  });

  after(() => {
    cy.log("run s once after all tests in the block");
  });

  beforeEach(() => {
    cy.log("runs before each test in the block");
  });

  afterEach(() => {
    cy.log("run after each test in the block");
  });

  it("test one", () => {
    cy.log("Example test one");
  });

  it("test two", () => {
    cy.log("Example test one");
  });
});
