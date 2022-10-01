// import React from 'react'

function Price(props) {
  // console.log(props.message.value)
  return <>
    <div className="col-lg-4">
      <div className="card mb-5 mb-lg-0">
        <div className="card-body">
          <h5 className="card-title text-muted text-uppercase text-center">{props.data.plan}</h5>
          <h6 className="card-price text-center ">${props.data.price}<span className="period">/month</span></h6>
          <hr />
          <ul className="fa-ul">
            <li className={props.data.userEnabler ? "fw-bold" : "text-muted"}><span className="fa-li"><i className={props.data.userEnabler ? "fas fa-check" : "fas fa-times"}></i></span>{props.data.user}</li>
            <li className={props.data.storageEnabler ? "" : "text-muted"}><span className="fa-li"><i className={props.data.storageEnabler ? "fas fa-check" : "fas fa-times"}></i></span>{props.data.storage}</li>
            <li className={props.data.projectsPublicEnabler ? "" : "text-muted"}><span className="fa-li"><i className={props.data.projectsPublicEnabler ? "fas fa-check" : "fas fa-times"}></i></span>{props.data.projectsPublic}</li>
            <li className={props.data.CommunityEnabler ? "" : "text-muted"}><span className="fa-li"><i className={props.data.CommunityEnabler ? "fas fa-check" : "fas fa-times"}></i></span>{props.data.community}</li>
            <li className={props.data.projectsPrivateEnabler ? "" : "text-muted"}><span className="fa-li"><i className={props.data.projectsPrivateEnabler ? "fas fa-check" : "fas fa-times"}></i></span>{props.data.projectsPrivate}</li>
            <li className={props.data.phoneSupportEnabler ? "" : "text-muted"}><span className="fa-li"><i className={props.data.phoneSupportEnabler ? "fas fa-check" : "fas fa-times"}></i></span>{props.data.phoneSupport}</li>
            <li className={props.data.subdomainEnabler ? "" : "text-muted"}><span className="fa-li"><i className={props.data.subdomainEnabler ? "fas fa-check" : "fas fa-times"}></i></span>{props.data.subdomain}</li>
            <li className={props.data.statusEnabler ? "" : "text-muted"}><span className="fa-li"><i className={props.data.statusEnabler ? "fas fa-check" : "fas fa-times"}></i></span>{props.data.status}</li>
          </ul>
          <div className="d-grid">
            <a href="javascript(void)" className="btn btn-primary text-uppercase">Button</a>
          </div>
        </div>
      </div>
    </div>
    {/* <!-- Plus Tier --> */}
  </>
}

export default Price



