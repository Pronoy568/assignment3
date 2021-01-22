// Kilometer to Meter

function kilometerToMeter(kilometer) {
    if (kilometer == 0) {
        let meter = 0;
        return meter;
    } else if (kilometer < 0) {
        return 'distance cannot be negative';
    } else {
        let meter = kilometer * 1000;
        return meter;
    }
}
const check = kilometerToMeter(12);
console.log(check);
const check1 = kilometerToMeter(0);
console.log(check1);
const check2 = kilometerToMeter(-2);
console.log(check2);

// Budget calculator
function budgetCalculator(watch, phone, laptop) {
    if (watch >= 0 && phone >= 0 && laptop >= 0) {
        let totalWatch = watch * 50;
        let totalPhone = phone * 100;
        let totalLaptop = laptop * 500;
        let total = totalWatch + totalPhone + totalLaptop;
        return total;
    } else {
        return 'It cannot be negative value';
    }
}
const result = budgetCalculator(0, 0, 2);
console.log(result);
const result1 = budgetCalculator(-2, 2, 2);
console.log(result1);
const result2 = budgetCalculator(1, 1, 1);
console.log(result2);

// Hotel Cost
function hotelCost(day) {
    if (day == 0) {
        let total = 0;
        return total;
    } else if (day < 1) {
        return 'day cannot be negative';
    } else if (day < 11) {
        let total = day * 100;
        return total;
    } else if (day > 10 && day < 21) {
        let total = (day - 10) * 80 + 10 * 100;
        return total;
    } else {
        let total = (day - 20) * 50 + 10 * 100 + 10 * 80;
        return total;
    }
}
const cost = hotelCost(22);
console.log(cost);
const cost1 = hotelCost(0);
console.log(cost1);
const cost2 = hotelCost(-1);
console.log(cost2);

// Mega Friend 
function megaFriend(names) {
    var max = names[0].length;
    var index = 0;
    for (let i = 1; i < names.length; i++) {
        if (names[i].length > max) {
            max = names[i].length;
            index = i;
        }
    }
    return names[index];
}
const nam = megaFriend(['roby', 'sachin', 'tamim', 'antu']);
console.log(nam);