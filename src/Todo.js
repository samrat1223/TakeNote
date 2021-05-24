import { ListItem, ListItemText } from '@material-ui/core'
import React from 'react'

export default function TodoListItem({todo,inprogress,id}) {
    return (
        <div>
           <ListItem>
               <ListItemText primary={todo} secondary={inprogress ? "InProgress" : "Hurray!!Done"} />
           </ListItem>
        </div>
    )
}

