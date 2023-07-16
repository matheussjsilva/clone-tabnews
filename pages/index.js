function alerta() {
  window.alert("Falei para nao clicar");
}

function Home() {
  return (
    <main>
      <h1>Titulo h1</h1>

      <div>
        <ul>
          <li>item 1</li>
          <li>item 2</li>
          <li>item 3</li>
        </ul>
      </div>
      <button onClick={alerta}>Nao clique!</button>
    </main>
  );
}

export default Home;
