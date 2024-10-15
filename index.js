+
function insertNumber(num) {
    var existingNum = $("#result").val();
    $("#result").val(existingNum + num);
}

function clearNumber(){
    $("#result").val('')
}

function sumNumber(){
    var result = eval($("#result").val());
    $("#result").val(result)
}
function Delete(){
    var existingValue = $("#result").val();
    if(existingValue != ''){
        $("#result").val($("#result").val().slice(0,-1));
    }else{
        $("#result").val(0)
    }
}