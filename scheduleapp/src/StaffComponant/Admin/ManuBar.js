import { Link } from 'react-router-dom';
import '../CSS/AdminMenuBar.css';

import AddStaff from '../Staff/AddStaff';
import { Button, List, NavItem } from 'reactstrap';
import StaffList from '../Staff/StaffList';
const MenuBar = () => {

    return (<>
        <>
            <header>
                <nav id="sidebarMenu" className="collapse d-lg-block sidebar collapse bg-primary">
                    <div className="position-sticky">
                        <div className="list-group list-group-flush mx-3 mt-4">
                            <a href="#" className="list-group-item list-group-item-action py-2 ripple" aria-current="true">
                                <i className="fa fa-tachometer-alt fa-fw me-3"></i><span>Main dashboard</span>
                            </a>
                            <div className="d-flex p-2">
                                <div class="btn-group dropend">
                                    <Button class="btn btn-success" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                       STAFF RECORDS
                                    </Button>
                                    <ul class="dropdown-menu dropdown-menu-light">

                                        <li>
                                            <Link className='list-group-item list-group-action' to='/stafflist' element={StaffList}>Staff List</Link>
                                        </li>
                                       
                                        <li>
                                            <li><Link className="list-group-item list-group-action" to='/addstaff' element={AddStaff} >Add Staff</Link></li>
                                        
                                        </li>    <li><a class="dropdown-item" href="#">Separated link</a></li>
                                    </ul>
                                </div>
                            </div>
                            <a href="#" className="list-group-item list-group-item-action py-2 ripple"><i
                                className="fa fa-lock fa-fw me-3"></i><span>Password</span></a>
                            <a href="#" className="list-group-item list-group-item-action py-2 ripple"><i
                                className="fa fa-chart-line fa-fw me-3"></i><span>Analytics</span></a>
                            <a href="#" className="list-group-item list-group-item-action py-2 ripple">
                                <i className="fa fa-chart-pie fa-fw me-3"></i><span>SEO</span>
                            </a>
                            <a href="#" className="list-group-item list-group-item-action py-2 ripple"><i
                                className="fa fa-chart-bar fa-fw me-3"></i><span>Orders</span></a>
                            <a href="#" className="list-group-item list-group-item-action py-2 ripple"><i
                                className="fa fa-globe fa-fw me-3"></i><span>International</span></a>
                            <a href="#" className="list-group-item list-group-item-action py-2 ripple"><i
                                className="fa fa-building fa-fw me-3"></i><span>Partners</span></a>
                            <div className="d-flex p-2">
                                <div class="btn-group dropend">
                                    <Button class="btn btn-success d-flex " type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        Dropdown
                                    </Button>
                                    <ul class="dropdown-menu dropdown-menu-light">
                                        <li><a class="dropdown-item active" href="#">Action</a></li>
                                        <li><a class="dropdown-item" href="#">Another action</a></li>
                                        <li><a class="dropdown-item" href="#">Something else here</a></li>
                                        <li><a class="dropdown-item" href="#">Separated link</a></li>
                                    </ul>
                                </div>
                            </div>
                            <a href="#" className="list-group-item list-group-item-action py-2 ripple"><i
                                className="fa fa-users fa-fw me-3"></i><span>Users</span></a>
                            <a href="#" className="list-group-item list-group-item-action py-2 ripple"><i
                                className="fa fa-money-bill fa-fw me-3"></i><span>Sales</span></a>
                        </div>
                    </div>
                </nav>

            </header>

            <main style={{ marginTop: '58px' }}>
                <div className="container pt-4"></div>
            </main>
        </>
    </>);
}

export default MenuBar;