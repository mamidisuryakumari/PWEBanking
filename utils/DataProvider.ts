import fs from 'fs';
import { parse } from 'csv-parse/sync';
export class DataProvider {

    static getTestDataFromJSON(filePath: string){
        try {
            let data: String = JSON.parse(fs.readFileSync(filePath, 'utf-8'));
            return data;
        } catch (error) {
            console.error(`Error reading test data from ${filePath}:`, error);
            throw error;
        }
    }

    static getTestDataFromCSV(filePath: string){
        try {
            const data: any = parse(fs.readFileSync(filePath), {
                columns: true,
                skip_empty_lines: true,
            });
            return data;
        } catch (error) {
            console.error(`Error reading test data from ${filePath}:`, error);
            throw error;
        }
    }
}