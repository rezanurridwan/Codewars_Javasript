//Link soal
// https://www.youtube.com/redirect?event=video_description&redir_token=QUFFLUhqbHVkZ3ZzMGlHTlhBbHJzbmc3M01sOXBnVmdMZ3xBQ3Jtc0tramMweGlqUnBUN3NqRkF0Sm1fWTR6cnUyQXZPLUlzV2pLTndEd1ZMb0c1Q2tUYzN5dW9IdjVsLUdOYnJkRnM1YVlHV3BoWW1XVENmS1lOcnBjS0cwNDZ2bW04ajh0dGt1N1ZqWXNqWlVySVNnb0ZFOA&q=https%3A%2F%2Fwww.codewars.com%2Fkata%2F5bb904724c47249b10000131&v=XVkwl7D02QU

//Soal
/*Our football team has finished the championship.

Our team's match results are recorded in a collection of strings. Each match is represented by a string in the format "x:y", where x is our team's score and y is our opponents score.

For example: ["3:1", "2:2", "0:1", ...]

Points are awarded for each match as follows:

if x > y: 3 points (win)
if x < y: 0 points (loss)
if x = y: 1 point (tie)
We need to write a function that takes this collection and returns the number of points our team (x) got in the championship by the rules given above.

Notes:

our team always plays 10 matches in the championship
0 <= x <= 4
0 <= y <= 4
*/

//Jawaban 
//Cara Pertama
function points (games){
    let result =0;
    for(let i=0; i <games.length; i++){
        if(games[i][0] > games[i][2]){
            result += 3;
        }else if( games [i][0] === games[i][2]){
            result += 1;
        }
    }
return result;
}

console.log(points(["1:1","2:2","3:3","4:4","2:2","3:3","4:4","3:3","4:4","4:4"]));