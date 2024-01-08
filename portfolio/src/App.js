import { Hero } from "./components/hero/hero";
import { Navbar } from "./components/navbar/navbar";
import { Skills } from "./components/skills/skills";
import { Projects } from "./components/projects/projects";
import { About } from "./components/About/about";
import { Contactme } from "./components/contact me/contactme";
import { Footer } from "./components/footer/footer";
import { useRef, useEffect, useState } from "react";
import { SnackbarProvider } from "notistack";
function App() {
  const myref = useRef();
  const heroref = useRef();

  // const [elementisvisible, setelementisvisible] = useState();
  const [herovisible, set_herovisible] = useState();

  // useEffect(() => {
  //   const observer = new IntersectionObserver((entries) => {
  //     const entry = entries[0];

  //     setelementisvisible(entry.isIntersecting);
  //   });
  //   observer.observe(myref.current);
  // }, []);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      const entry = entries[0];
      set_herovisible(entry.isIntersecting);
    });
    observer.observe(heroref.current);
  }, []);

  return (
    <div>
      <Navbar hero={herovisible} />
      <div ref={heroref}>
        <Hero />
      </div>
      <Skills />
      <div ref={myref}>
        <Projects />
        <About />
        <SnackbarProvider
          maxSnack={1}
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "center",
          }}
        >
          <Contactme />
        </SnackbarProvider>
        <Footer />
      </div>
    </div>
  );
}

export default App;
