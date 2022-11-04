const Home = () => {
  return (
    <>
      <section className="bg-dark text-light p-5 text-center">
        <h1>Mathematical Society of Mapúa</h1>
      </section>
      <section className="bg-light text-dark p-5 text-left">
        <div className="container">
          <div className="row">
            <div className="col-sm-12 col-md-6">
              <h2 className="mapua-red">Why MSM?</h2>
                <p>Mathematical Society of Mapúa, MSM, is the primary student arm
                  of the Mathematics Department. It is an organization home to math
                  enthusiasts, math lovers, and students who are willing to learn
                  math. The organization is dedicated to serving students. and to
                  help them succeed. MSM aims to cater to the needs of Mapuans for
                  a sense of belongingness and to enhance Mapuans' mathematical
                  skills through tutorials by the faculty and peers. It is a
                  training ground for developing active and competent leaders.
                  Moreover, one of its primary tasks is to help in sponsored
                  activities of the Mathematics Department and the Mapúa community.</p>
              </div>
              <div className="col-sm-12 col-md-6 text-center" style={{margin: "0 auto"}}>
                <img className="img-fluid w-50" src="https://drive.google.com/uc?export=view&id=1hImCcqhhRQju9i7UAfrhfWcKJDGPAu3h" alt="This is our logo!" />
              </div>
            </div>
            <br />
            <div className="row">
              <div className="col text-center">
                <p><b>For <span className="mapua-red">collaborations</span> and <span className="mapua-red">partnerships</span>, send your inquiries at <a className="mapua-red" href="mailto:msmofficial1920@gmail.com">msmofficial1920@gmail.com</a></b></p>
              </div>
            </div>
        </div>
      </section>
    </>
  )
}

export default Home