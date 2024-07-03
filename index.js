function distanceFromHqInBlocks(blocks){
if (blocks>=42){
    return blocks-42;
}else{
    return 42-blocks;
}

};
let x=distanceFromHqInBlocks(50);
let y=distanceFromHqInBlocks(40);
console.log(x,y);

function distanceFromHqInFeet(blocks){
    return distanceFromHqInBlocks(blocks)*264;

};
let a=distanceFromHqInFeet(50);
console.log(a);

function distanceTravelledInFeet(start,destination){
    if(destination>=start){
        return (destination-start)*264;
    }else{
        return (start-destination)*264;
    }
};
let g=distanceTravelledInFeet(50,70);
console.log(g);

function calculatesFarePrice(start,destination){
    if (distanceTravelledInFeet(start,destination)<=400){
        return 0;
    }else if(distanceTravelledInFeet(start,destination)>400&&distanceTravelledInFeet(start,destination)<=2000){
        return 2.56;

    }else if(distanceTravelledInFeet(start,destination)>2000&&distanceTravelledInFeet(start,destination)<=2500){
        return 25;

    }else{
        return 'cannot travel that far';
    }
};
let r=calculatesFarePrice(80,130);
console.log(r);