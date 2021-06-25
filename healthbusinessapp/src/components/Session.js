import React from 'react'

const Session = ({img}) => {
    return (
        <div className="session-container">
            <section className="session-content">
                <img className="session-img" src={img} alt="" />
                <h1 className="session-header">Try a session for free and see if it’s right for you.</h1>
                <p className="session-message">There’s no commitment, pressure, or obligation.</p>
            </section>
        </div>
    )
}

export default Session
