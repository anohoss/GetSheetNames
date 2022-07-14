function doGet(e) {
  return getSheetNames(e.parameter.id, e.parameter.ignore ? e.parameter.ignore.split(',') : '');
}