function distanceBetweenPoints(x1, y1, x2, y2){
    
//                               |y2 (0)
//                               |
//                               | 
//                               |
// x1 (2) -----------------------|--------------------------------> y1 (4)
//                               |
//                               |
//                               |
//                               |
//                               |
//                               |x2 (5)



 const deltaX = x2 - x1;
 const deltaY = y2 - y1;

 const distance = Math.sqrt(deltaX ** 2 + deltaY ** 2);
 console.log(distance);
}
distanceBetweenPoints(2, 4, 5, 0);