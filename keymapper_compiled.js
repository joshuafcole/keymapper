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
})());var seq__8190_8219 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,cljs.core.PersistentVector.EMPTY));var chunk__8191_8220 = null;var count__8192_8221 = 0;var i__8193_8222 = 0;while(true){
if((i__8193_8222 < count__8192_8221))
{var vec__8194_8223 = cljs.core._nth.call(null,chunk__8191_8220,i__8193_8222);var ev__8101__auto___8224 = cljs.core.nth.call(null,vec__8194_8223,0,null);var func__8102__auto___8225 = cljs.core.nth.call(null,vec__8194_8223,1,null);lt.util.dom.on.call(null,e__8100__auto__,ev__8101__auto___8224,func__8102__auto___8225);
{
var G__8226 = seq__8190_8219;
var G__8227 = chunk__8191_8220;
var G__8228 = count__8192_8221;
var G__8229 = (i__8193_8222 + 1);
seq__8190_8219 = G__8226;
chunk__8191_8220 = G__8227;
count__8192_8221 = G__8228;
i__8193_8222 = G__8229;
continue;
}
} else
{var temp__4092__auto___8230 = cljs.core.seq.call(null,seq__8190_8219);if(temp__4092__auto___8230)
{var seq__8190_8231__$1 = temp__4092__auto___8230;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8190_8231__$1))
{var c__7486__auto___8232 = cljs.core.chunk_first.call(null,seq__8190_8231__$1);{
var G__8233 = cljs.core.chunk_rest.call(null,seq__8190_8231__$1);
var G__8234 = c__7486__auto___8232;
var G__8235 = cljs.core.count.call(null,c__7486__auto___8232);
var G__8236 = 0;
seq__8190_8219 = G__8233;
chunk__8191_8220 = G__8234;
count__8192_8221 = G__8235;
i__8193_8222 = G__8236;
continue;
}
} else
{var vec__8195_8237 = cljs.core.first.call(null,seq__8190_8231__$1);var ev__8101__auto___8238 = cljs.core.nth.call(null,vec__8195_8237,0,null);var func__8102__auto___8239 = cljs.core.nth.call(null,vec__8195_8237,1,null);lt.util.dom.on.call(null,e__8100__auto__,ev__8101__auto___8238,func__8102__auto___8239);
{
var G__8240 = cljs.core.next.call(null,seq__8190_8231__$1);
var G__8241 = null;
var G__8242 = 0;
var G__8243 = 0;
seq__8190_8219 = G__8240;
chunk__8191_8220 = G__8241;
count__8192_8221 = G__8242;
i__8193_8222 = G__8243;
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
lt.plugins.keymapper.keymap_panel = (function keymap_panel(this$){var e__8100__auto__ = crate.core.html.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1014003715),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",1013907597),"keymapper"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",1013907515),"Keymapper"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",1013907977),crate.binding.bound.call(null,lt.objs.keyboard.key_map,(function (p1__8196_SHARP_){return cljs.core.map.call(null,(function (item){return lt.plugins.keymapper.keymap_item.call(null,this$,item);
}),p1__8196_SHARP_);
}))], null)], null));var seq__8203_8244 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,cljs.core.PersistentVector.EMPTY));var chunk__8204_8245 = null;var count__8205_8246 = 0;var i__8206_8247 = 0;while(true){
if((i__8206_8247 < count__8205_8246))
{var vec__8207_8248 = cljs.core._nth.call(null,chunk__8204_8245,i__8206_8247);var ev__8101__auto___8249 = cljs.core.nth.call(null,vec__8207_8248,0,null);var func__8102__auto___8250 = cljs.core.nth.call(null,vec__8207_8248,1,null);lt.util.dom.on.call(null,e__8100__auto__,ev__8101__auto___8249,func__8102__auto___8250);
{
var G__8251 = seq__8203_8244;
var G__8252 = chunk__8204_8245;
var G__8253 = count__8205_8246;
var G__8254 = (i__8206_8247 + 1);
seq__8203_8244 = G__8251;
chunk__8204_8245 = G__8252;
count__8205_8246 = G__8253;
i__8206_8247 = G__8254;
continue;
}
} else
{var temp__4092__auto___8255 = cljs.core.seq.call(null,seq__8203_8244);if(temp__4092__auto___8255)
{var seq__8203_8256__$1 = temp__4092__auto___8255;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8203_8256__$1))
{var c__7486__auto___8257 = cljs.core.chunk_first.call(null,seq__8203_8256__$1);{
var G__8258 = cljs.core.chunk_rest.call(null,seq__8203_8256__$1);
var G__8259 = c__7486__auto___8257;
var G__8260 = cljs.core.count.call(null,c__7486__auto___8257);
var G__8261 = 0;
seq__8203_8244 = G__8258;
chunk__8204_8245 = G__8259;
count__8205_8246 = G__8260;
i__8206_8247 = G__8261;
continue;
}
} else
{var vec__8208_8262 = cljs.core.first.call(null,seq__8203_8256__$1);var ev__8101__auto___8263 = cljs.core.nth.call(null,vec__8208_8262,0,null);var func__8102__auto___8264 = cljs.core.nth.call(null,vec__8208_8262,1,null);lt.util.dom.on.call(null,e__8100__auto__,ev__8101__auto___8263,func__8102__auto___8264);
{
var G__8265 = cljs.core.next.call(null,seq__8203_8256__$1);
var G__8266 = null;
var G__8267 = 0;
var G__8268 = 0;
seq__8203_8244 = G__8265;
chunk__8204_8245 = G__8266;
count__8205_8246 = G__8267;
i__8206_8247 = G__8268;
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
lt.object.object_STAR_.call(null,new cljs.core.Keyword("lt.plugins.keymapper","keymapper","lt.plugins.keymapper/keymapper",4351246049),new cljs.core.Keyword(null,"tags","tags",1017456523),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"keymapper","keymapper",4047359186)], null),new cljs.core.Keyword(null,"name","name",1017277949),"keymapper",new cljs.core.Keyword(null,"init","init",1017141378),(function (this$){console.log("HELLO");
return lt.plugins.keymapper.keymap_panel.call(null,this$);
}));
lt.plugins.keymapper.__BEH__on_close_destroy = (function __BEH__on_close_destroy(this$){var temp__4092__auto___8269 = new cljs.core.Keyword("lt.objs.tabs","tabset","lt.objs.tabs/tabset",3378091779).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,this$));if(cljs.core.truth_(temp__4092__auto___8269))
{var ts_8270 = temp__4092__auto___8269;if(cljs.core._EQ_.call(null,cljs.core.count.call(null,new cljs.core.Keyword(null,"objs","objs",1017308622).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,ts_8270))),1))
{lt.objs.tabs.rem_tabset.call(null,ts_8270);
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