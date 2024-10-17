// 初始化号码和历史记录
let bingoNumbers = [];
for (let i = 1; i <= 75; i++) {
    bingoNumbers.push(i);
}

let drawnNumbers = [];

// 获取页面元素
const numberDisplay = document.getElementById('number');
const historyList = document.getElementById('historyList');
const drawButton = document.getElementById('drawButton');

// 抽取号码函数
function drawNumber() {
    if (bingoNumbers.length > 0) {
        // 随机从未抽取的号码中选择一个
        const randomIndex = Math.floor(Math.random() * bingoNumbers.length);
        const drawnNumber = bingoNumbers.splice(randomIndex, 1)[0];
        drawnNumbers.push(drawnNumber);

        // 更新界面显示
        numberDisplay.textContent = `抽取的号码: ${drawnNumber}`;
        const listItem = document.createElement('li');
        listItem.textContent = drawnNumber;
        historyList.appendChild(listItem);
    } else {
        // 没有剩余号码
        numberDisplay.textContent = '所有号码已抽取';
        drawButton.disabled = true;
    }
}

// 绑定按钮点击事件
drawButton.addEventListener('click', drawNumber);
