
// let h=a.getHours()
// let m=a.getMinutes()
// let s=a.getSeconds()
// let d=a.getDate()

// setInterval(function(){
//   let a=new Date()
//   time.innerHTML=a
  
// },1000)

function showTime(){
  let t = new Date();
  let h=t.getHours()
  let m=t.getMinutes()
  let s=t.getSeconds()
  am_pm="AM";

  if(h>=12){
    if(h>12)
      h-=12;
    am_pm="PM";
  }
  else if(h==0){
    h=12;
  am_pm="AM"
}
h=h<10?"0"+h:h;
m=m<10?"0"+m:m;
s=s<10?"0"+s:s;

let CurrentTime=h+":"+m+":"+s+":"+am_pm;
time.innerHTML=CurrentTime
}
setInterval(showTime,1000);
