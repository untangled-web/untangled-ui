// Compiled by ClojureScript 1.9.473 {}
goog.provide('cljs_uuid_utils.core');
goog.require('cljs.core');
goog.require('clojure.string');
/**
 * (uuid-string a-uuid)  =>  uuid-str
 *   Arguments and Values:
 *   a-uuid --- a cljs.core/UUID instance.
 *   uuid-str --- returns a string representation of the UUID instance
 *   Description:
 *   Returns the string representation of the UUID instance in the format of,
 *   "xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx" similarly to java.util.UUID/toString.
 *   Note that this is different from cljs.core/UUID's EDN string-format.
 *   Examples:
 *   (def u (make-random-uuid))  =>  #uuid "305e764d-b451-47ae-a90d-5db782ac1f2e"
 *   (uuid-string u) => "305e764d-b451-47ae-a90d-5db782ac1f2e"
 */
cljs_uuid_utils.core.uuid_string = (function cljs_uuid_utils$core$uuid_string(a_uuid){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(a_uuid.uuid)].join('');
});
/**
 * (make-random-squuid)  =>  new-uuid
 *   Arguments and Values:
 *   new-squuid --- new type 4 (pseudo randomly generated) cljs.core/UUID instance.
 *   Description:
 *   Returns pseudo randomly generated, semi-sequential SQUUID. 
 *   See http://docs.datomic.com/clojure/#datomic.api/squuid
 *   Returns a UUID where the most significant 32 bits are the current time since epoch in seconds.
 *   like: xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx as per http://www.ietf.org/rfc/rfc4122.txt.
 *   Examples:
 *   (make-random-squuid)  =>  #uuid "305e764d-b451-47ae-a90d-5db782ac1f2e"
 *   (type (make-random-squuid)) => cljs.core/UUID
 */
cljs_uuid_utils.core.make_random_squuid = (function cljs_uuid_utils$core$make_random_squuid(){
var top_32_bits = (function cljs_uuid_utils$core$make_random_squuid_$_top_32_bits(){
return (((new Date()).getTime() / (1000)) | (0)).toString((16));
});
var f = (function cljs_uuid_utils$core$make_random_squuid_$_f(){
return cljs.core.rand_int.call(null,(16)).toString((16));
});
var g = (function cljs_uuid_utils$core$make_random_squuid_$_g(){
return ((8) | ((3) & cljs.core.rand_int.call(null,(15)))).toString((16));
});
return (new cljs.core.UUID(clojure.string.join.call(null,cljs.core.concat.call(null,top_32_bits.call(null),"-",cljs.core.repeatedly.call(null,(4),f),"-4",cljs.core.repeatedly.call(null,(3),f),"-",g.call(null),cljs.core.repeatedly.call(null,(3),f),"-",cljs.core.repeatedly.call(null,(12),f))),null));
});
/**
 * (make-random-uuid)  =>  new-uuid
 *   Arguments and Values:
 *   new-uuid --- new type 4 (pseudo randomly generated) cljs.core/UUID instance.
 *   Description:
 *   Returns pseudo randomly generated UUID,
 *   like: xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx as per http://www.ietf.org/rfc/rfc4122.txt.
 *   Examples:
 *   (make-random-uuid)  =>  #uuid "305e764d-b451-47ae-a90d-5db782ac1f2e"
 *   (type (make-random-uuid)) => cljs.core/UUID
 */
cljs_uuid_utils.core.make_random_uuid = (function cljs_uuid_utils$core$make_random_uuid(){
var f = (function cljs_uuid_utils$core$make_random_uuid_$_f(){
return cljs.core.rand_int.call(null,(16)).toString((16));
});
var g = (function cljs_uuid_utils$core$make_random_uuid_$_g(){
return ((8) | ((3) & cljs.core.rand_int.call(null,(15)))).toString((16));
});
return (new cljs.core.UUID(clojure.string.join.call(null,cljs.core.concat.call(null,cljs.core.repeatedly.call(null,(8),f),"-",cljs.core.repeatedly.call(null,(4),f),"-4",cljs.core.repeatedly.call(null,(3),f),"-",g.call(null),cljs.core.repeatedly.call(null,(3),f),"-",cljs.core.repeatedly.call(null,(12),f))),null));
});
cljs_uuid_utils.core.uuid_regex = (function (){var x = "[0-9a-fA-F]";
return cljs.core.re_pattern.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("^"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(x),cljs.core.str.cljs$core$IFn$_invoke$arity$1(x),cljs.core.str.cljs$core$IFn$_invoke$arity$1(x),cljs.core.str.cljs$core$IFn$_invoke$arity$1(x),cljs.core.str.cljs$core$IFn$_invoke$arity$1(x),cljs.core.str.cljs$core$IFn$_invoke$arity$1(x),cljs.core.str.cljs$core$IFn$_invoke$arity$1(x),cljs.core.str.cljs$core$IFn$_invoke$arity$1(x),cljs.core.str.cljs$core$IFn$_invoke$arity$1("-"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(x),cljs.core.str.cljs$core$IFn$_invoke$arity$1(x),cljs.core.str.cljs$core$IFn$_invoke$arity$1(x),cljs.core.str.cljs$core$IFn$_invoke$arity$1(x),cljs.core.str.cljs$core$IFn$_invoke$arity$1("-"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(x),cljs.core.str.cljs$core$IFn$_invoke$arity$1(x),cljs.core.str.cljs$core$IFn$_invoke$arity$1(x),cljs.core.str.cljs$core$IFn$_invoke$arity$1(x),cljs.core.str.cljs$core$IFn$_invoke$arity$1("-"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(x),cljs.core.str.cljs$core$IFn$_invoke$arity$1(x),cljs.core.str.cljs$core$IFn$_invoke$arity$1(x),cljs.core.str.cljs$core$IFn$_invoke$arity$1(x),cljs.core.str.cljs$core$IFn$_invoke$arity$1("-"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(x),cljs.core.str.cljs$core$IFn$_invoke$arity$1(x),cljs.core.str.cljs$core$IFn$_invoke$arity$1(x),cljs.core.str.cljs$core$IFn$_invoke$arity$1(x),cljs.core.str.cljs$core$IFn$_invoke$arity$1(x),cljs.core.str.cljs$core$IFn$_invoke$arity$1(x),cljs.core.str.cljs$core$IFn$_invoke$arity$1(x),cljs.core.str.cljs$core$IFn$_invoke$arity$1(x),cljs.core.str.cljs$core$IFn$_invoke$arity$1(x),cljs.core.str.cljs$core$IFn$_invoke$arity$1(x),cljs.core.str.cljs$core$IFn$_invoke$arity$1(x),cljs.core.str.cljs$core$IFn$_invoke$arity$1(x),cljs.core.str.cljs$core$IFn$_invoke$arity$1("$")].join(''));
})();
/**
 * (valid-uuid? maybe-uuid)  =>  truthy-falsy
 *   Arguments and Values:
 *   maybe-uuid --- string or UUID-instance that may represent a conformant UUID.
 *   truthy-falsy --- Returns either the conforming UUID-string (truthy) or nil (falsy).
 *   Description:
 *   Predicate to test whether a string representation conforms to a
 *   "xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx" format where each x is a hexadecimal character.
 *   Input can be a maybe-uuid string or a cljs.core/UUID instance.
 *   Note that the current "cljs.core/UUID." constructor does not check for any conformance.
 *   Examples:
 *   (valid-uuid? "NO-WAY")  =>  nil
 *   (valid-uuid? "4d7332e7-e4c6-4ca5-af91-86336c825e25")  => "4d7332e7-e4c6-4ca5-af91-86336c825e25"
 *   (valid-uuid? (UUID. "4d7332e7-e4c6-4ca5-af91-86336c825e25"))  => "4d7332e7-e4c6-4ca5-af91-86336c825e25"
 *   (valid-uuid? (UUID. "YES-WAY"))  => nil
 */
cljs_uuid_utils.core.valid_uuid_QMARK_ = (function cljs_uuid_utils$core$valid_uuid_QMARK_(maybe_uuid){
var maybe_uuid_str = ((cljs.core._EQ_.call(null,cljs.core.type.call(null,maybe_uuid),cljs.core.UUID))?cljs_uuid_utils.core.uuid_string.call(null,maybe_uuid):((typeof maybe_uuid === 'string')?maybe_uuid:false
));
if(cljs.core.truth_(maybe_uuid_str)){
return cljs.core.re_find.call(null,cljs_uuid_utils.core.uuid_regex,maybe_uuid_str);
} else {
return null;
}
});
/**
 * (make-uuid-from maybe-uuid maybe-uuid)  =>  uuid-or-nil
 *   Arguments and Values:
 *   maybe-uuid --- string or UUID-instance that may represent a conformant UUID.
 *   uuid-or-nil --- Returns either a cljs.core/UUID instance or nil.
 *   Description:
 *   Returns a cljs.core/UUID instance for a conformant UUID-string representation, or nil.
 *   Input can be a string or a cljs.core/UUID instance.
 *   Note that if the input UUID-instance is not valid, nil is returned.
 *   Examples:
 *   (make-uuid-from "NO-WAY")  =>  nil
 *   (make-uuid-from "4d7332e7-e4c6-4ca5-af91-86336c825e25")  => #uuid "4d7332e7-e4c6-4ca5-af91-86336c825e25"
 *   (make-uuid-from (UUID. "4d7332e7-e4c6-4ca5-af91-86336c825e25"))  => #uuid "4d7332e7-e4c6-4ca5-af91-86336c825e25"
 *   (make-uuid-from (UUID. "YES-WAY"))  => nil
 */
cljs_uuid_utils.core.make_uuid_from = (function cljs_uuid_utils$core$make_uuid_from(maybe_uuid){
var temp__6753__auto__ = cljs_uuid_utils.core.valid_uuid_QMARK_.call(null,maybe_uuid);
if(cljs.core.truth_(temp__6753__auto__)){
var uuid = temp__6753__auto__;
if(cljs.core._EQ_.call(null,cljs.core.type.call(null,maybe_uuid),cljs.core.UUID)){
return maybe_uuid;
} else {
return (new cljs.core.UUID(uuid,null));
}
} else {
return null;
}
});

//# sourceMappingURL=core.js.map?rel=1489703338269