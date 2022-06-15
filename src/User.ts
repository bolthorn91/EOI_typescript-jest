import { countChars } from "./adapters";

interface AdditionalDataInterface {
    house: boolean;
    car: boolean;
}

export class User {
    private _name: string;
    private _surname: string;
    private _age: number;
    private _email: string;
    private _additionalData: AdditionalDataInterface;

    constructor() {
    }

    get name() {
        return this._name;
    }

    set name(name) {
        this._name = name;
    }

    get surname() {
        return this._surname;
    }

    set surname(surname) {
        this._surname = surname;
    }

    get age() {
        return this._age;
    }

    set age(age) {
        this._age = age;
    }

    get email() {
        return this._email;
    }

    set email(email) {
        this._email = email;
    }

    get additionalData() {
        return this._additionalData;
    }

    set additionalData(additionalData) {
        this._additionalData = additionalData;
    }

    getFullName(): string {
        return `${this.name} ${this.surname}`;
    }

    getEmailAlias(): string | null {
        if (this.email.includes('@')) {
            const alias = this.email.split('@')[0];
            if (alias !== '') {
                return alias;
            }
        }
        return null;
    }
}

// To implement: getFullName, getEmailAlias

