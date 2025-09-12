import { Footer } from "./componets/Ui/Footer";

function App() {
  // dev Notes
  // - add some fonts to use

  return (
    <div className="max-w-[1500px] flex flex-col  bg-gray-50 min-h-screen h-full mx-auto">
      <main>
        <h1 className="text-2xl text-center">
          Vite + React + Router + tailwind css
        </h1>
      </main>
      <Footer className=" bg-gray-400">
        <p> Footer here</p>
      </Footer>
    </div>
  );
}

export default App;
