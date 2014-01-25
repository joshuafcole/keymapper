if(!lt.util.load.provided_QMARK_('lt.plugins.keymapper')) {
goog.provide('lt.plugins.keymapper');
goog.require('cljs.core');
goog.require('lt.objs.tabs');
goog.require('lt.objs.tabs');
goog.require('lt.objs.keyboard');
goog.require('lt.objs.keyboard');
goog.require('lt.objs.command');
goog.require('lt.objs.command');
goog.require('lt.object');
goog.require('lt.object');
lt.plugins.keymapper.keymap_item = (function keymap_item(this$,item){var e__8081__auto__ = crate.core.html.call(null,(function (){var keys = cljs.core.first.call(null,item);var cmds = cljs.core.second.call(null,item);return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",1013907695),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1116631654),cljs.core.map.call(null,((function (keys,cmds){
return (function (key){return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1017440956),key," "], null);
});})(keys,cmds))
,keys.split(/\s/))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1017440956),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",1108647146),"command"], null),cljs.core.map.call(null,((function (keys,cmds){
return (function (cmd){return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1017440956),cljs.core.print_str.call(null,cmd)," "], null);
});})(keys,cmds))
,cmds)], null)], null);
})());var seq__8559_8577 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,cljs.core.PersistentVector.EMPTY));var chunk__8560_8578 = null;var count__8561_8579 = 0;var i__8562_8580 = 0;while(true){
if((i__8562_8580 < count__8561_8579))
{var vec__8563_8581 = cljs.core._nth.call(null,chunk__8560_8578,i__8562_8580);var ev__8082__auto___8582 = cljs.core.nth.call(null,vec__8563_8581,0,null);var func__8083__auto___8583 = cljs.core.nth.call(null,vec__8563_8581,1,null);lt.util.dom.on.call(null,e__8081__auto__,ev__8082__auto___8582,func__8083__auto___8583);
{
var G__8584 = seq__8559_8577;
var G__8585 = chunk__8560_8578;
var G__8586 = count__8561_8579;
var G__8587 = (i__8562_8580 + 1);
seq__8559_8577 = G__8584;
chunk__8560_8578 = G__8585;
count__8561_8579 = G__8586;
i__8562_8580 = G__8587;
continue;
}
} else
{var temp__4092__auto___8588 = cljs.core.seq.call(null,seq__8559_8577);if(temp__4092__auto___8588)
{var seq__8559_8589__$1 = temp__4092__auto___8588;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8559_8589__$1))
{var c__7470__auto___8590 = cljs.core.chunk_first.call(null,seq__8559_8589__$1);{
var G__8591 = cljs.core.chunk_rest.call(null,seq__8559_8589__$1);
var G__8592 = c__7470__auto___8590;
var G__8593 = cljs.core.count.call(null,c__7470__auto___8590);
var G__8594 = 0;
seq__8559_8577 = G__8591;
chunk__8560_8578 = G__8592;
count__8561_8579 = G__8593;
i__8562_8580 = G__8594;
continue;
}
} else
{var vec__8564_8595 = cljs.core.first.call(null,seq__8559_8589__$1);var ev__8082__auto___8596 = cljs.core.nth.call(null,vec__8564_8595,0,null);var func__8083__auto___8597 = cljs.core.nth.call(null,vec__8564_8595,1,null);lt.util.dom.on.call(null,e__8081__auto__,ev__8082__auto___8596,func__8083__auto___8597);
{
var G__8598 = cljs.core.next.call(null,seq__8559_8589__$1);
var G__8599 = null;
var G__8600 = 0;
var G__8601 = 0;
seq__8559_8577 = G__8598;
chunk__8560_8578 = G__8599;
count__8561_8579 = G__8600;
i__8562_8580 = G__8601;
continue;
}
}
} else
{}
}
break;
}
return e__8081__auto__;
});
lt.plugins.keymapper.keymap_panel = (function keymap_panel(this$){var e__8081__auto__ = crate.core.html.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1014003715),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",1013907597),"keymapper"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",1013907515),"Keymapper"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",1013907977),cljs.core.map.call(null,(function (item){return lt.plugins.keymapper.keymap_item.call(null,this$,item);
}),cljs.core.deref.call(null,lt.objs.keyboard.key_map))], null)], null));var seq__8571_8602 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,cljs.core.PersistentVector.EMPTY));var chunk__8572_8603 = null;var count__8573_8604 = 0;var i__8574_8605 = 0;while(true){
if((i__8574_8605 < count__8573_8604))
{var vec__8575_8606 = cljs.core._nth.call(null,chunk__8572_8603,i__8574_8605);var ev__8082__auto___8607 = cljs.core.nth.call(null,vec__8575_8606,0,null);var func__8083__auto___8608 = cljs.core.nth.call(null,vec__8575_8606,1,null);lt.util.dom.on.call(null,e__8081__auto__,ev__8082__auto___8607,func__8083__auto___8608);
{
var G__8609 = seq__8571_8602;
var G__8610 = chunk__8572_8603;
var G__8611 = count__8573_8604;
var G__8612 = (i__8574_8605 + 1);
seq__8571_8602 = G__8609;
chunk__8572_8603 = G__8610;
count__8573_8604 = G__8611;
i__8574_8605 = G__8612;
continue;
}
} else
{var temp__4092__auto___8613 = cljs.core.seq.call(null,seq__8571_8602);if(temp__4092__auto___8613)
{var seq__8571_8614__$1 = temp__4092__auto___8613;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8571_8614__$1))
{var c__7470__auto___8615 = cljs.core.chunk_first.call(null,seq__8571_8614__$1);{
var G__8616 = cljs.core.chunk_rest.call(null,seq__8571_8614__$1);
var G__8617 = c__7470__auto___8615;
var G__8618 = cljs.core.count.call(null,c__7470__auto___8615);
var G__8619 = 0;
seq__8571_8602 = G__8616;
chunk__8572_8603 = G__8617;
count__8573_8604 = G__8618;
i__8574_8605 = G__8619;
continue;
}
} else
{var vec__8576_8620 = cljs.core.first.call(null,seq__8571_8614__$1);var ev__8082__auto___8621 = cljs.core.nth.call(null,vec__8576_8620,0,null);var func__8083__auto___8622 = cljs.core.nth.call(null,vec__8576_8620,1,null);lt.util.dom.on.call(null,e__8081__auto__,ev__8082__auto___8621,func__8083__auto___8622);
{
var G__8623 = cljs.core.next.call(null,seq__8571_8614__$1);
var G__8624 = null;
var G__8625 = 0;
var G__8626 = 0;
seq__8571_8602 = G__8623;
chunk__8572_8603 = G__8624;
count__8573_8604 = G__8625;
i__8574_8605 = G__8626;
continue;
}
}
} else
{}
}
break;
}
return e__8081__auto__;
});
lt.object.object_STAR_.call(null,new cljs.core.Keyword("lt.plugins.keymapper","keymapper.hello","lt.plugins.keymapper/keymapper.hello",4343413245),new cljs.core.Keyword(null,"tags","tags",1017456523),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"keymapper.hello","keymapper.hello",4055190070)], null),new cljs.core.Keyword(null,"name","name",1017277949),"keymapper",new cljs.core.Keyword(null,"init","init",1017141378),(function (this$){return lt.plugins.keymapper.keymap_panel.call(null,this$);
}));
lt.plugins.keymapper.__BEH__on_close_destroy = (function __BEH__on_close_destroy(this$){var temp__4092__auto___8627 = new cljs.core.Keyword("lt.objs.tabs","tabset","lt.objs.tabs/tabset",3378091779).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,this$));if(cljs.core.truth_(temp__4092__auto___8627))
{var ts_8628 = temp__4092__auto___8627;if(cljs.core._EQ_.call(null,cljs.core.count.call(null,new cljs.core.Keyword(null,"objs","objs",1017308622).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,ts_8628))),1))
{lt.objs.tabs.rem_tabset.call(null,ts_8628);
} else
{}
} else
{}
return lt.object.raise.call(null,this$,new cljs.core.Keyword(null,"destroy","destroy",2571277164));
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.keymapper","on-close-destroy","lt.plugins.keymapper/on-close-destroy",859396912),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.keymapper.__BEH__on_close_destroy,new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"close","close",1108660586),null], null), null));
lt.plugins.keymapper.hello = lt.object.create.call(null,new cljs.core.Keyword("lt.plugins.keymapper","keymapper.hello","lt.plugins.keymapper/keymapper.hello",4343413245));
lt.objs.command.command.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"command","command",1964298941),new cljs.core.Keyword("lt.plugins.keymapper","say-hello","lt.plugins.keymapper/say-hello",1834258417),new cljs.core.Keyword(null,"desc","desc",1016984067),"Keymapper: Say Hello",new cljs.core.Keyword(null,"exec","exec",1017031683),(function (){return lt.objs.tabs.add_or_focus_BANG_.call(null,lt.plugins.keymapper.hello);
})], null));
}

//# sourceMappingURL=keymapper_compiled.js.map