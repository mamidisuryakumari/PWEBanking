import { randomUUID } from 'crypto';

export class CommonUtils {
    static generateRandomNumber(min: number = 100, max: number = 999): number {
        if (min > max) {
            throw new Error("Minimum value should be less than or equal to maximum value");
        }
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }


    static generateRandomMobileNumber(): string {
        // Indian mobile numbers usually start with 6–9
        const firstDigit = Math.floor(Math.random() * 4) + 6;
        let mobileNumber = firstDigit.toString();

        // Generate remaining 9 digits
        for (let i = 0; i < 9; i++) {
            mobileNumber += Math.floor(Math.random() * 10);
        }

        return mobileNumber;
    }

    static generateRandomAadhaarNumber(): string {
        let aadhaar = "";

        // First digit should be between 2–9
        aadhaar += Math.floor(Math.random() * 8) + 2;

        // Remaining 11 digits (0–9)
        for (let i = 0; i < 11; i++) {
            aadhaar += Math.floor(Math.random() * 10);
        }

        return aadhaar;
    }

    static generateRandomPANNumber(): string {
        const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        let pan = "";

        // First 5 letters
        for (let i = 0; i < 5; i++) {
            pan += letters.charAt(Math.floor(Math.random() * letters.length));
        }

        // Next 4 digits
        for (let i = 0; i < 4; i++) {
            pan += Math.floor(Math.random() * 10);
        }

        // Last letter
        pan += letters.charAt(Math.floor(Math.random() * letters.length));

        return pan;
    }
}
