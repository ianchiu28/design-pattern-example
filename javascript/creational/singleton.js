// Singleton class
class Singleton {
    constructor() {
        // Singleton instance
        if (Singleton.instance) {
            console.log("Singleton instance already exists");
            return Singleton.instance;
        }
        console.log("Creating Singleton instance");
        Singleton.instance = this;

        // Singleton properties
        this.date = new Date(); 
    }

    // Singleton methods here
    reportTime() {
        console.log("Hello, the time is " + this.date);
    }
}

// delay function
const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));

// Usage
(async () => {
    const instance1 = new Singleton();

    // delay 1 second
    console.log("Waiting 1 second...");
    await delay(1000);

    const instance2 = new Singleton();

    instance1.reportTime(); 
    instance2.reportTime();
})();