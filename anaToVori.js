function anaToVori(ana) {
    if (ana < 0) {
        return 'Please enter a positive value of ana';
    }
    else {
        let vori = ana / 16;
        return vori;
    }
}

let ana = -1;
console.log(anaToVori(ana));