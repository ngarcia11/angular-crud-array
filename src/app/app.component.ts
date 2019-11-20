import { Component } from '@angular/core';
import { User } from './user';
import { Usuarios } from './usuarios';
import { People } from './people';
@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  title = 'Angular';

users : any = [{
    num : 1,
    id : 700093,   
    name : 'Norlan Garcia',
    address : 'Colonia Kennedy'
    }];
  constructor() {
    let persona : People;
    
    persona :{
      id: 1;
      nombre: "Norlan Garcia";
      direccion: 21;
      age: "";
    }
  }

  selectedUser: any = {num:0, id : '', name: '', address: ''};

  openForEdit(user: any, btn): void 
  {
    this.selectedUser = user;
    btn.value = "Modificar";
  }


  addUser(newid, newname, newaddress, btn){
    if(this.selectedUser.num === 0) 
    {
      let n = this.selectedUser.num = this.users.length + 1;
    this.users.push({num : n.value , id : newid.value, name: newname.value, address: newaddress.value});
    newname.value = "";
    newid.value = "";
    newaddress.value = "";
    btn.value = "Guardar";
    }
    this.selectedUser = {num: 0, id : '', name: '', address: ''};
     btn.value = "Guardar";
    return false;
  }
    deleteUser(user) {
      if(confirm('Estas seguro de eliminar el usuario?'))
      {
      for(let i=0; i < this.users.length; i ++){
        if (user == this.users[i]){
          this.users.splice(i,1);
        }
      }
    }
      }
}