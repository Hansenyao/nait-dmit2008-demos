import { Paper, Button, Card, Stack, TextField, Typography, CardActions } from "@mui/material";
import { useState } from "react";

export default function TodoList() {
    const [todoText, setTodoText] = useState("");
    const [todos, setTodos] = useState([]);

    return (
        <>
            <Paper sx={{m:2,p:2}}>
                <Stack direction={"row"} spacing={2}>
                    <TextField 
                        label="New Todo" 
                        fullWidth sx={{flexGrow:2}}
                        value={todoText}
                        onChange={(e)=>setTodoText(e.target.value)}
                    />
                    <Button variant="contained" 
                            onClick={()=>{
                                setTodos([...todos, todoText])
                                setTodoText("")
                            }}
                    >
                        Add
                    </Button>
                </Stack>
            </Paper>
            <Paper sx={{m:2,p:2}}>
                <Stack>
                    {todos.map((item, index)=>{
                        return (<Card sx={{p:1,m:1}} key={index}>
                            <Typography variant="h3">{item}</Typography>
                            <CardActions>
                                <Button
                                    /* Remove an item from list */
                                    onClick={()=>{
                                        /* Using filter to remove a item from list */
                                        //setTodos([...todos.filter((x => x != item))])
                                        /* Or use splice to remove item by index */
                                        var removed = todos.splice(index, 1)
                                        setTodos([...todos])
                                    }}
                                >
                                    Delete
                                </Button>
                            </CardActions>
                        </Card>)
                    })}
                </Stack>
            </Paper>
        </>
    );
}