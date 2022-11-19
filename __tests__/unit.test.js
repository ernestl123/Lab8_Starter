// unit.test.js

const functions = require('../code-to-unit-test/unit-test-me.js');

// TODO - Part 2
test("Test a valid phone number 1", () => {
    expect(functions.isPhoneNumber("(123) 569-1948")).toBe(true);
});

test("Test a valid phone number 2", () => {
    expect(functions.isPhoneNumber("(582) 111-0000")).toBe(true);
});

test("Test an invalid phone number", () => {
    expect(functions.isPhoneNumber("12")).toBe(false);
});

test("Test an invalid phone number", () => {
    expect(functions.isPhoneNumber("1209348548")).toBe(false);
});

test("Test valid email 1", () => {
    expect(functions.isEmail("eaoidjf@ucsd.edu")).toBe(true);
});

test("Test valid email 2", () => {
    expect(functions.isEmail("138djhu1919j@target.com")).toBe(true);
});

test("Test invalid email 1", () => {
    expect(functions.isEmail("bob@g")).toBe(false);
});

test("Test invalid email 2", () => {
    expect(functions.isEmail("@gadfm.com")).toBe(false);
});

/**
 * The password's first character must be a letter, it must contain at least * 4 
 * characters and no more than 15 characters and no characters other than * * letters, 
 * numbers and the underscore may be used
 */
test("Test strong password 1", () => {
    expect(functions.isStrongPassword("Ajidfo103")).toBe(true);
});

test("Test strong password 2", () => {
    expect(functions.isStrongPassword("A____dfadf")).toBe(true);
});

test("Test weak password 1", () => {
    expect(functions.isStrongPassword("1234")).toBe(false);
});

test("Test weak password 2", () => {
    expect(functions.isStrongPassword("Adfaadkakjfjkdfaojdfaiojdfaiojdoifjoa")).toBe(false);
});

test("Valid date 11/12/1111", () => {
    expect(functions.isDate("11/12/1111")).toBe(true);
});

test("Valid date 1 / 1 / 2022", () => {
    expect(functions.isDate("1/1/2022")).toBe(true);
});

test("Invalid date 111/1/2022", () => {
    expect(functions.isDate("111/1/2022")).toBe(false);
});

test("Invalid date 1/1/203023", () => {
    expect(functions.isDate("1/1/203023")).toBe(false);
});

test("Testing hex #AAA", () => {
    expect(functions.isHexColor("#AAA")).toBe(true);
});

test("Testing hex #22F", () => {
    expect(functions.isHexColor("#22F")).toBe(true);
});

test("Testing invalid hex 2", () => {
    expect(functions.isHexColor("2")).toBe(false);
});

test("Testing invalid hex #AAAAAAAAAAA", () => {
    expect(functions.isHexColor("#AAAAAAAAAAA")).toBe(false);
});