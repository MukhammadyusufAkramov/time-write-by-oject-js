//freeze, seal, keys, values, entries, worker

var data = {
    name:'Mukhammad Yusuf',
    age:21,
    adress:'andijan',
    education:'higher'
}

//freeze
Object.freeze(data.education)

//seal
Object.seal(data)  //update works only
data.adress="uzb"

//crud=> creat, update, read, delete
//assign

//create
//Object.assign(data,{email:'yusuflife@gmail.com'})

//read
document.getElementById('h1').innerHTML=data.name

//update
data.age=22
data.education="higher degree"

//delete
delete data.adress


console.log(data);

console.log(Object.keys(data));
console.log(Object.values(data));
console.log(Object.entries(data));

//worker  => qayta - qayta ishlatish
function GetTime() {
    var time = new Date()
    document.getElementById('h1').innerHTML = (time.toLocaleTimeString());
}
setInterval(GetTime,1000)
//setTimeout(GetTime,1000)


//closure
function ishla(val1) {
    return function (val2) {
        console.log(val1+val2);
    }
}
var a = 5
var b = 3

ishla(a)(b)