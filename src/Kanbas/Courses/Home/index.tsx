import ModuleList from '../Modules/List';
import './index.css';

function Home() {
  return (
    <div className='wd-flex-row-container'>
      <div className='wd-flex-grow-1'>
        <h2>Home</h2>
        <ModuleList />
      </div>
      <div className='wd-course-status'>
        <h2>Status</h2>
        <h1>Course Status</h1>
        <button>Unpublish</button>
        <button>Published</button>
        <ul>
          <li>
            <a href='#'>Import Existing Content</a>
          </li>
          <li>
            <a href='#'>Import From Commons</a>
          </li>
          <li>
            <a href='#'>Choose Home Page</a>
          </li>
          <li>
            <a href='#'>View Course Stream</a>
          </li>
          <li>
            <a href='#'>New Announcement</a>
          </li>
          <li>
            <a href='#'>New Analytics</a>
          </li>
          <li>
            <a href='#'>View Course Notifications</a>
          </li>
        </ul>
        <h1>Coming Up</h1>
        <a href='#'>View Calendar</a>
        <ul>
          <li>
            <a href='#'>Lecture CS4550.12631.202410 Sep 7 at 11:45am</a>
          </li>
          <li>
            <a href='#'>Lecture CS4550.12631.202410 Sep 11 at 11:45am</a>
          </li>
          <li>
            <a href='#'>CS5610 06 SP23 Lecture Sep 11 at 6pm</a>
          </li>
        </ul>
      </div>
    </div>
  );
}
export default Home;
