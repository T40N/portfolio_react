import Header from "./components/Header/Header";
import WelcomeSection from "./components/WelcomeSection/WelcomeSection";

function App() {
  return (
    <>
      <div className="relative w-[100vw] h-[100vh] flex justify-center items-center bg-slate-100">
        <Header />
        <WelcomeSection />
      </div>
    </>
  );
}

export default App;
