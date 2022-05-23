function checkParanthesis () {
    let list = document.getElementById('text').value;
    let cleanList = [];
    let x = 0;

    if (list == 0) {
        document.getElementById("output").innerHTML = ("Type smth first!");
        return
    } else {
        for (i in list) {
            if (list[i] == '(' || list[i] == ')') {
                cleanList[x] = list[i];
                x++;
            }
        }
    }
    if (cleanList.length % 2 != 0)
        output = 'Not even!'
    else {
        let bracesCounter = 0;
        for (let key in cleanList) {
            if (cleanList[key] == '(') {
                bracesCounter++;
            }
            if (cleanList[key] == ')') {
                bracesCounter--;
            }
            if (bracesCounter < 0) {
                output = 'Too much closed braces!'
                break
            }
            if (bracesCounter == 0)
                output = 'Great!'
            else output = 'Too much open braces!'
        }
    }
    document.getElementById("output").innerHTML = output;
}
