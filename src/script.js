function checkParanthesis () {
    let list = document.getElementById('text').value,
        outputElm = document.getElementById('output');

    list == 0 ? showMessage("Type smth first!") : counter(list) 

    function counter(list){
        let cleanList = [], x = 0;
        
        for (i in list) {
            if (list[i] == '(' || list[i] == ')') {
                cleanList[x] = list[i];
                x++
            }
        }

        if (cleanList.length % 2 != 0)
            showMessage('Not even!')
        else {
            let bracesCounter = 0;
            for (let key in cleanList) {
                cleanList[key] == '(' ? bracesCounter++ : bracesCounter-- ;
                if (bracesCounter < 0) {
                    showMessage('Too much closed braces!');
                    break
                }
                if (bracesCounter == 0)
                    showMessage('Great!');
                else showMessage('Too much open braces!')
            }
        }
    }

    function showMessage(message) {
            outputElm.innerHTML = message;
        }
}