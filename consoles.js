function Console(empresa, modelo, ano) {
    this.empresa = empresa;
    this.modelo = modelo;
    this.ano = ano;
}

Console.prototype.displayInfo = function() {
    console.log(`Empresa: ${this.empresa}, Modelo: ${this.modelo}, Ano: ${this.ano}`);
};

function Portatil(empresa, modelo, ano, bateria) {
    Console.call(this, empresa, modelo, ano);
    this.bateria = bateria;
}

Portatil.prototype = Object.create(Console.prototype);
Portatil.prototype.constructor = Portatil;

Portatil.prototype.displayInfo = function() {
    Console.prototype.displayInfo.call(this);
    console.log(`Bateria: ${this.bateria} horas`);
};

function Fixo(empresa, modelo, ano, armazenamento) {
    Console.call(this, empresa, modelo, ano);
    this.armazenamento = armazenamento;
}

Fixo.prototype = Object.create(Console.prototype);
Fixo.prototype.constructor = Fixo;

Fixo.prototype.displayInfo = function() {
    Console.prototype.displayInfo.call(this);
    console.log(`Armazenamento: ${this.armazenamento} GB`);
};

const consolePortatil1 = new Portatil('Nintendo', 'Switch', 2017, 6);
const consoleFixo1 = new Fixo('Sony', 'PlayStation 5', 2020, 825);
const consoleFixo2 = new Fixo('Microsoft', 'Xbox Series X', 2020, 1000);

consolePortatil1.displayInfo();
consoleFixo1.displayInfo();
consoleFixo2.displayInfo();
''