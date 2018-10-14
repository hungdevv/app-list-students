var classes = [
    {
        id: 0,
        name:'1A',
        teacher: 0
    },
    {
        id: 1,
        name: '2A',
        teacher: 1
    }
];
var students = [
    { id: 0, name: 'hung', height:170, class: 0},
    { id: 1, name: 'hungg', height:170, class: 1},
    { id: 1, name: 'hungg', height:170, class: 1},
    { id: 1, name: 'hungg', height:170, class: 1}
];
function getStudentsInClass(className){
    var classObject = classes.find(function(x){
        console.log(x.name);
        return x.name === className;
    });
    console.log(classObject,'=====');
    var studentsInClass = students.filter((student)=>{
        return student.class === classObject.id
    });
    return studentsInClass;
}
var studenstInClass = getStudentsInClass('2A');
console.log(studenstInClass);
