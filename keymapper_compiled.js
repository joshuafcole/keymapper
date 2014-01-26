if(!lt.util.load.provided_QMARK_('lt.plugins.keymapper')) {
goog.provide('lt.plugins.keymapper');
goog.require('cljs.core');
goog.require('crate.binding');
goog.require('crate.binding');
goog.require('lt.objs.tabs');
goog.require('lt.objs.tabs');
goog.require('lt.objs.keyboard');
goog.require('lt.objs.keyboard');
goog.require('lt.objs.command');
goog.require('lt.objs.command');
goog.require('lt.object');
goog.require('lt.object');
lt.plugins.keymapper.keymap_item = (function keymap_item(this$,item){var e__8100__auto__ = crate.core.html.call(null,(function (){var keys = cljs.core.first.call(null,item);var cmds = cljs.core.second.call(null,item);return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",1013907695),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1116631654),cljs.core.map.call(null,((function (keys,cmds){
return (function (key){return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1017440956),key," "], null);
});})(keys,cmds))
,keys.split(/\s/))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1017440956),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",1108647146),"command"], null),cljs.core.map.call(null,((function (keys,cmds){
return (function (cmd){return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1017440956),cljs.core.print_str.call(null,cmd)," "], null);
});})(keys,cmds))
,cmds)], null)], null);
})());var seq__8277_8296 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,cljs.core.PersistentVector.EMPTY));var chunk__8278_8297 = null;var count__8279_8298 = 0;var i__8280_8299 = 0;while(true){
if((i__8280_8299 < count__8279_8298))
{var vec__8281_8300 = cljs.core._nth.call(null,chunk__8278_8297,i__8280_8299);var ev__8101__auto___8301 = cljs.core.nth.call(null,vec__8281_8300,0,null);var func__8102__auto___8302 = cljs.core.nth.call(null,vec__8281_8300,1,null);lt.util.dom.on.call(null,e__8100__auto__,ev__8101__auto___8301,func__8102__auto___8302);
{
var G__8303 = seq__8277_8296;
var G__8304 = chunk__8278_8297;
var G__8305 = count__8279_8298;
var G__8306 = (i__8280_8299 + 1);
seq__8277_8296 = G__8303;
chunk__8278_8297 = G__8304;
count__8279_8298 = G__8305;
i__8280_8299 = G__8306;
continue;
}
} else
{var temp__4092__auto___8307 = cljs.core.seq.call(null,seq__8277_8296);if(temp__4092__auto___8307)
{var seq__8277_8308__$1 = temp__4092__auto___8307;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8277_8308__$1))
{var c__7486__auto___8309 = cljs.core.chunk_first.call(null,seq__8277_8308__$1);{
var G__8310 = cljs.core.chunk_rest.call(null,seq__8277_8308__$1);
var G__8311 = c__7486__auto___8309;
var G__8312 = cljs.core.count.call(null,c__7486__auto___8309);
var G__8313 = 0;
seq__8277_8296 = G__8310;
chunk__8278_8297 = G__8311;
count__8279_8298 = G__8312;
i__8280_8299 = G__8313;
continue;
}
} else
{var vec__8282_8314 = cljs.core.first.call(null,seq__8277_8308__$1);var ev__8101__auto___8315 = cljs.core.nth.call(null,vec__8282_8314,0,null);var func__8102__auto___8316 = cljs.core.nth.call(null,vec__8282_8314,1,null);lt.util.dom.on.call(null,e__8100__auto__,ev__8101__auto___8315,func__8102__auto___8316);
{
var G__8317 = cljs.core.next.call(null,seq__8277_8308__$1);
var G__8318 = null;
var G__8319 = 0;
var G__8320 = 0;
seq__8277_8296 = G__8317;
chunk__8278_8297 = G__8318;
count__8279_8298 = G__8319;
i__8280_8299 = G__8320;
continue;
}
}
} else
{}
}
break;
}
return e__8100__auto__;
});
lt.plugins.keymapper.keymap_panel = (function keymap_panel(this$){var e__8100__auto__ = crate.core.html.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1014003715),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",1013907597),"keymapper"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",1013907515),"Keymapper"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",1013907977),crate.binding.bound.call(null,lt.objs.keyboard.key_map,(function (p1__8283_SHARP_){return cljs.core.map.call(null,(function (item){return lt.plugins.keymapper.keymap_item.call(null,this$,item);
}),p1__8283_SHARP_);
}))], null)], null));var seq__8290_8321 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,cljs.core.PersistentVector.EMPTY));var chunk__8291_8322 = null;var count__8292_8323 = 0;var i__8293_8324 = 0;while(true){
if((i__8293_8324 < count__8292_8323))
{var vec__8294_8325 = cljs.core._nth.call(null,chunk__8291_8322,i__8293_8324);var ev__8101__auto___8326 = cljs.core.nth.call(null,vec__8294_8325,0,null);var func__8102__auto___8327 = cljs.core.nth.call(null,vec__8294_8325,1,null);lt.util.dom.on.call(null,e__8100__auto__,ev__8101__auto___8326,func__8102__auto___8327);
{
var G__8328 = seq__8290_8321;
var G__8329 = chunk__8291_8322;
var G__8330 = count__8292_8323;
var G__8331 = (i__8293_8324 + 1);
seq__8290_8321 = G__8328;
chunk__8291_8322 = G__8329;
count__8292_8323 = G__8330;
i__8293_8324 = G__8331;
continue;
}
} else
{var temp__4092__auto___8332 = cljs.core.seq.call(null,seq__8290_8321);if(temp__4092__auto___8332)
{var seq__8290_8333__$1 = temp__4092__auto___8332;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8290_8333__$1))
{var c__7486__auto___8334 = cljs.core.chunk_first.call(null,seq__8290_8333__$1);{
var G__8335 = cljs.core.chunk_rest.call(null,seq__8290_8333__$1);
var G__8336 = c__7486__auto___8334;
var G__8337 = cljs.core.count.call(null,c__7486__auto___8334);
var G__8338 = 0;
seq__8290_8321 = G__8335;
chunk__8291_8322 = G__8336;
count__8292_8323 = G__8337;
i__8293_8324 = G__8338;
continue;
}
} else
{var vec__8295_8339 = cljs.core.first.call(null,seq__8290_8333__$1);var ev__8101__auto___8340 = cljs.core.nth.call(null,vec__8295_8339,0,null);var func__8102__auto___8341 = cljs.core.nth.call(null,vec__8295_8339,1,null);lt.util.dom.on.call(null,e__8100__auto__,ev__8101__auto___8340,func__8102__auto___8341);
{
var G__8342 = cljs.core.next.call(null,seq__8290_8333__$1);
var G__8343 = null;
var G__8344 = 0;
var G__8345 = 0;
seq__8290_8321 = G__8342;
chunk__8291_8322 = G__8343;
count__8292_8323 = G__8344;
i__8293_8324 = G__8345;
continue;
}
}
} else
{}
}
break;
}
return e__8100__auto__;
});
lt.object.object_STAR_.call(null,new cljs.core.Keyword("lt.plugins.keymapper","keymapper","lt.plugins.keymapper/keymapper",4351246049),new cljs.core.Keyword(null,"tags","tags",1017456523),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"keymapper","keymapper",4047359186)], null),new cljs.core.Keyword(null,"name","name",1017277949),"keymapper",new cljs.core.Keyword(null,"init","init",1017141378),(function (this$){return lt.plugins.keymapper.keymap_panel.call(null,this$);
}));
lt.plugins.keymapper.__BEH__on_close_destroy = (function __BEH__on_close_destroy(this$){var temp__4092__auto___8346 = new cljs.core.Keyword("lt.objs.tabs","tabset","lt.objs.tabs/tabset",3378091779).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,this$));if(cljs.core.truth_(temp__4092__auto___8346))
{var ts_8347 = temp__4092__auto___8346;if(cljs.core._EQ_.call(null,cljs.core.count.call(null,new cljs.core.Keyword(null,"objs","objs",1017308622).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,ts_8347))),1))
{lt.objs.tabs.rem_tabset.call(null,ts_8347);
} else
{}
} else
{}
return lt.object.raise.call(null,this$,new cljs.core.Keyword(null,"destroy","destroy",2571277164));
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.keymapper","on-close-destroy","lt.plugins.keymapper/on-close-destroy",859396912),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.keymapper.__BEH__on_close_destroy,new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"close","close",1108660586),null], null), null));
lt.plugins.keymapper.keymapper = lt.object.create.call(null,new cljs.core.Keyword("lt.plugins.keymapper","keymapper","lt.plugins.keymapper/keymapper",4351246049));
lt.objs.command.command.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"command","command",1964298941),new cljs.core.Keyword(null,"keymapper.show","keymapper.show",1250888253),new cljs.core.Keyword(null,"desc","desc",1016984067),"Keymapper: Show Keymap",new cljs.core.Keyword(null,"exec","exec",1017031683),(function (){return lt.objs.tabs.add_or_focus_BANG_.call(null,lt.plugins.keymapper.keymapper);
})], null));
}

//# sourceMappingURL=keymapper_compiled.js.map