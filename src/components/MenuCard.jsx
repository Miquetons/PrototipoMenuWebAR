function MenuCard({ item }) {
  return (
    <article className="menu-card">
      <img className="menu-thumb" src={item.image} alt={item.name} />

      <div className="menu-content">
        <h3>{item.name}</h3>
        <p>{item.description}</p>

        <div className="menu-footer">
          <strong>{item.price}</strong>
          <button
            type="button"
            className="btn-ar btn-ar-disabled"
            aria-label={`AR de ${item.name} proximamente`}
            title="Modelos AR proximamente"
            disabled
          >
            <img src="/assets/IMG/copia.png" alt="Icono AR" />
            <span>Pronto</span>
          </button>
        </div>
      </div>
    </article>
  );
}

export default MenuCard;
