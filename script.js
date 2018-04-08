
//========================VAR:

var elements = ['Name','Track','Achievments','Points'];

var msgHTML = '';
var titleList= '';

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
