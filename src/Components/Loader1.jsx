import React from 'react'

const Loader1 = ({text, loaderColor}) => {
    return (
        <div className="d-flex m-5 align-items-center justify-content-center">
            <strong>{text}...</strong>
            <div className={`spinner-border spinner-border-sm text-${loaderColor} m-3`} role="status">
                <span className="visually-hidden">Loading...</span>
            </div>
        </div>
    )
}

export default Loader1