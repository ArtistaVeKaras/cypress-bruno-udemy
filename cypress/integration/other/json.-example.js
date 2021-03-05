/// <reference types="cypress" />

describe("JSON Object", () => {
  it("JSON Object exmaple", () => {
    const exampleObj = {
      key: "Tim",
      key2: "Jone",
    };
    const exampleOfArrayValue = ["Sol", "Elmatador", "Akuma"];
    const myObj = [
      {
        firstName: "Lua",
        lastName: "Lens",
        profession: "student",
        address: "kale road",
      },
      {
        firstName: "Bruno",
        lastName: "Nameless",
        profession: "teacher",
        address: "heat road",
      },
    ];

    const users = {
      firstName: "ShakaZulu",
      lastName: "Lima",
      Age: 30,
      Student: [
        {
          firstName: "Claudio",
          lastName: "Akira",
        },
        {
          firstName: "Ken",
          lastName: "Ryu",
        },
      ],
    };
    //log elements inside the obj
    cy.log(exampleObj["key"]);
    cy.log(exampleObj["key2"]);
    cy.log(exampleObj.key);

    //log elements in the array
    cy.log(exampleOfArrayValue[0]);
    cy.log(exampleOfArrayValue[1]);
    cy.log(exampleOfArrayValue[2]);

    //log element inside the obj array
    cy.log(users.lastName);
    cy.log(users.firstName);
    cy.log(users.Student[0].firstName);
    cy.log(users.Student[0].lastName);
    cy.log(users.Student[1].lastName);
    cy.log(users.Student[1].firstName);

    //log my obj challenge
    cy.log("My FirstName is: " + myObj[0].firstName);
    cy.log("My LastName is: " + myObj[0].lastName);
    cy.log("My profession is: " + myObj[0].profession);
    cy.log("My address is: " + myObj[0].address);

    cy.log("My firstName is: " + myObj[1].firstName);
    cy.log("My lastName is: " + myObj[1].lastName);
    cy.log("My profession is: " + myObj[1].profession);
    cy.log("My address is: " + myObj[1].address);
  });
});
