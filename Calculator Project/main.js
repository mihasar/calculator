function addFunc() {
    let a = 0, b = 0;
    a = f.calc.value;
    b = a.charAt(a.length - 1);
    if (b === '+' || b === '-' || b === '/' || b === '*') {
        f.calc.value = a.substring(0, (a.length - 1));
        f.calc.value+= '+';
    }
    else {
        f.calc.value+='+';
    }

}
function subFunc() {
    let a = 0, b = 0;
    a = f.calc.value;
    b = a.charAt(a.length - 1);
    if (b === '-' || b === '-' || b === '/' || b === '*') {
        f.calc.value = a.substring(0, (a.length - 1));
        f.calc.value+= '-';
    }
    else {
        f.calc.value+='-';
    }

}
function divFunc() {
    let a = 0, b = 0;
    a = f.calc.value;
    b = a.charAt(a.length - 1);
    if (b === '+' || b === '-' || b === '/' || b === '*') {
        f.calc.value = a.substring(0, (a.length - 1));
        f.calc.value+= '/';
    }
    else {
        f.calc.value+='/';
    }

}
function mulFunc() {
    let a = 0, b = 0;
    a = f.calc.value;
    b = a.charAt(a.length - 1);
    if (b === '+' || b === '-' || b === '/' || b === '*') {
        f.calc.value = a.substring(0, (a.length - 1));
        f.calc.value+= '*';
    }
    else {
        f.calc.value+='*';
    }

}