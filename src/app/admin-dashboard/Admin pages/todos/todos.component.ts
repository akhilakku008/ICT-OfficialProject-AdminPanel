import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss']
})
export class TodosComponent implements OnInit {

  // todoArray=[];
  todo = []
  todoForm: any

  todoArray = ["hello world","just a trial ","new course added","new course added","new course added","new course added"]
 
  constructor() { }
  



  ngOnInit(): void {
  }


  addTodo(value:any){
    if(value!==""){
     this.todoArray.push = value
     this.todoForm.resetForm()
    //console.log(this.todos) 
  }else{
    alert('Field required **')
  }
    
  }

  /*delete item*/
  deleteItem(todo:any){
  	for(let i=0 ;i<= this.todoArray.length ;i++){
  		if(todo== this.todoArray[i]){
  			this.todoArray.splice(i,1)
  		}
  	}
  }

  // submit Form
  todoSubmit(value:any){
     if(value!==""){
    this.todoArray.push = value.todo
     //this.todoForm.reset()
    }else{
      alert('Field required **')
    }
    
  }
  
}
