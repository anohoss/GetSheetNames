function getSheetNames(ssId, ignoreSheetNames) {
  let ss = SpreadsheetApp.openById(ssId);
  return ContentService.createTextOutput(
    ss.getSheets()
    .map(value => value.getName())
    .filter(value => !ignoreSheetNames.includes(value))
    .join(',')
    );
}
