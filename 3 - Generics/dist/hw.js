class KeyValueDescription {
    set key(value, description) {
        if (value == null || value == undefined) {
            throw new Error("Значение value не может быть пустым");
        }
        this._key = value;
        if (this.description == null || this.description == undefined) {
            throw new Error("Значение value не может быть пустым");
        }
        this._key = description;
    }
    get key() {
        return this._key;
    }
    set value(value) {
        if (value == null || value == undefined) {
            throw new Error("Значение value или description не может быть пустым");
        }
        this._value = value;
    }
    get value() {
        return this._value;
    }
    set description(description) {
        if (description == null || description == undefined) {
            throw new Error("Значение value или description не может быть пустым");
        }
        this._description = description;
    }
    get description() {
        return this._description;
    }
}
let keyValueDescription = new KeyValueDescription();
console.log(keyValueDescription);
class Dictionary1 {
    constructor() {
        this.data1 = [];
    }
    // private data2: KeyDescription<TKey, TDescrition>[]=[];
    setValue1(key, value) {
        let first = new KeyValueDescription();
        first.key = key;
        first.value = value;
        // first.description=description;
        this.data1.push(first);
    }
    getValue1(key) {
        for (let i = 0; i < this.data1.length; i++) {
            if (this.data1[i].key === key) {
                return this.data1[i].value;
            }
        }
        return null;
    }
    setValue2(key, description) {
        let second = new KeyValueDescription();
        second.key = key;
        second.description = description;
        this.data1.push(second);
    }
    getValue2(key) {
        for (let i = 0; i < this.data1.length; i++) {
            if (this.data1[i].key === key) {
                return this.data1[i].description;
            }
        }
        return null;
    }
}
let dictionary = new Dictionary1();
dictionary.setValue1("castle", "ладья");
dictionary.setValue1("bishop", "слон");
dictionary.setValue1("knight", "конь");
dictionary.setValue1("queen", "ферзь");
dictionary.setValue2("castle", "ходит прямо");
dictionary.setValue2("bishop", "ходит наискосок");
dictionary.setValue2("knight", "буквой Г");
dictionary.setValue2("queen", "универсальная фигура, которая ходит как прямо, так и наискосок");
console.log(dictionary.getValue1("queen"));
console.log(dictionary.getValue2("queen"));
console.log(dictionary);
// class Dictionary1<TKey, TSecKey, TValue, TDescrition>{
//     private data1: KeyValueDescription<TKey, TSecKey, TDescrition, TValue>[] = [];
//     // private data2: KeyDescription<TKey, TDescrition>[]=[];
//     public setValue1(key1: TKey, value: TValue){
//         let first =new KeyValueDescription<TKey, TValue>();
//         first.key1=key1;
//         first.value=value;
//         this.data1.push(first);
//     }
//     public getValue1(key1: TKey) :TValue | null{
//         for (let i=0; i<this.data1.length; i++){
//             if(this.data1[i].key1 === key1){
//                 return this.data1[i].value
//             }
//         } 
//         return null;
//     }
//     public setValue2(key2: TSecKey, description: TDescrition){
//         let second =new KeyValueDescription<TSecKey, TDescrition>();
//         second.key2=key2;
//         second.description=description;
//         this.data1.push(second);
//     }
//     public getValue2(key2: TSecKey) :TDescrition | null{
//         for (let i=0; i<this.data1.length; i++){
//             if(this.data1[i].key2 === key2){
//                 return this.data1[i].description
//             }
//         } 
//         return null;
//     }
// }
// let dictionary = new Dictionary1<string, strings>();
// dictionary.setValue1("castle", "ладья");
// dictionary.setValue1("bishop", "слон");
// dictionary.setValue1("knight", "конь");
// dictionary.setValue1("queen", "ферзь");
// console.log(dictionary.getValue1("queen"));
//# sourceMappingURL=hw.js.map