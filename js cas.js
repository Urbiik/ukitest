console.log("mihailo")

function f(){

    return "f" + 4;
}
f();

(function x(){
    console.log("x");
})();

var a=f;
var rez a();
console.log(rez());

var objekat = {
    a : function( ){ return "a";},
    b : function(b){return b; },
    c : function(c){ return c*c; }
}