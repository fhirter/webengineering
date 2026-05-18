import { faker } from '@faker-js/faker';
import { writeFileSync } from 'fs';

const data = [["temperature", "pressure"]];

const N = 100;
for (let i = 0; i < N; i++) {
    const temp = faker.number.float({
        min: -20,
        max: 40,
        fractionDigits: 2,
    })
    const pressure = faker.number.int({
        min: 900,
        max: 1100,
    })
    data.push([temp, pressure]);
}

const csv = data.map(row => row.join(',')).join('\n');

writeFileSync('output.csv', csv, 'utf-8');