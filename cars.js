class Vehicle{
    //this is where data is initialised in the class
    constructor(make,model,year){
    //the consructor takes three arguements, it is a special type of method that initializes the newly created object/objects    
        this.make = make;
        this.model = model;
        this.year = year;
    }
    //This is the method for the class
    Information(){
        //this logs make to the console
        console.log(`Make: ${this.make}.`);
        //this logs model to the console
        console.log(`Model: ${this.model}.`);
        //this logs year to the console
        console.log(`Year: ${this.year}`);
    }
}
//an instance is created which inputs the following information
//let myVehicle = new Vehicle('VW','Golf', 2022);
//myVehicle.Information();

//car class is extending to the vehicle class
class Car extends Vehicle{
    //the consructor takes four arguements, it is a special type of method that initializes the newly created object/objects
    constructor(make, model, year, doors){
        //super allows access to the parent constructor
        super(make,model,year);
        //doors is assigned to a local variable
        this.doors = doors;
    }

    //method that outputs the information and addding doors to it
    Information(){
        //access to the parent method
        super.Information();
        //adds doors to the console
        console.log(`Doors: ${this.doors}.`);
    }

}

//an instance is created which inputs the following information
let myCar = new Car('VW', 'Golf', 2010, 5);
//inovke the method
myCar.Information();