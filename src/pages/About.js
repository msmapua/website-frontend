const About = () => {
  return (
    <>
      <section className="bg-dark text-light p-5 text-center">
        <h1>About</h1>
      </section>
      <section className="bg-light text-dark p-5 text-left">
        <div className="container">
          <div className="row">
            <div className="col-sm-12 col-md-6">
              <h2 className="mapua-red">Who are we?</h2>
              <p><a className="mapua-red" href="http://math.mapua.edu.ph/student/msm">Mathematical Society of Mapúa</a>,
              MSM, is the primary student arm of the Mathematics Department. It is an organization home to math
              enthusiasts, math lovers, and students who are willing to learn math. The organization is dedicated to
              serving students. and to help them succeed. MSM aims to cater to the needs of Mapuans for a sense of
              belongingness and to enhance Mapuans' mathematical skills through tutorials by the faculty and peers.
              It is a training ground for developing active and competent leaders. Moreover, one of its primary
              tasks is to help in sponsored activities of the Mathematics Department and the Mapúa community</p>
              </div>
              <div className="col-sm-12 col-md-6 text-center" style={{margin: "0 auto"}}>
                <img className="img-fluid w-50" src="https://drive.google.com/uc?export=view&id=1hImCcqhhRQju9i7UAfrhfWcKJDGPAu3h" alt="This is our logo!" />
              </div>
            </div>
            <hr />
            <div className="row text-center">
              <div className="col">
                <h2 className="mapua-red">Committees</h2>
              </div>
            </div><br />
            <div className="row text-left">
              <div className="col-sm-12 col-md-4">
                <h4>Academic Committee</h4>
                <p>This committee handles the tutorial services and formulates
                necessary action to help members in academic affairs.</p>
              </div>
              <div className="col-sm-12 col-md-4">
                <h4>Creatives Committee</h4>
                <p>This committee creates posters, videos, and promotions to
                effectively disseminate important information, announcements,
                or activities to students.</p>
              </div>
              <div className="col-sm-12 col-md-4">
                <h4>Membership Committee</h4>
                <p>This committee manages the applications of students,
                monitors the performance of the organization members,
                invites new members to the organization, and promotes
                good relationships among members.</p>
              </div>
            </div>
        </div>
      </section>
    </>
  )
}

export default About