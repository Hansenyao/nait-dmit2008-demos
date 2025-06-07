
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

export default function Faqs({data}) {
  return (
    <div>
      {data.map((item,index)=><Accordion key={index}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          <Typography component="span">{item.question}</Typography>
        </AccordionSummary>
        <AccordionDetails>
          {item.answer}
        </AccordionDetails>
      </Accordion>)}
      
    </div>
  )
}
