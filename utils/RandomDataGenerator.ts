import { faker } from '@faker-js/faker';

export class randomDataUtils {

     static generateRandomFirstName(): string {
        return faker.person.firstName();
    }

    static generateRandomLastName(): string {
        return faker.person.lastName();
    }   
    static generateRandomEmail(): string {
        return faker.internet.email();
    }
    
    static generateRandomPassword(): string {
        return faker.internet.password();
    }
   

    static generateRandomMobileNumber(): string {
    const firstDigit = faker.helpers.arrayElement(['7', '8', '9']);
    const remainingDigits = faker.string.numeric(9);
    return `${firstDigit}${remainingDigits}`;
  }

  static generateRandomPAN(): string {
    const lettersPart1 = faker.string.alpha({ length: 5, casing: 'upper' });
    const numbersPart = faker.string.numeric(4);
    const lettersPart2 = faker.string.alpha({ length: 1, casing: 'upper' });

    return `${lettersPart1}${numbersPart}${lettersPart2}`;
  }

  static generateRandomAadhaar(): string {
  return faker.helpers.arrayElement(['1','2','3','4','5','6','7','8','9']) +
         faker.string.numeric(11);
}

}