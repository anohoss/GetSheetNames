function getSheetNames(ssUrl, ignoreSheetNames) {
  let ss = SpreadsheetApp.openByUrl(ssUrl);
  return ContentService.createTextOutput(
    ss.getSheets()
    .map(value => value.getName())
    .filter(value => !ignoreSheetNames.includes(value))
    .join(',')
    );
}
