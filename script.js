// js will display student records database in the browser.

// All function elements are connected, which means they work great together, but will
// not be able to exctract it and use somewhere else without syntax changes. Also,
//error are soowballing.

/*--------------------------------------------*/console.log();

//========================VAR:
var studentRecords = [ //array with all student data
  ['Mark', 'Css', 25, 2536],
  ['Sarah', 'Html', 17, 1756],
  ['Svietlana', 'Ruby', 35, 4576],
  ['Anhel', 'Python', 10, 500],
  ['Konrad', 'Java', 15, 1564],
  ['Bob', '', 0, 0],
  ['Mark', 'Css', 25, 2536],
  ['Sarah', 'Html', 17, 1756],
  ['Svietlana', 'Ruby', 35, 4576],
  ['Anhel', 'Python', 10, 500],
  ['Konrad', 'Java', 15, 1564],
  ['Bob', '', 0, 0],
  ['Mark', 'Css', 25, 2536],
  ['Sarah', 'Html', 17, 1756],
  ['Svietlana', 'Ruby', 35, 4576],
  ['Anhel', 'Python', 10, 500],
  ['Konrad', 'Java', 15, 1564],
  ['Bob', '', 0, 0],
  ['Mark', 'Css', 25, 2536],
  ['Sarah', 'Html', 17, 1756],
  ['Svietlana', 'Ruby', 35, 4576]
];
var elements = ['Name','Track','Achievments','Points'];

var msgHTML = '';
var titleList= '';

/*
Should look like this:
  studentRecords = [
    {
    Name: 'Mark',
    Track: 'Css',
    Achievments: 25,
    Points: 2536
  },  -- anonymous arrays.
  {
    Name: 'Sarah',
    Track: 'Html',
    Achievments: 17,
    Points: 1756},
    ....
];
*/
//========================FUNCT:
//-building outside containers for student records:
function buildingOutside(xx) {
  var whereHTML = 'studentContainer';
  for (var i=0; i<xx; i++) {
    msgHTML += '<div class="containerIn" id="output_'+i+'"></div>';
    printTo(msgHTML, whereHTML);
}
}

//builds students records inside containerIn
function buildingInside(xx) {
  for (var i=0; i<xx; i++) {
    var msgHTML = '';
    var whereHTML = 'output_';
    whereHTML +=i
    for (j=0; j<elements.length; j++){
      msgHTML += '<p><span>'+elements[j]+': </span>'
      if (studentRecords[i][j] == '') {   //if no choosen track or have no points will display Newbie
          msgHTML += 'Newbie<br>';
        }else{
          msgHTML += studentRecords[i][j]+'<br>';
        }
    }
    msgHTML+= '</p>';
    printTo(msgHTML, whereHTML);
  }
}
// returning students names into titleList
function titleListGrab() {
  titleList= studentRecords[0][0]
  for (var i=1; i<studentRecords.length; i++){
    titleList+= ', '+studentRecords[i][0];
  }
}

//inputs whatMsg into html where (by ID)
function printTo(whatMsg, where) {
  var outputDiv = document.getElementById(where);
  outputDiv.innerHTML = whatMsg;
}


//========================EXEC:

titleListGrab();
printTo('<h1>Records for:<br>'+titleList+'</h1>', 'title');

buildingOutside(studentRecords.length);
buildingInside(studentRecords.length);
