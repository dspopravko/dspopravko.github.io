function checkEven () {
    let a = document.getElementById('text').value;
    if (a == 0) {
        document.getElementById("output").innerHTML = ("Type smth first!");
        return
    }
    let [brace1, brace2] = [0, 0];
    for (let key in a) {
        if (a[key] == '(')
          brace1 ++
        if (a[key] == ')')
          brace2 ++
      }
    let output = "";
    if (brace1 === brace2)
        output = "All good!"
    else if (brace1 > brace2) {
        if (brace1 - brace2 > 1) {
            output = `You need ${brace1 - brace2} more closed braces`
        } else output = `You need 1 more closed brace`
    } else if (brace2 - brace1 > 1) {output = `You need ${brace2 - brace1} more open braces`}
    else output = `You need 1 more open brace`
    document.getElementById("output").innerHTML = output;
}
