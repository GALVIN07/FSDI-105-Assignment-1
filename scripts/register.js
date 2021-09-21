// create user object (constructor)
class User{
    constructor(email,pass,first,last,age,address,phone,payment,color){
        this.email=email;
        this.password=pass;
        this.firstName=first;
        this.lastName=last;
        this.age=age;
        this.address=address;
        this.phoneNumber=phone;
        this.payment=payment;
        this.color=color;
    }
}

// create the register function
function registerUser(){
    let email=$("#txtEmail").val();
    let pass=$("#txtPassword").val();
    let firstName=$("#txtFirst").val();
    let lastName=$("#txtLast").val();
    let age=$("#txtAge").val();
    let address=$("#txtAddress").val();
    let phone=$("#txtPhone").val();
    let payment=$("#selPayment").val();
    let color=$("#txtColor").val();
    let user = new User(email,pass,firstName,lastName,age,address,phone,payment,color);
    console.log(user);

}

//console log the user
function init(){
console.log("init function");
$("#btn-save").click(registerUser);
}
window.onload=init;