import { BaseEntity } from './BaseEntity';
import { IPerson } from './IPerson';
export class Employee extends BaseEntity implements IPerson {
  toString(): string {
    let properties: any[] = [this.name, this.age , this.getCountry()];
    return properties.join(' - ');
  }
  name: string;
  age: number;
  countryId: string;

  constructor(name: string, age: number, countryId: string) {
    super();
    this.name = name
    this.age = age
    this.countryId = countryId
  }

  getCountry(): string {
    if (this.countryId === 'vn') {
      return 'Viet Nam';
    }
    else {
      return 'Somewhere on the Earth';
    }
  }
}