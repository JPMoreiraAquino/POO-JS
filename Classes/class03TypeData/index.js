let machine = {
    material: "aço Inox",
    equipment: ['motor', 'freio', 'esteira', 'cilindro'],
    isMount: false,
    numberOfEngines: 1,
};

console.log(machine);
console.log(machine.material);
console.log(machine.equipment[2]);
console.log(machine.equipment);

const machineMap = machine.equipment.find(it => it === 'freio'); 

console.log(machineMap)
