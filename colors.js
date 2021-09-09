var Links = {
  setColor:function (color){
    // var alist = document.querySelectorAll('a');
    // var i =0;
    // while(i < alist.length){
    //   alist[i].style.color = color;
    //   i = i + 1;
    // }
    $('a').css('color', color);   // 이 페이지 내 모든 a태그를 jquery로 제어하겠다.
  }
}
var Body = {
  setColor:function (color){
  //  document.querySelector('body').style.color = color;
    $('body').css('color',color);
  },
  setBackgroundColor:function (color) {
  //  document.querySelector('body').style.backgroundColor = color;
    $('body').css('backgroundColor',color);
  }
}


function nightDayHandler(self){
  var target = document.querySelector('body');
  if(self.value === 'night'){
    Body.setBackgroundColor('black');
    Body.setColor('white');
    self.value = 'day';

    Links.setColor('white');
  } else {
    Body.setBackgroundColor('white');
    Body.setColor('black');
    self.value = 'night';

    Links.setColor('blue');
  }
}
