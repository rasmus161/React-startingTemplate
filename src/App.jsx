// main imports
import { Footer } from "@/componets/Ui/Footer/Footer";
import { Header } from "@/componets/Ui/header/header";
import { Section } from "@/componets/Ui/GenaralUi";

// section imports
import { ShowContainer } from "@/componets/Ui/sections/showContainer";

// dev Notes
// - add some fonts to use + take a look at the implementation of fonts is it correct and working well
// - add style for dark mode
// - add navigation into header component

function App() {
  return (
    <div className="max-w-[1500px] flex flex-col  bg-gray-50 min-h-screen h-full mx-auto">
      <Header className="bg-gray-400" />

      <main>
        {/* main section */}
        <Section className="bg-gray-200 min-h-50 ">
          <h1 className="text-2xl text-center ">
            Vite + React + Router + tailwind css
          </h1>
        </Section>
        {/*  containers of content*/}
        <Section>
          <ShowContainer />
        </Section>
      </main>
      <Footer className=" bg-gray-400">
        <p> Footer here</p>
      </Footer>
    </div>
  );
}

export default App;
