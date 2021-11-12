/*
* Przeprogramowani.ts - https://przeprogramowani.pl/typescript/
*
* This or that
* ------------------
*
* Goal: Make sure that `configureScreenSize` function can accept both types of parameters.
* 
* Hint: https://www.typescriptlang.org/docs/handbook/advanced-types.html#union-types
*/

// NOTE: This is bad advice. In real applications,
//       `ScreenSideValue` will be of course an integer type,
//       not an union type
type ScreenSideValue = string | number;

const iAmANumber = 800
const iAmAString = '600'

function configureScreenSize(width: ScreenSideValue, height: ScreenSideValue) {
    return `Setting screen size as ${width}px x ${height}px`;
}

/* Do not modify tests */

test('should pass with two numbers', () => {
    expect(configureScreenSize(iAmANumber, iAmANumber)).toBe('Setting screen size as 800px x 800px')
})

test('should pass with number and string', () => {
    expect(configureScreenSize(iAmANumber, iAmAString)).toBe('Setting screen size as 800px x 600px')
})

test('should pass with string and number', () => {
    expect(configureScreenSize(iAmAString, iAmANumber)).toBe('Setting screen size as 600px x 800px')
})

test('should pass with two strings', () => {
    expect(configureScreenSize(iAmAString, iAmAString)).toBe('Setting screen size as 600px x 600px')
})


