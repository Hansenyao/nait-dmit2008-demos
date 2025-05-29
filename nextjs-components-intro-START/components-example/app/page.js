import HeaderPage from "@/components/HeaderPage";
import Card from "@/components/Card";
import Image from "next/image";

export default function Home() {
  return ( <>
    <HeaderPage color="green">Home</HeaderPage>

    <Card title="title" img="logo.png">
      some text here
    </Card>
  </>
  );
}
