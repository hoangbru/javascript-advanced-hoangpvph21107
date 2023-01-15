// Lab 2.1
const events = [[20, "goal"], [35, "yellow card"], [64, "yellow card"], [75, "goal"], [80, "goal"], [90, "goal"]];
console.log("Lab 2.1")
// 1.
const uniqueEvents = [...new Set(events.map(event => event[1]))];
console.log(uniqueEvents);

// 2. 
const correctedEvents = events.filter(event => event[1] !== "yellow card" || event[0] !== 64);
console.log(correctedEvents);

// 3.
const eventFrequency = correctedEvents.length / 90;
console.log(`1 sự kiện xảy ra, trung bình mỗi ${Math.round(1 / eventFrequency)} phút`);

// 4.
correctedEvents.forEach(event => {
    const half = event[0] <= 45 ? "FIRST HALF" : "SECOND HALF";
    console.log(`[${half}] ${event[0]}: ${event[1].toUpperCase()}`);
});

// Lab 2.2
console.log("Lab 2.2")
document.body.append(document.createElement('textarea'));
document.body.append(document.createElement('button'));
document.querySelector('button').addEventListener('click', function () {
    const text = document.querySelector('textarea').value;
    const rows = text.split('\n');
    for (const [i, row] of rows.entries()) {
        const [first, second] = row.toLowerCase().trim().split('_');
        const output = `${first}${second.replace(
            second[0],
            second[0].toUpperCase()
        )}`;
        console.log(`${output.padEnd(20)}${''.repeat(i + 1)}`);
    }
});

// Lab 2.3
console.log("Lab 2.3")
const flights = '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';
const getCode = str => str.slice(0, 3).toUpperCase();
for (const flight of flights.split('+')) {
    const [type, from, to, time] = flight.split(';');
    const output = `${type.startsWith('_Delayed') ? '�' : ''}${type.replaceAll(
        '_',
        ' '
    )} ${getCode(from)} ${getCode(to)} (${time.replace(':', 'h')})`.padStart(36);
    console.log(output);
}

// Lab 2.4
(function () {
    const header = document.querySelector("h1");
    header.style.color = 'red';
    document.querySelector("h1").addEventListener('click', function () {
        header.style.color = 'blue';
    });
})();