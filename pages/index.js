import Head from "next/head";
import Heading from "@/components/Heading";
import AboutPage from "./about";
import ProjectsPage from "./projects";
import BootcampsPage from "./bootcamps";
import ContactPage from "./contact";

export default function HomePage() {
  return (
    <>
      <Head>
        <title>Godswill Okenyi Portfolio</title>
        <meta name="This is a portfolio website made by Godswill Okenyi, Full stack Developer" content="Excel Mern Stack Developer" />
      </Head>
      <Heading />
      <AboutPage/>
      <ProjectsPage/>
      <BootcampsPage/>
      <ContactPage/>
    </>
  );
}
