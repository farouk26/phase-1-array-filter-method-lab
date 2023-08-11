// Code your solution here
const drivers = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'Bobby']
function findMatching(drivers , name) {
    return drivers.filter(driver => driver.toLowerCase() === name.toLowerCase())
}
function fuzzyMatch(drivers, beginningLetters) {
    return drivers.filter(driver => driver.startsWith(beginningLetters))
}
function matchName (drivers, matchingName) {
    return drivers.filter(driver => driver.name === matchingName)
}