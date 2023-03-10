import { Intro } from "../components/Intro/Intro";
import { About } from "../components/About/About";
import { Team } from "../components/Team/Team";
import { Faq } from "../components/Faq/Faq";
import { Show } from "../components/Show/Show";
import { Roadmap } from "../components/Roadmap/Roadmap";

export const Home = () => {

  return (
    <>
      <div id="home"><Intro /></div>
      <div id="about"><About /></div>
      <div id="roadmap"><Roadmap /></div>
      <div id="show"><Show /></div>
      <div id="team"><Team /></div>
      <div id="faq"><Faq /></div>
    </>
  )
}