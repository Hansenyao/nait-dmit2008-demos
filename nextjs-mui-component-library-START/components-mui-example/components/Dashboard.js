import { Paper, Stack, Typography } from "@mui/material";
import Faqs from "./Faqs";
import CityCard from "./CityCard";
import CityCardContainer from "./CityCardContainer";

export default function Dashboard() {
  return (
    <div>
        <Stack spacing={2} sx={{p:3}}>
            <Paper sx={{p:2}}> 
                <Typography variant="h4" component="h4" sx={{m:2}}>Faqs</Typography>
                <Faqs data={faqs}/>
            </Paper>
            <Paper sx={{p:2}}> 
                <CityCardContainer data={cities}/>
            </Paper>
        </Stack>
    </div>
  )
}
const cities = [
  {
    title: "Edmonton",
    image: "/cities/edmonton.jpg",
    description: "Capital of Alberta, known for its vast river valley park system and vibrant festival scene."
  },
  {
    title: "Calgary",
    image: "/cities/calgary.jpg",
    description: "Home to the Calgary Stampede, it is a major urban center in Alberta near the Rocky Mountains."
  },
  {
    title: "Toronto",
    image: "/cities/toronto.jpg",
    description: "The largest city in Canada, known for its diversity, business hub, and the CN Tower."
  },
  {
    title: "Montreal",
    image: "/cities/montreal.jpg",
    description: "A cultural hub in Quebec with a strong French influence, famous for its cuisine and festivals."
  },
  {
    title: "Ottawa",
    image: "/cities/ottawa.jpg",
    description: "Canada’s capital, home to Parliament Hill and many national museums and institutions."
  },
  {
    title: "Vancouver",
    image: "/cities/vancouver.jpg",
    description: "A west coast city in British Columbia known for its natural beauty and multicultural population."
  },
  {
    title: "Halifax",
    image: "/cities/halifax.jpg",
    description: "A historic port city in Nova Scotia, known for its maritime history and Atlantic coastline."
  }
];

const faqs = [
  {
    question: "What is React?",
    answer: "React is a JavaScript library for building user interfaces. It allows developers to create reusable UI components and efficiently update the DOM."
  },
  {
    question: "What is CSS-in-JS?",
    answer: "CSS-in-JS is a styling technique where CSS is written directly within JavaScript files, often scoped to components. This enables dynamic styling, co-location with components, and better modularity."
  },
  {
    question: "How does useState work in React?",
    answer: "useState is a React Hook that allows you to add state to functional components. It returns a state value and a function to update that value."
  },
  {
    question: "What is the difference between props and state?",
    answer: "Props are used to pass data from parent to child components and are read-only. State is managed within the component and can change over time."
  },
  {
    question: "What are React Hooks?",
    answer: "Hooks are functions that let you use state and other React features in functional components. Examples include useState, useEffect, and useContext."
  },
  {
    question: "What is JSX?",
    answer: "JSX stands for JavaScript XML. It is a syntax extension that allows you to write HTML-like code within JavaScript, which React transforms into elements."
  },
  {
    question: "What are the benefits of using CSS-in-JS?",
    answer: "Benefits include scoped styles, conditional styling, theme support, and co-location of styles with components for better maintainability."
  }
];

