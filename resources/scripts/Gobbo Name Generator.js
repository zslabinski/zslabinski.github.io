
//Lists of words to be combined 
const bodyParts = ['Artery', 'Bladder', 'Colon', 'Bones', 'Diaphragm', 'Ear', 'Gallbladder', 'Kidney', 'Liver', 'Larynx', 'Intestine', 'Nose', 'Pancreas', 'Spleen', 'Stomach', 'Teeth', 'Tonsil', 'Tongue', 'Trachea'];

const fluids = ['Water', 'Soda', 'Juice', 'Oil', 'Blood', 'Sweat', 'Mucus', 'Saliva', 'Milk', 'Pus', 'Urine', 'Sauce', 'Liquor', 'Wine']



const goblinGen = () => {
    let bodyIndex = Math.floor(Math.random() * bodyParts.length);

let fluidsIndex = Math.floor(Math.random() * fluids.length);
    let body = bodyParts[bodyIndex];
    let fluid = fluids[fluidsIndex];
    let goblinName = `Your goblin name is: ${body} ${fluid}!`;
    alert(goblinName);
    return goblinName;
};

// let nameArray = [];

// for (let i = 0; i < (bodyParts.length * fluids.length); i++) {
//     nameArray.push(goblinGen());
// };

// console.log(nameArray)


// document.getElementById('name-generator').onclick = function()
// {
// alert(goblinGen())
// }

