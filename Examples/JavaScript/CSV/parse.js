import {readFileSync, writeFileSync} from 'fs';

const inputFile = "data.csv"
const outputfile = "data.js"


export function parseCsv(csvData) {
    const rows = csvData
        .split('\n')
        .map(row => row.trim())
        .filter(row => row.length > 0);

    if (rows.length < 2) return [];

    const headers = rows[0].split(',').map(h => h.trim());

    return rows.slice(1).map(row => {
        const values = row.split(',').map(v => v.trim());
        return Object.fromEntries(
            headers.map((header, i) => {
                let parsedValue = Number(values[i]);
                if (isNaN(parsedValue)) parsedValue = values[i];
                return [header, parsedValue];
            })
        );
    });
}

const csvData = readFileSync(inputFile, 'utf-8');
const regularCsv = csvData.split('\n').map(row => row.split('\t').join(',')).join('\n');
const parsed = parseCsv(regularCsv);
writeFileSync(outputfile, `export const data = ${JSON.stringify(parsed, null, 2)};\n`);
console.log(`Parsed ${parsed.length} rows and saved to ${outputfile}`);