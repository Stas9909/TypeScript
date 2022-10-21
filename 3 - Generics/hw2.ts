class StringValues {
    private values: string[] = [];
    constructor(index0: string, index1: string, index2: string, index3: string, index4: string, index5: string, index6: string) {
        this.values[0] = index0;
        this.values[1] = index1;
        this.values[2] = index2;
        this.values[3] = index3;
        this.values[4] = index4;
        this.values[5] = index5;
        this.values[6] = index6;
    }

    *getValues() {
        for (let i = 0; i < this.values.length; i++) {
            yield this.values[i]
        }
    }
}

let passedValues = new StringValues("the", "constructor", "contains", "the", "values", "I", "passed");
passedValues.getValues();
let getValues = passedValues.getValues()
passedValues.values[0]="this";//Ошибка допущенная специально, чтобы проверить можно перезаписать или нет
console.log(passedValues)
console.log(passedValues.getValues)

let objIteration='';

for(const keys of getValues){
    // if ("number"){
    if (typeof keys ==="number"){
        getValues.throw("error occured")
    }
    objIteration+=keys
}

console.log(getValues)
console.log(objIteration)






