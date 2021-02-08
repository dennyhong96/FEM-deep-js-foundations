// TODO: write the validation functions

function isValidName(str) {
	return typeof str === "string" && str.trim().length >= 3;
}

function hoursAttended(attended, length) {
	const isStrOrNum = (arg) => ["string", "number"].includes(typeof arg);

	// MUST BE EITHER STRING OR NUMBER
	if (!(isStrOrNum(attended) && isStrOrNum(length))) return false;

	// STRING CAN'T BE "" BECAUSE "" WILL GET COERCED TO 0
	if (
		(typeof attended === "string" && attended === "") ||
		(typeof length === "string" && length === "")
	) {
		return false;
	}

	attendedNum = Number(attended);
	lengthNum = Number(length);

	// HANDLE NAN
	if (Number.isNaN(attendedNum) || Number.isNaN(lengthNum)) return false;

	// MUST BE GT ZERO
	if (!(attendedNum > 0 && lengthNum > 0)) return false;

	// MUST BE WHOLE NUMBERS
	if (!(Number.isInteger(attendedNum) && Number.isInteger(lengthNum))) return false;

	// ATTENDED MUST BE LTE LENGTH
	if (!(attendedNum <= lengthNum)) return false;

	return true;
}

// tests:
console.log(isValidName("Frank") === true);
console.log(hoursAttended(6, 10) === true);
console.log(hoursAttended(6, "10") === true);
console.log(hoursAttended("6", 10) === true);
console.log(hoursAttended("6", "10") === true);

console.log(isValidName(false) === false);
console.log(isValidName(null) === false);
console.log(isValidName(undefined) === false);
console.log(isValidName("") === false);
console.log(isValidName("  \t\n") === false);
console.log(isValidName("X") === false);
console.log(hoursAttended("", 6) === false);
console.log(hoursAttended(6, "") === false);
console.log(hoursAttended("", "") === false);
console.log(hoursAttended("foo", 6) === false);
console.log(hoursAttended(6, "foo") === false);
console.log(hoursAttended("foo", "bar") === false);
console.log(hoursAttended(null, null) === false);
console.log(hoursAttended(null, undefined) === false);
console.log(hoursAttended(undefined, null) === false);
console.log(hoursAttended(undefined, undefined) === false);
console.log(hoursAttended(false, false) === false);
console.log(hoursAttended(false, true) === false);
console.log(hoursAttended(true, false) === false);
console.log(hoursAttended(true, true) === false);
console.log(hoursAttended(10, 6) === false);
console.log(hoursAttended(10, "6") === false);
console.log(hoursAttended("10", 6) === false);
console.log(hoursAttended("10", "6") === false);
console.log(hoursAttended(6, 10.1) === false);
console.log(hoursAttended(6.1, 10) === false);
console.log(hoursAttended(6, "10.1") === false);
console.log(hoursAttended("6.1", 10) === false);
console.log(hoursAttended("6.1", "10.1") === false);
