import React ,{ Fragment } from 'react';
import logos from '../img/logos.png';


const SubHeader = () => {
    return (
<Fragment>
    <section className="sub-header">
        <img src={logos} alt="" />
        <div>
          <h4>Bundle with any Hulu plan & save</h4>
          <h3>Get Hulu, Disney+, and ESPN+.</h3>
          <a href="#!" className="sub-link">Details</a>
        </div>
        <div>
          <a href="#!" className="btn btn-outline">Get Bundle</a>
          <a href="#!" className="sub-link">Terms apply</a>
        </div>
    </section>

</Fragment>

    )
    

    
}

export default SubHeader
