let mob = {
    name: "samsung",
    model: "s22",
    price: 50000,
    color: "black"
}
console.log(mob);
mob.version="12v"
console.log(mob);
mob.price=45000;
console.log(mob);
console.log(mob.name);
delete mob.version;
console.log(mob);

delete mob["color"];
console.log(mob);
