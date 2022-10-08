function solution(files) {
    var answer = [];
    // console.log(separate(files[0]))
    // console.log(files.map(file => separate(file)).sort(sortFile).map(file => file.join("")))
    return files.map(file => separate(file)).sort(sortFile).map(file => file.join(""));
}

function separate(file){
    let flag = 'HEAD';
    let fileArray = [...file];

    let chkNumber = /\d/;
    let chkString = /\a/;

    let firstFlag = fileArray.length;
    let secondFlag = fileArray.length;
    for(let i = 0 ; i < fileArray.length; i++){
        if(flag === 'HEAD'){
            if(chkNumber.test(fileArray[i])){
                firstFlag = i;
                flag = 'NUMBER';
            }
        }
        else if(flag === 'NUMBER'){
            if(!chkNumber.test(fileArray[i])){
                secondFlag = i;
                flag = 'TAIL';
                break;
            }
        }
    }

    const head = file.slice(0,firstFlag);
    const number = file.slice(firstFlag, secondFlag);
    const tail = file.slice(secondFlag, file.length);

    return [head, number, tail]
}

function sortFile(a, b){
    if(a[0].toUpperCase() !== b[0].toUpperCase()){
        if(a[0].toUpperCase() > b[0].toUpperCase()) return 1;
        else if(a[0].toUpperCase() < b[0].toUpperCase()) return -1;

    }else{
        if(Number(a[1]) !== Number(b[1])){
            return Number(a[1]) - Number(b[1])
        }else{
            return 0;
        }
    }

}
