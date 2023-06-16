var ballA = {
    x: 100,
    y: 1,
    z: 10,
    vx: 0,
    vy: 1,
    vz: 1,
    r: 3
}
var ballB = {
    x: 0,
    y: 1,
    z: 100,
    vx: 1,
    vy: 1,
    vz: 0,
    r: 1
}

var distance
var distanceOld

function isWithinLimit(ballA, ballB) {
    return !(ballA.x === 10000 || ballA.y === 10000 || ballA.z === 10000) &&
        !(ballB.x === 10000 || ballB.y === 10000 || ballB.z === 10000);
}
function calculateDistance(ballA, ballB) {
    var dx = ballA.x - ballB.x;
    var dy = ballA.y - ballB.y;
    var dz = ballA.z - ballB.z;

    return Math.sqrt(dx * dx + dy * dy + dz * dz);
}

function isCollision(distance) {
    const ABradii = ballA.r + ballB.r
    return parseFloat(ABradii) > distance ? true : false;
}

function throwBalls(ballA, ballB) {
    previousDistance = calculateDistance(ballA, ballB)
    while (isWithinLimit(ballA, ballB)) {
        if (isCollision(calculateDistance(ballA, ballB))) {
            console.log("YES")
            console.log(ballA.x + " " + ballA.y + " " + ballA.z)
            break
        } else {
            //if there's no collision proceed to next frame
            ballA.x = ballA.x + ballA.vx
            ballA.y = ballA.y + ballA.vy
            ballA.z = ballA.z + ballA.vz
            ballB.x = ballB.x + ballB.vx
            ballB.y = ballB.y + ballB.vy
            ballB.z = ballB.z + ballB.vz
            distance = calculateDistance(ballA, ballB);
            if (distance < previousDistance) {
            } else {
                console.log("NO")
                console.log(distance.toFixed(5))
                break
            }
            previousDistance = distance;
            }
    }
}

function output() {
    console.log(isCollision(calculateDistance(ballA, ballB)))
}

throwBalls(ballA, ballB)
