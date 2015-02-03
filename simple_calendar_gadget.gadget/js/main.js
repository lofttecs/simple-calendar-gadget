/*
 *
 */
!(function(d,w){
var fin,fca,far,fde,fdf,fdd,fal,dno,dbf,adt,adf,ade,adb,sdd,hsc,sdb,shb,sgs,i,eca,hsf={};
far=function(dno){
return [dno.getFullYear(),dno.getMonth()+1,dno.getDate(),dno.getDay(),dno.getDay(),dno.getHours(),dno.getMinutes()];
};
fde=function(dno){//end of the month
var m=new Date(dno.getFullYear(),dno.getMonth() + 1, 0);
return far(m);
};
fdf=function(dno){//1st
var m=new Date(dno);
m.setDate(1);
return far(m);
};
fdd=function(adb){
return ''+adb[0]+("0"+adb[1]).slice(-2)+("0"+adb[2]).slice(-2);
};
fca=function(dno){
  var eta,etb,etr,etd,eth,scc;
  adt=far(dno);//today
  ade=fde(dno);//end of the month
  adf=fdf(dno);//1st

  scc="cal "+adt[0]+("0"+adt[1]).slice(-2);
  eta=eca.getElementsByTagName("table");
  for(var i=0,l=eta.length;i<l;i++){
    if(eta[i].className == scc){
      eta[i].parentNode.removeChild(eta[i]);
    }
  }

  eta = d.createElement('table');
  etb = d.createElement('tbody');
  etr = d.createElement('tr');
  etd = d.createElement('td');
  eth = d.createElement('thead');
  eca.appendChild(eta);
  eta.appendChild(etb);
  eta.className=scc;

  eta.appendChild(eth);
  eth.appendChild(etr);
  etr.appendChild(etd);
  etd.colSpan="7";
  etd.appendChild(d.createElement('div'));
  etd = etd.getElementsByTagName("div")[0];
  etd.innerHTML = adt[0]+"年"+adt[1]+"月";
  etd.title = adt[0]+"年"+adt[1]+"月";
  etd.className="month";
  etd.className+=" month_"+adt[1];

  etr = d.createElement('tr');
  etb.appendChild(etr);
  for(i=0;i<adf[3];i++){
    etd = d.createElement('td');
    etr.appendChild(etd);
    etd.className="date";
    etd.appendChild(d.createElement('div'));
  }
  sdd=adf[3];
  dbf=new Date(dno);
  for(i=1;i<=ade[2];i++){
    if(sdd >= 7){
    etr = d.createElement('tr');
    etb.appendChild(etr);
    sdd=0;
  }
  etd = d.createElement('td');
  etr.appendChild(etd);
  etd.appendChild(d.createElement('div'));
  etd = etd.getElementsByTagName("div")[0];
  etd.innerHTML = i;
  dbf.setDate(i);
  if(sdd == 0||dbf.isHoliday()){
    etd.className="day_sun date";
    if(dbf.isHoliday()){
    etd.title=dbf.isHoliday();
    }
  }else if(sdd == 6){
    etd.className="day_sat date";
  }else{
    etd.className="day_etc date";
  }
  adb=far(dbf);
  if(dbf.toDateString()==(new Date()).toDateString()){
    etd.className+=" day_today";
  }
  sdb=fdd(adb);
  if(sdb in hsc){
    etd.className+=" day_sche";
    for(shb in hsc[sdb]){
      etd.title+="\n"+shb+": "+hsc[sdb][shb];
    }
    etd.title=etd.title.replace(/^\s+/, "");
  }
  etd.className+=" day_"+i;
  sdd++;
  }
  for(i=7;i>sdd;i--){
    etd = d.createElement('td');
    etr.appendChild(etd);
    etd.className="date";
    etd.appendChild(d.createElement('div'));
  }

};
fal=function(){
  var ssd,ssm,sdc,sdb,sdm,acr,dcr=new Date();
  acr=far(dcr);
  for(ssd in hsc){
    sdb=fdd(acr);
    if(sdb in hsc){
      for(ssm in hsc[ssd]){
        sdm=''+("0"+acr[5]).slice(-2)+("0"+acr[6]).slice(-2);
        if(!(ssd in hsf)){
          hsf[ssd]={};
        }
        if(!(ssd in hsf)){
          hsf[ssd]={};
        }
        if(sdm == ssm && !(sdm in hsf[ssd])){
          alert(hsc[ssd][sdm]);
          hsf[ssd][sdm]=!0;
        }
      }
    }
  }
};
fin=function(){
  System.Gadget.settingsUI="settings.html";
  //setTimeout(function(){confirm(w);},1000);
  sgs=System.Gadget.Settings;
  eca = d.getElementById("cal");
  if(eca){
    if(sgs.read("flg")!=true) {
      sgs.write("flg",true);
    }
    if(sgs.read("sch") == ""){
      sgs.write("sch","{}");
    }
    hsc=eval("("+sgs.read("sch")+")");

    dno=new Date();
    fca(new Date(dno));
    //alert("");
    System.Gadget.onSettingsClosed=function() {
      hsc=eval("("+sgs.read("sch")+")");
      dno=new Date();
      fca(new Date(dno));
    };

    setInterval(function(){fal();
    },1000*5);
  }
}
if(w.addEventListener) {
  w.addEventListener("load",function(){fin()},false);
}else if(w.attachEvent){
  w.attachEvent("onload",function(){fin()});
}else{
  w.onload=function(){fin()};
}
})(document,window);