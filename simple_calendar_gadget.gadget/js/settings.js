/*
 *
 */
!(function(d,w){
  var fin;
  fin=function(){
    var est,ets,hsc,ssc;
    sgs=System.Gadget.Settings;
    est = d.getElementById("stg");
    esh = d.getElementById("sche");
    if(est){
      hsc=eval("("+sgs.read("sch")+")");
      esh.value = sgs.read("sch");

      System.Gadget.onSettingsClosing=function(e) {
        if(e.closeAction==e.Action.commit) {
          try{
            ssc=eval('('+esh.value+')');
            sgs.write("sch",esh.value);
          }catch(er){
            alert('validation error'+"\n"+er);
            return false;
          }
        }
      };
    }
  };
  if(w.addEventListener) {
    w.addEventListener("load",function(){fin()},false);
  }else if(w.attachEvent){
    w.attachEvent("onload",function(){fin()});
  }else{
    w.onload=function(){fin()};
  }
})(document,window);
