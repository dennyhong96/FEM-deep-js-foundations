// TODO: define polyfill for `Object.is(..)`
if (!Object.is /* || true */) {
	Object.is = function (val1, val2) {
		// Test for -0s
		if (isNeg0(val1) || isNeg0(val2)) {
			// Vals are the same if val1 and val2 are both negetive 0
			return isNeg0(val1) && isNeg0(val2);
		}

		// Test for NaNs
		if (isItNaN(val1) && isItNaN(val2)) {
			// Vals are the same if val1 and val2 are both NaN
			return true;
		}

		// Normal cases
		return val1 === val2;

		function isNeg0(val) {
			// -0 === 0, 1/-0===-Infinity, 1/0===Infinity
			return val === 0 && 1 / val === -Infinity;
		}

		function isItNaN(val) {
			// NaN!==NaN
			return val !== val;
		}
	};
}

// tests:
console.log(Object.is(42, 42) === true);
console.log(Object.is("foo", "foo") === true);
console.log(Object.is(false, false) === true);
console.log(Object.is(null, null) === true);
console.log(Object.is(undefined, undefined) === true);
console.log(Object.is(NaN, NaN) === true);
console.log(Object.is(-0, -0) === true);
console.log(Object.is(0, 0) === true);

console.log(Object.is(-0, 0) === false);
console.log(Object.is(0, -0) === false);
console.log(Object.is(0, NaN) === false);
console.log(Object.is(NaN, 0) === false);
console.log(Object.is(42, "42") === false);
console.log(Object.is("42", 42) === false);
console.log(Object.is("foo", "bar") === false);
console.log(Object.is(false, true) === false);
console.log(Object.is(null, undefined) === false);
console.log(Object.is(undefined, null) === false);
