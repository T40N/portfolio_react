import ProfileImage from "./ProfileImage/ProfileImage";

const WelcomeSection = () => {
  return (
    <section className="flex justify-around w-full h-1/2">
      <ProfileImage />
      <h1 className="text-center text-2xl font-bold">Hello World!</h1>
    </section>
  );
};

export default WelcomeSection;
