import React from "react";

const DetalleClima = ({ data }) => {
    const { forecast, current, location } = data;
    console.log(data);
    return (
        <div className="row mt-4 g-3">

            {/* --- Temp Máxima --- */}
            <div className="col-6 col-md-4">
                <div className="cozy-card p-3 text-center shadow-sm">
                    <small className="text-muted">Temperatura Máxima</small>
                    <h4 className="fw-bold text-primary">{forecast.max_temp_c}°C</h4>
                </div>
            </div>

            {/* --- Temp Mínima --- */}
            <div className="col-6 col-md-4">
                <div className="cozy-card p-3 text-center shadow-sm">
                    <small className="text-muted">Temperatura Mínima</small>
                    <h4 className="fw-bold text-primary">{forecast.min_temp_c}°C</h4>
                </div>
            </div>

            {/* --- Condición --- */}
            <div className="col-12 col-md-4">
                <div className="cozy-card p-3 text-center shadow-sm">
                    <small className="text-muted">Condición</small>
                    <h5 className="fw-bold">{current.condition_text}</h5>
                </div>
            </div>

            {/* --- Sensación térmica --- */}
            <div className="col-6 col-md-4">
                <div className="cozy-card p-3 text-center shadow-sm">
                    <small className="text-muted">Sensación térmica</small>
                    <h4 className="fw-bold">{current.feelslike_c}°C</h4>
                </div>
            </div>

            {/* --- Viento --- */}
            <div className="col-6 col-md-4">
                <div className="cozy-card p-3 text-center shadow-sm">
                    <small className="text-muted">Viento</small>
                    <h5 className="fw-bold">
                        {current.wind_kph ?? "N/A"} km/h ({current.wind_kph})
                    </h5>
                    <small className="text-muted">Dirección</small>
                    <h5 className="fw-bold">
                        {current.wind_dir ?? "N/A"}
                    </h5>
                </div>
            </div>

            {/* --- Humedad --- */}
            <div className="col-6 col-md-4">
                <div className="cozy-card p-3 text-center shadow-sm">
                    <small className="text-muted">Humedad</small>
                    <h4 className="fw-bold">
                        {current.humidity ?? "N/A"}%
                    </h4>
                </div>
            </div>
            {/* --- Visibilidad --- */}
            <div className="col-6 col-md-4">
                <div className="cozy-card p-3 text-center shadow-sm">
                    <small className="text-muted">Visibilidad</small>
                    <h4 className="fw-bold">
                        {current.visibility_km ?? "N/A"}km
                    </h4>
                </div>
            </div>

            {/* --- Presion --- */}
            <div className="col-6 col-md-4">
                <div className="cozy-card p-3 text-center shadow-sm">
                    <small className="text-muted">Presión</small>
                    <h4 className="fw-bold">
                        {current.pressure_mb ?? "N/A"} hPa
                    </h4>
                </div>
            </div>

            {/* --- Amanecer y atardecer --- */}
            <div className="col-6 col-md-4">
                <div className="cozy-card p-3 text-center shadow-sm">
                    <small className="text-muted">Amanecer</small>
                    <h4 className="fw-bold">
                        {forecast.sunrise ?? "N/A"}
                    </h4>
                    <small className="text-muted">Atardecer</small>
                    <h4 className="fw-bold">
                        {forecast.sunset ?? "N/A"}
                    </h4>
                </div>

            </div>
        </div>
    );
};

export default DetalleClima;
