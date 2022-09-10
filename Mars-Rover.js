function MarsRover(location, direction) {
    self = this;
    this.location = (location === undefined) ? [0, 0] : location;
    this.direction = (direction === undefined) ? 'N' : direction;
    this.directions = ['N', 'E', 'S', 'W'];
    this.directionsIndex = { 'N': 0, 'E': 1, 'S': 2, 'W': 3 };
    this.commands = function (commands) {
        if (commands === undefined) {
            return { x: self.location[0], y: self.location[1], dir: self.direction };
        } else {
            for(let com = 0; com < commands.length; com++){
                let command = commands[com];
                if(command === 'F' || command === 'B'){
                    move(command)
                } else if(command === 'L' || command === 'R'){
                    turn(command);
                }           
            }
            return { x: self.location[0], y: self.location[1], dir: self.direction };
        }
    };

    function move(command){
        let xIncrement = 0, yIncrement = 0;
        if( self.direction === 'N'){
            yIncrement = 1;
        } else if(self.direction === 'S'){
           yIncrement = -1;
        }
        else if(self.direction === 'E') {
            xIncrement = 1;
        } else if(self.direction === 'W') {
            xIncrement = -1;
        }
        if(command === 'B'){
            xIncrement *= -1;
            yIncrement *= -1;
        } 
        let newLocation = [self.location[0] + xIncrement , self.location[1] + yIncrement];
        self.location = newLocation;

    }
    function turn(command){
        let directionNum = self.directionsIndex[self.direction]
        if(command === "L"){
            directionNum = (directionNum + 4 - 1 ) % 4;
        } else {
            directionNum = (directionNum + 1 ) % 4;
        }
        self.direction = self.directions[directionNum];
    }
}

let marsRover = new MarsRover([4,2],'E');
console.log(marsRover.commands("FLFFFRFLB"));

// let marsRover0 = new MarsRover([1,2],'N');
// console.log(marsRover0.commands("LFLFLFLFF"));

// let marsRover1 = new MarsRover([3,3],'E');
// console.log(marsRover1.commands("FFRFFRFRRF"));

// let marsRover2 = new MarsRover([1,2],'N');
// console.log(marsRover2.commands("FFRFFRFRRF"));

// let marsRover3 = new MarsRover([1,2],'N');
// console.log(marsRover3.commands("FLBRFFFRBBBLFF"));


