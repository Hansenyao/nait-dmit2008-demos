import Avatar from '@mui/material/Avatar';

import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';

import Typography from '@mui/material/Typography';

import DeleteIcon from '@mui/icons-material/Delete';
import EditSquareIcon from '@mui/icons-material/EditSquare';
import IconButton from '@mui/material/IconButton';
import TextField from '@mui/material/TextField';
import SaveIcon from '@mui/icons-material/Save';
import { useState } from 'react';
import Stack from '@mui/material/Stack';

export default function AdaptationReviewCard(props) {
  const [editMode,setEditMode]=useState(false);
  const [form,setForm]=useState({title:props.title,comment:props.comment,rating:props.rating})

  return <>{editMode==false?(<Card sx={{mt: 2 }}>
    <CardHeader
      avatar={
        <Avatar sx={{ bgcolor: 'blue' }} aria-label="recipe">
          {props.rating}
        </Avatar>
      }
      
      title={
        <Typography variant="body2" color="text.secondary">
          {props.title}
        </Typography>
      }
      action={<>
        <IconButton onClick={()=>{props.onDelete(props.id)}}><DeleteIcon/></IconButton>  
        <IconButton onClick={()=>{setEditMode(true)}}><EditSquareIcon/> </IconButton>
        </>      
      }
      
    />
    <CardContent>
      <Typography variant="body2" color="text.secondary">
        {props.comment}
      </Typography>
    </CardContent>
  </Card>):
  (<Card sx={{mt: 2 }}>
    <CardHeader
           
      title={
        <TextField id="standard-basic" variant="standard" fullWidth value={form.title} 
        onChange={(e)=>setForm({...form,title:e.target.value})}/>
      }
      action={<>
        <IconButton onClick={()=>{
          //some code for editing
          props.onEdit(props.id,form.title,form.comment,form.rating);
          setEditMode(false);
        }}><SaveIcon/> </IconButton>
        </>      
      }
      
    />
    <CardContent>
      <Stack>
        <TextField id="standard-basic" variant="standard" value={form.comment} 
        onChange={(e)=>setForm({...form,comment:e.target.value})}/>
        <TextField id="standard-basic" variant="standard" value={form.rating} 
        onChange={(e)=>setForm({...form,rating:e.target.value})}/>
      </Stack>
    </CardContent>
  </Card>)
  
  }</>
}
