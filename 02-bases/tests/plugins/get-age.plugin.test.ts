import { getAge } from "../../src/plugins";

describe("plugins/get-age.plugin.ts", () => {
  test("getAge() should return the age of a person", () => {
    const birthdate = "1998-10-31";
    const age = getAge(birthdate);

    expect(typeof age).toBe("number");
  });

  test("getAge should return current age", () => {
    const birthdate = "1998-10-31";
    const age = getAge(birthdate);

    const calculatedAge = new Date().getFullYear() - new Date(birthdate).getFullYear();
    expect(age).toBe(calculatedAge);
  });
  
  test('getAge should return 0 years', () => {

  })

});
