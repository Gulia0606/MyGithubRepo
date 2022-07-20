console.log("Hello World");
let num1=23;
let num2=24;

let sum=num1+num2;
console.log(sum);

///

class Plant {
    constructor(taxanomic, common, layer, yields) {
        this.taxanomicName = taxanomic
        this.commonName = common
        this.layer = layer 
        this.yields = yields 
    }

    // The usefulString method takes no parameters, all the data required is contained in the 'this' context.
    usefulString() {
        const nameString = this.taxanomicName + ' is commonly known as ' + this.commonName + '.'
        const growthString = this.taxanomicName + ' grows in the ' + this.layer + ' layer of a forest garden.'
        const yieldString = this.taxanomicName + ' can yield ' + this.yields
        return(nameString + ' ' + growthString + ' ' + yieldString)
    }
}

const mullberry = new Plant('morus alba', 'white mulberry', 'canopy', ['food', 'fuel', 'friends'])
const broadBean = new Plant('vicia faba', 'broad bean', 'herbaceous', ['food', 'fertilizer'])

console.log(mullberry.usefulString())
console.log(broadBean.usefulString())