var loggedIn = false;

var size = 4;
var testId = ['Kevin', 'Test1', 'Test2', 'Test3'];
var testPw = ['pw1234', 'pw1111', 'pw2222', 'pw3333'];
var currentUser = -1;

var userId; //user id
var userPw; //user password

//this function checks if ID and password are correct
function checkId(){
    userId = document.getElementById('userid').value;
    userPw = document.getElementById('userpw').value;

    //if ID is empty
    if(userId == ''){
        alert("Please fill in ID");
    }
    //if password is empty
    else if(userPw == ''){
        alert("Please fill in password");
    }
    //if both sections are filled with something,
    else{
        for(var i = 0; i < size; i++){
            if(userId == testId[i] && userPw == testPw[i]){
                currentUser = i;
                break;
            }
        }
        //if proper id and password are filled in,
        if(currentUser != -1){
            alert("Welcome! " + testId[currentUser]);                  //alerts who's logged in
            document.getElementById('myLogin').style.display='none';   //closes the modal window
            document.getElementById('userLogin').innerHTML = "Logout"; //changes Login into Logout
            loggedIn = true;
        }
        //if id or password is incorrect
        else{
            alert("Invalid ID or wrong password is inserted!");
        }
    }

}

//this function checks if the user has logged in before using profile
function checkProfile(){
    if(!loggedIn){
        alert("Please login before using Profile!");
		document.getElementById('myProfile').style.display='none';
    }
    else{
        alert("Welcome!");
		 document.getElementById('myProfile').style.display='block';
		document.getElementById("defaultOpen2").click();
    }
}

//this function allows the user to logout
function checkLogin(){
    if(!loggedIn){
        document.getElementById('myLogin').style.display='block'; //displays modal login page
    }
    else{
        alert("Good bye! " + testId[currentUser]);
        document.getElementById('userLogin').innerHTML = "Login"; //changes Login into Logout
        currentUser = -1; //resets the user
        loggedIn = false; //not logged in
    }
}



