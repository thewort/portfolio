export default function AboutMe() {
    return (
      <section id="AboutMe" className="about--section">
        <div className="about--section--img">
          <img src="/public/img/about-me.png" alt="About Me" />
        </div>
        <div className="hero--section--content--box about--section--box">
          <div className="hero--section--content">
            <p className="section--title">About me</p>
            <h1 className="skills-section--heading">Samuel Derwort</h1>
            <p className="hero--section-description">
            I am a mechanical engineer with a Master’s degree from ETH Zürich and a Bachelor's from EPFL, Lausanne. My professional experience includes technical consulting, where I developed cloud-based solutions and automated processes.
            </p>
            <p className="hero--section-description">
            I also have a research background, having worked on projects in wastewater technology and R&D for liquid flow sensors. I'm fluent in German, English, and French, and have a passion for exploring foreign cultures and languages.
            </p>
          </div>
        </div>
      </section>
    );
  }
  