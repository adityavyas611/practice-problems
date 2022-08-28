const delay = (number, ms) => new Promise((resolve, reject) => {
    return setTimeout(() => resolve(number,ms));
});

const printNumbers = async () => {
    for(let i = 1; i <= 10; i++){
        try{
            let printingNumber = await delay(i, Math.random() * 1000);
            console.log(printingNumber);
        } catch(e) {
            throw new Error(e);
        }
    }
};

printNumbers();
