
export class DateUtils{

  static getCurrentDate():string{
    const date = new Date();
  return date.toISOString().split('T')[0];
  }

   static getFutureDate(daysOffset: number): string {
    const date = new Date();
    date.setDate(date.getDate() + daysOffset);
    return date.toISOString().split('T')[0];
  }

    
    static toISODate(date: string): string {
    if (!date) throw new Error('Date value is required');

    const parts = date.split(/[-/]/);
    if (parts.length !== 3) throw new Error('Invalid date format');

    let day: string, month: string, year: string;

    // Detect format: if first part > 12 → DD-MM-YYYY, else MM-DD-YYYY
    if (Number(parts[0]) > 12) {
      [day, month, year] = parts; // DD-MM-YYYY
    } else {
      [month, day, year] = parts; // MM-DD-YYYY
    }

    // Pad single digits with leading zero
    day = day.padStart(2, '0');
    month = month.padStart(2, '0');

    return `${year}-${month}-${day}`; // ISO format
  }
}