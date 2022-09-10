# mars-rover-problem

rover has an initial location and direction and depend on execute some commands (F,B.L,R) make rover moves

Inpout:a combination of x and y co-ordinates and a letter representing one of four directions (N,E,W,S)

Output: The output of the rover should be its final co-ordinates and heading(direction)

Input and Output

Test Input:
[4,2],'E' 
command: "FLFFFRFLB"

Expected Output:
[6,4] , 'N'


#Solution 
 function  command ---> to execute the possible commands that available to use it and which function will call in each command 
 function  move ----> for forward and backward commands 
 function  turn ----> for left and right rotate commands  
 function isObstacle ---> for checking that the output location is obastcle or not
 
 
 # another solution 
 I search and reach to there is another approuch using design pattern specialy two design patter 
 first pattern is ---> state design pattern to represent the different Directions a Rover can have as States ,
 as there was a need for different functionality on the behaviours of the Rover dependent on which Direction (State)
 second pattern is ---> command design pattern for sending and executing the various Commands the Rover needed to execute.
 but I cannot reach for how fully applay these patterns on the problem 

