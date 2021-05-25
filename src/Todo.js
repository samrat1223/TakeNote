import { ListItem, ListItemText,Button } from '@material-ui/core'
import React from 'react'
import { db } from './firebase_config'

export default function TodoListItem({todo,inprogress,id}) {

    function toggleInProgress(){
        db.collection("addnotes").doc(id).update({
            inprogress: !inprogress
        });
    }

    function deleteTodo(){
        db.collection("addnotes").doc(id).delete();
    }

    return (
        <div style={{display:"flex"}}>
           <ListItem>
               <ListItemText primary={todo} secondary={inprogress ? "InProgress" : "Hurray!!Done"} />
           </ListItem>

           <Button onClick={toggleInProgress}>{inprogress ? "Done" : "UnDone"}</Button>
           <Button onClick={deleteTodo}>X</Button>
        </div>
    )
}

