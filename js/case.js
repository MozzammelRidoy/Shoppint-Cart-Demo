

document.getElementById('btn-case-plus').addEventListener('click',function(){
    
    const newCaseNumber =updateItemNumber('case-number-field' , true);
    updateCaseTotalPrice(newCaseNumber);
    calculateSubTotal();

    
})

document.getElementById('btn-case-munus').addEventListener('click', function(){
    const newCaseNumber =updateItemNumber('case-number-field' , false);
    updateCaseTotalPrice(newCaseNumber);
   calculateSubTotal();


})