// Language     : javascript
// Programmers  : https://programmers.co.kr/learn/courses/30/lessons/42888
// Problem      : 오픈채팅방

let arr = [];
let users = {}
function solution(record) {
    record.forEach(r => {
        const [command, uid, name] = r.split(' ');
        if(command === 'Change' || command === 'Enter') changeEvent(uid, name);
    })
    record.forEach(r => {
        const [command, uid, name] = r.split(' ');
        switch(command){
            case 'Enter':
                enterEvent(uid, name);
                break;
            case 'Leave':
                leaveEvent(uid);
                break;
        }
    })
    return arr;
}

// enter
function enterEvent(uid, name){
    arr.push(`${users[uid]}님이 들어왔습니다.`)
}
// leave
function leaveEvent(uid){
    arr.push(`${users[uid]}님이 나갔습니다.`);
}
// change
function changeEvent(uid, name){
    users[uid] = name;
}
