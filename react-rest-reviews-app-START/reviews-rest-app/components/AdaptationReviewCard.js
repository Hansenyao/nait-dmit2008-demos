import {Card, CardHeader, CardContent, Avatar, Typography, IconButton} from '@mui/material';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';

export default function AdaptationReviewCard(props) {
    return (
        <Card sx={{m:2}} key={props.index}>
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
                action={
                    <IconButton onClick={()=>props.onDelete(props.id)}>
                        <DeleteForeverIcon/>
                    </IconButton>
                }
            />
            <CardContent>
                <Typography variant="body2" color="text.secondary">
                    {props.comment}
                </Typography>
            </CardContent>
        </Card>
    )
}