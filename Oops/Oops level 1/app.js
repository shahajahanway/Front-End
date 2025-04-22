// ager function ko kabhi bhi call karte waqt tumne ( new ) ka use kar liye turant in your mind par ek blank object banaao 

// jab bhi function mein ( this ) ko dekho turant uss blank object ko yaad karke uss jagah rakhdo

// old tareeka 
function Ghar (){
    this.shahar = "delhi"
    this.kamra =3
    this.bathroom = 2
    this.kitchen = 1
}
 let ghar1 = new Ghar();
//   yeh hain purana tareeka objects banaane ka ek constructor function se jab javascript mein class ka concept nahi tha or ab javascript mein  class ka concept haintho hum esi karte hain 

class Toffey{
    constructor(flavor, color , taste , shape ){
        this.flavor = flavor;
        this.color = color;
        this.taste = taste;
        this.shape = shape;
    }
};
let chocolate = new Toffey("chocolate","brown","sweet","round");
let vanilla = new Toffey("vanilla","pink","sweet","round");
let mango = new Toffey("mango","green","sweet","squar");
