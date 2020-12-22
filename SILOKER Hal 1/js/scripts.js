// form search
$(".fas").click(function(){
    $(".form-control").val("");
})

// login
let state = false;
$('.span').click(function(){
    if (state) {
        $('#defaultForm-pass').attr('type', 'password');
        state = false;
    } else {
        $('#defaultForm-pass').attr('type', 'text');
        state = true
    }
});

function login(){
    let uname = document.getElementById("defaultForm-email");
    let pass = document.getElementById("defaultForm-pass");
    console.log("Username : " + uname.value);
    console.log("Password : " + pass.value);

    uname.value = "";
    pass.value = "";
}