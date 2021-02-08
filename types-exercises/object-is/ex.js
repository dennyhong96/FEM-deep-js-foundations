// TODO: define polyfill for `Object.is(..)`
if (!Object.is /* || true */) {
	Object.is = (val1, val2) => {
		// Test if a number is -0
		const isItNegZero = (val) => {
			// -0 === 0
			// 1/-0 === -Infinity
			// 1/0 === Infinity
			return val === 0 && 1 / val === -Infinity;
		};

		// Test if a number is NaN
		const isItNaN = (val) => {
			// NaN !== NaN - NaN is the only number that's not equal to itself
			return val !== val;
		};

		// Handle -0 cases
		if (isItNegZero(val1) || isItNegZero(val2)) {
			// Two vals are identical if they are both negetive 0
			return isItNegZero(val1) && isItNegZero(val2);
		}

		// Handle NaNs cases
		if (isItNaN(val1) && isItNaN(val2)) {
			// Two vals are identical if they are both NaN
			return true;
		}

		// Handle normal cases with strict comparasion
		return val1 === val2;
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
