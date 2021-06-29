const Session = ({img}) => {
    return (
        <div className="session-container">
            <div className="session-img-container">
                <img className="session-img" src={img} alt="" />
                <section className="session-content">
                    <h1>Try a session for free and see if it’s right for you.</h1>
                    <p>There’s no commitment, pressure, or obligation.</p>
                </section>
            </div>
        </div>
    )
}

export default Session
