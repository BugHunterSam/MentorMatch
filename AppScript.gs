//function onEdit(e) {
//  var ss = SpreadsheetApp.getActiveSpreadsheet(); 
//  var sheet1 = ss.getSheets()[0];
//  var subject = "Your MentorMatch!"
//  var body = "x"
//  
//  var email_address = sheet1[0][1];  
//  ss.alert(email_address);
//}

//MailApp.onEdit(subject,body);


/**
 * A special function that inserts a custom menu when the spreadsheet opens.
 */
function onOpen() {
  var menu = [{name: 'Get Email', functionName: 'getEmail_'}];
  SpreadsheetApp.getActive().addMenu('Print Email', menu);
  var availbl = [{name: 'Parse Availab', functionName: 'parseLunchAvailability_'}];
  SpreadsheetApp.getActive().addMenu('Parse availability', availbl);
}

function parseLunchAvailability_() {
  var ss = SpreadsheetApp.getActive();
  var sheet = ss.getSheetByName('Sheet3');
  var range = sheet.getDataRange();
  var values = range.getValues();
    
  for (var row = 2; row < values.length; row++) {
    var range = sheet.getRange([row], 9);
    if (values[row][8] != ""){
      range.setValue(values[row][8] + ', lunchtime');
    }
  }
}
  

function getEmail_() {
  var ss = SpreadsheetApp.getActive();
  var sheet = ss.getSheetByName('Form Responses 1');
  var range = sheet.getDataRange();
  var values = range.getValues();
  
  //Browser.msgBox("data in cell " + values[1][1]);
  
  //for (var row = 1; row < values.length; row++) {
    //var email = values[row][1];
    var email = "sam@thebughunter.com.au";
    //Browser.msgBox("data in cell " + values[row][1]);
    MailApp.sendEmail( email,
                      "You've Been Accepted Into MenorMatch!",
                      "Congratulations! You have been accepted as a mentor. \n\n We have set up a profile page for you, find it at https://bughuntersam.com/profile-page/ \nFeel free to edit your profile. \n\nRegards, \nMentorMatch"
                      //"Welcome to MentorMatch!",
                      //'Thanks for registering! \nKeep an eye on your emails we will match you with a mentoring group soon.\n\nRegards, \nMentorMatch '
    );
    //print each email
   // for (var col =1; col < values.length; col++) {
      //Browser.msgBox("data in cell " + values[row][col]);
    //}
  //}
}

