function throwIfNan(a, b) {
    if (Number.isNaN(a) || Number.isNaN(b)) {
        throw Error('Error no se admiten NaN')
    }
}

function sum(a: number, b: number): number {
    throwIfNan(a, b);
    return a + b;
}

function sub(a: number, b: number): number {
    return a - b;
}

function multiply(a: number, b: number): number {
    return a * b;
}

function div(a: number, b: number): number {
    return a / b;
}

// To Implement: sumAll, subAll, multiplyAll, divAll

export { sum, sub, multiply, div };
