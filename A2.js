function alternatingSums(a) {
    //const a = [60, 40, 55, 75, 64];
    var kq = [];
    var team1 = 0, team2 = 0;
    for (var i = 0; i < a.length; i++) {
        if (i % 2 == 0) {
            team1 += a[i]
        } else {
            team2 += a[i]
        }
    }
    kq.push(team1, team2)
    console.log(kq)
}

