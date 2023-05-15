const returnRateSlider = document.getElementById("return-rate-slider");
const timePeriodSlider = document.getElementById("time-period-slider");
const investmentSlider = document.getElementById("investment-slider");
const simpleInterestValue = document.getElementById("simple-interest-value");
const returnRateValue = document.getElementById("return-rate-value");
const timePeriodValue = document.getElementById("time-period-value");
const investmentValue = document.getElementById("investment-value");

investmentSlider.onchange = () => {
    investmentValue.innerHTML = investmentSlider.value;
    calculateSimpleInterest();
  };


timePeriodSlider.onchange = () => {
  timePeriodValue.innerHTML = timePeriodSlider.value;
  calculateSimpleInterest();
};

returnRateSlider.onchange = () => {
    returnRateValue.innerHTML = returnRateSlider.value + "%";
    calculateSimpleInterest();
  };

function calculateSimpleInterest() {
  const principal = parseInt(investmentSlider.value);
  const rate = returnRateSlider.value / 100;
  const time = timePeriodSlider.value;
  const interest = principal * rate * time;
  simpleInterestValue.innerHTML = "Rs " + interest.toFixed(2);
};

function totalammount(){
  const totalcalculator =    
}