## Plan for print out function
1. make the array of ALL the stops const
 example start is Grand Central end is 23rd 
2. find out the position(which is known as 'index') of the first stop  in array:usign  printout function
let nameOfStart ="";
nameOfStart = right index in the array
if statement to match argument to the index?

3. find out the position/index of the last stop
        variable = 
4.  write function called "printout" that accepts 2 arguments(index1 , index2)
        index1= Starting, index2=end
5. working out the direction of iteration.parameter(index1, index2) use absolute value
        workout the direction by index2 - index1 = number is + from left to right but it goes - if the direction is right to left: (grand central, 23) => 3- 0 = 3which means ther are 3 stops between the start to end, but if (Astor Place, 23rd) => 3 - 5 which returns -2 so use
        Math.abs(); make any number the same wherther it is positive 2 or -2, js reads it 2 
6. this function print out only the name of the start stop and end stop anything inbetween based on the direction of the journey
7. find out how many stops between the last stop and fist stop =>parameter(first stop, last stop)
    use indexOf(); to get the index of last stop(first parameter ) and first stop(second parameter)
    numofstop = laststop - first stop
8. print out all the stops in between(grand central 33, 28 23 , 3)

how many functions?
print out the start stop (name and index)
print out the last stop(name and idex)
print out both of above(index1, index2) --> three function can be done in one function?


## plan for journey function