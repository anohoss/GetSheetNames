function doGet(e) {
  let ssUrl = getSsUrlFrom(e.parameter.id);
  let ignoreSheetNames = e.parameter.ignore ? e.parameter.ignore.split(',') : '';
  return getSheetNames(ssUrl, ignoreSheetNames);
}

function getSsUrlFrom(ssId){
  return 'https://docs.google.com/spreadsheets/d/SPREADSHEETID/edit?usp=sharing'.replace("SPREADSHEETID", ssId);
}