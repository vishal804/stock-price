const initialPrice = document.querySelector("#initial-price");
const stockQuantity = document.querySelector("#stocks-quantity");
const currentPrice = document.querySelector("#current-price");
const sumbitBtn = document.querySelector("#sumbit-btn");
const output = document.querySelector("#output");

sumbitBtn.addEventListener("click", clickHandler);

function clickHandler() {
  var ip = Number(initialPrice.value);
  var sq = Number(stockQuantity.value);
  var curr = Number(currentPrice.value);
  calculateProfitAndLoss(ip, sq, curr);
}

function calculateProfitAndLoss(initialPrice, stockQuantity, currentPrice) {
  if (currentPrice < initialPrice) {
    var loss = (initialPrice - currentPrice) * stockQuantity;
    var lossPercentage = (loss / initialPrice) * 100;
    output.style.color = "red";

    output.innerText = `Hey, The loss is ${loss} and the percent is ${lossPercentage.toFixed(
      3
    )}%`;
  } else if (currentPrice > initialPrice) {
    var profit = (currentPrice - initialPrice) * stockQuantity;
    var profitPercentage = (profit / initialPrice) * 100;
    output.style.color = "green";

    output.innerText = `Hey, The profit is ${profit} and the percent is ${profitPercentage.toFixed(
      3
    )}%`;
  } else {
    output.innerText = `You don't have any loss or profit.`;
  }
}
