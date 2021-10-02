import React, { useState, useEffect } from "react";

const HttpDataFetch = () => {
  const [posts, setPosts] = useState(null);
  useEffect(() => {
    async function fetchData() {
      const res = await fetch("http://localhost:3000/results");
      // console.log("data", res);
      const jsonData = await res.json();
      const data = await jsonData;
      console.log(data);
      setPosts(data);
    }
    fetchData();
  }, []);

  return (
    <div>
      <h2>HESN | Assessments</h2>

      <div className="container-card">
        {posts &&
          posts.map((post) => (
            <div className="Assessment_wrap__1lLQY">
              <div className="Assessment_assessmentHeader__26tlE">
                <div className="Status_wrapper__3RaHV">
                  <span className="Status_dot__292-K"></span>
                  <span className="Status_text__sEfMA">New</span>
                </div>

                <div className="AssessmentPercentage_progress__5R8TS">
                  {post.percentage} %
                </div>
              </div>
              <div className="Assessment_assessmentContent__1IGN6">
                <div className="TooltipCustom_wrap__3tkVb">
                  <div className="Assessment_assessmentTitle__1q2Ud">
                    {post.form.title}
                  </div>
                </div>
                <div className="TooltipCustom_wrap__3tkVb">
                  <div className="Assessment_periodTitle__2KCg5">
                    {post.period.title}
                  </div>
                </div>
                <div className="Assessment_periodStartEndDate__kmRM6">
                  <span className="Assessment_iconWrap__5lYk7">
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
                    <span dir="rtl">{post.period.end_date}</span> -{" "}
                    <span dir="rtl">{post.period.start_date}</span>
                  </span>
                </div>
                <div className="Assessment_assessmentTimeLeft__3nqPz">
                  <div>
                    <span>94</span>&nbsp;<span>days</span>&nbsp;
                    <span>19:50</span>&nbsp;<span>hrs</span>
                  </div>
                </div>
                <div className="Assessment_dateCreated__3M6zL">
                  <div>Date created:&nbsp;</div>
                  <div className="Assessment_dateCreatedDate__1sXdq">
                    {post.created_at}
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
