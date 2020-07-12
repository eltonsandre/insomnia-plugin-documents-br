exports.getRandomInt = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
}

exports.digitoVerificador = (dv) => {
    dv = 11 - (dv % 11);
    return (dv >= 10) ? 0 : dv;
}