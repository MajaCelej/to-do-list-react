import "./style.css";

const Section = ({ title, body, extraHeaderContent }) => (
    <section className="section">
        <div className="section__header section__headerSecondary">
            <h2>{title}</h2>
            {extraHeaderContent}
        </div>
        <div className="section__main">
            {body}
        </div>
    </section>
);

export default Section;