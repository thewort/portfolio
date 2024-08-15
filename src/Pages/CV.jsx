import data from "../data/index.json";
import React from 'react';
import Collapsible from 'react-collapsible';

export default function MyPortfolio() {
    const onDownloadClick = () => {
        const pdfUrl = "CV_Samuel_Derwort.pdf"
        const link = document.createElement('a');
        link.href = pdfUrl;
        link.download = "CV_Samuel_Derwort.pdf";
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    }

    return (
        <section className="portfolio--section" id="MyPortfolio">
            <div className="portfolio--container-box">
                <div className="portfolio--container">
                    <h2 className="section--heading">Curriculum Vitae</h2>
                </div>
                <div>
                    <button className="btn btn-github" onClick={onDownloadClick}>
                        Download
                    </button>
                </div>
            </div>
            <div className="portfolio--section--container">
                <div className="portfolio--section">
                    <h2 className="portfolio--section--title">Experience</h2>
                    {data?.Experience?.map((item, index) => (
                        <div key={index} className="portfolio--element--card">
                            <div className="portfolio--element--title--container">
                                <h3 className="portfolio--element--title">{item.title}, {item.company}</h3>
                                <h3 className="portfolio--element--date">{item.date}</h3>
                            </div>
                            <p className="portfolio--element--description">
                                {item.description}
                            </p>
                        </div>
                    ))}
                    
                    <div className="portfolio--element--title--container">
                        <h3 className="portfolio--element--title">Career Break</h3>
                        <h3 className="portfolio--element--date">2020 - 2021</h3>
                    </div>
                    <p className="portfolio--element--description">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem
                        officiis sit debitis omnis harum sed veniam quasi dicta accusamus
                        recusandae? Voluptatem, reprehenderit alias? Eligendi aperiam
                        tempora numquam sint odit optio.
                    </p>
                </div>
                <div className="portfolio--section">
                    <h2 className="portfolio--section--title">Education</h2>
                    <div className="portfolio--element--title--container">
                        <h3 className="portfolio--element--title">Career Break</h3>
                        <h3 className="portfolio--element--date">2020 - 2021</h3>
                    </div>
                    <p className="portfolio--element--description">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem
                        officiis sit debitis omnis harum sed veniam quasi dicta accusamus
                        recusandae? Voluptatem, reprehenderit alias? Eligendi aperiam
                        tempora numquam sint odit optio.
                    </p>
                </div>
            </div>
            <div className="CV-collapsible-section">
                {data?.portfolio?.map((item, index) => (
                    <Collapsible className="CV-collapsible-item" trigger={item.title} key={index}>
                        <div key={index} className="portfolio--section--card">
                            <div className="portfolio--section--img">
                                <img src={item.src} alt="Placeholder" />
                            </div>
                            <div className="portfolio--section--card--content">
                                <div>
                                    <h3 className="portfolio--section--title">{item.title}</h3>
                                    <p className="text-md">{item.description}</p>
                                </div>
                                <p className="text-sm portfolio--link">
                                    {item.link}
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
                                            stroke-width="2.66667"
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                        />
                                    </svg>
                                </p>
                            </div>
                        </div>
                        <p>{item.description}</p>
                    </Collapsible>
                ))}
            </div>
        </section>
    );
}
