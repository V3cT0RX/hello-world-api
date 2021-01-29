let url = "/hello";
let greetdiv = document.getElementById("greeting");
function greet(langauge) {
    fetch(url + "?language=" + langauge)
        .then((res) => res.json())
        .then((res) => {
            // console.log(res);
            if (res.message)
                greetdiv.innerHTML = res.message.msgText;
            else
                greetdiv.innerHTML = res.error_message;
        }).catch((err) => {
            greetdiv.innerHTML = "Something wrong!";
        });
}