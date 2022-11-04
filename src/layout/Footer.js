const Footer = () => {
  return (
    <footer className="p-5 text-white mapua-red-bg">
      <div className="container">
        <div className="row text-left">
          <div className="col-md-4">
            <h3>Got any questions?</h3>
            <p>Contact us through social media or email us at&nbsp;
            <a style={{color: "#ffffff"}} href="mailto:msmofficial1920@gmail.com">
            msmofficial1920@gmail.com</a>
            </p><br />
          </div>
          <div className="col-md-2">
            <h3>Social Media</h3>
            <p><a style={{color: "#ffffff"}} href="https://www.facebook.com/MathematicalSocietyofMapua">Facebook</a></p>
            <p><a style={{color: "#ffffff"}} href="https://twitter.com/MSMapua">Twitter</a></p>
            <p><a style={{color: "#ffffff"}} href="https://www.youtube.com/c/MathematicalSocietyofMapua">YouTube</a></p>
            <p><a style={{color: "#ffffff"}} href="https://discord.gg/7vzWW2aZHu">Discord</a></p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer