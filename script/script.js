
function TransMatrix(){
        var inp = document.getElementsByClassName('cell');
        var A = [];

        for (var i=0, j=1; i < inp.length, j< inp.length; i+=2, j+=2) {
          A.push([inp[i].value,inp[j].value])
        }

    var m = A.length
    var n = A[0].length
    var AT = [];

    for (var i = 0; i < n; i++){ 
        AT[i] = [];
       for (var j = 0; j < m; j++) 
        AT[i][j] = A[j][ i ];
     }
    if(A[0][0] && A[0][1] && A[1][0] && A[1][1] && A[2][0] && A[2][1] != 0){document.querySelector('.out').innerHTML = "[" + AT[0] + "]" + "</br>" + "[" + AT[1] + "]";}else{
  document.querySelector('.out').innerHTML = "Заповніть всі значення елементів массиву"
    }
  }