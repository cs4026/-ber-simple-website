export function load(){
  try{
    let genesis = sessionStorage.getItem('genesis');
    return genesis;
  }catch(err){
    console.log("Could not find genesis state",err);
    return null;
  }
}

export function save(){
  try{
    sessionStorage.setItem('genesis',false)
  }catch(err){
    console.log("Could not save genesis state",err);
    return null
  }
}
