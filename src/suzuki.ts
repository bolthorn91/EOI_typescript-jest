export function stairsInNYears(days: number[][], years: number): number {

    if ( years <= 0 ){
        return 0;
    }
    
    return Math.trunc(calculateSteps(days) * years);
}

export function calculateSteps(days: number[][]) {
    if(days.every((stairs, index, _days) => {
        if (index === 0) {
            return true
        }
        JSON.stringify(stairs) === JSON.stringify(_days[index - 1])
        return stairs.length === _days[index - 1].length
    })){
        return days[0].length * days[0].reduce((acc, current) => acc+current, 0)
    }
    return stepCounter(days)
}

export function stepCounter(days: number[][]): number{
    return days.reduce((acumulatorSteps, currentDay) =>  {

        let steps = currentDay.reduce( (acumulator, currentStep) => acumulator + currentStep, 0);
    
        return acumulatorSteps + steps;
    
    }, 0);
}

export function isAllNumbersPositiveIntegers(days: number[][]): boolean {
    days.forEach(day => {
        day.forEach(steps => {
            Number.isInteger(steps) 
        });
    });
    return true;
}



setInterval