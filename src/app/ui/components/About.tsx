const About = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 h-[40%] min-h-[35vh]">
      <div className="bg-aboutImage-dark bg-center bg-cover min-h-60"></div>
      <div className="md:px-12 py-16 px-8">
        <h2 className="text-lg font-bold uppercase tracking-[0.3em] mb-2">
          About our furniture
        </h2>
        <p className="text-gray-500">
          Our multifunctional collection blends design and function to suit your
          individual taste. Make each room unique, or pick a cohesive theme that
          best express your interests and what inspires you. Find the furniture
          pieces you need, from traditional to contemporary styles or anything
          in between. Product specialists are available to help you create your
          dream space.
        </p>
      </div>
      <div className="bg-aboutImage-light bg-center bg-cover min-h-60"></div>
    </div>
  );
};

export default About;
