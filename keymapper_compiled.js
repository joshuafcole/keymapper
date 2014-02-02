if(!lt.util.load.provided_QMARK_('lt.plugins.keymapper')) {
goog.provide('lt.plugins.keymapper');
goog.require('cljs.core');
goog.require('crate.binding');
goog.require('lt.util.dom');
goog.require('lt.objs.tabs');
goog.require('lt.util.dom');
goog.require('lt.objs.command');
goog.require('crate.binding');
goog.require('lt.objs.keyboard');
goog.require('lt.object');
goog.require('lt.object');
goog.require('lt.objs.tabs');
goog.require('lt.objs.command');
goog.require('lt.objs.keyboard');
lt.plugins.keymapper.keymap_item = (function keymap_item(this$,item){var e__8099__auto__ = crate.core.html.call(null,(function (){var keys = cljs.core.first.call(null,item);var cmds = cljs.core.second.call(null,item);return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",1013907695),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1116631654),cljs.core.map.call(null,((function (keys,cmds){
return (function (key){return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1017440956),key," "], null);
});})(keys,cmds))
,keys.split(/\s/))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1017440956),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",1108647146),"command"], null),cljs.core.map.call(null,((function (keys,cmds){
return (function (cmd){return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1017440956),cljs.core.print_str.call(null,cmd)," "], null);
});})(keys,cmds))
,cmds)], null)], null);
})());var seq__8189_8229 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,cljs.core.PersistentVector.EMPTY));var chunk__8190_8230 = null;var count__8191_8231 = 0;var i__8192_8232 = 0;while(true){
if((i__8192_8232 < count__8191_8231))
{var vec__8193_8233 = cljs.core._nth.call(null,chunk__8190_8230,i__8192_8232);var ev__8100__auto___8234 = cljs.core.nth.call(null,vec__8193_8233,0,null);var func__8101__auto___8235 = cljs.core.nth.call(null,vec__8193_8233,1,null);lt.util.dom.on.call(null,e__8099__auto__,ev__8100__auto___8234,func__8101__auto___8235);
{
var G__8236 = seq__8189_8229;
var G__8237 = chunk__8190_8230;
var G__8238 = count__8191_8231;
var G__8239 = (i__8192_8232 + 1);
seq__8189_8229 = G__8236;
chunk__8190_8230 = G__8237;
count__8191_8231 = G__8238;
i__8192_8232 = G__8239;
continue;
}
} else
{var temp__4092__auto___8240 = cljs.core.seq.call(null,seq__8189_8229);if(temp__4092__auto___8240)
{var seq__8189_8241__$1 = temp__4092__auto___8240;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8189_8241__$1))
{var c__7485__auto___8242 = cljs.core.chunk_first.call(null,seq__8189_8241__$1);{
var G__8243 = cljs.core.chunk_rest.call(null,seq__8189_8241__$1);
var G__8244 = c__7485__auto___8242;
var G__8245 = cljs.core.count.call(null,c__7485__auto___8242);
var G__8246 = 0;
seq__8189_8229 = G__8243;
chunk__8190_8230 = G__8244;
count__8191_8231 = G__8245;
i__8192_8232 = G__8246;
continue;
}
} else
{var vec__8194_8247 = cljs.core.first.call(null,seq__8189_8241__$1);var ev__8100__auto___8248 = cljs.core.nth.call(null,vec__8194_8247,0,null);var func__8101__auto___8249 = cljs.core.nth.call(null,vec__8194_8247,1,null);lt.util.dom.on.call(null,e__8099__auto__,ev__8100__auto___8248,func__8101__auto___8249);
{
var G__8250 = cljs.core.next.call(null,seq__8189_8241__$1);
var G__8251 = null;
var G__8252 = 0;
var G__8253 = 0;
seq__8189_8229 = G__8250;
chunk__8190_8230 = G__8251;
count__8191_8231 = G__8252;
i__8192_8232 = G__8253;
continue;
}
}
} else
{}
}
break;
}
return e__8099__auto__;
});
lt.plugins.keymapper.keymap_list = (function keymap_list(this$,keys){var e__8099__auto__ = crate.core.html.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul.keymapper-list","ul.keymapper-list",1997992084),cljs.core.map.call(null,cljs.core.partial.call(null,lt.plugins.keymapper.keymap_item,this$),keys)], null));var seq__8201_8254 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,cljs.core.PersistentVector.EMPTY));var chunk__8202_8255 = null;var count__8203_8256 = 0;var i__8204_8257 = 0;while(true){
if((i__8204_8257 < count__8203_8256))
{var vec__8205_8258 = cljs.core._nth.call(null,chunk__8202_8255,i__8204_8257);var ev__8100__auto___8259 = cljs.core.nth.call(null,vec__8205_8258,0,null);var func__8101__auto___8260 = cljs.core.nth.call(null,vec__8205_8258,1,null);lt.util.dom.on.call(null,e__8099__auto__,ev__8100__auto___8259,func__8101__auto___8260);
{
var G__8261 = seq__8201_8254;
var G__8262 = chunk__8202_8255;
var G__8263 = count__8203_8256;
var G__8264 = (i__8204_8257 + 1);
seq__8201_8254 = G__8261;
chunk__8202_8255 = G__8262;
count__8203_8256 = G__8263;
i__8204_8257 = G__8264;
continue;
}
} else
{var temp__4092__auto___8265 = cljs.core.seq.call(null,seq__8201_8254);if(temp__4092__auto___8265)
{var seq__8201_8266__$1 = temp__4092__auto___8265;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8201_8266__$1))
{var c__7485__auto___8267 = cljs.core.chunk_first.call(null,seq__8201_8266__$1);{
var G__8268 = cljs.core.chunk_rest.call(null,seq__8201_8266__$1);
var G__8269 = c__7485__auto___8267;
var G__8270 = cljs.core.count.call(null,c__7485__auto___8267);
var G__8271 = 0;
seq__8201_8254 = G__8268;
chunk__8202_8255 = G__8269;
count__8203_8256 = G__8270;
i__8204_8257 = G__8271;
continue;
}
} else
{var vec__8206_8272 = cljs.core.first.call(null,seq__8201_8266__$1);var ev__8100__auto___8273 = cljs.core.nth.call(null,vec__8206_8272,0,null);var func__8101__auto___8274 = cljs.core.nth.call(null,vec__8206_8272,1,null);lt.util.dom.on.call(null,e__8099__auto__,ev__8100__auto___8273,func__8101__auto___8274);
{
var G__8275 = cljs.core.next.call(null,seq__8201_8266__$1);
var G__8276 = null;
var G__8277 = 0;
var G__8278 = 0;
seq__8201_8254 = G__8275;
chunk__8202_8255 = G__8276;
count__8203_8256 = G__8277;
i__8204_8257 = G__8278;
continue;
}
}
} else
{}
}
break;
}
return e__8099__auto__;
});
lt.plugins.keymapper.keymap_panel = (function keymap_panel(this$){var e__8099__auto__ = crate.core.html.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1014003715),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",1013907597),"keymapper"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",1013907515),"Keymapper"], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul.keymapper-list","ul.keymapper-list",1997992084)], null)], null));var seq__8213_8279 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,cljs.core.PersistentVector.EMPTY));var chunk__8214_8280 = null;var count__8215_8281 = 0;var i__8216_8282 = 0;while(true){
if((i__8216_8282 < count__8215_8281))
{var vec__8217_8283 = cljs.core._nth.call(null,chunk__8214_8280,i__8216_8282);var ev__8100__auto___8284 = cljs.core.nth.call(null,vec__8217_8283,0,null);var func__8101__auto___8285 = cljs.core.nth.call(null,vec__8217_8283,1,null);lt.util.dom.on.call(null,e__8099__auto__,ev__8100__auto___8284,func__8101__auto___8285);
{
var G__8286 = seq__8213_8279;
var G__8287 = chunk__8214_8280;
var G__8288 = count__8215_8281;
var G__8289 = (i__8216_8282 + 1);
seq__8213_8279 = G__8286;
chunk__8214_8280 = G__8287;
count__8215_8281 = G__8288;
i__8216_8282 = G__8289;
continue;
}
} else
{var temp__4092__auto___8290 = cljs.core.seq.call(null,seq__8213_8279);if(temp__4092__auto___8290)
{var seq__8213_8291__$1 = temp__4092__auto___8290;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8213_8291__$1))
{var c__7485__auto___8292 = cljs.core.chunk_first.call(null,seq__8213_8291__$1);{
var G__8293 = cljs.core.chunk_rest.call(null,seq__8213_8291__$1);
var G__8294 = c__7485__auto___8292;
var G__8295 = cljs.core.count.call(null,c__7485__auto___8292);
var G__8296 = 0;
seq__8213_8279 = G__8293;
chunk__8214_8280 = G__8294;
count__8215_8281 = G__8295;
i__8216_8282 = G__8296;
continue;
}
} else
{var vec__8218_8297 = cljs.core.first.call(null,seq__8213_8291__$1);var ev__8100__auto___8298 = cljs.core.nth.call(null,vec__8218_8297,0,null);var func__8101__auto___8299 = cljs.core.nth.call(null,vec__8218_8297,1,null);lt.util.dom.on.call(null,e__8099__auto__,ev__8100__auto___8298,func__8101__auto___8299);
{
var G__8300 = cljs.core.next.call(null,seq__8213_8291__$1);
var G__8301 = null;
var G__8302 = 0;
var G__8303 = 0;
seq__8213_8279 = G__8300;
chunk__8214_8280 = G__8301;
count__8215_8281 = G__8302;
i__8216_8282 = G__8303;
continue;
}
}
} else
{}
}
break;
}
return e__8099__auto__;
});
lt.object.object_STAR_.call(null,new cljs.core.Keyword("lt.plugins.keymapper","keymapper","lt.plugins.keymapper/keymapper",4351246049),new cljs.core.Keyword(null,"tags","tags",1017456523),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"keymapper","keymapper",4047359186)], null),new cljs.core.Keyword(null,"name","name",1017277949),"keymapper",new cljs.core.Keyword(null,"init","init",1017141378),(function (this$){return lt.plugins.keymapper.keymap_panel.call(null,this$);
}));
lt.plugins.keymapper.__BEH__update_BANG_ = (function __BEH__update_BANG_(this$,keys){return lt.util.dom.replace_with.call(null,lt.util.dom.$.call(null,new cljs.core.Keyword(null,".keymapper-list",".keymapper-list",1877663755),lt.object.__GT_content.call(null,this$)),lt.plugins.keymapper.keymap_list.call(null,this$,keys));
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.keymapper","update!","lt.plugins.keymapper/update!",1176679401),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.keymapper.__BEH__update_BANG_,new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"update!","update!",779473898),null], null), null),new cljs.core.Keyword(null,"debounce","debounce",1556599227),200);
lt.plugins.keymapper.__BEH__unwatch = (function __BEH__unwatch(this$){return cljs.core.remove_watch.call(null,lt.objs.keyboard.key_map,new cljs.core.Keyword("lt.plugins.keymapper","keymapper","lt.plugins.keymapper/keymapper",4351246049));
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.keymapper","unwatch","lt.plugins.keymapper/unwatch",1212195599),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.keymapper.__BEH__unwatch,new cljs.core.Keyword(null,"desc","desc",1016984067),"Keymapper: Stop listening for key changes",new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("lt.plugins.keymapper","unwatch","lt.plugins.keymapper/unwatch",1212195599),null], null), null));
lt.plugins.keymapper.__BEH__watch = (function __BEH__watch(this$){cljs.core.add_watch.call(null,lt.objs.keyboard.key_map,new cljs.core.Keyword("lt.plugins.keymapper","keymapper","lt.plugins.keymapper/keymapper",4351246049),(function (_,___$1,___$2,cur){return lt.object.raise.call(null,this$,new cljs.core.Keyword(null,"update!","update!",779473898),cur);
}));
return lt.object.raise.call(null,this$,new cljs.core.Keyword(null,"update!","update!",779473898),cljs.core.deref.call(null,lt.objs.keyboard.key_map));
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.keymapper","watch","lt.plugins.keymapper/watch",829347864),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.keymapper.__BEH__watch,new cljs.core.Keyword(null,"desc","desc",1016984067),"Keymapper: Listen for key changes",new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("lt.plugins.keymapper","watch","lt.plugins.keymapper/watch",829347864),null], null), null));
lt.plugins.keymapper.__BEH__on_close_destroy = (function __BEH__on_close_destroy(this$){var temp__4092__auto___8304 = new cljs.core.Keyword("lt.objs.tabs","tabset","lt.objs.tabs/tabset",3378091779).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,this$));if(cljs.core.truth_(temp__4092__auto___8304))
{var ts_8305 = temp__4092__auto___8304;if(cljs.core._EQ_.call(null,cljs.core.count.call(null,new cljs.core.Keyword(null,"objs","objs",1017308622).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,ts_8305))),1))
{lt.objs.tabs.rem_tabset.call(null,ts_8305);
} else
{}
} else
{}
lt.object.raise.call(null,this$,new cljs.core.Keyword("lt.plugins.keymapper","unwatch","lt.plugins.keymapper/unwatch",1212195599));
return lt.objs.tabs.rem_BANG_.call(null,this$);
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.keymapper","on-close-destroy","lt.plugins.keymapper/on-close-destroy",859396912),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.keymapper.__BEH__on_close_destroy,new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"close","close",1108660586),null], null), null));
lt.plugins.keymapper.keymapper = lt.object.create.call(null,new cljs.core.Keyword("lt.plugins.keymapper","keymapper","lt.plugins.keymapper/keymapper",4351246049));
lt.objs.command.command.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"command","command",1964298941),new cljs.core.Keyword(null,"keymapper.show","keymapper.show",1250888253),new cljs.core.Keyword(null,"desc","desc",1016984067),"Keymapper: Show Keymap",new cljs.core.Keyword(null,"exec","exec",1017031683),(function (){lt.object.raise.call(null,lt.plugins.keymapper.keymapper,new cljs.core.Keyword("lt.plugins.keymapper","watch","lt.plugins.keymapper/watch",829347864));
return lt.objs.tabs.add_or_focus_BANG_.call(null,lt.plugins.keymapper.keymapper);
})], null));
}

//# sourceMappingURL=keymapper_compiled.js.map