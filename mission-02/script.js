let inputPwd=document.getElementById('input-pwd');
let hideOrShow=document.getElementById('hide-or-show');

function showHide(){
  if(inputPwd.type === 'password'){
    inputPwd.setAttribute('type', 'text');
    // 눈에 슬래시 없는 이미지를 눌러야 hide가 되기 때문에 슬래시 없는 이미지가 hide 이미지임.
    hideOrShow.classList.add('hide');
  }
  else{
    inputPwd.setAttribute('type', 'password');
    hideOrShow.classList.remove('hide');
  }
}