/* 
 *©Osamu Takeuchi
 *http://dora.bk.tsukuba.ac.jp/~takeuchi/
 */
(function(){var t,e,n,l,r,u,a,i,o;Date.prototype.getShifted=function(t,e,n,l,r,u,a){var i;return i=new Date,i.setTime(this.getTime()+1e3*(60*(60*(24*(null!=n?n:0)+(null!=l?l:0))+(null!=r?r:0))+(null!=u?u:0))+(null!=a?a:0)),i.setFullYear(i.getFullYear()+(null!=t?t:0)+Math.floor((i.getMonth()+(null!=e?e:0))/12)),i.setMonth(((i.getMonth()+(null!=e?e:0))%12+12)%12),i},o=function(t,e){return function(n){return new Date(n,t-1,e)}},l=function(t,e){return function(n){var l,r;return r=1,l=new Date(n,t-1,1),l.getShifted(0,0,(7-(l.getDay()-r))%7+7*(e-1))}},i=function(t){var e;return e=new Date,e.setTime(-655910271894.04+31556943676.430065*(t-1949)+432e5),new Date(t,e.getMonth(),e.getDate())},a=function(t){var e;return e=new Date,e.setTime(-671361740118.5083+31556929338.44545*(t-1948)+4374e4),new Date(t,e.getMonth(),e.getDate())},t=[["元旦",o(1,1),1949],["成人の日",o(1,15),1949,1999],["成人の日",l(1,2),2e3],["建国記念の日",o(2,11),1967],["昭和天皇の大喪の礼",o(2,24),1989,1989],["春分の日",i,1949],["明仁親王の結婚の儀",o(4,10),1959,1959],["天皇誕生日",o(4,29),1949,1988],["みどりの日",o(4,29),1989,2006],["昭和の日",o(4,29),2007],["憲法記念日",o(5,3),1949],["みどりの日",o(5,4),2007],["こどもの日",o(5,5),1949],["徳仁親王の結婚の儀",o(6,9),1993,1993],["海の日",o(7,20),1996,2002],["海の日",l(7,3),2003],["敬老の日",o(9,15),1966,2002],["敬老の日",l(9,3),2003],["秋分の日",a,1948],["体育の日",o(10,10),1966,1999],["体育の日",l(10,2),2e3],["文化の日",o(11,3),1948],["即位の礼正殿の儀",o(11,12),1990,1990],["勤労感謝の日",o(11,23),1948],["天皇誕生日",o(12,23),1989]],e=function(t){var e,n,l;if(n=0,t<new Date(1973,3,29)||t.getDay()!==n)return null;if(e=t.getShifted(0,0,1),!e.isHoliday(!1))return e;if(t<new Date(2007,0,1))return null;for(l=[];!0;)if(e=e.getShifted(0,0,1),!e.isHoliday(!1))return e;return l},u=function(t){var e,n,l;return t.getFullYear()<1988?null:t.getShifted(0,0,2).isHoliday(!1)?(l=0,n=1,e=t.getShifted(0,0,1),e.isHoliday(!1)||e.getDay()===l||e.getDay()===n?null:e):null},r={"true":{},"false":{}},n=function(n,l){var a,i,o,f,g,h,s,D,c,d,p,y,w,M;if(l=null==l||l?!0:!1,a=r[l][n],null!=a)return a;for(d={},p=0,w=t.length;w>p;p++)o=t[p],null!=o[2]&&n<o[2]||null!=o[3]&&o[3]<n||(f=o[1](n),null!=f&&(h=f.getMonth()+1,i=f.getDate(),d[[h,i]]=o[0]));r[!1][n]=d,g=[];for(s in d)s=s.split(","),f=u(new Date(n,s[0]-1,s[1])),null!=f&&(h=f.getMonth()+1,i=f.getDate(),g.push([h,i]));for(y=0,M=g.length;M>y;y++)f=g[y],d[f]="国民の休日";c={};for(s in d)D=d[s],c[s]=D,s=s.split(","),f=e(new Date(n,s[0]-1,s[1])),null!=f&&(h=f.getMonth()+1,i=f.getDate(),c[[h,i]]="振替休日");return r[!0][n]=c,r[l][n]},Date.getHolidaysOf=function(t,e){var l,r,u,a;u=[],a=n(t,e);for(l in a)r=a[l],u.push({month:parseInt(l.split(",")[0]),date:parseInt(l.split(",")[1]),name:r});return u.sort(function(t,e){return t.month-e.month||t.date-e.date}),u},Date.prototype.isHoliday=function(t){return n(this.getFullYear(),t)[[this.getMonth()+1,this.getDate()]]}}).call(this);