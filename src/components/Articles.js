import ShortLinks from "./ShortLinks"
import BrandIcon from "../images/icon-brand-recognition.svg"
import RecordsIcon from "../images/icon-detailed-records.svg"
import FullyIcon from "../images/icon-fully-customizable.svg"

const Articles = () => {
    return (
        <article className="articles">
            <div className="articles-container">
            {/* <ShortenLinks /> */}
            <ShortLinks />

            <div className="articles-desc">

                <div className="articles-desc-title">
                    <h2>Advanced Statistics</h2>
                    <p>Track how your links are performing across the web with our advanced statistics dashboard.</p>
                </div>

                <div className="articles-boxes">
                    <div className="article-box">
                        <div className="article-img">
                            <img src={BrandIcon} alt="" />
                        </div>
                        <h3>Brand Recognition</h3>
                        <p>
                            Boost your brand recognition with each click. Generic links don't mean a thing. Branded links help instil confidence in your content
                        </p>
                    </div>

                    <div className="article-box">
                        <div className="article-img">
                            <img src={RecordsIcon} alt="" />
                        </div>
                        <h3>Detailed Records</h3>
                        <p>
                            Gain insights into who is clicking your links. Knowing when and where people engage with your content helps inform better decisions
                        </p>
                    </div>

                    <div className="article-box">
                        <div className="article-img">
                            <img src={FullyIcon} alt="" />
                        </div>
                        <h3>Fully Customizable</h3>
                        <p>
                            Improve brand awareness and content discoverabilty through customizable links, supercharging audience engagement
                        </p>
                    </div>

                </div>

            </div>
            </div>
        </article>
    )
}

export default Articles
