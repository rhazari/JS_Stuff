const dragonEvents = [
    { type: 'attack', value: 12, target:'player-dorkman' },
    { type: 'yawn', value: 40 },
    { type: 'eat', target: 'horse' },
    { type: 'attack', value: 23, target: 'player-fluffykins'},
    { type: 'attack', value: 12, target: 'player-dorkman'}
]

const sumTotal = (prev, curr) => (prev || 0)+ curr;
const attackFilter = e => e.type === 'attack' && e.target === 'player-dorkman';
const totalDamageByDorkman = dragonEvents
    .filter(attackFilter)
    .map(event => event.value)
    .reduce(sumTotal)

console.log('Total damage by Dorkman ' + totalDamageByDorkman);