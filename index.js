const peopleNode = document.querySelector("#people");
const drinksNode = document.querySelector("#drinks");
let optionsContent = "";

const availableOptions = Array.from({length: 11}, (v, i) => i);
const availableDrinks = ['夕燒奶茶', '白玉奶茶', '紫玉奶茶']
const ice = ['熱', '冰', '微冰']
const flavours = ['微糖', '無糖', '重糖']

const renderData = (data) => {
  data.forEach(i => {
    optionsContent += `<option value=${i}>${i}</option>`;
  })
}

renderData(availableOptions)
peopleNode.innerHTML = optionsContent;
optionsContent = ''

renderData(availableDrinks)
drinksNode.innerHTML = optionsContent;
optionsContent = ''