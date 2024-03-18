export default function Home() {
  return (
    <div
      style={{
        width: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        marginTop: 50,
        flexDirection: "column",
      }}
    >
      <p>Hola mundo</p>
      <div style={{ marginTop:10}}>
        <button onClick={() => alert("Bienvenidos")}>click aqui</button>
      </div>
    </div>
  );
}
