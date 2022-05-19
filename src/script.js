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
        output = "Even!"
    else output = "Odd!"
    document.getElementById("output").innerHTML = output;
}
