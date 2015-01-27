/*
 *
 */
!(function(z,y){
var a,b,c,d,e,f,x,w,v,u,t,s,r,q,p,o,n,m;
v=function(w){
return [w.getFullYear(),w.getMonth()+1,w.getDate(),w.getDay()];
};
r=function(w){//end of the month
m=new Date(w.getFullYear(),w.getMonth() + 1, 0);
return v(m);
};
q=function(w){//1st
m=new Date(w);
m.setDate(1);
return v(m);
};
n=function(w){
u=v(w);//today
s=r(w);//end of the month
t=q(w);//1st
a = z.getElementById("cal");
b = z.createElement('table');
c = z.createElement('tbody');
d = z.createElement('tr');
e = z.createElement('td');
f = z.createElement('thead');
a.appendChild(b);
b.appendChild(c);
b.className="cal "+u[0]+("0"+u[1]).slice(-2);

b.appendChild(f);
f.appendChild(d);
d.appendChild(e);
e.colSpan="7";
e.innerHTML = u[0]+"年"+u[1]+"月";
e.className="month";

d = z.createElement('tr');
c.appendChild(d);
for(p=0;p<t[3];p++){
e = z.createElement('td');
d.appendChild(e);
e.className="date";
}
o=t[3];
for(p=1;p<=s[2];p++){
if(o >= 7){
d = z.createElement('tr');
c.appendChild(d);
o=0;
}
e = z.createElement('td');
d.appendChild(e);
e.innerHTML = p;
w.setDate(p);
if(o == 0||w.isHoliday()){
e.className="day_sun date";
if(w.isHoliday()){
e.title=w.isHoliday();
}
}else if(o == 6){
e.className="day_sat date";
}else{
e.className="day_etc date";
}
o++;
}
for(p=7;p>o;p--){
e = z.createElement('td');
d.appendChild(e);
e.className="date";
}
};
x=function(){
w=new Date();
n(new Date(w));
}
if(y.addEventListener) {
y.addEventListener("load",function(){x()},false);
}else if(y.attachEvent){
y.attachEvent("onload",function(){x()});
}else{
y.onload=function(){x()};
}
})(document,window);