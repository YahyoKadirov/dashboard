import './sidebar.scss'
import { Chart, Logo, Ticket, Idea, Contact, Agent, Article, Setting,Subscription} from '../assets/styles/icons'
const Sidebar =()=>{
    return (
        <div className="sidebar">
            <div className="sidebar-header">
                <Logo  />
                <h2>Dashboard kit</h2>
            </div>
            <button className=' btn btn-sidebar'>
                <Chart className=""/>
                <span>Overwiew</span>
            </button>
            <button className=' btn btn-sidebar'>
                <Ticket  />
                <span>Tickets</span>
            </button>
            <button className=' btn btn-sidebar'>
                <Idea />
                <span>Ideas</span>
            </button>
            <button className=' btn btn-sidebar'>
                <Contact />
                <span>Contacts</span>
            </button>
            <button className=' btn btn-sidebar'>
                <Agent />
                <span>Agents</span>
            </button>
            <button className=' btn btn-sidebar'>
                <Article />
                <span>Articles</span>
            </button>
            <button className=' btn btn-sidebar'>
                <Setting />
                <span>Settings</span>
            </button>
            <button className=' btn btn-sidebar'>
                <Subscription />  
                <span>Subscriptions</span>
            </button>
        </div>
    )
}

export default Sidebar