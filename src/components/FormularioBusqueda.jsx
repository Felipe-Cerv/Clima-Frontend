import React from "react";

const FormularioBusqueda = ({ city, setCity, onSearch, loading }) => {
    const handleSubmit = (e) => {
        e.preventDefault();
        onSearch();
    };

    return (
        <form onSubmit={handleSubmit} aria-label="Formulario de búsqueda">
            <label htmlFor="cityInput" className="form-cozy fw-semibold">
                Busca una ciudad
            </label>

            <div className="input-group mb-3">
                <input
                    id="cityInput"
                    type="text"
                    className="form-control"
                    placeholder="Ej: Culiacán, Los Mochis, Mazatlán..."
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                    required
                />

                <button
                    className="btn btn-primary"
                    type="submit"
                    disabled={loading || !city.trim()}
                >
                    {loading ? "Buscando..." : "Buscar"}
                </button>

            </div>
        </form>
    );
};

export default FormularioBusqueda;
