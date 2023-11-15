let inputEmail=document.getElementById('input-email');
let inputPwd=document.getElementById('input-pwd');

let emaiInvalidMsg=document.getElementById('email-invalid-msg');
let pwdInvalidMsg=document.getElementById('pwd-invalid-msg');

let emailValidOrInvalid=document.getElementById('email-valid-or-invalid');
let pwdValidOrInvalid=document.getElementById('pwd-valid-or-invalid');

function validateEmail(){
  if(checkEmail(inputEmail.value)){
    emaiInvalidMsg.classList.remove('show');
    emailValidOrInvalid.classList.remove('invalid');
  }
  else{
    emaiInvalidMsg.classList.add('show');
    emailValidOrInvalid.classList.add('invalid');
  }
}

function validatePwd(){
  if(checkPwd(inputPwd.value)){
    pwdInvalidMsg.classList.remove('show');
    pwdValidOrInvalid.classList.remove('invalid');
  }
  else{
    pwdInvalidMsg.classList.add('show');
    pwdValidOrInvalid.classList.add('invalid');
  }
}

// 이메일 형식의 유효성을 확인하는 함수
function checkEmail(email){                                                 
  var reg_email = /^[A-Za-z0-9_\.\-]+@[A-Za-z0-9\-]+\.[A-Za-z0-9\-]+/;
  if(!reg_email.test(email)) {
    return false;
  }else {
    return true;
  }                            
}

// 패스워드 형식의 유효성을 확인하는 함수
function checkPwd(pwd){                                                 
    var num = pwd.search(/[0-9]/g);
    var eng = pwd.search(/[a-z]/ig);
    // var spe = pw.search(/[`~!@@#$%^&*|₩₩₩'₩";:₩/?]/gi);
   
    if(pwd.length < 6 || num < 0 || eng < 0 || pwd.search(/\s/) != -1){
      return false;
    }else{
      return true;
    }
}