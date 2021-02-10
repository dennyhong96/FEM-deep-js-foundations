// ********************************
const printRecords = (recordIds) =>
	studentRecords
		.filter((record) => recordIds.includes(record.id))
		.sort((recordA, recordB) =>
			recordA.name < recordB.name ? -1 : recordA.name > recordB.name ? 1 : 0
		)
		.map((record) => `${record.name} (${record.id}): ${record.paid ? "Paid" : "Not Paid"}`)
		.join("\n");

const paidStudentsToEnroll = () => [
	...currentEnrollment,
	...studentRecords
		.filter((record) => !currentEnrollment.includes(record.id) && record.paid)
		.map((record) => record.id),
];

const remindUnpaid = (recordIds) =>
	printRecords(
		studentRecords
			.filter((record) => recordIds.includes(record.id) && !record.paid)
			.map((record) => record.id)
	);

let currentEnrollment = [410, 105, 664, 375];

const studentRecords = [
	{ id: 313, name: "Frank", paid: true },
	{ id: 410, name: "Suzy", paid: true },
	{ id: 709, name: "Brian", paid: false },
	{ id: 105, name: "Henry", paid: false },
	{ id: 502, name: "Mary", paid: true },
	{ id: 664, name: "Bob", paid: false },
	{ id: 250, name: "Peter", paid: true },
	{ id: 375, name: "Sarah", paid: true },
	{ id: 867, name: "Greg", paid: false },
];

console.log(printRecords(currentEnrollment));
console.log("----");
currentEnrollment = paidStudentsToEnroll();
console.log(printRecords(currentEnrollment));
console.log("----");
console.log(remindUnpaid(currentEnrollment));

/*
	Bob (664): Not Paid
	Henry (105): Not Paid
	Sarah (375): Paid
	Suzy (410): Paid
	----
	Bob (664): Not Paid
	Frank (313): Paid
	Henry (105): Not Paid
	Mary (502): Paid
	Peter (250): Paid
	Sarah (375): Paid
	Suzy (410): Paid
	----
	Bob (664): Not Paid
	Henry (105): Not Paid
*/
