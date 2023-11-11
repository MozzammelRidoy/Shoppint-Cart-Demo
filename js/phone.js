// function updatePhoneNumber(isIncrese){

//     const phoneNumberField = document.getElementById('phone-number-field');
//     const phoneNumberString = phoneNumberField.value ;
//     const previousPhoneNumber = parseInt(phoneNumberString);

//     let newPhoneNumber;
//     if(isIncrese === true){
//        newPhoneNumber = previousPhoneNumber + 1;
        
//     }
//     else{
//         newPhoneNumber = previousPhoneNumber - 1;
//     }
//     phoneNumberField.value = newPhoneNumber;

//     return newPhoneNumber;

// }




document.getElementById('btn-phone-plus').addEventListener('click', function(){
   const newPhoneNumber =  updateItemNumber('phone-number-field',true);
   updatePhoneTotalPrice(newPhoneNumber);
    calculateSubTotal();

  
})

document.getElementById('btn-phone-minus').addEventListener('click', function(){
   const newPhoneNumber = updateItemNumber('phone-number-field' ,false);
   updatePhoneTotalPrice(newPhoneNumber);
   calculateSubTotal();
})