// pages/index.js

export default function Home() {
  return (
    <div>
      <p>Hola mundo</p>
      <div style={{ marginTop: 10 }}>
        <button onClick={() => alert("Bienvenidos")}>click aqui</button>
      </div>
    </div>
  );
}
