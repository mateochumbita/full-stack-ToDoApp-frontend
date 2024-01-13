import axios from 'axios';

const baseUrl = "https://full-stack-todoapp-backend-q2n6.onrender.com"

//OBTENER 
const getAllToDo = (setToDo) =>{
    axios
    .get(baseUrl)
    .then(({data})=>{
        console.log(`data --->`,data);
        setToDo(data)
    })
}

//PUBLICAR
const addToDo = (text, setText, setToDo)=>{
    axios
    .post(`${baseUrl}/save`,{text})
    .then((data)=>{
        console.log(data);
        setText("")
        getAllToDo(setToDo)
    })
    .catch((err=> console.log(err)))

}


//ACTUALIZAR

const updateToDo = (toDoId, text, setToDo, setText, setIsUpdating)=>{
    axios
    .post(`${baseUrl}/update`,{_id: toDoId,text})
    .then((data)=>{
        setText("")
        setIsUpdating(false)
        getAllToDo(setToDo)
    }).catch((err)=>{
        console.log(err)
    })

}


const deleteToDo = (_id, setToDo)=>{
    axios
    .post(`${baseUrl}/delete`,{_id})
    .then((data)=>{
        console.log(data);
        getAllToDo(setToDo)
    }).catch((err)=>{
        console.log(err)
    })

}
export{getAllToDo, addToDo, updateToDo, deleteToDo}