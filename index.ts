type data = 
{
 name: string
 age:number
 mature:boolean
}
  

const users : data = 
    {
        name:"Bat",
        age:20,
        mature:true
    }


// console.log(users);

const json = JSON.parse("10")
// console.log(typeof json);

let item : unknown = true
item = "string"
// console.log(item);

let a : undefined = undefined
// console.log(typeof a);

let b : null = null 
// console.log(typeof b);

const names : string[] = []

names.push("Bat" , "Bold" , "Borj")
// console.log(names);

let arr : [number , string , boolean]
arr = [ 1 , "this is array" , true]
arr.push("added string")
// console.log(arr);

const graph: [number, number] = [55.2, 41.3];
const [x, y] = graph;
// console.log(graph);

enum StatusCodes {
    NotFound = 404,
    Success = 200,
    Accepted = 202,
    BadRequest = 400
  }
//   console.log(StatusCodes.Accepted);

interface cube {
    a:number
    s:number
    
}

interface addColor extends cube {
    color : string
}

const Cube:addColor = {
    a : 5 ,
    s : 125,
    color : "red"

}
// console.log(Cube);

function print (res: string | number){
    // console.log(`response: ${res}`);
}
print(123)
print("friends")




  












