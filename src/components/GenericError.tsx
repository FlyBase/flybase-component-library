import React from 'react';
import "../styles/GenericError.scss";

type GenericErrorProps = {};

const GenericError: React.FC<GenericErrorProps> = ({}) => {
    return (
        <div className="generic-error">
            An error has occurred. Please try again later, or <a href='/contact/email'>contact us if the problem
            persists</a>.
        </div>
    );
};

export default GenericError;