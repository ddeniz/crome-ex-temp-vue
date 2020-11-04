console.log("con-script")
function buttonOnClick(loginInfo){
    document.getElementById('username').value = loginInfo.Username;
    document.getElementById('password').value = loginInfo.Password;

    var loginBtn = document.getElementById('loginBtn');
    loginBtn.disabled = false;
    console.log("loginInfo:", loginInfo);
    loginBtn.click();
}

chrome.runtime.onMessage.addListener(
    function(message, sender, sendResponse) {
        console.log(message);
        switch(message.type) {
            case "setUsernameAndPassword":
                buttonOnClick(message);
                sendResponse("done");
            break;
        }
    }
);
