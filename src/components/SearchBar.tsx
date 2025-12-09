import { useNavigate } from "react-router-dom";
import { useState } from "react";

function SearchBar() {
  const [q, setQ] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate(`/coleccion?q=${encodeURIComponent(q)}`);
  }
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={q}
        onChange={e => setQ(e.target.value)}
        placeholder="Título o autor…"
      />
      <button type="submit">Buscar</button>
    </form>
  );
}

export default SearchBar;
