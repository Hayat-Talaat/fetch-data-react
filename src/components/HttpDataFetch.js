import React, { useState, useEffect } from "react";

const HttpDataFetch = () => {
  const [assessments, setAssessments] = useState(null);
  useEffect(() => {
    async function fetchData() {
      const res = await fetch("http://localhost:3000/results");
      const jsonData = await res.json();
      const data = await jsonData;
      console.log(data);
      setAssessments(data);
    }
    fetchData();
  }, []);

  return (
    <div>
      <h2>HESN | Assessments</h2>

      <div className="container-card">
        {assessments &&
          assessments.map((assessment) => (
            <div className="card-wraper">
              <div className="card-header">
                <div className="status_wrapper">
                  <span className="status_dot"></span>
                  <span className="status_text">New</span>
                </div>

                <div className="percentage_progress">
                  {assessment.percentage} %
                </div>
              </div>
              <div className="Assessment_assessmentContent__1IGN6">
                <div>
                  <div className="assessmentTitle marginb">
                    {assessment.form.title}
                  </div>
                </div>

                <div>
                  <div className="assessment_periodTitle marginb">
                    {assessment.period.title}
                  </div>
                </div>

                <div className="assessment_periodStartEndDate opacity marginb">
                  <span className="assessment_iconWrap">
                    <svg width="16" height="16" viewBox="0 0 16 16">
                      <g fill-rule="evenodd" transform="translate(1)">
                        <path
                          className="main"
                          d="M10 .009a.6.6 0 0 1 .6.6v1.39L12 2a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h1.4V.609a.6.6 0 0 1 .503-.593L4 .01a.6.6 0 0 1 .6.6v1.39h4.8V.61a.6.6 0 0 1 .503-.593zm-6.6 3.19L2 3.2a.8.8 0 0 0-.8.8v10a.8.8 0 0 0 .8.8h10a.8.8 0 0 0 .8-.8V4a.8.8 0 0 0-.8-.8h-1.4v.206a.6.6 0 0 1-.503.593L10 4.006a.6.6 0 0 1-.6-.6V3.2H4.6v.206A.6.6 0 0 1 4.097 4L4 4.006a.6.6 0 0 1-.6-.6V3.2zM4.5 11a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5h1zm3 0a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5h1zm3 0a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5h1zm-6-3a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5h1zm3 0a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5h1zm3 0a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5h1zm-6-3a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5h1zm3 0a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5h1zm3 0a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5h1z"
                        ></path>
                      </g>
                    </svg>
                  </span>
                  <span dir="ltr">
                    <span dir="rtl">{assessment.period.end_date}</span> -{" "}
                    <span dir="rtl">{assessment.period.start_date}</span>
                  </span>
                </div>

                <div className="assessment_assessmentTimeLeft opacity marginb">
                  <div>
                    <span>- 94</span>&nbsp;<span>days</span>&nbsp;
                    <span>19:50</span>&nbsp;<span>hrs</span>
                  </div>
                </div>

                <div className="assessment_dateCreated opacity marginb">
                  <div className="display-inline">
                    <b> Date created:&nbsp; </b>
                  </div>
                  <div className="assessment_dateCreatedDate display-inline">
                    {assessment.created_at}
                  </div>
                </div>
                <div className="Assessment_footer__3Ydw_">
                  <button
                    type="button"
                    className="ant-btn ButtonCustom_button__39zCT ButtonCustom_antBtn__1jwa2 Assessment_button__13hgP"
                  >
                    <span>Start assessment</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default HttpDataFetch;
