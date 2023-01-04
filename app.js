// 1 - use of this inside the inner function using bind ,call and fat arrow function
// in classes
// in constructor
this.name="Dayal"
// document.write(window.name)
const getname= function(){// this inside function
 document.write(this.name)
}
getname()
this.sname={
 name:"this inside object",  //this inside object
 getname(){
 document.write(this.name)
}
}   
this.sname.getname()
let rname={
 name:"this inside object",  //this inside object
 getname(){
 document.write(this.name)
}
}   
rname.getname()
const outfn=function(){
 const innfn = ()=>{
  document.write(this.name) // inside innerfunction
 }
 innfn()
}
outfn()
let newname=function(n){
 this.name=`${n}s name`
}
newname.prototype. getname=function(){ // using constructor
 document.write(this.name)}
const j = new newname("jill")
j.getname()
class newname1{
 constructor(n){
 this.name=`${n}s class`
}
getname(){ // using constructor
 document.write(this.name)
}
}
const j1 = new newname1("jillaajjj")
j1.getname()
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////

class Student{
  static count=0
  constructor(name,age,phoneNumber,boardmarks){
    this.name=name
  this.age=age
    this.phoneNumber=phoneNumber
    this.boardmarks=boardmarks
    Student.studentCount()
  }
  static studentCount(){
    return(Student.count++)
  }
  eligible(){
    if(this.boardmarks>=40){
document.write(this.name + " is eligible ")
    }else{
      document.write(this.name + " is not eligible ")
    }
  }
}
const s1=new Student("student 1",22,111111,40)
const s2=new Student("student 2",23,222222,41)
const s3=new Student("student 3",21,333333,22)
const s4=new Student("student 4",26,444444,5)
const s5=new Student("student 5",29,555555,400)
const s6=new Student("student 5",29,555555,400)
s1.eligible()
s2.eligible()
s3.eligible()
s4.eligible()
s5.eligible()
document.write(Student.studentCount())

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
class Student{
  constructor(name,age,boardmarks){
    this.name=name
    this.age=age
    this.boardmarks=boardmarks
  }
  eligible=(placementage)=>{
    if(this.boardmarks>=placementage){
document.write(this.name + " is eligible ")
    }else{
      document.write(this.name + " is not eligible ")
    }
  }
}
const s11=new Student("student 1",22,40)
const s22=new Student("student 2",23,41)
const s33=new Student("student 3",21,22)
const s44=new Student("student 4",26,5)
const s55=new Student("student 5",29,400)
s11.eligible(40)
s22.eligible(40)
s33.eligible(40)
s44.eligible(40)
s55.eligible(40)