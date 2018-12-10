/* Default
var size = 4;
var testId = ['Kevin', 'Test1', 'Test2', 'Test3'];
var testPw = ['pw1234', 'pw1111', 'pw2222', 'pw3333'];
*/

//this function adds account to the list if... 
//all sections are filled and
//password and confirm password match together and
//no duplicate ID is given
function addAccount(){
    var newId = document.getElementById('reg-username').value;
    var newEmail = document.getElementById('reg-useremail').value;
    var newPw = document.getElementById('reg-password').value;
    var newPwConfirm = document.getElementById('reg-passwordRepeat').value;

    //alert(newId + " / " + newEmail + " / " + newPw + " / " + newPwConfirm);

    if(newId == ''){
        alert("Please fill in ID!");
    }
    else if(newEmail == ''){
        alert("Please fill in Email!");
    }
    else if(newPw == ''){
        alert("Please fill in password!");
    }
    else if(newPwConfirm == ''){
        alert("Please fill in confirm password!");
    }
    else if(newPw != newPwConfirm){
        alert("The password do not match each other!");
    }
    else if(newPw == newPwConfirm){
        var duplicate = false;
        //checks if new ID is duplicate to an ID in the list 
        for(var i = 0; i < size; i++){
            if(testId[i] == newId){ //if found the duplicate
                duplicate = true;
                break; //stops the loop
            }
        }

        //if duplicate id exists,
        if(duplicate){
            alert("This ID already exists. Please use another ID!");
        }
        //if not duplicate id,
        else{
            testId.push(newId);
            testPw.push(newPw);
            size++;

            alert("Thank you for registering to our system!\nYour new ID is " + newId + "\nYour new Password is " + newPw + "\nPlease login using 'LOGIN' button!");
            document.getElementById('myRegister').style.display='none';
        }
    }
}
