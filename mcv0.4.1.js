var zyfz=0
var zqh=true
var pfz=false
var dcc=false
var ncp=true
var fyx=true
var R=10
var R0=8
var POWER=2
var TYPES=[Server.getAllPlayers(),0,10,11,12,13,32,33,34,35,36,80,81,82,65]
var time=0
var mobs=new Array()
var a=0
var arrows=new Array()
var pi;
var t=0
var G=0
var afz=0
var ae=new Array()
var Xz,Zz,X,Z,bm=1
var renmod=0
var sjsj1=0
var sjsj2=0
var plsy=0
var sjid=0
var px=getPlayerX();
var py=getPlayerY();
var pz=getPlayerZ();
var ge=getPlayerEnt()
var sc=0
var scj=0

var zyz=false
var tx,ty,tz
var ransss=0
var ranss=0
var kx,wt
var ky
var kz
var cc=0
var kans=0
var xv,yv,zv
var sjsj1=0
var sjsj2=0
var plsy=0
var sjid=0
var px=getPlayerX();
var py=getPlayerY();
var pz=getPlayerZ();
var ge=getPlayerEnt()
var sc=0
var scj=0
var jxv
var jyv 
var jzv
var zt=0
var pt
var ya
var pn
var js=0.3
var ym=false;
var ctx;
var YMGUI=null;
var speed=10
var kdc;
var zc=false
var pi= Math.PI/180;
var yc=true
var simpleGUI = null;
var sprint = false;
var JUMP=null
var time=25
var sdj=0
var sx
var sy
var sz




function mainmenu(){
var ctx=com.mojang.minecraftpe.MainActivity.currentMainActivity.get()
var layout=new android.widget.LinearLayout(ctx)
try{
var menu=new android.widget.PopupWindow(layout, dip2px(ctx,75), dip2px(ctx,30));
menu.setFocusable(true)
var layout=new android.widget.LinearLayout(ctx)
layout.setOrientation(1)
var maintxt=new android.widget.TextView(ctx)
maintxt.setText("       |main  menu|")
maintxt.setTextSize(28)
layout.addView(maintxt)

var nocreep=new android.widget.Button(ctx)
if(ncp==true){nocreep.setText("|开启|没有苦力怕模式") }
else
if(ncp==false){nocreep.setText("|关闭|没有苦力怕模式")}
nocreep.setOnClickListener(new android.view.View.OnClickListener({
onClick:function(v){
if(ncp==true)
{
nocreep.setText("|关闭|没有苦力怕")
ncp=false
}
else
{
nocreep.setText("|开启|没有苦力怕")
ncp=true
}

}}))
layout.addView(nocreep)

var notnt=new android.widget.Button(ctx)
if(fyx==true){ notnt.setText("|开启|防熊模式") }
else
if(fyx==false){ notnt.setText("|关闭|防熊模式") }


notnt.setOnClickListener(new android.view.View.OnClickListener({
onClick:function(v){
if(fyx==true)
{
notnt.setText("|关闭|防熊模式")
fyx=false
}
else
{
notnt.setText("|开启|防熊模式")
fyx=true
}

}}))
layout.addView(notnt)

var djcc=new android.widget.Button(ctx)
if(dcc==true){djcc.setText("|开启|点击拆除模式") }
else
if(dcc==false){djcc.setText("|关闭|点击拆除模式")}
djcc.setOnClickListener(new android.view.View.OnClickListener({
onClick:function(v){
if(dcc==true)
{
djcc.setText("|关闭|点击拆除模式") 
dcc=false
}
else
{
djcc.setText("|开启|点击拆除模式") 
dcc=true
}

}}))
layout.addView(djcc)

var zqpl=new android.widget.Button(ctx)
if(yc==true){ zqpl.setText(" |开启|坐骑按钮 ")}
else
if(yc==false){ zqpl.setText(" |隐藏|坐骑按钮 ")}

zqpl.setOnClickListener(new android.view.View.OnClickListener({
onClick:function(v){
if(yc==true)
{
zqpl.setText(" |隐藏|坐骑按钮 ")
ymoff();
yc=false
}
else
{
zqpl.setText(" |开启|坐骑按钮 ")

ymdk();
yc=true
}

}}))
layout.addView(zqpl)
/*
var zzqh=new android.widget.Button(ctx)
if(zqh==true){ zzqh.setText("|主号|主号子号状态选择(必选)") }
else
if(zqh==false){zzqh.setText("|子号|主号子号状态选择(必选)") }
zzqh.setOnClickListener(new android.view.View.OnClickListener({
onClick:function(v){
if(zqh==true)
{
zzqh.setText("|主号|主号子号状态选择(必选)")
zqh=false
}
else
{
zzqh.setText("|子号|主号子号状态选择(必选)")
zqh=true
}
}}))
layout.addView(zzqh)
*/
var pvppl=new android.widget.Button(ctx)
if(zyz==true){ pvppl.setText("|开启|多职业pvp模式") }
else
if(zyz==false){ pvppl.setText("|关闭|多职业pvp模式") }
pvppl.setOnClickListener(new android.view.View.OnClickListener({
onClick:function(v){
if(zyz==true)
{
pvppl.setText("|关闭|多职业pvp模式")
zyz=false
}
else
{
pvppl.setText("|开启|多职业pvp模式")
zyz=true
}
}}))
layout.addView(pvppl)

var ppfz=new android.widget.Button(ctx)
if(pfz==true){ ppfz.setText("|点击放置|多职业pvp模式放置装备获取器") }
else
if(pfz==false){ ppfz.setText("|关闭|多职业pvp模式放置装备获取器") }
ppfz.setOnClickListener(new android.view.View.OnClickListener({
onClick:function(v){
if(pfz==true)
{
zyfz=0
ppfz.setText("|关闭|多职业pvp模式放置装备获取器")
pfz=false
}
else
if(pfz==false)
{
zyfz=0
ppfz.setText("|点击放置|多职业pvp模式放置装备获取器")
pfz=true
}
}}))
layout.addView(ppfz)


var hhlp=new android.widget.Button(ctx)
hhlp.setText("帮助")
hhlp.setOnClickListener(new android.view.View.OnClickListener({
onClick:function(v){
var layout=new android.widget.LinearLayout(ctx); 
var textview=new android.widget.TextView(ctx); 
try{
var dialog=new android.app.AlertDialog.Builder(ctx)
dialog.setTitle("帮助")
dialog.setMessage("                          更好玩的mcjs帮助\n\n现在有的功能\n★两个楼梯上下放你可以坐在凳子上，并且别人看得见\n☆上面一个反应核下面一个栏杆点栏杆可以出水，点两下关闭\n★上面玻璃下面萤石点玻璃可以开关台灯\n☆用骨头可以骑上并用按钮控制生物\n★可以用红石点发光的东西让他发光或不发光\n☆当熔炉在烧东西时会冒烟\n★可以用水桶浇花并得到花\n☆拿花点击可以示爱\n★拿土豆点击可以放屁\n☆点击书架可以把书拿下来，拿书点击可以把书架回书架\n★可以强制吃蛋糕\n☆拿斧子砍树可以把整个砍倒，拿金斧砍可以获得双倍木头\n★金刀打怪可以吸血\n☆金铲可以挖平一大片，并获得\n★金搞可以大范围挖矿\n☆拿木棒点黑曜石黑曜石会变成随机的方块然后黑曜石会瞬移掉\n★把矿埋到土下在那个土的上面放一个树种，可以种植矿物树，必须拿骨粉点击\n☆用染料点树苗再拿骨粉点树苗会长出彩色的树\n\n\n职业战帮助\n\n18种职业的战争拉上你的小伙伴痛快的玩\n你需要先用 多职业pvp模式放置装备获取器按钮放置职业附身神像 ，然后开启多职业pvp模式开关，必须没装备的情况下点击南瓜头就可以获取\n注：如果想体验到最好的效果每个参加的玩家最好都安装此js，子号获取装备时会有跳出双倍物品并有一些捡不起来那些是js的bug但装备是可以完整获取的\n主号必须装js，但如果子号不装也是可以玩耍的，但职业会有几个不能用，但大部分职业还是可以用的\n对战时主号于子号都需要在菜单中打开多职业pvp选项\n\n\n职业简单介绍\n每个职业获取神像不同的地方就是南瓜头下面的方块所以下面职业介绍直接说那些不一样的方块\n光明使者（石英）正义的化身，在有光的地方实力超群\n黑暗使者（煤块）黑暗的化身，在黑的地方实力超群\n吸血鬼（地狱岩）魔鬼般的职业，用死神镰刀收割生物的鲜血\n防御者（黑曜石）防御最高的职业\n战士（铁块）防御适中攻击适中，攻击范围适中，长相适中，行了我闭嘴→_→用一把可以裂地的刀\n战神（砖石块）冷兵器的王者，有一把可以爆炸燃烧的刀\n爆破师（tnt）熊孩子≥﹏≤不解释\n弓箭手（金块）移动速度比较快，远程攻击职业\n护法（麦块）可以给别人补血给自己补血，可以骑上别人和被别人骑\n魔法师（书架）会冰封印和爆炸术\n忍者（蜘蛛网）移动最快的职业，有一把高击退的铁斧\n魔术师（绿宝石）可以变出任何东西，前期超烂后期无敌\n未来战士（反应核）放射激光，有几率是爆炸岩浆和水射线\n自然系能力者（木头）控制自然的能力，可以藤蔓缠绕和沙子封印\n重力控制者（羊毛）遇上这个职业，你就别想好好玩耍\n水怪（青金石）作为水怪你得先找到一片水，技能秒杀幽浮\n屁神（海绵）会放屁，传说中的用屁二段跳～\n幽浮（石英半砖）完美克制大部分进程职业，会被水怪秒杀\n")
dialog.setPositiveButton("返回游戏",new android.content.DialogInterface.OnClickListener(){
onClick: function(dia,w){
}})
dialog.show()
}catch(err){print(err)}

}}))
layout.addView(hhlp)

var guanyu=new android.widget.Button(ctx)
guanyu.setText("关于")
guanyu.setOnClickListener(new android.view.View.OnClickListener({
onClick:function(v){
try{
var dialog=new android.app.AlertDialog.Builder(ctx)
dialog.setTitle("关于")
dialog.setMessage( "作者信息\n百度贴吧id：恒河3(我知道你很好哒，一定会粉河河哒≥﹏≤)\ncode whisper开发组组员\ncode whisper开发组创始人（注：创始人不一定是组长）\n作者QQ：2358407656\n希望大家多提意见，让这个js更完美^ω^\n" )
dialog.setPositiveButton("返回游戏",new android.content.DialogInterface.OnClickListener(){
onClick: function(dia,w){
}})
dialog.show()
}catch(err){print(err)}

}}))
layout.addView(guanyu)
var mlayout=makeMenu(ctx,layout)
menu.setContentView(mlayout)
menu.setWidth(dip2px(ctx,350))
menu.setHeight(dip2px(ctx,250))
menu.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.argb(125,100,100,0)))
menu.showAtLocation(ctx.getWindow().getDecorView(),android.view.Gravity.LEFT | android.view.Gravity.TOP,dip2px(ctx,0),dip2px(ctx,0))
}catch(err){
print(err)
}
}


function dip2px(ctx, dips){ 
return Math.ceil(dips * ctx.getResources().getDisplayMetrics().density); 
}




function entityAddedHook(entity)
{
if(Entity.getEntityTypeId(entity)==65&&fyx==true)
{
Entity.remove(entity);
}
if(Entity.getEntityTypeId(entity)==33&&ncp==true)
{
Entity.remove(entity);
}

}





function makeMenu(ctx,layout){ 
var mlayout=new android.widget.RelativeLayout(ctx) 
var svParams=new android.widget.RelativeLayout.LayoutParams(android.widget.RelativeLayout.LayoutParams.FILL_PARENT,android.widget.RelativeLayout.LayoutParams.FILL_PARENT) 
var scrollview=new android.widget.ScrollView(ctx) 
var pad=dip2px(ctx,2) 
scrollview.setPadding(pad,pad,pad,pad) 
scrollview.setLayoutParams(svParams) 
scrollview.addView(layout) 
mlayout.addView(scrollview) 
return mlayout 
}

function entityRemovedHook(entity)
{
if( zyz==true )
{
if(Entity.getEntityTypeId(entity)==82)
{  
            ex=Entity.getX(entity)
            ey=Entity.getY(entity)+1
            ez=Entity.getZ(entity)-1
            var eex=ex
            var eey=ey-3
            var eez=ez

                    Level.setTile(ex,ey,ez,11)
                    Level.setTile(ex+1,ey,ez,79)
                    Level.setTile(ex-1,ey,ez,79)
                    Level.setTile(ex,ey+1,ez,79)
                    Level.setTile(ex,ey-1,ez,9)
                    Level.setTile(ex,ey,ez+1,79)
                    Level.setTile(ex,ey,ez-1,79)
                    Level.setTile(ex,ey+1,ez-1,79)
                    Level.setTile(ex+1,ey+1,ez,9)
                    Level.setTile(ex,ey+1,ez,79)
                    Level.setTile(ex+1,ey+1,ez,79)
                    Level.setTile(ex-1,ey+1,ez,9)
                    Level.setTile(ex,ey+1,ez,79)
                    Level.setTile(ex,ey-1,ez,9)
                    Level.setTile(ex,ey+1,ez+1,79)
                    Level.setTile(ex,ey+1,ez-1,79)
                    Level.setTile(ex,ey+1,ez-1,79)
                    Level.setTile(ex+1,ey+1,ez,79)
                    
                    Level.setTile(ex,ey,ez,9)
                    Level.setTile(ex,ey+1,ez,9)
                    Level.setTile(ex,ey,ez,9)
                    Level.setTile(ex+1,ey+1,ez+1,79)
                    Level.setTile(ex-1,ey-1,ez+1,79)
                    Level.setTile(ex+1,ey,ez+1,79)
                    Level.setTile(ex+1,ey,ez-1,79)
                    Level.setTile(ex,ey+1,ez-1,79)
                    Level.setTile(ex+1,ey+1,ez,9)
                    
                    Level.setTile(ex,ey,ez,9)
                    Level.setTile(ex,ey+1,ez,9)
                    Level.setTile(ex,ey,ez,9)
                    Level.setTile(ex+1,ey+1,ez-1,79)
                    Level.setTile(ex-1,ey+1,ez-1,79)
                    Level.setTile(ex-1,ey,ez+1,79)
                    Level.setTile(ex-1,ey,ez-1,79)
                    Level.setTile(ex,ey+1,ez-1,79)
                    Level.setTile(ex+1,ey+1,ez,9)
                    
                    Level.setTile(ex,ey+2,ez+1,79)
                    Level.setTile(ex,ey+2,ez-1,79)
                    Level.setTile(ex,ey,ez,79)
                    Level.setTile(ex,ey+2,ez,79)
                    Level.setTile(ex+1,ey+2,ez,79)
                    Level.setTile(ex-1,ey+2,ez,79)
                    Level.setTile(ex+1,ey+1,ez+1,79)
                    Level.setTile(ex-1,ey-1,ez+1,9)
                    Level.setTile(ex+1,ey,ez+1,79)
                    Level.setTile(ex+1,ey,ez-1,79)
                    Level.setTile(ex,ey+1,ez-1,79)
                    Level.setTile(ex+1,ey+1,ez,9)
                    
                    Level.setTile(ex-1,ey+1,ez,79)
                    Level.setTile(ex-1,ey+2,ez,79)
                    Level.setTile(ex-1,ey,ez,79)
                    Level.setTile(ex,ey+2,ez-1,79)
                    Level.setTile(ex,ey,ez,80)




Level.setTile(eex,eey,eez,11)
                    Level.setTile(eex+1,eey,eez,79)
                    Level.setTile(eex-1,eey,eez,79)
                    Level.setTile(eex,eey+1,eez,79)
                    Level.setTile(eex,eey-1,eez,9)
                    Level.setTile(eex,eey,eez+1,79)
                    Level.setTile(eex,eey,eez-1,79)
                    Level.setTile(eex,eey+1,eez-1,79)
                    Level.setTile(eex+1,eey+1,eez,9)
                    Level.setTile(eex,eey+1,eez,79)
                    Level.setTile(eex+1,eey+1,eez,79)
                    Level.setTile(eex-1,eey+1,eez,9)
                    Level.setTile(eex,eey+1,eez,79)
                    Level.setTile(eex,eey-1,eez,9)
                    Level.setTile(eex,eey+1,eez+1,79)
                    Level.setTile(eex,eey+1,eez-1,79)
                    Level.setTile(eex,eey+1,eez-1,79)
                    Level.setTile(eex+1,eey+1,eez,79)
                    
                    Level.setTile(eex,eey,eez,9)
                    Level.setTile(eex,eey+1,eez,9)
                    Level.setTile(eex,eey,eez,9)
                    Level.setTile(eex+1,eey+1,eez+1,79)
                    Level.setTile(eex-1,eey-1,eez+1,79)
                    Level.setTile(eex+1,eey,eez+1,79)
                    Level.setTile(eex+1,eey,eez-1,79)
                    Level.setTile(eex,eey+1,eez-1,79)
                    Level.setTile(eex+1,eey+1,eez,9)
                    
                    Level.setTile(eex,eey,eez,9)
                    Level.setTile(eex,eey+1,eez,9)
                    Level.setTile(eex,eey,eez,9)
                    Level.setTile(eex+1,eey+1,eez-1,79)
                    Level.setTile(eex-1,eey+1,eez-1,79)
                    Level.setTile(eex-1,eey,eez+1,79)
                    Level.setTile(eex-1,eey,eez-1,79)
                    Level.setTile(eex,eey+1,eez-1,79)
                    Level.setTile(eex+1,eey+1,eez,9)
                    
                    Level.setTile(eex,eey+2,eez+1,79)
                    Level.setTile(eex,eey+2,eez-1,79)
                    Level.setTile(eex,eey,eez,79)
                    Level.setTile(eex,eey+2,eez,79)
                    Level.setTile(eex+1,eey+2,eez,79)
                    Level.setTile(eex-1,eey+2,eez,79)
                    Level.setTile(eex+1,eey+1,eez+1,79)
                    Level.setTile(eex-1,eey-1,eez+1,9)
                    Level.setTile(eex+1,eey,eez+1,79)
                    Level.setTile(eex+1,eey,eez-1,79)
                    Level.setTile(eex,eey+1,eez-1,79)
                    Level.setTile(eex+1,eey+1,eez,9)
                    
                    Level.setTile(eex-1,eey+1,eez,79)
                    Level.setTile(eex-1,eey+2,eez,79)
                    Level.setTile(eex-1,eey,eez,79)
                    Level.setTile(eex,eey+2,eez-1,79)
                    Level.setTile(eex,eey,eez,80)
}
if(Entity.getEntityTypeId(entity)==81)
{
explode(Entity.getX(entity), Entity.getY(entity)+1.5, Entity.getZ(entity),2)
}
}
}


function modTick(){
if( zyz==true )
{
var wjkj1=Player.getArmorSlot(0);
var wjkj2=Player.getArmorSlot(1);
var wjkj3=Player.getArmorSlot(2);
var wjkj4=Player.getArmorSlot(3);

if( wjkj1==298&&wjkj2==303&&wjkj3==304&&wjkj4==313&&getTile(getPlayerX(),getPlayerY()-5,getPlayerZ())!=0)
{
setVelY(Player.getEntity(),+0.1)
}

if( wjkj1==314&&wjkj2==299&&wjkj3==300&&wjkj4==301&&getTile(getPlayerX(),getPlayerY()-5,getPlayerZ())!=0)
{
if(bm==1)
{
Xz=getPlayerX();
Zz=getPlayerZ();
bm=bm+1;
}
else if(bm==3)
{
bm=1
X=getPlayerX()-Xz;
Z=getPlayerZ()-Zz;
setVelX(getPlayerEnt(),X);
setVelZ(getPlayerEnt(),Z);
X=0;
Z=0;
Xz=0
Xx=0
}
if(bm!=1)
{
bm=bm+1;
}
}
if(wjkj1==302&&wjkj2==307&&wjkj3==304&&wjkj4==305)
{
if(bm==1)
{
Xz=getPlayerX();
Zz=getPlayerZ();
bm=bm+1;
}
else if(bm==3)
{
bm=1
X=getPlayerX()-Xz;
Z=getPlayerZ()-Zz;
setVelX(getPlayerEnt(),X*1.1);
setVelZ(getPlayerEnt(),Z*1.1);
X=0;
Z=0;
Xz=0
Xx=0
}
if(bm!=1)
{
bm=bm+1;
}
}



}

if(ranss==1)
{
ransss++
if(ransss==2)
{
var rst=Level.getSignText(tx,0,tz,0);
for(var ax=-4.5;ax<=4.5;ax++){
for(var ay=-5;ay<=50;ay++){
for(var az=-4.5;az<=4.5;az++){

if (getTile(tx+ax ,ty+ay, tz+az)==18&&Level.getData(tx,0,tz)!=0)
{
Level.setTile(tx+ax,ty+ay,tz+az,35,Level.getData(tx,0,tz));

}

}}}
ransss=0
ranss=0
}

}
if(time<25){time++}
//加速
 if(ym==true){
 

var a=(getYaw()% 360)*Math.PI/180
var b=getPitch()*Math.PI/180
var xv,yv,zv
xv=-Math.sin(a)*Math.cos(b)
yv=-Math.sin(b)
zv=Math.cos(a)*Math.cos(b)
pn=getPlayerEnt();
ya=getYaw(pn);
pt=getPitch(pn);
Entity.setRot(kdc,ya,pt);
setVelX(kdc,xv*js)
setVelZ(kdc,zv*js)
sx=Entity.getX(kdc);
sy=Entity.getY(kdc);
sz=Entity.getZ(kdc);
zt++
if(zt==10)
{
Entity.setRot(kdc,ya,pt);
zt++
}
}
}









function ymoff()
{
 ctx=com.mojang.minecraftpe.MainActivity.currentMainActivity.get();
 ctx.runOnUiThread(new java.lang.Runnable(
 {
  run:function()
  {
   if(YMGUI!=null)
   {
    YMGUI.dismiss();
    YMGUI=null
   }
   if(JUMP!=null){JUMP.dismiss();JUMP=null}
  }
 }
 )
 );
}
function ymdk()
{
 ctx = com.mojang.minecraftpe.MainActivity.currentMainActivity.get();
 ctx.runOnUiThread(new java.lang.Runnable(
 {
  run: function() 
  {
   try
   {JUMP = new android.widget.PopupWindow();
var layout = new android.widget.RelativeLayout(ctx);
var button = new android.widget.Button(ctx);
button.setText("︿");
                        
button.setOnClickListener(new android.view.View.OnClickListener(
{
onClick: function(viewarg) 
{
if(getTile(sx,sy-1,sz)!=0)
{
setVelY(kdc,+0.4);
time=0
}
}
}
)
);
layout.addView(button);
                        
JUMP.setContentView(layout);
JUMP.setWidth(90);
JUMP.setHeight(60);
JUMP.showAtLocation(ctx.getWindow().getDecorView(), android.view.Gravity.RIGHT| android.view.Gravity.BOTTOM,0,50);

   
   
   //油门
    YMGUI=new android.widget.PopupWindow();
    var layout = new android.widget.RelativeLayout(ctx);
    var button = new android.widget.ToggleButton(ctx);
    button.setTextOn("︽");
    button.setTextOff("︽");
    button.setChecked(ym)
    button.setOnClickListener(new android.view.View.OnClickListener(
    {
     onClick:function() 
     {
      if(ym)
      {
       ym=false
      }
      else
      {
       ym=true
      }
     }
    }
    )
    );
    layout.addView(button);
    YMGUI.setContentView(layout);
    YMGUI.setWidth(90);
    YMGUI.setHeight(60);
    YMGUI.showAtLocation(ctx.getWindow().getDecorView(), android.view.Gravity.RIGHT | android.view.Gravity.BOTTOM,0,0);
   }
   catch(err)
   {
    print("Error: "+err);
   }
  } 
 }
 )
 );
 
}





function newLevel()
{
var ctx = com.mojang.minecraftpe.MainActivity.currentMainActivity.get();
ctx.runOnUiThread(new java.lang.Runnable(
{
run: function() 
{
try
{
simpleGUI = new android.widget.PopupWindow();
var layout = new android.widget.RelativeLayout(ctx);
var button = new android.widget.Button(ctx);
button.setText("M");
                        
button.setOnClickListener(new android.view.View.OnClickListener(
{
onClick: function(viewarg) 
{
mainmenu()
}
}
)
);
layout.addView(button);
                        
simpleGUI.setContentView(layout);
simpleGUI.setWidth(62);
simpleGUI.setHeight(62);
simpleGUI.showAtLocation(ctx.getWindow().getDecorView(), android.view.Gravity.LEFT | android.view.Gravity.BOTTOM,0,300);
}
catch(err)
{
print("Error: "+err);
}
} 
}
)
);  
}

function leaveGame()
{
var ctx = com.mojang.minecraftpe.MainActivity.currentMainActivity.get();
ctx.runOnUiThread(new java.lang.Runnable({ run: function() {
if(simpleGUI != null){
simpleGUI.dismiss();
}
   if(JUMP!=null){JUMP.dismiss();JUMP=null}
if(YMGUI!=null)
   {
    YMGUI.dismiss();
    YMGUI=null
   }
  
}
}
)
);
}

function destroyBlock(x, y, z,side) 
{
var itemId=getCarriedItem();
var blockId=getTile(x, y, z); 
if(itemId==258&&blockId==17||itemId==271&&blockId==17||itemId==275&&blockId==17||itemId==279&&blockId==17)
{
for(var tree=1;tree<256;tree++)
{
if (getTile(x,tree, z)==17)
{
Level.dropItem(x, tree, z, 0, getTile(x, tree, z), 1, Level.getData(x, tree, z));
Level.destroyBlock(x, tree, z);
Level.destroyBlock(x, tree, z);
Level.destroyBlock(x, tree, z);
}
} 
}
else
if(itemId==286&&blockId==17)
{

for(var tree=1;tree<256;tree++)
{
if (getTile(x,tree, z)==17)
{
Level.dropItem(x, tree, z, 0, getTile(x, tree, z), 1, Level.getData(x, tree, z));
Level.dropItem(x, tree, z, 0, getTile(x, tree, z), 1, Level.getData(x, tree, z));
Level.destroyBlock(x, tree, z);
Level.destroyBlock(x, tree, z);
Level.destroyBlock(x, tree, z);
}
} 
}
if(itemId==285)
{
for(var ax=-2.2;ax<=0;ax++){
for(var ay=-2.2;ay<=0;ay++){
for(var az=-2.2;az<=0;az++){

if (getTile(x+ax+1.1 ,y+ay+1, z+az+1.1)!=0&&getTile(x+ax+1.1,y+ay, z+az+1.1)!=1 )
{
Level.dropItem(x+ax+1.1, y+ay+1, z+az+1.1, 0, getTile(x+ax+1.1, y+ay+1, z+az+1.1), 1, Level.getData(x+ax+1.1,y+ay+1, z+az+1.1));
Level.destroyBlock(x+ax+1.1,y+ay+1, z+az+1.1);
}
else
if (getTile(x+ax+1.1,y+ay+1, z+az+1.1)==1)
{
Level.dropItem(x+ax+1.1, y+ay+1, z+az+1.1, 0, 4, 1, Level.getData(x+ax+1.1,y+ay+1, z+az+1.1));
Level.destroyBlock(x+ax+1.1,y+ay+1, z+az+1.1);
}


}
}
}
}
if(itemId==284)
{
for(var ax=-6;ax<=0;ax++){
for(var ay=-6;ay<=0;ay++){
for(var az=-6;az<=0;az++){

 if (getTile(x+ax+3,y, z+az+3)!=0)
{
Level.dropItem(x+ax+3, y, z+az+3, 0, getTile(x+ax+3, y, z+az+3), 1, Level.getData(x+ax+3,y, z+az+3));
Level.destroyBlock(x+ax+3,y, z+az+3);



}
}
}
}
}

}



function attackHook(attacker,ent)
{
if( zyz==true )
{
if(Player.getCarriedItem()==32)
{  
            ex=Entity.getX(ent)
            ey=Entity.getY(ent)+1
            ez=Entity.getZ(ent)-1
            var eex=ex
            var eey=ey-3
            var eez=ez

                    Level.setTile(ex,ey,ez,12)
                    Level.setTile(ex+1,ey,ez,12)
                    Level.setTile(ex-1,ey,ez,12)
                    Level.setTile(ex,ey+1,ez,12)
                    Level.setTile(ex,ey-1,ez,12)
                    Level.setTile(ex,ey,ez+1,12)
                    Level.setTile(ex,ey,ez-1,12)
                    Level.setTile(ex,ey+1,ez-1,12)
                    Level.setTile(ex+1,ey+1,ez,12)
                    Level.setTile(ex,ey+1,ez,12)
                    Level.setTile(ex+1,ey+1,ez,12)
                    Level.setTile(ex-1,ey+1,ez,12)
                    Level.setTile(ex,ey+1,ez,12)
                    Level.setTile(ex,ey-1,ez,12)
                    Level.setTile(ex,ey+1,ez+1,12)
                    Level.setTile(ex,ey+1,ez-1,12)
                    Level.setTile(ex,ey+1,ez-1,12)
                    Level.setTile(ex+1,ey+1,ez,12)
                    
                    Level.setTile(ex,ey,ez,12)
                    Level.setTile(ex,ey+1,ez,12)
                    Level.setTile(ex,ey,ez,12)
                    Level.setTile(ex+1,ey+1,ez+1,12)
                    Level.setTile(ex-1,ey-1,ez+1,12)
                    Level.setTile(ex+1,ey,ez+1,12)
                    Level.setTile(ex+1,ey,ez-1,12)
                    Level.setTile(ex,ey+1,ez-1,12)
                    Level.setTile(ex+1,ey+1,ez,12)
                    
                    Level.setTile(ex,ey,ez,12)
                    Level.setTile(ex,ey+1,ez,12)
                    Level.setTile(ex,ey,ez,12)
                    Level.setTile(ex+1,ey+1,ez-1,12)
                    Level.setTile(ex-1,ey+1,ez-1,12)
                    Level.setTile(ex-1,ey,ez+1,12)
                    Level.setTile(ex-1,ey,ez-1,12)
                    Level.setTile(ex,ey+1,ez-1,12)
                    Level.setTile(ex+1,ey+1,ez,12)
                    
                    Level.setTile(ex,ey+2,ez+1,12)
                    Level.setTile(ex,ey+2,ez-1,12)
                    Level.setTile(ex,ey,ez,12)
                    Level.setTile(ex,ey+2,ez,12)
                    Level.setTile(ex+1,ey+2,ez,12)
                    Level.setTile(ex-1,ey+2,ez,12)
                    Level.setTile(ex+1,ey+1,ez+1,12)
                    Level.setTile(ex-1,ey-1,ez+1,12)
                    Level.setTile(ex+1,ey,ez+1,12)
                    Level.setTile(ex+1,ey,ez-1,12)
                    Level.setTile(ex,ey+1,ez-1,12)
                    Level.setTile(ex+1,ey+1,ez,12)
                    
                    Level.setTile(ex-1,ey+1,ez,12)
                    Level.setTile(ex-1,ey+2,ez,12)
                    Level.setTile(ex-1,ey,ez,12)
                    Level.setTile(ex,ey+2,ez-1,12)
                    Level.setTile(ex,ey,ez,12)




Level.setTile(eex,eey,eez,12)
                    Level.setTile(eex+1,eey,eez,12)
                    Level.setTile(eex-1,eey,eez,12)
                    Level.setTile(eex,eey+1,eez,12)
                    Level.setTile(eex,eey-1,eez,12)
                    Level.setTile(eex,eey,eez+1,12)
                    Level.setTile(eex,eey,eez-1,12)
                    Level.setTile(eex,eey+1,eez-1,12)
                    Level.setTile(eex+1,eey+1,eez,12)
                    Level.setTile(eex,eey+1,eez,12)
                    Level.setTile(eex+1,eey+1,eez,12)
                    Level.setTile(eex-1,eey+1,eez,12)
                    Level.setTile(eex,eey+1,eez,12)
                    Level.setTile(eex,eey-1,eez,12)
                    Level.setTile(eex,eey+1,eez+1,12)
                    Level.setTile(eex,eey+1,eez-1,12)
                    Level.setTile(eex,eey+1,eez-1,12)
                    Level.setTile(eex+1,eey+1,eez,12)
                    
                    Level.setTile(eex,eey,eez,12)
                    Level.setTile(eex,eey+1,eez,12)
                    Level.setTile(eex,eey,eez,12)
                    Level.setTile(eex+1,eey+1,eez+1,12)
                    Level.setTile(eex-1,eey-1,eez+1,12)
                    Level.setTile(eex+1,eey,eez+1,12)
                    Level.setTile(eex+1,eey,eez-1,12)
                    Level.setTile(eex,eey+1,eez-1,12)
                    Level.setTile(eex+1,eey+1,eez,12)
                    
                    Level.setTile(eex,eey,eez,12)
                    Level.setTile(eex,eey+1,eez,12)
                    Level.setTile(eex,eey,eez,12)
                    Level.setTile(eex+1,eey+1,eez-1,12)
                    Level.setTile(eex-1,eey+1,eez-1,12)
                    Level.setTile(eex-1,eey,eez+1,12)
                    Level.setTile(eex-1,eey,eez-1,12)
                    Level.setTile(eex,eey+1,eez-1,12)
                    Level.setTile(eex+1,eey+1,eez,12)
                    
                    Level.setTile(eex,eey+2,eez+1,12)
                    Level.setTile(eex,eey+2,eez-1,12)
                    Level.setTile(eex,eey,eez,12)
                    Level.setTile(eex,eey+2,eez,12)
                    Level.setTile(eex+1,eey+2,eez,12)
                    Level.setTile(eex-1,eey+2,eez,12)
                    Level.setTile(eex+1,eey+1,eez+1,12)
                    Level.setTile(eex-1,eey-1,eez+1,12)
                    Level.setTile(eex+1,eey,eez+1,12)
                    Level.setTile(eex+1,eey,eez-1,12)
                    Level.setTile(eex,eey+1,eez-1,12)
                    Level.setTile(eex+1,eey+1,eez,12)
                    
                    Level.setTile(eex-1,eey+1,eez,12)
                    Level.setTile(eex-1,eey+2,eez,12)
                    Level.setTile(eex-1,eey,eez,12)
                    Level.setTile(eex,eey+2,eez-1,12)
                    Level.setTile(eex,eey,eez,12)
}
if(Player.getCarriedItem()==106)
{
var ex=Entity.getX(ent)-1
var ey=Entity.getY(ent);
var ez=Entity.getZ(ent);
setTile(ex,ey,ez-1,30)
setTile(ex-1,ey,ez-1,30)
setTile(ex+1,ey,ez-1,30)
setTile(ex,ey,ez,30)



}
if(Player.getCarriedItem()==258)
{
var X=-Math.sin(getYaw()/ 180 * Math.PI);
var Z=Math.cos(getYaw() / 180 * Math.PI);
setVelX(ent,X*Math.floor((Math.random()*5)))
setVelZ(ent,Z*Math.floor((Math.random()*5)));
}


if(Player.getCarriedItem()==329)
{
Entity.rideAnimal(ent,attacker);
}
var wjkj1=Player.getArmorSlot(0);
var wjkj2=Player.getArmorSlot(1);
var wjkj3=Player.getArmorSlot(2);
var wjkj4=Player.getArmorSlot(3);
if(wjkj1==306&&wjkj2==311&&wjkj3==312&&wjkj4==313&&Player.getCarriedItem()==348&&Entity.getHealth(ent)<=26)
{
Entity.setHealth(ent,Entity.getHealth(ent)+3);
}

if(Player.getCarriedItem()==276)
{
var ex=Entity.getX(ent);
var ey=Entity.getY(ent);
var ez=Entity.getZ(ent);
explode(ex,ey+1,ez,0.8)
Entity.setFireTicks(ent,1);
}
if(getCarriedItem()==288 )
     {
         var ex=Entity.getX(ent);
         var ey=Entity.getY(ent);
         var ez=Entity.getZ(ent);
         Entity.setPosition(ent,ex,ey+15,ez);
         preventDefault();
         setVelY(ent,3);
     }
var wjkj1=Player.getArmorSlot(0);
var wjkj2=Player.getArmorSlot(1);
var wjkj3=Player.getArmorSlot(2);
var wjkj4=Player.getArmorSlot(3);
if(wjkj1==302&&wjkj2==307&&wjkj3==304&&wjkj4==317&&Player.getCarriedItem()==293&&Entity.getHealth(attacker)<=40)
{
Entity.setHealth(attacker,Entity.getHealth(attacker)+1);
}
}
if(attacker==getPlayerEnt())
{
if(getCarriedItem()==283)
{
Player.setHealth(Entity.getHealth(getPlayerEnt())+5);
Entity.setFireTicks(ent,1);

var ex=Entity.getX(ent);
var ey=Entity.getY(ent);
var ez=Entity.getZ(ent);
Level.explode(ex,ey,ez,0.2);

}
else
if(getCarriedItem()==352)
{
kdc=ent
rideAnimal(getPlayerEnt(),ent)
qq=1
}
}


}




function useItem(x,y,z,itemId,blockId,side,itemDamage,blockDamage)
{
if(dcc==true&&Level.getGameMode()==1)
{
preventDefault();
Level.destroyBlock(x,y,z);

}

if(fyx==true&&itemId==325&&itemDamage==10)
{
preventDefault();
}

if(fyx==true&&itemId==259)
{
preventDefault();

}
if( zyz==true )
{
if(itemId==0&&blockId==86)
{
if(getTile(x,y-1,z)==173)
{
Level.dropItem(x+0.5,y+0.1,z+0.5,2,302,64)
Level.dropItem(x+0.5,y+0.1,z+0.5,2,311,64)
Level.dropItem(x+0.5,y+0.1,z+0.5,2,316,64)
Level.dropItem(x+0.5,y+0.1,z+0.5,2,301,64)
Level.dropItem(x+0.5,y+0.1,z+0.5,2,263,1)
Level.dropItem(x+0.5,y+0.1,z+0.5,2,360,20)
Level.dropItem(x+0.5,y+0.1,z+0.5,2,285,64)
Level.dropItem(x+0.5,y+0.1,z+0.5,2,268,64)
}
else
if(getTile(x,y-1,z)==155)
{
Level.dropItem(x+0.5,y+0.1,z+0.5,2,306,1)
Level.dropItem(x+0.5,y+0.1,z+0.5,2,311,1)
Level.dropItem(x+0.5,y+0.1,z+0.5,2,316,1)
Level.dropItem(x+0.5,y+0.1,z+0.5,2,301,1)
Level.dropItem(x+0.5,y+0.1,z+0.5,2,406,1)
Level.dropItem(x+0.5,y+0.1,z+0.5,2,360,20)
Level.dropItem(x+0.5,y+0.1,z+0.5,2,257,64)
Level.dropItem(x+0.5,y+0.1,z+0.5,2,256,64)
}
else
if(getTile(x,y-1,z)==87)
{
Level.dropItem(x+0.5,y+0.1,z+0.5,2,302,64)
Level.dropItem(x+0.5,y+0.1,z+0.5,2,307,64)
Level.dropItem(x+0.5,y+0.1,z+0.5,2,304,64)
Level.dropItem(x+0.5,y+0.1,z+0.5,2,317,64)
Level.dropItem(x+0.5,y+0.1,z+0.5,2,293,64)
Level.dropItem(x+0.5,y+0.1,z+0.5,2,360,10)
Level.dropItem(x+0.5,y+0.1,z+0.5,2,326,1)
Level.dropItem(x+0.5,y+0.1,z+0.5,2,30,30)
}
else
if(getTile(x,y-1,z)==22)
{
Level.dropItem(x+0.5,y+0.1,z+0.5,2,302,64)
Level.dropItem(x+0.5,y+0.1,z+0.5,2,299,64)
Level.dropItem(x+0.5,y+0.1,z+0.5,2,300,64)
Level.dropItem(x+0.5,y+0.1,z+0.5,2,313,64)
Level.dropItem(x+0.5,y+0.1,z+0.5,2,289,3)
Level.dropItem(x+0.5,y+0.1,z+0.5,2,332,16)
Level.dropItem(x+0.5,y+0.1,z+0.5,2,260,15)
Level.dropItem(x+0.5,y+0.1,z+0.5,2,49,30)
}
else
if(getTile(x,y-1,z)==42)
{
Level.dropItem(x+0.5,y+0.1,z+0.5,2,306,64)
Level.dropItem(x+0.5,y+0.1,z+0.5,2,307,64)
Level.dropItem(x+0.5,y+0.1,z+0.5,2,308,64)
Level.dropItem(x+0.5,y+0.1,z+0.5,2,309,64)
Level.dropItem(x+0.5,y+0.1,z+0.5,2,267,64)
Level.dropItem(x+0.5,y+0.1,z+0.5,2,260,20)
Level.dropItem(x+0.5,y+0.1,z+0.5,2,324,64)
Level.dropItem(x+0.5,y+0.1,z+0.5,2,313,64)
}
else
if(getTile(x,y-1,z)==57)
{
Level.dropItem(x+0.5,y+0.1,z+0.5,2,302,64)
Level.dropItem(x+0.5,y+0.1,z+0.5,2,299,64)
Level.dropItem(x+0.5,y+0.1,z+0.5,2,300,64)
Level.dropItem(x+0.5,y+0.1,z+0.5,2,309,64)
Level.dropItem(x+0.5,y+0.1,z+0.5,2,276,1)
Level.dropItem(x+0.5,y+0.1,z+0.5,2,287,1)
Level.dropItem(x+0.5,y+0.1,z+0.5,2,12,1)
Level.dropItem(x+0.5,y+0.1,z+0.5,2,360,20)
}

else
if(getTile(x,y-1,z)==46)
{
Level.dropItem(x+0.5,y+0.1,z+0.5,2,299,64)
Level.dropItem(x+0.5,y+0.1,z+0.5,2,306,64)
Level.dropItem(x+0.5,y+0.1,z+0.5,2,308,64)
Level.dropItem(x+0.5,y+0.1,z+0.5,2,309,64)
Level.dropItem(x+0.5,y+0.1,z+0.5,2,337,1)
Level.dropItem(x+0.5,y+0.1,z+0.5,2,332,460)
Level.dropItem(x+0.5,y+0.1,z+0.5,2,2,300)
Level.dropItem(x+0.5,y+0.1,z+0.5,2,360,25)
}
else
if(getTile(x,y-1,z)==41)
{
Level.dropItem(x+0.5,y+0.1,z+0.5,2,314,64)
Level.dropItem(x+0.5,y+0.1,z+0.5,2,299,64)
Level.dropItem(x+0.5,y+0.1,z+0.5,2,300,64)
Level.dropItem(x+0.5,y+0.1,z+0.5,2,301,64)
Level.dropItem(x+0.5,y+0.1,z+0.5,2,261,64)
Level.dropItem(x+0.5,y+0.1,z+0.5,2,262,300)
Level.dropItem(x+0.5,y+0.1,z+0.5,2,324,64)
Level.dropItem(x+0.5,y+0.1,z+0.5,2,260,25)
}
else
if(getTile(x,y-1,z)==170)
{
Level.dropItem(x+0.5,y+0.1,z+0.5,2,306,64)
Level.dropItem(x+0.5,y+0.1,z+0.5,2,311,64)
Level.dropItem(x+0.5,y+0.1,z+0.5,2,312,64)
Level.dropItem(x+0.5,y+0.1,z+0.5,2,313,64)
Level.dropItem(x+0.5,y+0.1,z+0.5,2,329,1)
Level.dropItem(x+0.5,y+0.1,z+0.5,2,352,1)
Level.dropItem(x+0.5,y+0.1,z+0.5,2,348,1)
Level.dropItem(x+0.5,y+0.1,z+0.5,2,341,1)
Level.dropItem(x+0.5,y+0.1,z+0.5,2,278,1)
Level.dropItem(x+0.5,y+0.1,z+0.5,2,354,25)
Level.dropItem(x+0.5,y+0.1,z+0.5,2,326,1)
Level.dropItem(x+0.5,y+0.1,z+0.5,2,287,1)
}
else
if(getTile(x,y-1,z)==47)
{
Level.dropItem(x+0.5,y+0.1,z+0.5,2,302,64)
Level.dropItem(x+0.5,y+0.1,z+0.5,2,315,64)
Level.dropItem(x+0.5,y+0.1,z+0.5,2,304,64)
Level.dropItem(x+0.5,y+0.1,z+0.5,2,305,64)
Level.dropItem(x+0.5,y+0.1,z+0.5,2,344,200)
Level.dropItem(x+0.5,y+0.1,z+0.5,2,332,200)
Level.dropItem(x+0.5,y+0.1,z+0.5,2,360,20)
Level.dropItem(x+0.5,y+0.1,z+0.5,2,326,1)
}
else
if(getTile(x,y-1,z)==30)
{
Level.dropItem(x+0.5,y+0.1,z+0.5,2,302,64)
Level.dropItem(x+0.5,y+0.1,z+0.5,2,307,64)
Level.dropItem(x+0.5,y+0.1,z+0.5,2,304,64)
Level.dropItem(x+0.5,y+0.1,z+0.5,2,305,64)
Level.dropItem(x+0.5,y+0.1,z+0.5,2,341,1)
Level.dropItem(x+0.5,y+0.1,z+0.5,2,258,1)
Level.dropItem(x+0.5,y+0.1,z+0.5,2,326,1)
Level.dropItem(x+0.5,y+0.1,z+0.5,2,260,20)
}
else
if(getTile(x,y-1,z)==133)
{
Level.dropItem(x+0.5,y+0.1,z+0.5,2,302,64)
Level.dropItem(x+0.5,y+0.1,z+0.5,2,315,64)
Level.dropItem(x+0.5,y+0.1,z+0.5,2,316,64)
Level.dropItem(x+0.5,y+0.1,z+0.5,2,313,64)
Level.dropItem(x+0.5,y+0.1,z+0.5,2,388,1)
Level.dropItem(x+0.5,y+0.1,z+0.5,2,278,1)
Level.dropItem(x+0.5,y+0.1,z+0.5,2,360,1)
Level.dropItem(x+0.5,y+0.1,z+0.5,2,326,1)
}
else
if(getTile(x,y-1,z)==247)
{
Level.dropItem(x+0.5,y+0.1,z+0.5,2,310,64)
Level.dropItem(x+0.5,y+0.1,z+0.5,2,307,64)
Level.dropItem(x+0.5,y+0.1,z+0.5,2,300,64)
Level.dropItem(x+0.5,y+0.1,z+0.5,2,309,64)
Level.dropItem(x+0.5,y+0.1,z+0.5,2,264,1)
Level.dropItem(x+0.5,y+0.1,z+0.5,2,265,1)
Level.dropItem(x+0.5,y+0.1,z+0.5,2,287,1)
Level.dropItem(x+0.5,y+0.1,z+0.5,2,357,20)
}
else
if(getTile(x,y-1,z)==17)
{
Level.dropItem(x+0.5,y+0.1,z+0.5,2,314,64)
Level.dropItem(x+0.5,y+0.1,z+0.5,2,299,64)
Level.dropItem(x+0.5,y+0.1,z+0.5,2,380,64)
Level.dropItem(x+0.5,y+0.1,z+0.5,2,313,64)
Level.dropItem(x+0.5,y+0.1,z+0.5,2,32,120)
Level.dropItem(x+0.5,y+0.1,z+0.5,2,300,64)
Level.dropItem(x+0.5,y+0.1,z+0.5,2,106,1)
Level.dropItem(x+0.5,y+0.1,z+0.5,2,326,1)
Level.dropItem(x+0.5,y+0.1,z+0.5,2,326,1)
Level.dropItem(x+0.5,y+0.1,z+0.5,2,326,1)
}
else
if(getTile(x,y-1,z)==35)
{
Level.dropItem(x+0.5,y+0.1,z+0.5,2,314,64)
Level.dropItem(x+0.5,y+0.1,z+0.5,2,303,64)
Level.dropItem(x+0.5,y+0.1,z+0.5,2,312,64)
Level.dropItem(x+0.5,y+0.1,z+0.5,2,301,64)
Level.dropItem(x+0.5,y+0.1,z+0.5,2,288,1)
Level.dropItem(x+0.5,y+0.1,z+0.5,2,287,1)
Level.dropItem(x+0.5,y+0.1,z+0.5,2,291,1)//
Level.dropItem(x+0.5,y+0.1,z+0.5,2,360,28)
}

else
if(getTile(x,y-1,z)==49)
{
Level.dropItem(x+0.5,y+0.1,z+0.5,2,310,64)
Level.dropItem(x+0.5,y+0.1,z+0.5,2,311,64)
Level.dropItem(x+0.5,y+0.1,z+0.5,2,312,64)
Level.dropItem(x+0.5,y+0.1,z+0.5,2,313,64)
Level.dropItem(x+0.5,y+0.1,z+0.5,2,281,1)
Level.dropItem(x+0.5,y+0.1,z+0.5,2,297,15)
Level.dropItem(x+0.5,y+0.1,z+0.5,2,274,64)
Level.dropItem(x+0.5,y+0.1,z+0.5,2,258,64)
}
else
if(getTile(x,y-1,z)==19)
{
Level.dropItem(x+0.5,y+0.1,z+0.5,2,306,64)
Level.dropItem(x+0.5,y+0.1,z+0.5,2,311,64)
Level.dropItem(x+0.5,y+0.1,z+0.5,2,304,64)
Level.dropItem(x+0.5,y+0.1,z+0.5,2,313,64)
Level.dropItem(x+0.5,y+0.1,z+0.5,2,392,10)
Level.dropItem(x+0.5,y+0.1,z+0.5,2,297,15)
Level.dropItem(x+0.5,y+0.1,z+0.5,2,64,64)
Level.dropItem(x+0.5,y+0.1,z+0.5,2,113,64)
Level.dropItem(x+0.5,y+0.1,z+0.5,2,38,64)
Level.dropItem(x+0.5,y+0.1,z+0.5,2,323,64)
Level.dropItem(x+0.5,y+0.1,z+0.5,2,71,64)
Level.dropItem(x+0.5,y+0.1,z+0.5,2,111,64)
Level.dropItem(x+0.5,y+0.1,z+0.5,2,31,64,128)
Level.dropItem(x+0.5,y+0.1,z+0.5,2,52,64)
Level.dropItem(x+0.5,y+0.1,z+0.5,2,6,64)
Level.dropItem(x+0.5,y+0.1,z+0.5,2,81,64)
Level.dropItem(x+0.5,y+0.1,z+0.5,2,12,64)

}
else
if(getTile(x,y-1,z)==44)
{
Level.dropItem(x+0.5,y+0.1,z+0.5,2,298,64)
Level.dropItem(x+0.5,y+0.1,z+0.5,2,303,64)
Level.dropItem(x+0.5,y+0.1,z+0.5,2,304,64)
Level.dropItem(x+0.5,y+0.1,z+0.5,2,313,64)
Level.dropItem(x+0.5,y+0.1,z+0.5,2,332,120)
Level.dropItem(x+0.5,y+0.1,z+0.5,2,360,10)
}
}
if(itemId==406&&Level.getBrightness(x,y+1,z)>=8)
{
for(var bl=3;bl<=30;bl++){
for(var bi=3;bi<=30;bi++){
var px=getPlayerX();
var py=getPlayerY();
var pz=getPlayerZ();
var ge=getPlayerEnt()
var a=(getYaw()%360)*Math.PI/180
var b=getPitch()*Math.PI/180
var xv,yv,zv
xv=-Math.sin(a)*Math.cos(b)
yv=-Math.sin(b)
zv=Math.cos(a)*Math.cos(b)
Level.setTile(getPlayerX()+xv*bl+1,getPlayerY()-1+yv*bl,getPlayerZ()+zv*bl+1,51)
Level.setTile(getPlayerX()+xv*bl,getPlayerY()-1+yv*bl,getPlayerZ()+zv*bl,51)
Level.setTile(getPlayerX()+xv*bl-1,getPlayerY()-1+yv*bl,getPlayerZ()+zv*bl-1,51)

Level.setTile(getPlayerX()+xv*bl+2,getPlayerY()-1+yv*bl,getPlayerZ()+zv*bl+1,51)
Level.setTile(getPlayerX()+xv*bl-2,getPlayerY()-1+yv*bl,getPlayerZ()+zv*bl-1,51)
Level.setTile(getPlayerX()+xv*bl+3,getPlayerY()-1+yv*bl,getPlayerZ()+zv*bl+1,51)
Level.setTile(getPlayerX()+xv*bl-3,getPlayerY()-1+yv*bl,getPlayerZ()+zv*bl-1,51)

}}
Level.setTile(getPlayerX(),getPlayerY()-1,getPlayerZ(),8,6)
Level.setTile(getPlayerX()+1,getPlayerY()-1,getPlayerZ(),8,6)
Level.setTile(getPlayerX()-1,getPlayerY()-1,getPlayerZ(),8,6)
Level.setTile(getPlayerX(),getPlayerY()-1,getPlayerZ()+1,8,6)
Level.setTile(getPlayerX(),getPlayerY()-1,getPlayerZ()-1,8,6)

}

if(itemId==263&&Level.getBrightness(x,y+1,z)<=9)
{
var px=getPlayerX();
var py=getPlayerY();
var pz=getPlayerZ();
var ge=getPlayerEnt()
var a=(getYaw()%360)*Math.PI/180
var b=getPitch()*Math.PI/180
var xv,yv,zv
xv=-Math.sin(a)*Math.cos(b)
yv=-Math.sin(b)
zv=Math.cos(a)*Math.cos(b)
Level.explode(getPlayerX()+xv*2,getPlayerY()+1+yv*2,getPlayerZ()+zv*2,2.5)
Level.explode(getPlayerX()+xv*6,getPlayerY()+1+yv*6,getPlayerZ()+zv*6,2.5)
Level.explode(getPlayerX()+xv*10,getPlayerY()+1+yv*10,getPlayerZ()+zv*10,2.5)
Level.explode(getPlayerX()+xv*14,getPlayerY()+1+yv*14,getPlayerZ()+zv*14,2.5)
Level.explode(getPlayerX()+xv*18,getPlayerY()+1+yv*18,getPlayerZ()+zv*18,2.5)
Level.explode(getPlayerX()+xv*22,getPlayerY()+1+yv*22,getPlayerZ()+zv*22,2.5)
Level.explode(getPlayerX()+xv*26,getPlayerY()+1+yv*26,getPlayerZ()+zv*26,2.5)

}


if(itemId==392)
{
var ge=getPlayerEnt()
var a=(getYaw()%360)*Math.PI/180
var b=getPitch()*Math.PI/180
var xv,yv,zv
xv=-Math.sin(a)*Math.cos(b)
yv=-Math.sin(b)
zv=Math.cos(a)*Math.cos(b)
Level.explode(getPlayerX()+xv+1,getPlayerY()+yv,getPlayerZ()+zv*-1.5,2)
setVelX(ge,xv*1.6)
setVelY(ge,+0.6)
setVelZ(ge,zv*1.6)
}

if(itemId==287)
{
setVelY(Player.getEntity(),+0.8)
}
if(itemId==289)
{
var px=getPlayerX();
var py=getPlayerY();
var pz=getPlayerZ();

explode(px,py,pz,6)
Entity.setFireTicks(getPlayerEnt(),25);
}
if(itemId==267)
{
var px=getPlayerX();
var py=getPlayerY();
var pz=getPlayerZ();
var ge=getPlayerEnt()
for(var bl=1;bl<=6;bl++){
for(var bi=1;bi<=6;bi++){
var a=(getYaw()%360)*Math.PI/180
var b=getPitch()*Math.PI/180
var xv,yv,zv
xv=-Math.sin(a)*Math.cos(b)
yv=-Math.sin(b)
zv=Math.cos(a)*Math.cos(b)
Level.explode(getPlayerX()+xv*bl,getPlayerY()+yv*bl,getPlayerZ()+zv*bl,1)
}}
}
if(itemId==276)
{
Level.explode(x,y+2.4,z,1)
}

if(itemId==264)
{
var px=getPlayerX();
var py=getPlayerY();
var pz=getPlayerZ();
var ge=getPlayerEnt()
var jlzx=Math.floor((Math.random()*100));
for(var bl=3;bl<=25;bl++){
for(var bi=3;bi<=25;bi++){
var a=(getYaw()%360)*Math.PI/180
var b=getPitch()*Math.PI/180
var xv,yv,zv
var xv=-Math.sin(a)*Math.cos(b)
var yv=-Math.sin(b)
var zv=Math.cos(a)*Math.cos(b)
if(jlzx<=70){
Level.setTile(getPlayerX()+xv*bl,getPlayerY()+yv*bl,getPlayerZ()+zv*bl,10,7)
}
if(jlzx<=90&&jlzx>=70){
Level.setTile(getPlayerX()+xv*bl,getPlayerY()+yv*bl,getPlayerZ()+zv*bl,9,7)
}
if(jlzx<=100&&jlzx>=90){
Level.explode(getPlayerX()+xv*bl,getPlayerY()+yv*bl,getPlayerZ()+zv*bl,1)
}

}}}
if(itemId==337)
{
var px=getPlayerX();
var py=getPlayerY();
var pz=getPlayerZ();
var ge=getPlayerEnt()
Level.explode(px,py+1,pz,3)
}

if(itemId==278)
{
Level.destroyBlock(x,y,z,true);

}
if(itemId==341)
{
var px=getPlayerX();
var py=getPlayerY();
var pz=getPlayerZ();
var ge=getPlayerEnt()
Entity.setPosition(ge,x,y+3,z);
}
if(itemId==388)
{
sjid= Math.floor((Math.random() * 247));
Level.setTile(x,y+1,z,sjid)
}
if(itemId==258)
{
plsy=1
var ge=getPlayerEnt()
}
}
if(pfz==true)
{
if(zyfz==0)
{
preventDefault();
Level.setTile(x,y+2,z,86)
Level.setTile(x,y+1,z,173)
preventDefault();
zyfz=1
}
else
if(zyfz==1)
{
preventDefault();
Level.setTile(x,y+2,z,86) 
Level.setTile(x,y+1,z,155)
preventDefault();
zyfz=2
}
else
if(zyfz==2)
{
preventDefault();
Level.setTile(x,y+2,z,86) 
Level.setTile(x,y+1,z,87)
preventDefault();
zyfz=3
}
else
if(zyfz==3)
{
preventDefault();
Level.setTile(x,y+2,z,86)  
Level.setTile(x,y+1,z,49)
preventDefault();
zyfz=4
}
else
if(zyfz==4)
{
preventDefault();
Level.setTile(x,y+2,z,86)
Level.setTile(x,y+1,z,42)
zyfz=5
}
else
if(zyfz==5)
{
preventDefault();
Level.setTile(x,y+2,z,86)
Level.setTile(x,y+1,z,57)
zyfz=6
}
else
if(zyfz==6)
{
preventDefault();
Level.setTile(x,y+2,z,86)
Level.setTile(x,y+1,z,46)
zyfz=7
}
else
if(zyfz==7)
{
preventDefault();
Level.setTile(x,y+2,z,86)
Level.setTile(x,y+1,z,41)
zyfz=8
}
else
if(zyfz==8)
{
preventDefault();
Level.setTile(x,y+2,z,86)
Level.setTile(x,y+1,z,170)
zyfz=9
}
else
if(zyfz==9)
{
preventDefault();
Level.setTile(x,y+2,z,86)
Level.setTile(x,y+1,z,47)
zyfz=10
}
else
if(zyfz==10)
{
preventDefault();
Level.setTile(x,y+2,z,86)
Level.setTile(x,y+1,z,30)
zyfz=11
}
else
if(zyfz==11)
{
preventDefault();
Level.setTile(x,y+2,z,86)
Level.setTile(x,y+1,z,133)
zyfz=12
}
else
if(zyfz==12)
{
preventDefault();
Level.setTile(x,y+2,z,86)
Level.setTile(x,y+1,z,247)
zyfz=13
}
else
if(zyfz==13)
{
preventDefault();
Level.setTile(x,y+2,z,86)
Level.setTile(x,y+1,z,17)
zyfz=14
}
else
if(zyfz==14)
{
preventDefault();
Level.setTile(x,y+2,z,86)
Level.setTile(x,y+1,z,35)
zyfz=15
}
else
if(zyfz==15)
{
preventDefault();
Level.setTile(x,y+2,z,86)
Level.setTile(x,y+1,z,22)
zyfz=16
}
else
if(zyfz==16)
{
preventDefault();
Level.setTile(x,y+2,z,86)
Level.setTile(x,y+1,z,19)
zyfz=17
}
else
if(zyfz==17)
{
preventDefault();
Level.setTile(x,y+2,z,86)
Level.setTile(x,y+1,z,44,14)
zyfz=0
pfz=false

}
}
if(itemId==351&&blockId==6&&Player.getCarriedItemData()!=15 )
{
var tsz
tsz=Player.getCarriedItemData()
if(tsz==0)
{
var tszz=15
}
else
if(tsz==1)
{
var tszz=14
}
else
if(tsz==2)
{
var tszz=13
}
else
if(tsz==3)
{
var tszz=12
}
else
if(tsz==4)
{
var tszz=11
}
else
if(tsz==5)
{
var tszz=10
}
else
if(tsz==6)
{
var tszz=9
}
else
if(tsz==7)
{
var tszz=8
}
else
if(tsz==8)
{
var tszz=7
}
else
if(tsz==9)
{
var tszz=6
}
else
if(tsz==10)
{
var tszz=5
}
else
if(tsz==11)
{
var tszz=4
}
else
if(tsz==12)
{
var tszz=3
}
else
if(tsz==13)
{
var tszz=2
}
else
if(tsz==14)
{
var tszz=1
}
else
if(tsz==15)
{
var tszz=0
}
Level.setTile(x,0,z,35,tszz);
}
if(itemId==351&&blockId==6&&Player.getCarriedItemData()==15)
{
ranss=1
tx=x
ty=y
tz=z

}
if(itemId==38)
{
var a=(getYaw()%360)*Math.PI/180
var b=getPitch()*Math.PI/180
var xv,yv,zv
xv=-Math.sin(a)*Math.cos(b)
yv=-Math.sin(b)
zv=Math.cos(a)*Math.cos(b)
Level.addParticle(14,getPlayerX()+xv*1.5,getPlayerY()+yv*1.5,getPlayerZ()+zv*1.5,0,0,0,3)
Level.addParticle(14,getPlayerX()+xv*1,getPlayerY()+yv*1.5,getPlayerZ()+zv*1.5,0,0,0,2)
Level.addParticle(14,getPlayerX()+xv*1.5,getPlayerY()+yv*1,getPlayerZ()+zv*1.5,0,0,0,2)
Level.addParticle(14,getPlayerX()+xv*1.3,getPlayerY()+yv*1.5,getPlayerZ()+zv*1,0,0,0,2)
Level.addParticle(14,getPlayerX()+xv*1.7,getPlayerY()+yv*1.5,getPlayerZ()+zv*1.5,0,0,0,1)
Level.addParticle(14,getPlayerX()+xv*1.5,getPlayerY()+yv*1,getPlayerZ()+zv*1.5,0,0,0,1)
Level.addParticle(14,getPlayerX()+xv*1.4,getPlayerY()+yv*1.5,getPlayerZ()+zv*1.5,0,0,0,2)
Level.addParticle(14,getPlayerX()+xv*1.5,getPlayerY()+yv*1.7,getPlayerZ()+zv*1.5,0,0,0,3)
Level.addParticle(14,getPlayerX()+xv*1.5,getPlayerY()+yv*1.9,getPlayerZ()+zv*1.5,0,0,0,3)
Level.addParticle(14,getPlayerX()+xv*3,getPlayerY()+yv*3,getPlayerZ()+zv*3,5,5,5,5)
}
if(itemId==392)
{
var a=(getYaw()%360)*Math.PI/180
var b=getPitch()*Math.PI/180
var xv,yv,zv
xv=-Math.sin(a)*Math.cos(b)
yv=-Math.sin(b)
zv=Math.cos(a)*Math.cos(b)
Level.addParticle(4,getPlayerX()+xv*-1,getPlayerY()-0.7,getPlayerZ()+zv*-1,0,0,0,20)
Level.addParticle(4,getPlayerX()+xv*-1,getPlayerY()-0.7,getPlayerZ()+zv*-1,0,0,0,20)
}
if(getTile(x,y+1,z)==247&&blockId==85)
{
if(getTile(x,y-1,z)!=8)
{
Level.setTile(x,y-1,z,8)
}
else
if(getTile(x,y-1,z)==8)
{
Level.setTile(x,y-1,z,0)
}
}

if(blockId==20)
{
if(getTile(x,y-1,z)==89&&getTile(x,y-1,z)!=19)
{
Level.setTile(x,y-1,z,19)
}
else
if(getTile(x,y-1,z)==19&&getTile(x,y-1,z)!=89)
{
Level.setTile(x,y-1,z,89)
}
}

if(getTile(x,y,z)==53&& getTile(x,y-1,z)==53)
{
kdc=Level.spawnMob(x+0.5,y+0.4,z+0.5,80);
Entity.rideAnimal(getPlayerEnt(),kdc);
}

if(getTile(x,y,z)==134&& getTile(x,y-1,z)==134)
{
kdc=Level.spawnMob(x+0.5,y+0.4,z+0.5,80);
Entity.rideAnimal(getPlayerEnt(),kdc);
}

if(getTile(x,y,z)==135&& getTile(x,y-1,z)==135)
{
kdc=Level.spawnMob(x+0.5,y+0.4,z+0.5,80);
Entity.rideAnimal(getPlayerEnt(),kdc);
}

if(getTile(x,y,z)==136&& getTile(x,y-1,z)==136)
{
kdc=Level.spawnMob(x+0.5,y+0.4,z+0.5,80);
Entity.rideAnimal(getPlayerEnt(),kdc);
}

if(getTile(x,y,z)==156&& getTile(x,y-1,z)==156)
{
kdc=Level.spawnMob(x+0.5,y+0.4,z+0.5,80);
Entity.rideAnimal(getPlayerEnt(),kdc);
}

if(getTile(x,y,z)==128&& getTile(x,y-1,z)==128)
{
kdc=Level.spawnMob(x+0.5,y+0.4,z+0.5,80);
Entity.rideAnimal(getPlayerEnt(),kdc);
}

if(getTile(x,y,z)==114&& getTile(x,y-1,z)==114)
{
kdc=Level.spawnMob(x+0.5,y+0.4,z+0.5,80);
Entity.rideAnimal(getPlayerEnt(),kdc);
}

if(getTile(x,y,z)==109&& getTile(x,y-1,z)==109)
{
kdc=Level.spawnMob(x+0.5,y+0.4,z+0.5,80);
Entity.rideAnimal(getPlayerEnt(),kdc);
}

if(getTile(x,y,z)==108&& getTile(x,y-1,z)==108)
{
kdc=Level.spawnMob(x+0.5,y+0.4,z+0.5,80);
Entity.rideAnimal(getPlayerEnt(),kdc);
}

if(getTile(x,y,z)==67&& getTile(x,y-1,z)==67)
{
kdc=Level.spawnMob(x+0.5,y+0.4,z+0.5,80);
Entity.rideAnimal(getPlayerEnt(),kdc);
}
if(itemId==340)
{
if(blockId==5)
{
Level.setTile(x,y,z,47)
var pg,po
pg=Player.getSelectedSlotId();
po=Player.getCarriedItemCount();
po--
addItemInventory(340,po)
Player.clearInventorySlot(pg)
}
}

if(blockId==47)
{
Level.setTile(x,y,z,5)
var a=(getYaw()%360)*Math.PI/180
var b=getPitch()*Math.PI/180
var xv,yv,zv
xv=-Math.sin(a)*Math.cos(b)
yv=-Math.sin(b)
zv=Math.cos(a)*Math.cos(b)
Level.dropItem(x+xv*-0.7,y,z+zv*-0.7,+0.5,340,1)
}
if(itemId==331)
{
if(blockId==89)
{
Level.setTile(x,y,z,19)
}
else
if(blockId==19)
{
Level.setTile(x,y,z,89)
}
else
if(blockId==85)
{
Level.setTile(x,y,z,50)
}
else
if(blockId==50)
{
Level.setTile(x,y,z,85)
}
else
if(blockId==86)
{
Level.setTile(x,y,z,91)
}
else
if(blockId==91)
{
Level.setTile(x,y,z,86)
}



} 

if(itemId==325&&blockId==38&&Player.getCarriedItemData()==8)
{
var a=(getYaw()%360)*Math.PI/180
var b=getPitch()*Math.PI/180
var xv,yv,zv
xv=-Math.sin(a)*Math.cos(b)
yv=-Math.sin(b)
zv=Math.cos(a)*Math.cos(b)
Level.addParticle(14,x+0.5,y+0.5,z+0.5,0,0,0,2)
Level.addParticle(14,x+0.5,y+0.4,z+0.5,0,0,0,2)
Level.addParticle(14,x+0.6,y+0.5,z+0.5,0,0,0,2)
Level.addParticle(14,x+0.4,y+0.4,z+0.5,0,0,0,2)
Level.addParticle(14,x+0.5,y+0.5,z+0.6,0,0,0,2)
Level.addParticle(14,x+0.5,y+0.4,z+0.4,0,0,0,2)

var teshushuju=Level.getData(x,y,z);
Level.dropItem(x+xv*-0.7,y,z+zv*-0.7,+0.5,38,1,teshushuju)
var aa=new java.lang.Thread(
new java.lang.Runnable({
run: function(){
while(1){
if(getTile(x+1,y,z)==8||getTile(x+1,y,z)==9)
{
Level.setTile(x+1,y,z,0)
}
else
if(getTile(x-1,y,z)==8||getTile(x-1,y,z)==9)
{
Level.setTile(x-1,y,z,0)
}
else
if(getTile(x,y+1,z)==8||getTile(x,y+1,z)==9)
{
Level.setTile(x,y+1,z,0)
}
else
if(getTile(x,y-1,z)==8||getTile(x,y-1,z)==9)
{
Level.setTile(x,y-1,z,0)
}
else
if(getTile(x,y,z+1)==8||getTile(x,y,z+1)==9)
{
Level.setTile(x,y,z+1,0)
}
else
if(getTile(x,y,z-1)==8||getTile(x,y,z-1)==9)
{
Level.setTile(x,y,z-1,0)
}
aa.sleep(20)
}}}))
aa.start()
}
if(getTile(x,y,z)==92)
{
var teshushuju=Level.getData(x,y,z);
if(teshushuju<=5){
Level.setTile(x,y,z,92,teshushuju+1)
Player.setHealth(Entity.getHealth(getPlayerEnt())+4);
}
else
if(teshushuju==6)
{
Level.setTile(x,y,z,0)
Player.setHealth(Entity.getHealth(getPlayerEnt())+4);
}
}
if(blockId==61)
{
var cx=x
var cy=y
var cz=z
var aa1=new java.lang.Thread(
new java.lang.Runnable({
run: function(){
while(1){
if(getTile(cx,cy,cz)==62){
Level.addParticle(4,x+0.5,y+1.3,z+0.5,0,0,0,20)
Level.addParticle(4,x+0.5,y+1.3,z+0.5,0,0,0,20)
Level.addParticle(4,x+0.5,y+1.3,z+0.5,0,0,0,20)
Level.addParticle(4,x+0.5,y+1.3,z+0.5,0,0,0,20)
Level.addParticle(4,x+0.5,y+1.3,z+0.5,0,0,0,20)
}
aa1.sleep(150)
}}}))
aa1.start()


}
if(blockId==62)
{
var cx=x
var cy=y
var cz=z
var aa1=new java.lang.Thread(
new java.lang.Runnable({
run: function(){
while(1){
if(getTile(cx,cy,cz)==62){
Level.addParticle(4,x+0.5,y+1.3,z+0.5,0,0,0,20)
Level.addParticle(4,x+0.5,y+1.3,z+0.5,0,0,0,20)
Level.addParticle(4,x+0.5,y+1.3,z+0.5,0,0,0,20)
Level.addParticle(4,x+0.5,y+1.3,z+0.5,0,0,0,20)
Level.addParticle(4,x+0.5,y+1.3,z+0.5,0,0,0,20)
}
aa1.sleep(150)
}}}))
aa1.start()


}
if(itemId==351&&blockId==6&&Player.getCarriedItemData()==15)
{
var hhq=getTile(x,y-2,z)
var kwid=getTile(x,y-2,z)
if(hhq==14||hhq==15||hhq==16||hhq==21||hhq==56||hhq==73||hhq==74||hhq==129||hhq==89||hhq==91)
{
Level.setTile(x + 0,y + 3,z + -3,kwid,0);
Level.setTile(x + -2,y + 3,z + 2,kwid,0);
Level.setTile(x + 2,y + 3,z + -1,kwid,0);
Level.setTile(x + -1,y + 5,z + 1,18,12);
Level.setTile(x + -1,y + 5,z + 0,1,0);
Level.setTile(x + 1,y + 5,z + -1,0,0);
Level.setTile(x + 1,y + 5,z + -1,18,12);
Level.setTile(x + 2,y + 6,z + -1,0,0);
Level.setTile(x + 2,y + 6,z + -1,18,12);
Level.setTile(x + -1,y + 7,z + -3,0,0);
Level.setTile(x + -1,y + 7,z + -3,0,0);
Level.setTile(x + -1,y + 7,z + -3,18,12);
Level.setTile(x + -1,y + 6,z + 0,0,0);
Level.setTile(x + -1,y + 6,z + 0,18,12);
Level.setTile(x + -2,y + 7,z + 0,0,0);
Level.setTile(x + -2,y + 7,z + 0,0,0);
Level.setTile(x + -2,y + 7,z + 0,18,12);
Level.setTile(x + -4,y + 6,z + 0,0,0);
Level.setTile(x + -4,y + 6,z + 0,18,12);
Level.setTile(x + -3,y + 6,z + 0,18,12);
Level.setTile(x + -3,y + 7,z + 1,18,12);
Level.setTile(x + 0,y + 6,z + 0,0,0);
Level.setTile(x + 0,y + 6,z + 0,17,0);
Level.setTile(x + 1,y + 6,z + 0,0,0);
Level.setTile(x + 1,y + 6,z + 0,0,0);
Level.setTile(x + 1,y + 6,z + 0,0,0);
Level.setTile(x + 1,y + 6,z + 0,0,0);
Level.setTile(x + 1,y + 6,z + 0,0,0);
Level.setTile(x + 1,y + 6,z + 0,18,12);
Level.setTile(x + -1,y + 6,z + 1,0,0);
Level.setTile(x + -1,y + 6,z + 1,0,0);
Level.setTile(x + -1,y + 6,z + 1,0,0);
Level.setTile(x + -1,y + 6,z + 1,18,12);
Level.setTile(x + -1,y + 7,z + 1,0,0);
Level.setTile(x + -1,y + 7,z + 1,0,0);
Level.setTile(x + -1,y + 7,z + 1,0,0);
Level.setTile(x + -1,y + 7,z + 1,0,0);
Level.setTile(x + -1,y + 7,z + 1,0,0);
Level.setTile(x + -1,y + 7,z + 1,18,12);
Level.setTile(x + 2,y + 7,z + 0,0,0);
Level.setTile(x + 2,y + 7,z + 0,0,0);
Level.setTile(x + 2,y + 7,z + 0,18,12);
Level.setTile(x + 0,y + 7,z + 3,0,0);
Level.setTile(x + 0,y + 7,z + 3,18,12);
Level.setTile(x + 1,y + 7,z + 3,18,12);
Level.setTile(x + 1,y + 7,z + 2,17,0);
Level.setTile(x + 2,y + 7,z + 2,0,0);
Level.setTile(x + 2,y + 7,z + 2,18,12);
Level.setTile(x + 1,y + 6,z + 1,0,0);
Level.setTile(x + 1,y + 6,z + 1,18,12);
Level.setTile(x + 2,y + 7,z + 1,18,12);
Level.setTile(x + 3,y + 6,z + 1,18,12);
Level.setTile(x + 3,y + 7,z + 1,0,0);
Level.setTile(x + 3,y + 7,z + 1,0,0);
Level.setTile(x + 3,y + 7,z + 1,0,0);
Level.setTile(x + 3,y + 7,z + 1,18,12);
Level.setTile(x + 3,y + 7,z + 0,0,0);
Level.setTile(x + 3,y + 7,z + 0,18,12);
Level.setTile(x + 1,y + 6,z + -1,0,0);
Level.setTile(x + 1,y + 6,z + -1,18,12);
Level.setTile(x + 1,y + 7,z + -2,18,12);
Level.setTile(x + -1,y + 6,z + -1,18,12);
Level.setTile(x + 0,y + 6,z + -1,0,0);
Level.setTile(x + 0,y + 6,z + -1,18,12);
Level.setTile(x + 0,y + 6,z + -3,0,0);
Level.setTile(x + 0,y + 6,z + -3,0,0);
Level.setTile(x + 0,y + 6,z + -3,18,12);
Level.setTile(x + 1,y + 7,z + 0,18,12);
Level.setTile(x + 1,y + 7,z + -1,0,0);
Level.setTile(x + 1,y + 7,z + -1,0,0);
Level.setTile(x + 1,y + 7,z + -1,18,12);
Level.setTile(x + 1,y + 8,z + 2,0,0);
Level.setTile(x + 1,y + 8,z + 2,18,12);
Level.setTile(x + 0,y + 7,z + 1,0,0);
Level.setTile(x + 0,y + 7,z + 1,0,0);
Level.setTile(x + 0,y + 7,z + 1,0,0);
Level.setTile(x + 0,y + 7,z + 1,18,12);
Level.setTile(x + -2,y + 7,z + -2,0,0);
Level.setTile(x + -2,y + 7,z + -2,0,0);
Level.setTile(x + -2,y + 7,z + -2,0,0);
Level.setTile(x + -2,y + 7,z + -2,0,0);
Level.setTile(x + -2,y + 7,z + -2,0,0);
Level.setTile(x + -2,y + 7,z + -2,0,0);
Level.setTile(x + -2,y + 7,z + -2,18,12);
Level.setTile(x + -1,y + 7,z + -2,0,0);
Level.setTile(x + -1,y + 7,z + -2,18,12);
Level.setTile(x + -2,y + 7,z + -1,18,12);
Level.setTile(x + 0,y + 7,z + -3,0,0);
Level.setTile(x + 0,y + 7,z + -3,0,0);
Level.setTile(x + 0,y + 7,z + -3,18,12);
Level.setTile(x + 2,y + 6,z + -2,18,12);
Level.setTile(x + 2,y + 7,z + -1,18,12);
Level.setTile(x + 1,y + 7,z + 1,18,12);
Level.setTile(x + 0,y + 9,z + 1,18,12);
Level.setTile(x + 0,y + 7,z + 2,18,12);
Level.setTile(x + -1,y + 6,z + 3,18,12);
Level.setTile(x + -1,y + 7,z + 3,18,12);
Level.setTile(x + -3,y + 6,z + 2,18,12);
Level.setTile(x + -1,y + 7,z + 2,18,12);
Level.setTile(x + -2,y + 7,z + 2,18,12);
Level.setTile(x + -2,y + 7,z + 1,18,12);
Level.setTile(x + -1,y + 8,z + 2,18,12);
Level.setTile(x + -1,y + 9,z + 1,18,12);
Level.setTile(x + -2,y + 8,z + 0,18,12);
Level.setTile(x + -3,y + 7,z + 0,18,12);
Level.setTile(x + -2,y + 8,z + -1,0,0);
Level.setTile(x + -2,y + 8,z + -1,0,0);
Level.setTile(x + -2,y + 8,z + -1,18,12);
Level.setTile(x + -1,y + 7,z + -1,0,0);
Level.setTile(x + -1,y + 7,z + -1,0,0);
Level.setTile(x + -1,y + 7,z + -1,18,12);
Level.setTile(x + 0,y + 8,z + 2,18,12);
Level.setTile(x + 1,y + 8,z + 0,0,0);
Level.setTile(x + 1,y + 8,z + 0,0,0);
Level.setTile(x + 1,y + 8,z + 0,18,12);
Level.setTile(x + 0,y + 7,z + -1,18,12);
Level.setTile(x + 0,y + 7,z + -2,0,0);
Level.setTile(x + 0,y + 7,z + -2,0,0);
Level.setTile(x + 0,y + 7,z + -2,18,12);
Level.setTile(x + 0,y + 7,z + 0,17,0);
Level.setTile(x + 0,y + 8,z + -2,0,0);
Level.setTile(x + 0,y + 8,z + -2,0,0);
Level.setTile(x + 0,y + 8,z + -2,0,0);
Level.setTile(x + 0,y + 8,z + -2,0,0);
Level.setTile(x + 0,y + 8,z + -2,0,0);
Level.setTile(x + 0,y + 8,z + -2,0,0);
Level.setTile(x + 0,y + 8,z + -2,0,0);
Level.setTile(x + 0,y + 8,z + -2,18,12);
Level.setTile(x + 1,y + 8,z + -1,0,0);
Level.setTile(x + 1,y + 8,z + -1,0,0);
Level.setTile(x + 1,y + 8,z + -1,18,12);
Level.setTile(x + 0,y + 8,z + -1,0,0);
Level.setTile(x + 0,y + 8,z + -1,0,0);
Level.setTile(x + 0,y + 8,z + -1,0,0);
Level.setTile(x + 0,y + 8,z + -1,0,0);
Level.setTile(x + 0,y + 8,z + -1,18,12);
Level.setTile(x + -1,y + 7,z + 0,0,0);
Level.setTile(x + -1,y + 7,z + 0,0,0);
Level.setTile(x + -1,y + 7,z + 0,18,12);
Level.setTile(x + -1,y + 8,z + -2,0,0);
Level.setTile(x + -1,y + 8,z + -2,0,0);
Level.setTile(x + -1,y + 8,z + -2,18,12);
Level.setTile(x + -1,y + 8,z + -1,18,12);
Level.setTile(x + -1,y + 8,z + 0,0,0);
Level.setTile(x + -1,y + 8,z + 0,18,12);
Level.setTile(x + 0,y + 8,z + 1,18,12);
Level.setTile(x + 0,y + 8,z + 0,17,0);
Level.setTile(x + 0,y + 9,z + 0,0,0);
Level.setTile(x + 0,y + 9,z + 0,18,12);
Level.setTile(x + -1,y + 9,z + 0,0,0);
Level.setTile(x + -1,y + 9,z + 0,18,12);
Level.setTile(x + -1,y + 8,z + 1,18,12);
Level.setTile(x + -2,y + 8,z + 1,18,12);
Level.setTile(x + 1,y + 8,z + 3,0,0);
Level.setTile(x + 1,y + 8,z + 3,18,12);
Level.setTile(x + 1,y + 8,z + 1,0,0);
Level.setTile(x + 1,y + 8,z + 1,0,0);
Level.setTile(x + 1,y + 8,z + 1,18,12);
Level.setTile(x + 2,y + 8,z + 1,0,0);
Level.setTile(x + 2,y + 8,z + 1,0,0);
Level.setTile(x + 2,y + 8,z + 1,18,12);
Level.setTile(x + 0,y + 5,z + 0,0,0);
Level.setTile(x + 0,y + 5,z + 0,0,0);
Level.setTile(x + 0,y + 5,z + 0,17,0);
Level.setTile(x + 1,y + 4,z + 1,0,0);
Level.setTile(x + 1,y + 4,z + 1,0,0);
Level.setTile(x + 1,y + 4,z + 1,18,12);
Level.setTile(x + 0,y + 3,z + 0,0,0);
Level.setTile(x + 0,y + 3,z + 0,1,5);
Level.setTile(x + 2,y + 6,z + 3,0,0);
Level.setTile(x + 2,y + 6,z + 3,0,0);
Level.setTile(x + 2,y + 6,z + 3,18,12);
Level.setTile(x + 2,y + 6,z + 0,0,0);
Level.setTile(x + 2,y + 6,z + 0,18,12);
Level.setTile(x + 1,y + 6,z + -2,0,0);
Level.setTile(x + 1,y + 6,z + -2,18,12);
Level.setTile(x + 1,y + 6,z + -3,18,12);
Level.setTile(x + 0,y + 4,z + 0,0,0);
Level.setTile(x + 0,y + 4,z + 0,1,0);
Level.setTile(x + 0,y + 5,z + -1,17,8);
Level.setTile(x + 0,y + 4,z + -1,1,0);
Level.setTile(x + 1,y + 5,z + 0,0,0);
Level.setTile(x + 1,y + 5,z + 0,0,0);
Level.setTile(x + 1,y + 5,z + 0,18,12);
Level.setTile(x + -1,y + 4,z + 0,0,0);
Level.setTile(x + -1,y + 4,z + 0,18,12);
Level.setTile(x + -2,y + 4,z + 0,0,0);
Level.setTile(x + -2,y + 4,z + 0,1,0);
Level.setTile(x + -4,y + 5,z + 0,0,0);
Level.setTile(x + -4,y + 5,z + 0,18,12);
Level.setTile(x + -4,y + 6,z + 1,18,12);
Level.setTile(x + -3,y + 6,z + 3,18,12);
Level.setTile(x + -1,y + 6,z + 2,0,0);
Level.setTile(x + -1,y + 6,z + 2,0,0);
Level.setTile(x + -1,y + 6,z + 2,18,12);
Level.setTile(x + 0,y + 6,z + 4,0,0);
Level.setTile(x + 0,y + 6,z + 4,0,0);
Level.setTile(x + 0,y + 6,z + 4,18,12);
Level.setTile(x + 1,y + 6,z + 3,18,12);
Level.setTile(x + 0,y + 6,z + 2,18,12);
Level.setTile(x + 1,y + 6,z + 2,18,12);
Level.setTile(x + 3,y + 6,z + 2,0,0);
Level.setTile(x + 3,y + 6,z + 2,18,12);
Level.setTile(x + 2,y + 5,z + 0,0,0);
Level.setTile(x + 2,y + 5,z + 0,18,12);
Level.setTile(x + 1,y + 4,z + 0,0,0);
Level.setTile(x + 1,y + 4,z + 0,18,12);
Level.setTile(x + 2,y + 4,z + 0,1,0);
Level.setTile(x + 2,y + 5,z + -2,0,0);
Level.setTile(x + 2,y + 5,z + -2,18,12);
Level.setTile(x + 0,y + 6,z + -2,18,12);
Level.setTile(x + -1,y + 6,z + -2,18,12);
Level.setTile(x + 0,y + 6,z + -4,18,12);
Level.setTile(x + -1,y + 6,z + -4,0,0);
Level.setTile(x + -1,y + 6,z + -4,18,12);
Level.setTile(x + -1,y + 6,z + -3,0,0);
Level.setTile(x + -1,y + 6,z + -3,18,12);
Level.setTile(x + -2,y + 6,z + -3,18,12);
Level.setTile(x + -2,y + 6,z + -1,0,0);
Level.setTile(x + -2,y + 6,z + -1,89,0);
Level.setTile(x + -3,y + 6,z + -2,18,12);
Level.setTile(x + -3,y + 6,z + -1,0,0);
Level.setTile(x + -3,y + 6,z + -1,18,12);
Level.setTile(x + -4,y + 5,z + -1,18,12);
Level.setTile(x + -3,y + 6,z + 1,0,0);
Level.setTile(x + -3,y + 6,z + 1,18,12);
Level.setTile(x + -2,y + 6,z + 3,18,12);
Level.setTile(x + -1,y + 5,z + 3,18,12);
Level.setTile(x + 1,y + 5,z + 1,0,0);
Level.setTile(x + 1,y + 5,z + 1,18,12);
Level.setTile(x + 2,y + 6,z + 2,0,0);
Level.setTile(x + 2,y + 6,z + 2,18,12);
Level.setTile(x + 2,y + 6,z + 1,18,12);
Level.setTile(x + 3,y + 6,z + 0,0,0);
Level.setTile(x + 3,y + 6,z + 0,18,12);
Level.setTile(x + 4,y + 6,z + 1,18,12);
Level.setTile(x + 2,y + 4,z + 1,0,0);
Level.setTile(x + 2,y + 4,z + 1,18,12);
Level.setTile(x + 3,y + 4,z + 0,18,12);
Level.setTile(x + 1,y + 4,z + -1,18,12);
Level.setTile(x + 2,y + 4,z + -1,18,12);
Level.setTile(x + 0,y + 5,z + -5,0,0);
Level.setTile(x + 0,y + 5,z + -5,18,12);
Level.setTile(x + -1,y + 5,z + -3,0,0);
Level.setTile(x + -1,y + 5,z + -3,18,12);
Level.setTile(x + -2,y + 6,z + -2,18,12);
Level.setTile(x + -2,y + 5,z + -2,18,12);
Level.setTile(x + -2,y + 6,z + 1,0,0);
Level.setTile(x + -2,y + 6,z + 1,18,12);
Level.setTile(x + -2,y + 6,z + 0,18,12);
Level.setTile(x + 0,y + 4,z + -2,18,12);
Level.setTile(x + -2,y + 5,z + 1,0,0);
Level.setTile(x + -2,y + 5,z + 1,18,12);
Level.setTile(x + -2,y + 6,z + 2,18,12);
Level.setTile(x + -2,y + 5,z + 2,89,0);
Level.setTile(x + 0,y + 6,z + 1,18,12);
Level.setTile(x + -1,y + 5,z + 2,18,12);
Level.setTile(x + -2,y + 4,z + 2,18,12);
Level.setTile(x + -1,y + 4,z + 1,18,12);
Level.setTile(x + 0,y + 4,z + 1,18,12);
Level.setTile(x + 0,y + 5,z + 1,0,0);
Level.setTile(x + 0,y + 5,z + 1,17,8);
Level.setTile(x + 0,y + 5,z + 2,1,0);
Level.setTile(x + 0,y + 5,z + 3,18,12);
Level.setTile(x + 0,y + 5,z + 4,18,12);
Level.setTile(x + 1,y + 5,z + 3,0,0);
Level.setTile(x + 1,y + 5,z + 3,18,12);
Level.setTile(x + 1,y + 5,z + 2,18,12);
Level.setTile(x + 4,y + 5,z + 2,18,12);
Level.setTile(x + 2,y + 5,z + 1,18,12);
Level.setTile(x + 2,y + 5,z + 2,18,12);
Level.setTile(x + 3,y + 5,z + -3,0,0);
Level.setTile(x + 3,y + 5,z + -3,18,12);
Level.setTile(x + 2,y + 5,z + -4,18,12);
Level.setTile(x + -1,y + 5,z + -4,0,0);
Level.setTile(x + -1,y + 5,z + -4,18,12);
Level.setTile(x + -1,y + 5,z + -5,18,12);
Level.setTile(x + -2,y + 5,z + -4,18,12);
Level.setTile(x + -2,y + 5,z + -3,18,12);
Level.setTile(x + -3,y + 5,z + -2,18,12);
Level.setTile(x + -3,y + 5,z + -3,18,12);
Level.setTile(x + -4,y + 5,z + -2,18,12);
Level.setTile(x + -2,y + 5,z + 0,18,12);
Level.setTile(x + -3,y + 5,z + -1,18,12);
Level.setTile(x + -3,y + 5,z + 0,18,12);
Level.setTile(x + -3,y + 5,z + 1,18,12);
Level.setTile(x + -3,y + 5,z + 2,0,0);
Level.setTile(x + -3,y + 5,z + 2,18,12);
Level.setTile(x + -5,y + 5,z + 0,18,12);
Level.setTile(x + -5,y + 5,z + 1,18,12);
Level.setTile(x + -4,y + 5,z + 1,18,12);
Level.setTile(x + -4,y + 5,z + 2,18,12);
Level.setTile(x + -3,y + 5,z + 3,18,12);
Level.setTile(x + -4,y + 5,z + 3,18,12);
Level.setTile(x + -2,y + 5,z + 3,18,12);
Level.setTile(x + -2,y + 5,z + 4,18,12);
Level.setTile(x + -1,y + 5,z + 4,0,0);
Level.setTile(x + -1,y + 5,z + 4,18,12);
Level.setTile(x + 0,y + 5,z + 5,18,12);
Level.setTile(x + 1,y + 5,z + 4,18,12);
Level.setTile(x + 1,y + 6,z + 4,18,12);
Level.setTile(x + 1,y + 5,z + 5,0,0);
Level.setTile(x + 1,y + 5,z + 5,18,12);
Level.setTile(x + 2,y + 5,z + 4,18,12);
Level.setTile(x + 2,y + 5,z + 3,18,12);
Level.setTile(x + 3,y + 5,z + 3,18,12);
Level.setTile(x + 3,y + 5,z + 2,18,12);
Level.setTile(x + 3,y + 5,z + 1,18,12);
Level.setTile(x + 4,y + 5,z + 1,18,12);
Level.setTile(x + 3,y + 5,z + 0,18,12);
Level.setTile(x + 4,y + 5,z + -1,18,12);
Level.setTile(x + 4,y + 5,z + 0,18,12);
Level.setTile(x + 2,y + 5,z + -1,89,0);
Level.setTile(x + 3,y + 5,z + -1,18,12);
Level.setTile(x + 3,y + 5,z + -2,18,12);
Level.setTile(x + 1,y + 5,z + -2,18,12);
Level.setTile(x + 0,y + 5,z + -3,89,0);
Level.setTile(x + 1,y + 5,z + -3,18,12);
Level.setTile(x + 1,y + 5,z + -4,18,12);
Level.setTile(x + 2,y + 5,z + -3,18,12);
Level.setTile(x + 0,y + 5,z + -4,0,0);
Level.setTile(x + 0,y + 5,z + -4,18,12);
Level.setTile(x + 0,y + 4,z + -3,18,12);
Level.setTile(x + 0,y + 5,z + -2,17,8);
Level.setTile(x + -1,y + 5,z + -2,18,12);
Level.setTile(x + -1,y + 5,z + -1,18,12);
Level.setTile(x + -2,y + 5,z + -1,18,12);
Level.setTile(x + -1,y + 3,z + 0,1,0);
Level.setTile(x + 0,y + 2,z + 0,1,5);
Level.setTile(x + 0,y + 1,z + 0,1,5);
Level.setTile(x + 0,y ,z + 0,1,5);
Level.setTile(x + 0,y -1,z + 0,17,0);
}

}
if(itemId==280&&blockId==49)
{
var sx1=0; //Missed semi-colon
var sy1=0; //Missed semi-colon
var sz1=0;
var sx2=0; //Missed semi-colon
var sy2=0; //Missed semi-colon
var sz2=0;
sx1=Math.floor((Math.random()*9));
sy1=Math.floor((Math.random()*4));
sz1=Math.floor((Math.random()*9));
sx2=Math.floor((Math.random()*9));
sy2=Math.floor((Math.random()*4));
sz2=Math.floor((Math.random()*9));
var sjid=Math.floor((Math.random()*247));
Level.setTile(x,y,z,sjid)
Level.setTile(x+sx1-sx2,y+sy1-sy2,z+sz1-sz2,49)
}




}



