import Head from "next/head";
import { IndexLayout } from "../../layout";

function About() {
  return (
    <>
      <h1 className="text-5xl">This is the about page</h1>
      <p className="mt-4 text-lg">There's really not much here</p>
    </>
  );
}
About.PageLayout = IndexLayout;

export default About;
