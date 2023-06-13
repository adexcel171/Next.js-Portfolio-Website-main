import Head from "next/head";
import styles from "@/styles/Projects.module.css";
import Card from "@/components/Card";
import Showcase from "@/components/Showcase";

function ProjectsPage() {
  return (
    <>
      <Head>
        <title>My Projects</title>
        <meta name="description" content="Couple of my projects" />
      </Head>
      <Showcase image="/images/code_007.jpg" position="center" />
      <div className={styles.projects}>
        <h2>my projects..</h2>
      </div>
      <main className={styles.projects_container}>
        <Card
          img="/images/thunder.jpg"
          date="25 Oct 2020"
          lang="Html, CSS, JavaScript"
          title="Weather App"
          description="Weather App built with  Html, Css, and Vanilla JavaScript, external Api from openweathermap.org
          Daily weather(cloudiness, temp) around the world, for the city selected by the user."
          link="https://weather-app-excel.netlify.app/"
          git="https://github.com/adexcel171/Weather-App-main"
        />
       
        <Card
          img="/images/online school.jpg"
          date="5 May 2021"
          lang="React.js, Css"
          title="Online school Website"
          description="Full Responsive React website built with React.js, React icons, scroll, and React router."
          link="https://excelonline-education.netlify.app/"

          git="https://github.com/adexcel171/Online-Education"
        />
        <Card
          img="/images/404_006.jpg"
          date="15 June 2021"
          lang="Next.js"
          title="Portfolio Website"
          description="Fully Responsive Website Built with Next.js(newest technology based on React.js) and react icons library. Personal portfolio page, about my biggest passion (programing, web development). Couple of few projects which I created as a self-taught programmer."
          link="/"
          git="https://github.com/"
        />
       
   
        <Card
          img="/images/wine-pic.jpg"
     
          date="18 July 2021"
          lang="React"
          title="Wine Restaurant"
          description="wine/cocktail website ui built with next.js"
          link="https://excel-menu.netlify.app/"
          git="https://github.com/adexcel171/"
        />
        <Card
          img="/images/e commerce.jpg"
     
          date="31 dec 2022"
          lang=" MERN STACK"
          title=" Xcel$ e commerce website"
          description="E commerce website built with mern stack."
          link="https://excel-shop.netlify.app/"
          git="https://github.com/adexcel171/"
        />
        <Card
          img="/images/cusine.jpg"
     
          date="11 Feb 2023"
          lang="React"
          title="Excel Cuisine"
          description="beautiful fast food resturant made with Ractjs and  Tailwind css for styling"
          link="https://excel-cuisine.netlify.app/"
          git="https://github.com/adexcel171/"
        />
       
        
       
      
      </main>
    </>
  );
}

export default ProjectsPage;
