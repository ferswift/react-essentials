import reactImg from "../assets/react-core-concepts.png";

export const Header = () => {
  const reactDescriptions = [
    "Fundamental",
    "Crucial",
    "Core",
    "Vital",
    "Essential",
    "Key",
  ];

  const description =
    reactDescriptions[Math.floor(Math.random() * reactDescriptions.length)];

  return (
    <div>
      <header>
        <img src={reactImg} alt="Stylized atom" />
        <h1>React Essentials</h1>
        <p>
          {description} React concepts you will need for almost any app you are
          going to build!
        </p>
      </header>
    </div>
  );
};
