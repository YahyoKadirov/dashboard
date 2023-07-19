import './main.scss'
const Main = () => {
    return (
        <div className='main'>
            <div className="main_left">
                <h3>Today's trands</h3>
                <p>as of 25 May 2019, 09:41 PM</p>
            </div>
            <div className="main_center">
                 <div>
                 <h4>today</h4>
                 <h4>yesterday</h4>
                 </div>
            </div>
            <div className="main_right">
                <div className="right-box">
                    <h5>resolved</h5>
                    <h1>449</h1>
                </div>
                <div className="right-box">
                    <h5>reseived</h5>
                    <h1>426</h1>
                </div>
                <div className="right-box">
                    <h5>Average first response time</h5>
                    <h1>33</h1>
                </div>
                <div className="right-box">
                   <h5>Average response time</h5>
                    <h1>3 h 8m</h1>
                </div>
                <div className="right-box">
                    <h5>resolution within SLA</h5>
                    <h1>94%</h1>
                </div>
            </div>
            <div className="footer">
                <div className="footer_left">
                        <div className="footerheader">
                            <div className='header-1'>
                                <div className='br'>
                                    <h3>Unresolved tickets</h3>
                                    <h4>View details</h4>
                                </div>
                                <div className="ikki">
                                    <h4>Group: <span>Support</span></h4>
                                </div>
                            </div>
                        </div>
                        <div className="footerbox">
                            <h4>Waiting on Feature Request</h4>
                            <h5>4238</h5>
                        </div>
                        <div className="footerbox">
                            <h4>Awaiting Customer Response</h4>
                            <h5>1005</h5>
                        </div>
                        <div className="footerbox">
                            <h4>Awaiting Developer Fix</h4>
                            <h5>915</h5>
                        </div>
                        <div className="footerbox">
                            <h4>Pending</h4>
                            <h5>281</h5>
                        </div>
                </div>
                <div className="footer_right">
                     <div className='uch'>
                            <h3>Tasks</h3>
                            <h4>View all</h4>
                    </div>
                    <div className="tor">
                        <h4>Today</h4>
                   </div>
                   <div className="footerbox">
                            <h4 className='kulrang'>Create new task</h4>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                               <rect width="24" height="24" rx="8" fill="#F0F1F7"/>
                               <path d="M12 7V17" stroke="#9FA2B4" stroke-width="2" stroke-linecap="round"/>
                               <path d="M17 12L7 12" stroke="#9FA2B4" stroke-width="2" stroke-linecap="round"/>
                             </svg>  
                        </div>
                        <div className="footerbox">
                            <div>
                                <input  type="checkbox" />
                                <h4>Finish ticket update</h4>
                            </div>
                            <button className='urgent'>
                                Urgent
                            </button>
                        </div>
                        <div className="footerbox">
                            <div>
                                <input type="checkbox" />
                                <h4>Finish ticket update</h4>
                            </div>
                            <button className='new'>
                                New
                            </button>
                        </div>
                        <div className="footerbox">
                             <div>
                                <input type="checkbox" />
                                <h4>Finish ticket update</h4>
                            </div>
                            <button className='default'>
                                Default
                            </button>
                        </div>
                </div>
            </div>
        </div>
        
    )
}

export default Main