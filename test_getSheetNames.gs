function requestDoGet(){
  const e = {
    parameter:{
      id: '1tIA6NfrNiQ_ZvDZmCMfyPbzOqxPBJujBA4-zJLePQFo',
      //ignore: '',
    }
  }

  let result_json = doGet(e);
  Logger.log(result_json.getContent());
}