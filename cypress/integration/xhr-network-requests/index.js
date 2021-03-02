/// <reference types="cypress" />

describe("JSON Object", () => {
  it("JSON Object exmaple", () => {
    let xhr = new XMLHttpRequest();
    xhr.open("GET", "http://jsonplaceholder.typicode.com/todos/3");
    xhr.send();
    xhr.onload = () => {
      document.write(xhr.response);
      if (xhr.status === 200) {
        console.log(xhr.response);
        console.log(JSON.parse(xhr.response)); //same as the above but converts the response to a json res
      } else {
        console.log('error ${xhr.status}');
      }
    };
  });
});
