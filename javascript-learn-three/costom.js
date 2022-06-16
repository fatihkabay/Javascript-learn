function btn() {
    var gun = new Date().getDay();
    switch (gun) {
        case 0:
            day = "PAZAR";
            break;
        case 1:
            day = "PAZARTESÝ";
            break;
        case 2:
            day = "SALÝ";
            break;
        case 3:
            day = "CARSAMBA";
            break;
        case 4:
            day = "PERSEMBE";
            break;
        case 5:
            day = "CUMA";
            break;
        case 6:
            day = "CUMARTESI";
    }
    document.getElementById("paragraph").innerHTML = day;
}