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




var myArr = [];
var i = 1;
while (i < 6) {
    myArr.push(i)
    i ++
};
console.log(myArr);