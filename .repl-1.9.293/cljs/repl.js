// Compiled by ClojureScript 1.9.293 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__6666){
var map__6691 = p__6666;
var map__6691__$1 = ((((!((map__6691 == null)))?((((map__6691.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__6691.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__6691):map__6691);
var m = map__6691__$1;
var n = cljs.core.get.call(null,map__6691__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.call(null,map__6691__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.call(null,"-------------------------");

cljs.core.println.call(null,[cljs.core.str((function (){var temp__4657__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__4657__auto__)){
var ns = temp__4657__auto__;
return [cljs.core.str(ns),cljs.core.str("/")].join('');
} else {
return null;
}
})()),cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Protocol");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__6693_6715 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__6694_6716 = null;
var count__6695_6717 = (0);
var i__6696_6718 = (0);
while(true){
if((i__6696_6718 < count__6695_6717)){
var f_6719 = cljs.core._nth.call(null,chunk__6694_6716,i__6696_6718);
cljs.core.println.call(null,"  ",f_6719);

var G__6720 = seq__6693_6715;
var G__6721 = chunk__6694_6716;
var G__6722 = count__6695_6717;
var G__6723 = (i__6696_6718 + (1));
seq__6693_6715 = G__6720;
chunk__6694_6716 = G__6721;
count__6695_6717 = G__6722;
i__6696_6718 = G__6723;
continue;
} else {
var temp__4657__auto___6724 = cljs.core.seq.call(null,seq__6693_6715);
if(temp__4657__auto___6724){
var seq__6693_6725__$1 = temp__4657__auto___6724;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__6693_6725__$1)){
var c__3675__auto___6726 = cljs.core.chunk_first.call(null,seq__6693_6725__$1);
var G__6727 = cljs.core.chunk_rest.call(null,seq__6693_6725__$1);
var G__6728 = c__3675__auto___6726;
var G__6729 = cljs.core.count.call(null,c__3675__auto___6726);
var G__6730 = (0);
seq__6693_6715 = G__6727;
chunk__6694_6716 = G__6728;
count__6695_6717 = G__6729;
i__6696_6718 = G__6730;
continue;
} else {
var f_6731 = cljs.core.first.call(null,seq__6693_6725__$1);
cljs.core.println.call(null,"  ",f_6731);

var G__6732 = cljs.core.next.call(null,seq__6693_6725__$1);
var G__6733 = null;
var G__6734 = (0);
var G__6735 = (0);
seq__6693_6715 = G__6732;
chunk__6694_6716 = G__6733;
count__6695_6717 = G__6734;
i__6696_6718 = G__6735;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_6736 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__3289__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__3289__auto__)){
return or__3289__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_6736);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_6736)))?cljs.core.second.call(null,arglists_6736):arglists_6736));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Special Form");

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.contains_QMARK_.call(null,m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.call(null,[cljs.core.str("\n  Please see http://clojure.org/"),cljs.core.str(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join(''));
} else {
return null;
}
} else {
return cljs.core.println.call(null,[cljs.core.str("\n  Please see http://clojure.org/special_forms#"),cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Macro");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"REPL Special Function");
} else {
}

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__6697_6737 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__6698_6738 = null;
var count__6699_6739 = (0);
var i__6700_6740 = (0);
while(true){
if((i__6700_6740 < count__6699_6739)){
var vec__6701_6741 = cljs.core._nth.call(null,chunk__6698_6738,i__6700_6740);
var name_6742 = cljs.core.nth.call(null,vec__6701_6741,(0),null);
var map__6704_6743 = cljs.core.nth.call(null,vec__6701_6741,(1),null);
var map__6704_6744__$1 = ((((!((map__6704_6743 == null)))?((((map__6704_6743.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__6704_6743.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__6704_6743):map__6704_6743);
var doc_6745 = cljs.core.get.call(null,map__6704_6744__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_6746 = cljs.core.get.call(null,map__6704_6744__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_6742);

cljs.core.println.call(null," ",arglists_6746);

if(cljs.core.truth_(doc_6745)){
cljs.core.println.call(null," ",doc_6745);
} else {
}

var G__6747 = seq__6697_6737;
var G__6748 = chunk__6698_6738;
var G__6749 = count__6699_6739;
var G__6750 = (i__6700_6740 + (1));
seq__6697_6737 = G__6747;
chunk__6698_6738 = G__6748;
count__6699_6739 = G__6749;
i__6700_6740 = G__6750;
continue;
} else {
var temp__4657__auto___6751 = cljs.core.seq.call(null,seq__6697_6737);
if(temp__4657__auto___6751){
var seq__6697_6752__$1 = temp__4657__auto___6751;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__6697_6752__$1)){
var c__3675__auto___6753 = cljs.core.chunk_first.call(null,seq__6697_6752__$1);
var G__6754 = cljs.core.chunk_rest.call(null,seq__6697_6752__$1);
var G__6755 = c__3675__auto___6753;
var G__6756 = cljs.core.count.call(null,c__3675__auto___6753);
var G__6757 = (0);
seq__6697_6737 = G__6754;
chunk__6698_6738 = G__6755;
count__6699_6739 = G__6756;
i__6700_6740 = G__6757;
continue;
} else {
var vec__6706_6758 = cljs.core.first.call(null,seq__6697_6752__$1);
var name_6759 = cljs.core.nth.call(null,vec__6706_6758,(0),null);
var map__6709_6760 = cljs.core.nth.call(null,vec__6706_6758,(1),null);
var map__6709_6761__$1 = ((((!((map__6709_6760 == null)))?((((map__6709_6760.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__6709_6760.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__6709_6760):map__6709_6760);
var doc_6762 = cljs.core.get.call(null,map__6709_6761__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_6763 = cljs.core.get.call(null,map__6709_6761__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_6759);

cljs.core.println.call(null," ",arglists_6763);

if(cljs.core.truth_(doc_6762)){
cljs.core.println.call(null," ",doc_6762);
} else {
}

var G__6764 = cljs.core.next.call(null,seq__6697_6752__$1);
var G__6765 = null;
var G__6766 = (0);
var G__6767 = (0);
seq__6697_6737 = G__6764;
chunk__6698_6738 = G__6765;
count__6699_6739 = G__6766;
i__6700_6740 = G__6767;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(n)){
var temp__4657__auto__ = cljs.spec.get_spec.call(null,cljs.core.symbol.call(null,[cljs.core.str(cljs.core.ns_name.call(null,n))].join(''),cljs.core.name.call(null,nm)));
if(cljs.core.truth_(temp__4657__auto__)){
var fnspec = temp__4657__auto__;
cljs.core.print.call(null,"Spec");

var seq__6711 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__6712 = null;
var count__6713 = (0);
var i__6714 = (0);
while(true){
if((i__6714 < count__6713)){
var role = cljs.core._nth.call(null,chunk__6712,i__6714);
var temp__4657__auto___6768__$1 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__4657__auto___6768__$1)){
var spec_6769 = temp__4657__auto___6768__$1;
cljs.core.print.call(null,[cljs.core.str("\n "),cljs.core.str(cljs.core.name.call(null,role)),cljs.core.str(":")].join(''),cljs.spec.describe.call(null,spec_6769));
} else {
}

var G__6770 = seq__6711;
var G__6771 = chunk__6712;
var G__6772 = count__6713;
var G__6773 = (i__6714 + (1));
seq__6711 = G__6770;
chunk__6712 = G__6771;
count__6713 = G__6772;
i__6714 = G__6773;
continue;
} else {
var temp__4657__auto____$1 = cljs.core.seq.call(null,seq__6711);
if(temp__4657__auto____$1){
var seq__6711__$1 = temp__4657__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__6711__$1)){
var c__3675__auto__ = cljs.core.chunk_first.call(null,seq__6711__$1);
var G__6774 = cljs.core.chunk_rest.call(null,seq__6711__$1);
var G__6775 = c__3675__auto__;
var G__6776 = cljs.core.count.call(null,c__3675__auto__);
var G__6777 = (0);
seq__6711 = G__6774;
chunk__6712 = G__6775;
count__6713 = G__6776;
i__6714 = G__6777;
continue;
} else {
var role = cljs.core.first.call(null,seq__6711__$1);
var temp__4657__auto___6778__$2 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__4657__auto___6778__$2)){
var spec_6779 = temp__4657__auto___6778__$2;
cljs.core.print.call(null,[cljs.core.str("\n "),cljs.core.str(cljs.core.name.call(null,role)),cljs.core.str(":")].join(''),cljs.spec.describe.call(null,spec_6779));
} else {
}

var G__6780 = cljs.core.next.call(null,seq__6711__$1);
var G__6781 = null;
var G__6782 = (0);
var G__6783 = (0);
seq__6711 = G__6780;
chunk__6712 = G__6781;
count__6713 = G__6782;
i__6714 = G__6783;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
} else {
return null;
}
}
});
