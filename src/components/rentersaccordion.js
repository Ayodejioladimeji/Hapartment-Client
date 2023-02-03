const Accordion = () => {
  return (
    <div className="accordion" id="accordionExamples">
      <div className="accordion-item">
        <h2 className="accordion-header" id="headingOnes">
          <button
            className="accordion-button"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapseOnes"
            aria-expanded="true"
            aria-controls="collapseOnes"
          >
            Accordion Item #1
          </button>
        </h2>
        <div
          id="collapseOnes"
          className="accordion-collapse collapse show"
          aria-labelledby="headingOnes"
          data-bs-parent="#accordionExamples"
        >
          <div className="accordion-body">
            <strong>This is the first item's accordion body.</strong> It is
            shown by default, until the collapse plugin adds the appropriate
            classNamees that we use to style each element. These classNamees
            control the overall appearance, as well as the showing and hiding
            via CSS transitions. You can modify any of this with custom CSS or
            overriding our default variables. It's also worth noting that just
            about any HTML can go within the <code>.accordion-body</code>,
            though the transition does limit overflow.
          </div>
        </div>
      </div>

      <div className="accordion-item">
        <h2 className="accordion-header" id="headingTwos">
          <button
            className="accordion-button collapsed"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapseTwos"
            aria-expanded="false"
            aria-controls="collapseTwos"
          >
            Accordion Item #2
          </button>
        </h2>
        <div
          id="collapseTwos"
          className="accordion-collapse collapse"
          aria-labelledby="headingTwos"
          data-bs-parent="#accordionExamples"
        >
          <div className="accordion-body">
            <strong>This is the second item's accordion body.</strong> It is
            hidden by default, until the collapse plugin adds the appropriate
            classNamees that we use to style each element. These classNamees
            control the overall appearance, as well as the showing and hiding
            via CSS transitions. You can modify any of this with custom CSS or
            overriding our default variables. It's also worth noting that just
            about any HTML can go within the <code>.accordion-body</code>,
            though the transition does limit overflow.
          </div>
        </div>
      </div>

      <div className="accordion-item">
        <h2 className="accordion-header" id="headingThrees">
          <button
            className="accordion-button collapsed"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapseThrees"
            aria-expanded="false"
            aria-controls="collapseThrees"
          >
            Accordion Item #3
          </button>
        </h2>
        <div
          id="collapseThrees"
          className="accordion-collapse collapse"
          aria-labelledby="headingThrees"
          data-bs-parent="#accordionExamples"
        >
          <div className="accordion-body">
            <strong>This is the third item's accordion body.</strong> It is
            hidden by default, until the collapse plugin adds the appropriate
            classNamees that we use to style each element. These classNamees
            control the overall appearance, as well as the showing and hiding
            via CSS transitions. You can modify any of this with custom CSS or
            overriding our default variables. It's also worth noting that just
            about any HTML can go within the <code>.accordion-body</code>,
            though the transition does limit overflow.
          </div>
        </div>
      </div>
    </div>
  );
};

export default Accordion;
