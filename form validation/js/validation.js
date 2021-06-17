function clearErrors(){

errors = document.getElementsByClassName('formerror');
for(let item of errors)
{
    item.innerHTML = "";
}
  }

    function seterror(id,error){
       element=document.getElementById(id);
       element.getElementsByClassName('formerror')[0].innerHTML=error;
    }
    function validateform(){
      var returnval=true;
      clearErrors();
      var name=document.forms['myForm']['name'].value;
   
      var checkname=/^[A-Za-z. ]{3,25}$/;
      if(checkname.test(document.myForm.name.value)){
        seterror('name'," ");
      }
      else{
        seterror('name',"!* name can't contain number or special character");
          returnval=false;
      }

      var lname=document.forms['myForm']['lname'].value;
   
    // var checknamel=/^[A-Za-z. ]{3,25}$/;
      if(checkname.test(document.myForm.lname.value)){
        seterror('lname'," ");
      }
      else{
        seterror('lname',"!* last name can't contain number or special character");
          returnval=false;
      }
       
      var email=document.forms['myForm']['email'].value;
      if(email.length>25){
          seterror('email',"Email is to long");
          returnval=false;
      }
      var password = document.forms['myForm']["password"].value;

      var checkpass=/^(?=.*[0-9])(?=.*[@#$%!^&*])[A-za-z0-9!@#$%^&*]{6,20}$/;
      if(checkpass.test(document.myForm.password.value)){
        seterror('password'," ");
      }
      else{
        seterror('password',"!* password must contain atlist one number one special character & length must be 6");
          returnval=false;
      }
   
    
    var cpassword = document.forms['myForm']["cpassword"].value;
    if (cpassword != password){
        seterror("cpassword", "*Password and Confirm password should match!");
        returnval = false;
    }
      var phone = document.forms['myForm']["phoneno"].value;

   
 var checkno=/^[0-9]{10}$/;
      if(checkno.test(document.myForm.phoneno.value)){
        seterror('phoneno'," ");
      }
      else{
        seterror('phoneno',"!* invalid phone number");
          returnval=false;
      }

      return returnval;
    }

