// Problem:1 (Ana to Vori)
function anaToVori(ana) {
    if (ana < 0) {
        return 'Please enter a positive value of ana';
    }
    else {
        let vori = ana / 16;
        return vori;
    }
}


// Problem:2 (Panda Cost)
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


// Problem:3 (Total Picnic Budget)
function picnicBudget(participantCount) {
    let totalPicnicBudget = 0;
    if (participantCount < 0) {
        return 'Please enter a positive participant value'
    }
    else {
        if (participantCount <= 100) {
            totalPicnicBudget = participantCount * 5000;
        }
        else if (participantCount > 100 && participantCount <= 200) {
            let picnicBudget100 = 100 * 5000;
            let participantCountAbove100 = participantCount - 100;
            let picnicBudget200 = participantCountAbove100 * 4000;
            totalPicnicBudget = picnicBudget100 + picnicBudget200;
        }
        else {
            let picnicBudget100 = 100 * 5000;
            let picnicBudget200 = 100 * 4000;
            let participantCountAbove200 = participantCount - 200;
            picnicBudgetAbove200 = participantCountAbove200 * 3000;
            totalPicnicBudget = picnicBudget100 + picnicBudget200 + picnicBudgetAbove200;
        }
    }

    return totalPicnicBudget;
}


// Problem:4 (First Odd Friend Name)
function oddFriend(friends) {
    let oddFriendName = '';
    if (friends.length == 0) {
        return 'Please Enter atleast one friend name';
    }
    for (const friend of friends) {
        if (friend.length % 2 != 0) {
            oddFriendName = friend;
            return oddFriendName;
        }
        else {
            continue;
        }
    }
}