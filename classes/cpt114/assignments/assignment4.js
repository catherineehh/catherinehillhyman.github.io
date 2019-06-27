  var contractDiscount,
    employeeDiscount,
    priceDiscount,
    eightHundred,
    noDiscount,
    taxAge,
    normalTax,
    oldTax,
    originalTotal,
    customerAge,
    customerContract,
    discountAmount,
    finalTax,
    discountTotal,
    subTotal,
    appliedTax,
    amountDue;

  contractDiscount = 0.20;
  employeeDiscount = 0.10;
  priceDiscount = 0.05;
  eightHundred = 800;
  noDiscount = 0;

  taxAge = 90;
  normalTax = 0.08;
  oldTax = 0;



  originalTotal = prompt("Please enter the total cost: ", "");
  customerAge = prompt("Please enter customer's age: ", "");
  contractCustomer = prompt("Is the customer a contractor? ", "");

  if (contractCustomer == "yes") {
    discountAmount = contractDiscount;
  } else {
    employeeCustomer = prompt("Is the customer an employee? ", "");
    if (employeeCustomer == "yes") {
      discountAmount = employeeDiscount;
    } else {
      if (originalTotal >= eightHundred) {
        discountAmount = priceDiscount;
      } else {
        discountAmount = noDiscount;
      }
    }
  }


  if (customerAge >= taxAge) {
    finalTax = oldTax;
  } else {
    finalTax = normalTax;
  }


  discountTotal = originalTotal * discountAmount;
  subTotal = originalTotal - discountTotal;
  appliedTax = subTotal * finalTax;
  amountDue = appliedTax + subTotal;


  document.write("Original Total: $" + parseFloat(originalTotal).toFixed(2));
  document.write("<br />Discount: $" + discountTotal.toFixed(2));
  document.write("<br />Subtotal: $" + subTotal.toFixed(2));
  document.write("<br />Tax: $" + appliedTax.toFixed(2));
  document.write("<br />Amount Due: $" + amountDue.toFixed(2));
