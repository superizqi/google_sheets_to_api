function doGet (){
  var ss= SpreadsheetApp.getActiveSpreadsheet();
  var dataSheet = ss.getSheetByName('Sheet1');
  var dataRange = dataSheet.getDataRange();
  var dataValues = dataRange.getValues();
  var content = dataValues
  var obj = [];

  for(var j=1 ; j<content.length; j++){
    var addObj = {}
    for(var k=0 ; k<content[j].length; k++){
      for(var i=0 ; i<content[0].length; i++){
        if(i==k){
          addObj[content[0][i]] =  content[j][k];
        }
      }  
    }
    obj.push(addObj); 
  }
  return ContentService.createTextOutput(JSON.stringify(obj)).setMimeType(ContentService.MimeType.JSON);
}