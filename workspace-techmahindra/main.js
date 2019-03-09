getPersons= function(){
    var personList=[];
    if(localStorage.getItem('persons') !=null){
        personList=JSON.parse(localStorage.getItem('persons'));
    }
    return personList;
}
addPerson=function(name,email,phone,address){
var personList=getPersons();
var person={};
person.name=name;
person.email=email;
person.phone=phone;
person.address=address;
personList.push(person);
console.log('email :' + id);
console.log('name :' + name);
console.log('email :' + email);
console.log('phone :' + phone);
console.log('address :' + address);
localStorage.setItem('persons',JSON.stringify(personList));
}
addPerson('mano','mano@email.com','132456','india');
deleteAllPerson= function(){
localStorage.clear('persons');
console.log("empty:" + localStorage.getItem('persons') );
}

showPerson=function(){
    var personList=getPersons();
    console.log('list :' + personList.length);
    if(personList>0){
        console.log(personList.length);
        for(var i=0;i<personList.length;i++){
            console.log('name'+ personList[i].name + personList[i].email + personList[i].phone + personList[i].address)
        }
    }

}
deletePerson= function(){

    localStorage.setItem('persons',JSON.stringify(personList));
    persons.pop();
    localStorage.setItem('persons',JSON.stringify(personList));
    console.log('updated list :' +localStorage.getItem('persons'));
}


