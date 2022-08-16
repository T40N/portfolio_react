import Header from "./components/Header/Header";
import WelcomeSection from "./components/WelcomeSection/WelcomeSection";

function App() {
  return (
    <>
      <div className={styles}>
        <Header />
        <WelcomeSection />
      </div>
    </>
  );
}

const styles = `
  relative
  w-[100vw]
  h-[100vh]
  flex
  justify-center
  items-center
  bg-slate-100
`;

export default App;
