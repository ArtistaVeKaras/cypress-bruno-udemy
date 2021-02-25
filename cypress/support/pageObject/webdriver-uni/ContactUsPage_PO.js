class Contact_Us_Page {
  contactFormSubmission(firstName, lastName, email, comment, $selector, text) {
    cy.get('[name="first_name"]').type(firstName);
    cy.get('[name="last_name"]').type(lastName);
    cy.get('[name="email"]').type(email);
    cy.get("textarea.feedback-input").type(comment);
    cy.get('[type="submit"]').click();
    cy.get($selector).contains(text);
    cy.screenshot();
    cy.screenshot("Made a contact us form submission`");
    // cy.get($selector).contains(text,{timeout:6000});//overrides the current default timeout to 6s
  }
}

export default Contact_Us_Page;
