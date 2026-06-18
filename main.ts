namespace BuilderFull {
    class Computer {
        public cpu: string = "cpu - not defined";
        public ram: string = "ram - not defined";
        public storage: string = "storage - not defined";
        public gpu?: string;
        public rgb?: string;
        public mouse?: string;
        public keyboard?: string;
        public monitor?: string;

        displayInfo() {
            console.log(`Configuracion de la computadora: 
            CPU: ${this.cpu}
            RAM: ${this.ram}
            Storage: ${this.storage}
            GPU: ${this.gpu ?? "GPU - No especificado"}
            RGB: ${this.rgb ?? "RGB - No especificado"}
            Mouse: ${this.mouse ?? "Mouse - No especificado"}
            Keyboard: ${this.keyboard ?? "Keyboard - No especificado"}
            Monitor: ${this.monitor ?? "Monitor - No especificado"}
            `)
        }

    }

    interface ComputerBuilder {
        reset(): ComputerBuilder;
        setCpu(cpu: string): ComputerBuilder;
        setRam(ram: string): ComputerBuilder;
        setStorage(storage: string): ComputerBuilder;
        setGpu(gpu: string): ComputerBuilder;
        setRgb(rgb: string): ComputerBuilder;
        setMouse(mouse: string): ComputerBuilder;
        setKeyboard(keyboard: string): ComputerBuilder;
        setMonitor(monitor: string): ComputerBuilder;
        build(): Computer;
    }

    class GamingComputerBuilder implements ComputerBuilder {
        private computer: Computer;

        constructor() {
            this.computer = new Computer();
        }

        reset(): GamingComputerBuilder {
            this.computer = new Computer();
            return this;
        }


        setCpu(cpu: string): GamingComputerBuilder {
            this.computer.cpu = cpu;
            return this;
        }

        setRam(ram: string): GamingComputerBuilder {
            this.computer.ram = ram;
            return this;
        }

        setStorage(storage: string): GamingComputerBuilder {
            this.computer.storage = storage;
            return this;
        }

        setGpu(gpu: string): GamingComputerBuilder {
            this.computer.gpu = gpu;
            return this;
        }

        setRgb(rgb: string): GamingComputerBuilder {
            this.computer.rgb = rgb;
            return this;
        }

        setMouse(mouse: string): GamingComputerBuilder {
            this.computer.mouse = mouse;
            return this;
        }

        setKeyboard(keyboard: string): GamingComputerBuilder {
            this.computer.keyboard = keyboard;
            return this;
        }
        setMonitor(monitor: string): GamingComputerBuilder {
            console.log("Gaming computer monitor not set");
            return this;
        }


        build(): Computer {
            if (!this.computer.gpu) {
                this.computer.gpu = "NVIDIA GeForce RTX 3080";
            }
            if (!this.computer.rgb) {
                this.computer.rgb = "RGB - Full Spectrum";
            }

            const result = this.computer;
            this.reset();
            return result;
        }
    }

    class OfficeComputerBuilder implements ComputerBuilder {
        private computer: Computer;

        constructor() {
            this.computer = new Computer();
        }

        reset(): OfficeComputerBuilder {
            this.computer = new Computer();
            return this;
        }

        setCpu(cpu: string): OfficeComputerBuilder {
            this.computer.cpu = cpu;
            return this;
        }

        setRam(ram: string): OfficeComputerBuilder {
            this.computer.ram = ram;
            return this;
        }

        setStorage(storage: string): OfficeComputerBuilder {
            this.computer.storage = storage;
            return this;
        }

        setGpu(_gpu: string): OfficeComputerBuilder {
            console.log("Office computers typically do not require a dedicated GPU. Ignoring this setting.");
            return this;
        }

        setRgb(_rgb: string): OfficeComputerBuilder {
            console.log("Office computers typically do not require RGB lighting. Ignoring this setting.");
            return this;
        }

        setMouse(mouse: string): OfficeComputerBuilder {
            this.computer.mouse = mouse;
            return this;
        }

        setKeyboard(keyboard: string): OfficeComputerBuilder {
            this.computer.keyboard = keyboard;
            return this;
        }

        setMonitor(monitor: string): OfficeComputerBuilder {
            console.log("Office computers typically do not require a dedicated monitor. Ignoring this setting.");
            return this;
        }

        build(): Computer {
            if (!this.computer.mouse) {
                this.computer.mouse = "Standard Optical Mouse";
            }
            if (!this.computer.keyboard) {
                this.computer.keyboard = "Standard Keyboard";
            }
            const result = this.computer;
            this.reset();
            return result;
        }
    }

    class PcBuilder implements ComputerBuilder {
        private computer: Computer;

        constructor() {
            this.computer = new Computer();
        }

        reset(): PcBuilder {
            this.computer = new Computer();
            return this;
        }

        setCpu(cpu: string): PcBuilder {
            this.computer.cpu = cpu;
            return this;
        }

        setRam(ram: string): PcBuilder {
            this.computer.ram = ram;
            return this;
        }

        setStorage(storage: string): PcBuilder {
            this.computer.storage = storage;
            return this;
        }

        setGpu(gpu: string): PcBuilder {
            this.computer.gpu = gpu;
            return this;
        }

        setRgb(rgb: string): PcBuilder {
            this.computer.rgb = rgb;
            return this;
        }

        setMouse(mouse: string): PcBuilder {
            this.computer.mouse = mouse;
            return this;
        }

        setKeyboard(keyboard: string): PcBuilder {
            this.computer.keyboard = keyboard;
            return this;
        }
        setMonitor(monitor: string): PcBuilder {
            this.computer.monitor = monitor;
            return this;
        }


        build(): Computer {
            if (!this.computer.monitor) {
                this.computer.monitor = "Standard Monitor";
            }
            const result = this.computer;
            this.reset();
            return result;
        }
    }

    class Director {
        private builder: ComputerBuilder;

        constructor(builder: ComputerBuilder) {
            this.builder = builder;
        }

        changeBuilder(builder: ComputerBuilder) {
            this.builder = builder;
        }

        changebuilder(builder: ComputerBuilder): void {
            this.builder = builder;
        }

        buildBasicComputer(): Computer {
            return this.builder
                .reset()
                .setCpu("Intel Core i5")
                .setRam("16GB")
                .setStorage("512GB SSD")
                .build();
        }

        buildFullSetup(): Computer {
            return this.builder
                .reset()
                .setCpu("Intel Core i9")
                .setRam("32GB")
                .setStorage("1TB SSD")
                .setGpu("NVIDIA GeForce RTX 3080")
                .setRgb("RGB - Full Spectrum")
                .setMouse("Gaming Mouse")
                .setKeyboard("Mechanical Keyboard")
                .build();
        }
    }

    function main() {
        const gamingBuilder = new GamingComputerBuilder();
        const officeBuilder = new OfficeComputerBuilder();
        const pcBuilder = new PcBuilder();
        const store = new Director(gamingBuilder);

        console.log("Construyendo una computadora de gaming:");
        const fullgamer = store.buildFullSetup();
        fullgamer.displayInfo();

        store.changeBuilder(officeBuilder);

        console.log("\n===Full setup de office builder===");
        const fulloffice = store.buildFullSetup();
        fulloffice.displayInfo();

        store.changeBuilder(gamingBuilder);
        console.log("\n===Basic setup de gaming builder===");
        const basicgamer = store.buildBasicComputer();
        basicgamer.displayInfo();

        store.changeBuilder(officeBuilder);
        console.log("\nConstruyendo una computadora de oficina:");
        const basicoffice = store.buildBasicComputer();
        basicoffice.displayInfo();

        store.changeBuilder(pcBuilder);
        console.log("\nConstruyendo una pc personalizada:");
        const customPC = store.buildFullSetup();
        customPC.displayInfo();

        store.changeBuilder(gamingBuilder);
        console.log("\nConstruyendo una pc personalizada sin monitor (gaming builder):");
        const customPC2 = store.buildBasicComputer();
        customPC2.displayInfo();

        store.changeBuilder(officeBuilder);
        console.log("\nConstruyendo una pc personalizada sin monitor (office builder):");
        const customPC3 = store.buildBasicComputer();
        customPC3.displayInfo();
    }
    main();

}