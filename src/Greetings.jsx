function Greeting({ animals }) {
  const name = "Sonam";

  if (!animals) {
    return <div>Loading...</div>;
  }

  if (animals.length === 0) {
    return <div>There are no animals in the list!</div>;
  }

  return (
    <div>
      <h1>Test title</h1>
      <svg>
        <circle cx="25" cy="75" r="20" stroke="green" strokeWidth="2" />
      </svg>
      <p>{name}</p>
      <h2>Animals starting with L</h2>
      <ul>
        {animals.map((animal) => {
          return animal.startsWith("L") && <li key={animal}>{animal}</li>;
        })}
      </ul>
      <form>
        <input type="text" />
      </form>
    </div>
  );
}

export default Greeting;
