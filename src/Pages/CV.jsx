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
                    <button className="btn btn-primary" onClick={onDownloadClick}>
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
                            <div className="portfolio--element--description">
                                {Array.isArray(item.description) ? (
                                    item.description.map((desc, descIndex) => (
                                        <p key={descIndex}>{desc}</p>
                                    ))
                                ) : (
                                    <p>{item.description}</p>
                                )}
                            </div>
                        </div>
                    ))}
                    <h2 className="portfolio--section--title">Education</h2>
                    {data?.Education?.map((item, index) => (
                        <div key={index} className="portfolio--element--card">
                            <div className="portfolio--element--title--container">
                                <h3 className="portfolio--element--title">{item.title}, {item.institution}</h3>
                                <h3 className="portfolio--element--date">{item.date}</h3>
                            </div>
                            <div className="portfolio--element--description">
                                {Array.isArray(item.description) ? (
                                    item.description.map((desc, descIndex) => (
                                        <><h4>
                                            <b>{desc.project} | </b>{desc.projectinstitution}
                                        </h4>
                                        <p>
                                            {desc.details}
                                        </p></>
                                    ))
                                ) : (
                                    <p>{item.description}</p>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
