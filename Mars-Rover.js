function MarsRover(location, direction,obstacles) {
    self = this;
    this.location = (location === undefined) ? [0, 0] : location;
    this.direction = (direction === undefined) ? 'N' : direction;
    this.obstacles = (obstacles === undefined) ? [] : obstacles;
    this.directions = ['N', 'E', 'S', 'W'];
    this.directionsIndex = { 'N': 0, 'E': 1, 'S': 2, 'W': 3 };
    this.status = "NotObstacle";

    this.commands = function (commands) {
        if (commands === undefined) {
            return { x: self.location[0], y: self.location[1], dir: self.direction };
        } else {
            for(let com = 0; com < commands.length; com++){
                let command = commands[com];
                if(command === 'F' || command === 'B'){
                   if(!move(command)) return `${this.location} ${this.direction} is stopped`;
                } else if(command === 'L' || command === 'R'){
                    turn(command);
                }           
            }
            return { x: self.location[0], y: self.location[1], dir: self.direction };
        }
    };

    // for forward and backward command
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

        if(isObstacle(newLocation)){
            return false;
        }
        self.location = newLocation;
        return true;
    }

    // for the second part of the task 
    function isObstacle(newLocation){
        for(let index = 0; index < self.obstacles.length ; index++){
            if(newLocation.toString() == self.obstacles[index].toString()){
               self.status = "obstacle";
               return true;
            }
        }
        return false;
    }

    // for the left and right rotate 
    function turn(command){
        let directionNum = self.directionsIndex[self.direction];
        if(command === "L"){
            directionNum = (directionNum + 4 - 1 ) % 4;
        } else {
            directionNum = (directionNum + 1 ) % 4;
        }
        self.direction = self.directions[directionNum];
    }
}

let marsRover = new MarsRover([4,2],'E',[[1,4], [3,5], [7,4]]);
console.log(marsRover.commands("FLFFFRFLB"));
console.log(self.status);
