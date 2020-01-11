let draw = (x: number,y:number) => {
    console.log("Point - x: " +x+", y: "+y);
}

draw(1,2);

interface Point {x:number, y:number};

let placePoint = (point:Point) => {
    console.log("Placing point with interface - x: "+point.x+", y: "+point.y);
}

placePoint({
    x: 1,
    y: 2
});

/*
Inline annotations
*/
let placePointInline = (point: {x:number, y:number}) => {
    console.log("Placing point with inline annotation - x: "+point.x+", y: "+point.y);
}

placePointInline({
    x: 1,
    y: 2
})