var testArr= [1,2,3,4,5];
function nextInLine(arr){
    testArr.push(6);
    return testArr.shift();
};
console.log(nextInLine(testArr + JSON.stringify(testArr)));
 
function testSize(num){
     if (num< 5){
         return "Tiny"
     }
     else if(num< 10){
         return "Small"
     }
     else if (num <15){
         return "Medium"
     }
     else if (num <20){
         return "Large"
     }
return "Huge"
};
console.log(testSize(8))
 

function golfscore(par,strokes){
    var names= ["Hole-in-one!", "Eagle", "Birdie", 
"Par","Bogey", "Double Bogey", "Go Home!"]
    if (strokes ==1){
        return  names[0]
    }
    if (strokes == par+3){
        return `$[names.length-1]`
    }else if (strokes == par-2){
        return names[3]
    }else if(strokes== par){
        return [3]
    }else if (strokes == par+1){
        return names[4]
    }
    else if (strokes ==par +2){
        return names[5]
    }
    else if (strokes == par+3){
        return `$[names.length-1]`
    }
    
return "Change Me"
};
console.log(golfscore(9,6))

function caseInSwitch(val){
     ans= "Argument is unassigned";
    switch(val){
        case 1: 
        ans ="alpha"
        break;
    }switch(val){
        case 2:
        ans= "beta"
        break;
    }switch(val){
        case 3:
        ans= "gamma"
        break;
    }
return ans
};
console.log(caseInSwitch(2));
console.log(caseInSwitch(""))

var pay= "pay is" + " "+ job(20);
function job(val){
    good = 3
    return good* val;
    
};
console.log  (job(5));
console.log (pay);

var myObj = {
    gift:"pony",
    pet:"kitten",
    bed:"sleigh"
};
function checkObj(checkprop){
    /*var ans= " yet to be determined "
    switch(checkprop){
        case "pony":
        ans=  "yes element is there"
        break;
    }switch (checkprop){
        case undefined:
        answer= "please augment object"
        break;
    }
    return ans;   
    };*/

    if (myObj.hasOwnProperty(checkprop)){
        return checkprop
    }
    var value= checkprop
return "property not found"
};
console.log (checkObj("gift"));

var myStorage ={
    "car": {
        "inside": {
            "glove box": "maps",
            "passenger seat": "crumbs",
        },

        "outside": {
            "trunk":"jack",
        }
    },

    "tyres":[
        "front-right", "front-left", "rear-right", "rear-left"
    ],
    
};
var gloveBoxContents = myStorage.car.inside["glove box"];
console.log (gloveBoxContents)

var myPlants =[
    {
        type: "flowers",
        
        list: [ 
            "fir", "pine", "birch"
        ],
        
        color: [
            "green", "blue"
        ] 
    },

    {
        type: "rose",

        list:[
            "rose", "tulip", "dandelion"
        ],
        color: [
            "green", "purple"
        ]
    }
];

var collection={
    5422:{
        artist: "Michelle",
        cars: [
        "Range Rover", "Citroen", "Audi"
        ],

    },
    
    5412:{
        artist: "Alice",
        record: "Blue wine",
        cars: []
    
    },

    5432:{
        artist: "Astrid",
        record: "Do you",
        cars: ["Maserati", "Honda"],
        birthday: [
            "June",
            1999
        ]
    }
}



/*function updateCollection(id, props, value){  
    var ans= "yet to be specified"
    if  (props.artist= " "){
        return value
    }else{
        artist.push(value)
    };
    };

    switch(props){
        case records:
            ans = "Burble Wheel"
            break;
    }

    switch(props){
        case cars:
            ans= cars.push("Mazda")
            break;


    }
return collection;
};
console.log(updateCollection(5412, artist, "Drille"))*/

var Mammal = function (name) { 
       this.name = name; 
};

    Mammal.prototype.get_name = function () {
        return this.name; 
    };

    Mammal.prototype.says = function () {
                return this.saying || ''; 
    };
                
var myMammal = new Mammal('Herb the Mammal'); 

var name = myMammal.get_name();

var Cat = function (name) {
        this.name = name;    
        this.saying = 'meow';     
};

Cat.prototype = new Mammal();

Cat.prototype.purr = function (n) { 
       var i, s = '';    
        for (i = 0; i < n; i += 1) {
            if (s) { s += '-';       
            }        
        s += 'r';    
        } 
return s; 
}; 

Cat.prototype.get_name = function () { 
       return this.says() + ' ' + this.name +  ' ' + this.says(); 
    };
var myArr = [];
var i = 1;
while (i < 6) {
    myArr.push(i)
    i ++
};
console.log(myArr);


var mybody= {
    outer: {
        legs: 2,
        hands: 2,
        eyes:2,
        height:function(){
        let z= (this.legs**2) + (this.hands**2)
         return z;
        }
    },
    inner:function (x, y){
        return x + "and" + y + " are inner orgarns"
        }
    
    
}

var cat= Object.assign(mybody);
console.log (cat.inner("heart", "lungs"))

let cow = Object.create(mybody, 
                            {"leg": {value:4},
                            "hands":{value:0},
                            "horns":{value:2},
                            "eyes": {value:2}
                            })
console.log(cow.inner("guts", "heart"))
console.log(cow.outer.height())
