import { useState } from "react";

export default function App() {
  const [people, setPeople] = useState([]);

  function addPerson() {
    const id = crypto.randomUUID();
    setPeople((prev) => [
      ...prev,
      { id, name: "Nueva persona", age: 0, gender: "other", isDeceased: false }
    ]);
  }

  return (
    <div style={{ fontFamily: "system-ui", padding: 24 }}>
      <h1 style={{ margin: 0 }}>SI VES ESTO, LA APP FUNCIONA</h1>
      <p style={{ marginTop: 8 }}>
        Botón de prueba: agrega personas (todavía no dibuja genogramas).
      </p>

      <button onClick={addPerson} style={{ padding: "10px 14px" }}>
        Agregar persona
      </button>

      <div style={{ marginTop: 16 }}>
        {people.length === 0 ? (
          <em>No hay personas todavía.</em>
        ) : (
          <ul>
            {people.map((p) => (
              <li key={p.id}>
                {p.name} ({p.age}) — {p.gender} {p.isDeceased ? "✖" : ""}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}
