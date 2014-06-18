console.log("Sup bitches");

var hello = "Sup bitches";

console.log(hello);

function hellzo(element){
    console.log(element);
}

["Sup bitches", "You sick of reading Sup bitches?"].forEach(hellzo);


var evenMore = {
    name:"I didnt think so",
    age:"Sub BITCHES!"
};

console.log(evenMore.name);
console.log(evenMore.age);

var para ="One more time for\ngood ole sake\nSup Bitches";
console.log(para);

/* Arrays - list of items. ex: contacts on my phone */

var temps = [67,72,75,83,82,79];

/* Getting values */

console.log(temps[0]);

console.log(temps.length);

var point = {
    x:1,
    y:2,
    z:3,
    ts:new Date()
}

console.log(point.ts);

console.log(new Date());

var nate = {
    name:"Nate",
    age:19,
    location:"Colorado"
};
var sam = {
    name:"Sam",
    age:21,
    location:"California"
};

var people = [sam,nate];

console.log(people[1].age);

var obj = {
    name:"Nate",
    email:"nw@nwhite.net"
}

var obj2 = obj;

obj.email = "-@nw.is";

console.log(obj2.email);

var x;

function canDrink (x) {
    if (x.age >= 21) {
        console.log(x.name + "can drink. congrats")
    } else {
        console.log(x.name + " cant drink. This kid is only" + " " +x.age + "!!!")
    }
}

canDrink(nate);

//For Statements!

for (var i = 0; i < people.length; i++){
    var person = people[i];
    console.log(person.name);
}

// this is cool: var name = name || "default"; It's an or statement in variable.
// Also this is cool: ?: is a short hand conditional. var name = (x>y) ? "Name" : "someone"

var types = {
    string: "a string",
    number: 42,
    boolean: true,
    array: [1,2,3]
};

var key;
console.log('\nData Types:');

for (key in types) {
    console.log(key +":", types[key]);
    console.log('-------------------');
}

var i;
console.log('\nIterating Array:')
for(i=0; i < types.array.length; i++) {
   console.log(i, types.array[i]);
}