import React, { useState } from "react";
import axios from "axios";
import FormularioBusqueda from "./components/FormularioBusqueda.jsx";
import ResumenClima from "./components/ResumenClima.jsx";
import DetalleClima from "./components/DetalleClima.jsx";
import AlertaError from "./components/AlertaError.jsx";
import Cargando from "./components/Cargando.jsx";

const App = () => {
  const [city, setCity] = useState("");
  const [weatherData, setWeatherData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const buscarClima = async () => {
    if (!city.trim()) return;

    setLoading(true);
    setError("");
    setWeatherData(null);

    try {
      const resp = await axios.get(
        `http://localhost:3003/api/v1/clima?city=${city}`
      );

      if (!resp.data.success) {
        throw new Error("Ciudad no encontrada");
      }

      setWeatherData(resp.data.data);
    } catch (err) {
      console.log(err);
      setError(err.response.data.msg || "Error en la búsqueda");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container p-4 cozy-card-master mt-5" style={{ maxWidth: "600px" }}>
      <h1 className="text-center mb-4 text-primary fw-bold">Clima App</h1>

      <FormularioBusqueda
        city={city}
        setCity={setCity}
        onSearch={buscarClima}
        loading={loading}
      />

      {loading && <Cargando />}

      {error && <AlertaError mensaje={error} />}

      {weatherData && (
        <>
          <ResumenClima data={weatherData} />
          <DetalleClima data={weatherData} />
        </>
      )}
    </div>
  );
};

export default App;
