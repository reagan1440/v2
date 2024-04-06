import data from "../../data/index.json"

export default function MyPortfolio () {
    return (
        <section className="portfolio--section" id="MyPortfolio">
            <div className="portfolio--container--box">
                <div className="portfolio--container">
                    <p className="sub--title">
                    </p>
                    
                </div>
                <div>
                <a href="https://github.com/reagan1440" target="_blank" rel="noopener noreferrer" className="btn btn-github">
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="32"
    height="32"
    viewBox="0 0 16 16"
    fill="currentColor"
  >
    <path
      fillRule="evenodd"
      d="M8 .198a8 8 0 00-2.534 15.573c.4.074.548-.174.548-.385 0-.19-.007-.693-.01-1.36-2.235.485-2.707-1.077-2.707-1.077a2.134 2.134 0 00-.907-1.177c-.74-.506.056-.497.056-.497.82.057 1.252.84 1.252.84.728 1.245 1.905.886 2.366.678.074-.526.282-.885.512-1.09-1.787-.203-3.656-.893-3.656-3.975a3.128 3.128 0 01.837-2.166 2.91 2.91 0 01.08-2.14s.678-.217 2.215.83a7.592 7.592 0 014 0c1.537-1.046 2.215-.83 2.215-.83.367.906.14 1.57.068 1.737a3.093 3.093 0 01.084 2.141 3.128 3.128 0 01.836 2.166c0 3.091-1.872 3.769-3.664 3.968.288.248.544.737.544 1.486 0 1.073-.01 1.937-.01 2.199 0 .214.145.463.553.384A8.002 8.002 0 008 1.197z"
    />
  </svg>
  Visit My GitHub
</a>
<h2 className="section--heading">My Recent Projects</h2>

</div>

      </div>
      <div className="portfolio--section--container">
        {data?.portfolio?.map((item, index) => (
          <div key={index} className="portfolio--section--card">
            <div className="portfolio--section--img">
              <img src={item.src} alt="Placeholder" />
            </div>
            <div className="portfolio--section--card--content">
                <h3 className="portfolio--section--title">{item.title}</h3>
                <p className="text-md">{item.description}</p>

              </div>
              <p>
              <button className="text-sm-portfolio--link" onClick={() => window.open(item.link, "_blank")}>
  Visit Website
</button>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 20 19"
                  fill="none"
                >
                  <path
                    d="M4.66667 1.66675H18V15.0001M18 1.66675L2 17.6667L18 1.66675Z"
                    stroke="currentColor"
                    // stroke-width="2.66667"
                    // stroke-linecap="round"
                    // stroke-linejoin="round"
                  />
                </svg>
              </p>
          </div>
        ))}
      </div>
    </section>
  );
}