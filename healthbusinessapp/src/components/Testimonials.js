const Testimonials = () => {
    return (
      <section className="testimonials-section">
          {/* <div className="container"> */}
              <ul className="testimonial-list">
                  <li className="single-testimonial">
                      <img className="testimonial-person first-img-testimonial" src="./../images/person.jpg" alt="Person"/>
                      <blockquote>"Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                        Phasellus hendrerit diam in scelerisque efficitur. Class 
                        aptent taciti sociosqu ad litora torquent per conubia 
                        nostra, per inceptos himenaeos."</blockquote>
                        <cite>- Jane Doe</cite>
                  </li>
                  <li className="single-testimonial">
                      <img className="testimonial-person second-img-testimonial" src="./../images/person.jpg" alt="Person"/>
                      <blockquote>"Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                        Phasellus hendrerit diam in scelerisque efficitur. Class 
                        aptent taciti sociosqu ad litora torquent per conubia 
                        nostra, per inceptos himenaeos."</blockquote>
                        <cite>- Jane Doe</cite>
                  </li>
                  <li className="single-testimonial">
                      <img className="testimonial-person third-img-testimonial" src="./../images/person.jpg" alt="Person"/>
                      <blockquote>"Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                        Phasellus hendrerit diam in scelerisque efficitur. Class 
                        aptent taciti sociosqu ad litora torquent per conubia 
                        nostra, per inceptos himenaeos."</blockquote>
                        <cite>- Jane Doe</cite>
                  </li>
              </ul>
          {/* </div> */}
      </section>
    )
}

export default Testimonials
