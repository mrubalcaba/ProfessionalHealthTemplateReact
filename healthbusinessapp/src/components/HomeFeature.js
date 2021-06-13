const HomeFeature = ({hidden, prop}) => {
    if(hidden)  {
        return (<div className="features-container hidden" ref={prop}>
            <div className="marketing-img">
                <img
                    className="feature-img feature-women-img"
                    src="./../images/women-in-nature.jpg"
                    alt="Women in nature"
                />
            </div>
            <div className="right-col col">
                <h1 className="self-care-msg">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h1>
                <h4>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus hendrerit diam in scelerisque
                    efficitur. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos
                    himenaeos. Fusce in elit non magna congue varius id eget erat.
                </h4>
                <div className="learn-more">Learn More</div>
            </div>
        </div>)
    }
    else { 
        return (<div className="features-container left-feature" ref={prop}>
         <div className="marketing-img">
             <img
                 className="feature-img feature-women-img"
                 src="./../images/women-in-nature.jpg"
                 alt="Women in nature"
             />
         </div>
         <div className="right-col col">
             <h1 className="self-care-msg">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h1>
             <h4>
                 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus hendrerit diam in scelerisque
                 efficitur. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos
                 himenaeos. Fusce in elit non magna congue varius id eget erat.
             </h4>
             <div className="learn-more">Learn More</div>
         </div>
     </div>)
    }
      
}

export default HomeFeature
