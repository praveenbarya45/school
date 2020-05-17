var charges=[["default","30","Default","fixed"]];
var selectedRow=0;
var table=document.getElementById("chargeTable").getElementsByTagName("tbody")[0]
updateTable()
function addCharge(){
    var arr=[];
    arr[0]=document.getElementById("chargeName").value
    arr[1]=document.getElementById("chargeAmount").value
    arr[2]=document.getElementById("chargeDesc").value
    arr[3]=document.getElementById("chargeType").value

    charges.push(arr)
    updateTable();
    formClear();

}

function updateTable(){
    table.innerHTML=""
    var i=0;
    while(i<charges.length){
        var row=table.insertRow(i);
        row.addEventListener("click",rowSelect.bind(null,i));
        var cell1=row.insertCell(0);
        var cell2=row.insertCell(1);
        var cell3=row.insertCell(2);
        var cell4=row.insertCell(3);
        var cell5=row.insertCell(4);

        cell1.innerHTML=""
        cell2.innerHTML=charges[i][0]
        cell3.innerHTML=charges[i][1]
        cell4.innerHTML=charges[i][2]
        cell5.innerHTML=charges[i][3]

        if(selectedRow==i){
            row.style.background="rgb(65, 121, 243, 0.66)"

        }
        i++;
    }
}

function formClear(){//function to clear form

    document.getElementById("chargeName").value=""
    document.getElementById("chargeAmount").value=""
    document.getElementById("chargeDesc").value=""
    document.getElementById("chargeType").value=""
}

function rowSelect(x){ //function to change selected row as the index of employeeList array.
    selectedRow=x
    updateTable()
}

function resetTable(){ //reset employeeList array to default value
    
    charges=[["default","30","Default","fixed"]]
    
    updateTable()
    formClear();
}
function deleteRow(){//delete selected row
    charges.splice(selectedRow,1)
    updateTable();

}
function updateRow(){ //update values of selected row from values from form
    charges[selectedRow][0]=document.getElementById("chargeName").value==""?"add value":document.getElementById("chargeName").value
    charges[selectedRow][1]=document.getElementById("chargeAmount").value==""?"add value":document.getElementById("chargeAmount").value
    charges[selectedRow][2]=document.getElementById("chargeDesc").value==""?"add value":document.getElementById("chargeDesc").value
    charges[selectedRow][3]=document.getElementById("chargeType").value==""?"add value":document.getElementById("chargeType").value
    
    updateTable()
    formClear()
}
