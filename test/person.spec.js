import { expect } from "chai";
import Person from "../src/Person";

describe("Person", () => {
  it("should report name", () => {
    const testResult = new Person("John").name;
    expect(testResult).to.equal("John");
  });
});
