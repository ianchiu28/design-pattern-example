// Computer class
class Computer {
    constructor(cpu, ram, storage, gpu) {
        this.cpu = cpu;
        this.ram = ram;
        this.storage = storage;
        this.gpu = gpu;
    }

    toString() {
        return `Computer: CPU=${this.cpu}, RAM=${this.ram}GB, Storage=${this.storage}GB, GPU=${this.gpu}`;
    }
}

// ComputerBuilder class
class ComputerBuilder {
    constructor() {
        this.cpu = "Default CPU";
        this.ram = 8;
        this.storage = 256;
        this.gpu = "Integrated GPU";
    }

    setCPU(cpu) {
        this.cpu = cpu;
        return this;
    }

    setRAM(ram) {
        this.ram = ram;
        return this;
    }

    setStorage(storage) {
        this.storage = storage;
        return this;
    }

    setGPU(gpu) {
        this.gpu = gpu;
        return this;
    }

    build() {
        return new Computer(this.cpu, this.ram, this.storage, this.gpu);
    }
}

// Usage example
const gamingPC = new ComputerBuilder()
    .setCPU("Intel i9")
    .setRAM(32)
    .setStorage(1000)
    .setGPU("NVIDIA RTX 3080")
    .build();

console.log(gamingPC.toString());

const officePC = new ComputerBuilder()
    .setCPU("Intel i5")
    .setRAM(16)
    .build();

console.log(officePC.toString());
