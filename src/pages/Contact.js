const Contact = () => {
  return (
    <>
      <section className="bg-dark text-light p-5 text-center">
        <h1>Contact</h1>
      </section>
      <section className="bg-light text-dark p-5 align-items-center">
        <div className="container">
          <div className="row">
            <div id="map-container-google-1" className="col-lg-7 text-center z-depth-1-half map-container" style={{overflow: "hidden", paddingBottom: "56.25%", position: "relative", height: "0"}}>
              <iframe title="Map to MSM" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3861.1505916197243!2d120.97575971415209!3d14.590493481237578!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3397ca1877b11c59%3A0x29725a0f0cac1fa!2sMap%C3%BAa%20University%20Intramuros!5e0!3m2!1sen!2sph!4v1656736623123!5m2!1sen!2sph" width="400" height="300" style={{margin: "0 auto", border: "0"}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" />
            </div>
            <div className="col-lg-5">
              <br />
              <h4 className="text-left">Email address</h4>
              <ul>
                <li><a className="mapua-red" href="mailto:msmofficial1920@gmail.com">msmofficial1920@gmail.com</a></li>
              </ul>
              <h4>Social Media Accounts</h4>
              <ul>
                <li><a className="mapua-red" not-msm-link="true" href="https://www.facebook.com/MathematicalSocietyofMapua">Facebook</a></li>
                <li><a className="mapua-red" not-msm-link="true" href="https://twitter.com/MSMapua">Twitter</a></li>
                <li><a className="mapua-red" not-msm-link="true" href="https://www.youtube.com/c/MathematicalSocietyofMapua">YouTube</a></li>
                <li><a className="mapua-red" not-msm-link="true" href="https://discord.gg/7vzWW2aZHu">Discord</a></li>
              </ul>
              <h4>Location</h4>
              <p>658 Muralla St, Intramuros, Manila, 1002 Metro Manila</p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Contact