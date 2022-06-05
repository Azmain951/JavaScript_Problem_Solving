function picnicBudget(participantCount) {
    let totalPicnicBudget = 0;
    if (participantCount < 0) {
        return 'Please enter participant value greater than zero'
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

console.log(picnicBudget(300));