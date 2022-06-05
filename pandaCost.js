function pandaCost(singaraQuantity, samuchaQuantity, jilapiQuantity) {
    const singaraPrice = 7;
    const samuchaPrice = 10;
    const jilapiPrice = 15;

    if (singaraQuantity >= 0 && samuchaQuantity >= 0 && jilapiQuantity >= 0) {
        let totalSingaraPrice = singaraPrice * singaraQuantity;
        let totalSamuchaPrice = samuchaPrice * samuchaQuantity;
        let totalJilapiPrice = jilapiPrice * jilapiQuantity;

        const totalPrice = totalSingaraPrice + totalSamuchaPrice + totalJilapiPrice;
        return totalPrice;
    }
    else {
        return 'Please enter poitive value of singara,samucha and jilapi';
    }

}

console.log(pandaCost(5, 0, 3));