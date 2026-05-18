import {parseCsv} from "./parse.js";
import {it, expect} from "vitest"

it('should convert csv to object array', () => {
    const csvData =
        `foo, bar
         1.1, bazl`
    const expected = [
        {
            foo: 1.1,
            bar: "bazl"
        }
    ]

    const given = parseCsv(csvData);
    expect(given).toEqual(expected);
});