(function(g){var window=this;'use strict';var lkb=function(a){g.X.call(this,{G:"div",S:"ytp-inline-preview-ui"});this.yg=!1;this.player=a;this.T(a,"onStateChange",this.MQ);this.T(a,"videodatachange",this.Yw);this.T(a,"onInlinePreviewModeChange",this.K5);this.Af=new g.Hq(this.uw,null,this);g.H(this,this.Af)},J6=function(a){g.WT.call(this,a);
this.j=new lkb(this.player);g.H(this,this.j);this.j.hide();g.XS(this.player,this.j.element,4);a.isInline()&&(this.load(),a=a.getRootNode(),g.Sq(a,["ytp-inline-preview-mode","ytp-no-contextmenu"]))};
g.x(lkb,g.X);g.k=lkb.prototype;
g.k.HN=function(){this.tooltip=new g.wW(this.player,this);g.H(this,this.tooltip);g.XS(this.player,this.tooltip.element,4);this.tooltip.scale=.6;this.Yc=new g.AU(this.player);g.H(this,this.Yc);this.zk=new g.X({G:"div",Na:["ytp-inline-preview-scrim"]});g.H(this,this.zk);this.zk.Ja(this.element);this.T(this.zk.element,"click",this.rI);this.Mj=new g.pW(this.player,this,300);g.H(this,this.Mj);this.Mj.Ja(this.zk.element);this.controls=new g.X({G:"div",S:"ytp-inline-preview-controls"});g.H(this,this.controls);
this.controls.Ja(this.element);var a=new g.HV(this.player,this,!1);g.H(this,a);a.Ja(this.controls.element);a=new g.nW(this.player,this);g.H(this,a);a.Ja(this.controls.element);this.Pc=new g.OV(this.player,this);g.H(this,this.Pc);g.XS(this.player,this.Pc.element,4);this.T(this.player,"appresize",this.Kb);this.T(this.player,"fullscreentoggled",this.Kb);this.Kb()};
g.k.show=function(){g.Iq(this.Af);this.yg||(this.HN(),this.yg=!0);0!==this.player.getPlayerState()&&g.X.prototype.show.call(this);this.Pc.show();this.player.Qa("onInlinePreviewUiReady")};
g.k.hide=function(){this.Af.stop();g.X.prototype.hide.call(this);this.player.isInline()||this.yg&&this.Pc.hide()};
g.k.xa=function(){g.X.prototype.xa.call(this)};
g.k.rI=function(a){a.target===this.zk.element&&this.player.Qa("onExpandInlinePreview",a)};
g.k.K5=function(){g.Vq(this.player.getRootNode(),"ytp-inline-preview-mode",this.player.isInline())};
g.k.cf=function(){this.Pc.Bc();this.Mj.Bc()};
g.k.uw=function(){this.cf();g.Iq(this.Af)};
g.k.Kb=function(){g.$V(this.Pc,0,this.player.qb().getPlayerSize().width,!1);g.PV(this.Pc)};
g.k.MQ=function(a){this.player.isInline()&&(0===a?this.hide():this.show())};
g.k.Yw=function(a,b){if(this.player.isInline()){g.Vq(this.player.getRootNode(),"ytp-show-inline-preview-audio-controls",b.tB);var c,d,e;a=!(null==(e=null==(c=b.getPlayerResponse())?void 0:null==(d=c.playerConfig)?void 0:d.inlinePlaybackConfig)||!e.showScrubbingControls);g.Vq(this.player.getRootNode(),"ytp-hide-inline-preview-progress-bar",!a)}};
g.k.Hc=function(){return this.tooltip};
g.k.Mg=function(){return!1};
g.k.kh=function(){return!1};
g.k.qm=function(){return!1};
g.k.qJ=function(){};
g.k.rq=function(){};
g.k.Vy=function(){};
g.k.hn=function(){return null};
g.k.PG=function(){return null};
g.k.XM=function(){return new g.xe(0,0)};
g.k.Tk=function(){return new g.Qn(0,0,0,0)};
g.k.handleGlobalKeyDown=function(){return!1};
g.k.handleGlobalKeyUp=function(){return!1};
g.k.Dw=function(a,b,c,d,e){var f=d=0,h=0,l=g.so(a);if(b){c=g.Qq(b,"ytp-mute-button");var m=g.Qq(b,"ytp-subtitles-button"),n=g.qo(b,this.element);b=g.so(b);d=n.y+40;if(m||c)h=n.x-l.width+b.width}else h=c-l.width/2,f=35;b=this.player.qb().getPlayerSize().width;h=g.pe(h,0,b-l.width);d?(a.style.top=d+(e||0)+"px",a.style.bottom=""):(a.style.top="",a.style.bottom=f+"px");a.style.left=h+"px"};
g.k.showControls=function(){};
g.k.Rp=function(){};
g.k.fm=function(){return!1};
g.k.OE=function(){};
g.k.AA=function(){};
g.k.Lr=function(){};
g.k.Kr=function(){};
g.k.uy=function(){};
g.k.Qs=function(){};
g.k.yE=function(){};g.x(J6,g.WT);J6.prototype.ul=function(){return!1};
J6.prototype.load=function(){this.player.hideControls();this.j.show()};
J6.prototype.unload=function(){this.player.showControls();this.j.hide()};g.VT("inline_preview",J6);})(_yt_player);
