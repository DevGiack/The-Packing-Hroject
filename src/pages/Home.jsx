import { Intro } from "../components/Intro/Intro";
import { About } from "../components/About/About";
import { Team } from "../components/Team/Team";
import { Faq } from "../components/Faq/Faq";

export const Home = () => {

  return (
    <>
      <Intro />
      <About />
      <Team />
      <Faq />
    </>
  )
}