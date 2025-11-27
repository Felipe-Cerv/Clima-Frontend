import React from "react";

const AlertaError = ({ mensaje }) => (
    <div
        className="alert alert-danger text-center"
        role="alert"
        aria-live="assertive"
    >
        {mensaje}
    </div>
);

export default AlertaError;
