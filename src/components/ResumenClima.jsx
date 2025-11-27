import React from "react";

const ResumenClima = ({ data }) => {
    const { location, current } = data;

    return (
        <div className="card shadow-sm mt-4 cozy-card">
            <div className="card-body text-center">
                <h3 className="fw-bold">
                    {location.city}, {location.region}, {location.country}
                </h3>
                <p className="text-muted">{location.localtime}, {location.timezone}</p>

                <h1 className="display-2 fw-bold">{current.temp_c}°C</h1>
                {/* --- ICONO DEL CLIMA --- */}
                {current.condition_icon && (
                    <div className="mb-3">
                        <img
                            src={current.condition_icon}
                            alt={current.condition}
                            width={90}
                            height={90}
                        />
                    </div>
                )}
                <div className="row text-center">
                    <div className="col-6">
                        <small className="text-muted">Latitud</small>
                        <h4 className="fw-bold">{location.lat ?? "N/A"}</h4>
                    </div>

                    <div className="col-6">
                        <small className="text-muted">Longitud</small>
                        <h4 className="fw-bold">{location.lon ?? "N/A"}</h4>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default ResumenClima;
