// Product interface (Vehicle)
class IVehicle {
    introduce() {
        throw new Error("This method must be overridden");
    }
}

// Concrete Product (Car)
class Car extends IVehicle {
    introduce() {
        console.log("Car is running on 4 wheels");
    }
}

// Concrete Product (Motorcycle)
class Motorcycle extends IVehicle {
    introduce() {
        console.log("Motorcycle is running on 2 wheels");
    }
}

// Factory interface
class IFactory {
    createVehicle() {
        throw new Error("This method must be overridden");
    }

    makeVehicle() {
        const vehicle = this.createVehicle();
        vehicle.introduce();
    }
}

// Concrete Factory (Car factory)
class CarFactory extends IFactory {
    createVehicle() {
        console.log("Creating a car");
        return new Car();
    }
}

// Concrete Factory (Motorcycle factory)
class MotorcycleFactory extends IFactory {
    createVehicle() {
        console.log("Creating a motorcycle");
        return new Motorcycle();
    }
}

// Usage
const factory1 = new CarFactory();
const vehicle1 = factory1.makeVehicle();
// Output: "Creating a car"
// Output: "Car is running on 4 wheels"

const factory2 = new MotorcycleFactory();
const vehicle2 = factory2.makeVehicle();
// Output: "Creating a motorcycle"
// Output: "Motorcycle is running on 2 wheels"
