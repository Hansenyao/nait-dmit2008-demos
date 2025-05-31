import Head from "next/head";
import SimpsonsCharacters from "@/components/SimpsonsCharacters";
import SimpsonsCharacters2 from "@/components/SimpsonCharacters2";
import Simpsons from "@/components/Simpsons";
import PersonCard from "@/components/PersonCard";
import People from "@/components/People";

const SIMPSON_CHARACTERS = [
	"Homer Simpson",
	"Bart Simpson",
	"Marge Simpson",
	"Mr. Burns",
	"Lisa Simpson",
	"Apu Nahasapeemapetilon",
	"Sideshow Bob",
	"Milhouse Van Houten",
	"Ned Flanders",
];

const people = [
  {
    pic: "https://randomuser.me/api/portraits/men/11.jpg",
    fname: "Ali",
    lname: "Ghasemi",
    email: "ali.ghasemi@example.com",
    tell: "780-123-4567"
  },
  {
    pic: "https://randomuser.me/api/portraits/women/12.jpg",
    fname: "Sara",
    lname: "Nazari",
    email: "sara.nazari@example.com",
    tell: "587-234-5678"
  },
  {
    pic: "https://randomuser.me/api/portraits/men/13.jpg",
    fname: "Reza",
    lname: "Moradi",
    email: "reza.moradi@example.com",
    tell: "403-345-6789"
  },
  {
    pic: "https://randomuser.me/api/portraits/women/14.jpg",
    fname: "Leila",
    lname: "Farhadi",
    email: "leila.farhadi@example.com",
    tell: "825-456-7890"
  },
  {
    pic: "https://randomuser.me/api/portraits/men/15.jpg",
    fname: "Hamed",
    lname: "Karimi",
    email: "hamed.karimi@example.com",
    tell: "780-567-8901"
  },
  {
    pic: "https://randomuser.me/api/portraits/women/16.jpg",
    fname: "Niloofar",
    lname: "Bahrami",
    email: "niloofar.bahrami@example.com",
    tell: "587-678-9012"
  },
  {
    pic: "https://randomuser.me/api/portraits/men/17.jpg",
    fname: "Majid",
    lname: "Rahmani",
    email: "majid.rahmani@example.com",
    tell: "403-789-0123"
  },
  {
    pic: "https://randomuser.me/api/portraits/women/18.jpg",
    fname: "Azadeh",
    lname: "Khosravi",
    email: "azadeh.khosravi@example.com",
    tell: "825-890-1234"
  },
  {
    pic: "https://randomuser.me/api/portraits/men/19.jpg",
    fname: "Mehdi",
    lname: "Ebrahimi",
    email: "mehdi.ebrahimi@example.com",
    tell: "780-901-2345"
  },
  {
    pic: "https://randomuser.me/api/portraits/women/20.jpg",
    fname: "Fatemeh",
    lname: "Javadi",
    email: "fatemeh.javadi@example.com",
    tell: "587-012-3456"
  }
];

export default function Home() {
  return (
    <>
      <SimpsonsCharacters />
      <SimpsonsCharacters2 data={SIMPSON_CHARACTERS}/>


      <Simpsons color="red">{SIMPSON_CHARACTERS}</Simpsons>

      <People data={people}></People>

    </>
  );
}

