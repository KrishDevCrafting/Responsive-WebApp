import React from 'react';
import "../MainContent/MainContent.css"
const MainContent = () => {
return ( <>


<div className="main-container d-flex justify-content-around border m-4">
<div className="container-box"><a href=""target='_blank'>All Post(32)</a></div>
<div className="container-box"><a href="http://" target="_blank" >Article</a></div>
<div className="container-box"><a href="http://" target="_blank">Event</a></div>
<div className="container-box"><a href="http://" target="_blank">Education</a></div>
<div className="container-box"><a href="http://" target="_blank">Job</a></div>
<div className='d-flex'>
    <div className="box"><button>Write post</button></div>
    <div className="box"><button>Join Group</button></div>
</div>
</div>








</> );
}
 
export default MainContent;