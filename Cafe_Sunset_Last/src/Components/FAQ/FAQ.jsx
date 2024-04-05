import "../FAQ/FaqContent.css"

// import { Link } from "react-router-dom";

function FAQ() {
  return (
    <>

    <main>
      <div className="faq-wrapper">
        <div className="faq-container">
          <div className="faqHeader">
            <h1>FAQs</h1>
            <div className="row1-4btns">
              <button>All</button>
              <button>Family</button>
              <button>Comady Podcast</button>
              <button>Offers</button>
            </div>

            <div className="row2-3btns">
              <button>Community</button>
              <button>Events</button>
              <button>Food & Drinks</button>
            </div>

            <div className="row3-1btns">
              <button>Beer</button>
            </div>

          </div>

          <div className="faq-para">
            <h4>Hi there! Just wondering, do you happen to serve beer at your cafe? Thanks!</h4>
            <p>"Thank you for reaching out! At the moment, we're proud to be a family-friendly <br />cafe, so we don't serve alcohol. However, we have a delightful selection of <br /> beverages and treats to enjoy. Let us know if there's anything else we can assist <br /> you with!"</p>

          </div>

        </div>

      </div>

    </main>

    
      
    </>
  );
}
export default FAQ;
