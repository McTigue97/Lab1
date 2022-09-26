//console.log(5);

class BMI{
    //this is where data is initialised in the class
    constructor(height, weight){
    //the consructor takes two arguements, it is a special type of method that initializes the newly created object/objects   
        this.height = height;
        this.weight = weight;
    }
    //Calculates the two arguements
    calculateBMI(){
    //the weight arguement divides the height arguement which is multiplied by 2    
        let bmi = this.weight / (this.height ** 2);
    //invoking a reult back out from the calculation     
        return bmi;
    }
}
//values 2 and 100 are assigned to the constructor
let myBMI = new BMI(2,100);
//the constuctors are then used in the calculation 
let result = myBMI.calculateBMI();
//prints result to screen
console.log(result);
