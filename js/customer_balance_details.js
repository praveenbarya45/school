var customerBalanceList=[["10","10/10/2002","koya","9786968697","2300","200","400","No"],["12","10/10/2002","Ram","9786968697","2300","200","400","No"],["11","10/10/2002","sangeeth","9786968697","2300","200","400","No"],["10","10/10/2002","koya","9786968697","2300","200","400","No"],["10","10/10/2002","koya","9786968697","2300","200","400","No"],["10","10/10/2002","koya","9786968697","2300","200","400","No"],["10","10/10/2002","koya","9786968697","2300","200","400","No"],["10","10/10/2002","koya","9786968697","2300","200","400","No"],["10","10/10/2002","koya","9786968697","2300","200","400","No"],["10","10/10/2002","koya","9786968697","2300","200","400","No"],["10","10/10/2002","koya","9786968697","2300","200","400","No"],["10","10/10/2002","koya","9786968697","2300","200","400","No"],["10","10/10/2002","koya","9786968697","2300","200","400","No"],["10","10/10/2002","koya","9786968697","2300","200","400","No"],["10","10/10/2002","koya","9786968697","2300","200","400","No"],["10","10/10/2002","koya","9786968697","2300","200","400","No"],["10","10/10/2002","koya","9786968697","2300","200","400","No"],["10","10/10/2002","koya","9786968697","2300","200","400","No"],["10","10/10/2002","koya","9786968697","2300","200","400","No"],["10","10/10/2002","koya","9786968697","2300","200","400","No"],["10","10/10/2002","koya","9786968697","2300","200","400","No"],["10","10/10/2002","koya","9786968697","2300","200","400","No"],["10","10/10/2002","koya","9786968697","2300","200","400","No"],["10","10/10/2002","koya","9786968697","2300","200","400","No"],["10","10/10/2002","koya","9786968697","2300","200","400","No"],["10","10/10/2002","koya","9786968697","2300","200","400","No"],["10","10/10/2002","koya","9786968697","2300","200","400","No"],["10","10/10/2002","koya","9786968697","2300","200","400","No"],["10","10/10/2002","koya","9786968697","2300","200","400","No"],["10","10/10/2002","koya","9786968697","2300","200","400","No"],["10","10/10/2002","koya","9786968697","2300","200","400","No"],["10","10/10/2002","koya","9786968697","2300","200","400","No"],["10","10/10/2002","koya","9786968697","2300","200","400","No"],["10","10/10/2002","koya","9786968697","2300","200","400","No"],["10","10/10/2002","koya","9786968697","2300","200","400","No"],]
var selectedRow=0;
var table=document.getElementById("balanceTable").getElementsByTagName('tbody')[0]
updateTable()



function updateTable(){//function to update table from employeeList array
    table.innerHTML=""
    var i=0;
    while(i<customerBalanceList.length){

    var row=table.insertRow(i);
    row.addEventListener("click", rowSelect.bind(null, i));
    var cell1=row.insertCell(0);
    var cell2=row.insertCell(1);
    var cell3=row.insertCell(2);
    var cell4=row.insertCell(3);
    var cell5=row.insertCell(4);
    var cell6=row.insertCell(5);
    var cell7=row.insertCell(6);
    var cell8=row.insertCell(7);
    var cell9=row.insertCell(8);
    cell1.innerHTML=""
    cell2.innerHTML=customerBalanceList[i][0]
    cell3.innerHTML=customerBalanceList[i][1]
    cell4.innerHTML=customerBalanceList[i][2]
    cell5.innerHTML=customerBalanceList[i][3]
    cell6.innerHTML=customerBalanceList[i][4]
    cell7.innerHTML=customerBalanceList[i][5]
    cell8.innerHTML=customerBalanceList[i][6]
    cell9.innerHTML=customerBalanceList[i][7]

    if(selectedRow===i){
        row.style.background = "rgb(65, 121, 243, 0.66)"
    }
        i++;

    }
    
}
function formClear(){//function to clear form

    document.getElementById("balanceBillNo").value=""
    document.getElementById("balanceCustomer").value=""
    document.getElementById("balanceAmount").value=""
    document.getElementById("balanceDebit").value=""
    document.getElementById("balanceCredit").value=""

}
function rowSelect(x){ //function to change selected row as the index of employeeList array.
    selectedRow=x
    updateTable()
}
function resetTable(){ //reset employeeList array to default value
    
    customerBalanceList=[["10","10/10/2002","koya","9786968697","2300","200","400","No"],["12","10/10/2002","Ram","9786968697","2300","200","400","No"],["11","10/10/2002","sangeeth","9786968697","2300","200","400","No"],["10","10/10/2002","koya","9786968697","2300","200","400","No"],["10","10/10/2002","koya","9786968697","2300","200","400","No"],["10","10/10/2002","koya","9786968697","2300","200","400","No"],["10","10/10/2002","koya","9786968697","2300","200","400","No"],["10","10/10/2002","koya","9786968697","2300","200","400","No"],["10","10/10/2002","koya","9786968697","2300","200","400","No"],["10","10/10/2002","koya","9786968697","2300","200","400","No"],["10","10/10/2002","koya","9786968697","2300","200","400","No"],["10","10/10/2002","koya","9786968697","2300","200","400","No"],["10","10/10/2002","koya","9786968697","2300","200","400","No"],["10","10/10/2002","koya","9786968697","2300","200","400","No"],["10","10/10/2002","koya","9786968697","2300","200","400","No"],["10","10/10/2002","koya","9786968697","2300","200","400","No"],["10","10/10/2002","koya","9786968697","2300","200","400","No"],["10","10/10/2002","koya","9786968697","2300","200","400","No"],["10","10/10/2002","koya","9786968697","2300","200","400","No"],["10","10/10/2002","koya","9786968697","2300","200","400","No"],["10","10/10/2002","koya","9786968697","2300","200","400","No"],["10","10/10/2002","koya","9786968697","2300","200","400","No"],["10","10/10/2002","koya","9786968697","2300","200","400","No"],["10","10/10/2002","koya","9786968697","2300","200","400","No"],["10","10/10/2002","koya","9786968697","2300","200","400","No"],["10","10/10/2002","koya","9786968697","2300","200","400","No"],["10","10/10/2002","koya","9786968697","2300","200","400","No"],["10","10/10/2002","koya","9786968697","2300","200","400","No"],["10","10/10/2002","koya","9786968697","2300","200","400","No"],["10","10/10/2002","koya","9786968697","2300","200","400","No"],["10","10/10/2002","koya","9786968697","2300","200","400","No"],["10","10/10/2002","koya","9786968697","2300","200","400","No"],["10","10/10/2002","koya","9786968697","2300","200","400","No"],["10","10/10/2002","koya","9786968697","2300","200","400","No"],["10","10/10/2002","koya","9786968697","2300","200","400","No"],]

    updateTable();
    formClear();
}
function deleteRow(){//delete selected row
    customerBalanceList.splice(selectedRow,1)
    updateTable();

}
function updateRow(){ //update values of selected row from values from form
    customerBalanceList[selectedRow][0]=document.getElementById("balanceBillNo").value==""?customerBalanceList[selectedRow][0]:document.getElementById("balanceBillNo").value
    customerBalanceList[selectedRow][2]=document.getElementById("balanceCustomer").value==""?customerBalanceList[selectedRow][2]:document.getElementById("balanceCustomer").value
    customerBalanceList[selectedRow][4]=document.getElementById("balanceAmount").value==""?customerBalanceList[selectedRow][4]:document.getElementById("balanceAmount").value
    customerBalanceList[selectedRow][5]=document.getElementById("balanceDebit").value==""?customerBalanceList[selectedRow][5]:document.getElementById("balanceDebit").value
    customerBalanceList[selectedRow][6]=document.getElementById("balanceCredit").value==""?customerBalanceList[selectedRow][6]:document.getElementById("balanceCredit").value

    customerBalanceList[selectedRow][7]=document.getElementById("balancePaid").checked?"Yes":"No"
    

    updateTable()
    formClear()
}
