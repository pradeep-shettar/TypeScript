var draw = function (x, y) {
    console.log("Point - x: " + x + ", y: " + y);
};
draw(1, 2);
;
var placePoint = function (point) {
    console.log("Placing point with interface - x: " + point.x + ", y: " + point.y);
};
placePoint({
    x: 1,
    y: 2
});
/*
Inline annotations
*/
var placePointInline = function (point) {
    console.log("Placing point with inline annotation - x: " + point.x + ", y: " + point.y);
};
placePointInline({
    x: 1,
    y: 2
});
