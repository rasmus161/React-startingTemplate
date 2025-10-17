// main imports
import { Footer } from "@/componets/Ui/Footer/Footer";
import { Header } from "@/componets/Ui/header/header";

// section imports

import { Outlet } from "react-router-dom";

// dev Notes
// - add some fonts to use
// - add style for dark mode
// - fix section not filling hole width  as intended
// - add navigation into header component
// - make a simple wireframe to plans/wireframes as a starting point + example

export default function App() {
  return (
    <div className="mx-auto flex h-full min-h-screen max-w-[1500px] flex-col bg-gray-50">
      <Header className="bg-gray-400" />

      <main>
        {/* main section */}
        <Outlet />
      </main>
      <Footer className="bg-gray-400">
        <p> Footer here</p>
      </Footer>
    </div>
  );
}
