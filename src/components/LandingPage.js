const LandingPage = () => {
  return (
    <div id="landingPage">
      <div id="intro">
        <h2 id="introH2">Hello Stranger</h2>
        <p id="introP">
          The idea of this React Project is to recap all the projects I did
          throughout my DCI Course. Originally all of them were written in
          Vanilla Java Script and my challenge was to refactor them into JSX and
          unite them in one complete React App, providing small useful tools for
          everyday life.{" "}
        </p>
      </div>
      <footer>
        <div>
          <span>2022</span>
          <span>|</span>
          <span>
            <a
              href="https://github.com/heyBr0"
              target="_blank"
              rel="noreferrer"
            >heyBro</a>
          </span>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;
