//Link Soal
// https://www.codewars.com/kata/55cbd4ba903825f7970000f5

//Soal
/*Grade book
Complete the function so that it finds the average of the three scores passed to it and returns the letter value associated with that grade.

Numerical Score	Letter Grade
90 <= score <= 100	'A'
80 <= score < 90	'B'
70 <= score < 80	'C'
60 <= score < 70	'D'
0 <= score < 60	'F'*/

//Jawaban
function getGrade(s1,s2,s3){
    let average = (s1+s2+s3) / 3;
    let result =0;
    for(let i=0; i<=100; i++){
        if((s1 + s2 + s3) / 3 < 60){
            return 'F'
        } else if ( average >= 90 && average <=100){
            return 'A'
        }else if (average >= 80 && average <90){
            return 'B'
        }else if (average >= 70 && average / 3 <80){
            return 'C'
        }else if (average >= 60 && average / 3 <70){
            return 'D'
        }
    }
    return result
}
console.log(getGrade(65,70,59));