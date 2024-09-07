let select_btn = document.querySelectorAll(".select_btn");
let input_of_money = document.getElementById("input_of-money");
let input_of_people = document.getElementById("input_of_peaple");
let tip_amount = document.getElementById("tip_amount");
let tip_totale = document.getElementById("tip_totale");
let reset_btn = document.querySelector(".reset_btn");
let errors_bill = document.querySelector(".errors_bill");
let errors_people = document.querySelector(".errors_peaple");

let value;
let last_spans;
let input_money_value = 0;
let input_peaplevalue = 0;
const select_button = () => {
  select_btn.forEach((btn) => {
    btn.onclick = (e) => {
      // Select all existing spans with class "new_span" and remove them
      last_spans = document.querySelectorAll(".new_span");
      last_spans.forEach((item) => {
        item.classList.remove("new_span");
        item.classList.add("last_span");
      });

      // Get the closest span with class "last_span"
      let last_span = e.target.closest(".last_span");

      // If the last_span exists, modify the class
      if (last_span) {
        last_span.classList.remove("last_span");
        last_span.classList.add("new_span");
        value = parseFloat(last_span.dataset.value);
        console.log(value);
      }
    };
  });
};

select_button();

input_of_money.addEventListener("input", () => {
  if (input_of_money.value == "") {
    errors_bill.innerHTML = "your bill is required";
    input_of_money.parentElement.style.border = "2px solid red";
  } else {
    errors_bill.innerHTML = "";
    input_of_money.parentElement.style.border = "none";
    input_money_value = parseFloat(input_of_money.value);
    console.log(input_money_value);
    calculateAll();
  }
});
input_of_people.addEventListener("input", () => {
  if (input_of_people.value == "") {
    errors_people.innerHTML = "your input poeple is required";
    input_of_people.parentElement.style.border = "2px solid red";
  } else {
    errors_people.innerHTML = "";
    input_of_people.parentElement.style.border = "none";
    input_peaplevalue = parseFloat(input_of_people.value);
    console.log(input_peaplevalue);
    calculateAll();
  }
});

const calculateAll = () => {
  if (!input_peaplevalue || !input_money_value || !value) {
    return;
  }
  let new_value = parseFloat(value / 100);
  let totale_of_tip = (input_money_value * new_value)/ input_peaplevalue;
  let totale_persone = (input_money_value + totale_of_tip*input_peaplevalue) / input_peaplevalue;
  tip_amount.innerHTML =`$${totale_of_tip.toFixed(2)}`;
  tip_totale.innerHTML =`$${totale_persone.toFixed(2)}`;
  reset_btn.style.backgroundColor="var(--Strong_cyan)"
};

reset_btn.onclick = () => {
  input_of_money.value = "";
  input_of_people.value = "";

  tip_amount.innerHTML = "$0.00";
  tip_totale.innerHTML = "$0.00";

  errors_bill.innerHTML = "";
  errors_people.innerHTML = "";
  input_of_money.parentElement.style.border = "none";
  input_of_people.parentElement.style.border = "none";

  input_money_value = 0;
  input_peaplevalue = 0;

  let allSpans = document.querySelectorAll(".select_btn span");
  allSpans.forEach((item) => {
    item.classList.remove("new_span");
    item.classList.add("last_span");
  });
  reset_btn.style.backgroundColor="var(--Dark_grayish_cyan)"
};
