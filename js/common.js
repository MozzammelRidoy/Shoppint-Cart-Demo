function updateItemNumber(itemIdNam, isIncrese){
    const itemNumberField = document.getElementById(itemIdNam);
    const itemNumberString = itemNumberField.value ;
    const previousItemNumber = parseInt(itemNumberString);
        

    let newItemNumber;
    if(isIncrese === true){
            newItemNumber = previousItemNumber + 1;
    }
    else{
        newItemNumber = previousItemNumber -1;
    }

    itemNumberField.value = newItemNumber;

    return newItemNumber;
}

//qantity calculate and price calculate
function updatePhoneTotalPrice(newItemNumber){
    const newItemPrice = newItemNumber * 1219;
    const phonePriceElement = document.getElementById('phone-total');  //For Phone
    phonePriceElement.innerText = newItemPrice;
}


function updateCaseTotalPrice(newItemNumber){
    const caseTotalPrice = newItemNumber * 59;
    const caseTotalElement = document.getElementById('case-total'); //For Case
    caseTotalElement.innerText = caseTotalPrice;

}







// Sub Total Calculate.
function getElementValuebyText(itemId){
    const itemIdFeild =  document.getElementById(itemId);
    const itemIdString = itemIdFeild.innerText;
    const itemIdValue = parseInt(itemIdString);
 
     return itemIdValue;
 }
 
 function getTextElementValueById(element, value){
    const subTotalElement = document.getElementById(element);
    subTotalElement.innerText = value;
 }

 
 function calculateSubTotal(){
      //Calculate Sub Total
    const currentPhoneTotal = getElementValuebyText('phone-total');
    const currentCaseTotal = getElementValuebyText('case-total');
 
    const currentSubTotal = currentCaseTotal + currentPhoneTotal;
 
   getTextElementValueById('sub-total', currentSubTotal);

    //Calculate Tax

    const taxAmmountString = (currentSubTotal * 0.1).toFixed(2);
    const taxAmmount = parseFloat(taxAmmountString);

    getTextElementValueById('tax-ammount', taxAmmount);

    const finalAmmount = currentSubTotal + taxAmmount;
    getTextElementValueById('final-total', finalAmmount);

 }