const words = ['non', 'banan', 'mashina', 'asal', 'olma', 'aziza', 'Gul'];

const includesN = words.filter(word => word.includes('n'));
console.log(includesN, "'n harfi ishtirok etgan so'zlar'");

const excludesN = words.filter(word => !word.includes('n'));
console.log(excludesN, "'n harfi ishtirok etmagan so'zlar'");
