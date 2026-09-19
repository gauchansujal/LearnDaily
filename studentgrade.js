let students = [
  { name: "sujal", marks: 78 },
  { name: "ram", marks: 45 },
  { name: "sita", marks: 91 },
  { name: "hari", marks: 32 }
];
function getResult(list){
    let result = [];
    for (let i = 0; i<list.length; i++){
        if(list[i].marks >= 40){
         list[i].status = "pass";
        }else{
            list[i].status = "fail";
        }
    }
    console.table(list);
    // return list;
}
getResult(students);