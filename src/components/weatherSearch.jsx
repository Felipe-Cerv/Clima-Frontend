import React, { useState } from 'react';
import axios from 'axios';
const WeatherSearch = () => {
  const [city, setCity] = useState('');
  const [weatherData, setWeatherData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSearch = async (e) => {
    e.preventDefault();
    if (!city.trim()) return;

    setLoading(true);
    setError(null);
    setWeatherData(null);

    try {
      // Asegúrate de que este puerto coincida con tu backend
      const response = await axios.get(`http://localhost:3003/api/v1/clima?city=${city}`);
      const result = response.data;
      if (!result.success) {
        throw new Error(result.msg || 'Error al buscar la ciudad');
      }
      console.log(result.data);
      setWeatherData(result.data);
      
      console.log(weatherData);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-8 col-lg-6">
          
          {/* --- TARJETA PRINCIPAL --- */}
          <div className="card shadow-lg border-0 rounded-4">
            <div className="card-body p-4">
              
              <h2 className="text-center mb-4 text-primary fw-bold">Clima App</h2>

              {/* --- FORMULARIO CON INPUT GROUP DE BOOTSTRAP --- */}
              <form onSubmit={handleSearch}>
                <div className="input-group mb-3">
                  <input
                    type="text"
                    className="form-control form-control-lg"
                    placeholder="Ej: Madrid, Bogotá..."
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                  />
                  <button 
                    className="btn btn-primary btn-lg" 
                    type="submit" 
                    disabled={loading}
                  >
                    {loading ? (
                      <span><span className="spinner-border spinner-border-sm me-2"></span>Buscando...</span>
                    ) : (
                      'Buscar'
                    )}
                  </button>
                </div>
              </form>

              {/* --- MENSAJE DE ERROR (ALERTA) --- */}
              {error && (
                <div className="alert alert-danger text-center" role="alert">
                  {error}
                </div>
              )}

              {/* --- RESULTADOS --- */}
              {weatherData && (
                <div className="mt-4 animate__animated animate__fadeIn">
                  
                  {/* Encabezado: Ciudad y Fecha */}
                  <div className="text-center mb-4">
                    <h3 className="fw-bold mb-0">{weatherData.ubicacion.ciudad}, {weatherData.ubicacion.pais}</h3>
                    <small className="text-muted">{weatherData.ubicacion.fecha_hora}</small>
                  </div>

                  {/* Sección Principal: Temp e Icono */}
                  <div className="d-flex justify-content-center align-items-center mb-4 p-3 bg-light rounded-3">
                    <div className="text-center me-4">
                      <img 
                        src={weatherData.actual.condicion.icono} 
                        alt="Icono clima" 
                        style={{ width: '80px', height: '80px' }} 
                      />
                      <p className="mb-0 fw-semibold text-capitalize">{weatherData.actual.condicion.texto}</p>
                    </div>
                    <div>
                      <h1 className="display-1 fw-bold mb-0">{weatherData.actual.temp_c}°</h1>
                      <p className="text-muted mb-0">Sensación: {weatherData.actual.sensacion_c}°</p>
                    </div>
                  </div>

                  {/* Grid de Detalles (4 columnas en PC, 2 en Móvil) */}
                  <div className="row text-center g-3">
                    
                    <div className="col-6 col-md-3">
                      <div className="p-2 border rounded h-100">
                        <small className="text-muted d-block">Mín / Máx</small>
                        <span className="fw-bold text-primary">
                          {weatherData.pronostico_dia.mintemp_c}° / {weatherData.pronostico_dia.maxtemp_c}°
                        </span>
                      </div>
                    </div>

                    <div className="col-6 col-md-3">
                      <div className="p-2 border rounded h-100">
                        <small className="text-muted d-block">Viento</small>
                        <span className="fw-bold">
                          {weatherData.actual.viento.velocidad_kmh} km/h
                        </span>
                      </div>
                    </div>

                    <div className="col-6 col-md-3">
                      <div className="p-2 border rounded h-100">
                        <small className="text-muted d-block">Humedad</small>
                        <span className="fw-bold">
                          {weatherData.actual.atmosfera.humedad}%
                        </span>
                      </div>
                    </div>

                    <div className="col-6 col-md-3">
                      <div className="p-2 border rounded h-100">
                        <small className="text-muted d-block">Salida Sol</small>
                        <span className="fw-bold">
                          {weatherData.pronostico_dia.salida_sol}
                        </span>
                      </div>
                    </div>

                  </div>
                  {/* Fin Grid Detalles */}

                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WeatherSearch;