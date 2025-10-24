import { Sidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';
import { Link, Outlet } from 'react-router-dom';

function PageSidebar() {
    return (
        <div className='flex'>
            <nav>
                <Sidebar className='h-screen'>
                    <Menu>
                        <MenuItem component={<Link to="/"/>}> Pessoas </MenuItem>
                        <MenuItem component={<Link to="/places"/>}> Lugares </MenuItem>
                        <MenuItem component={<Link to="/report"/>}>Relatórios</MenuItem>
                    </Menu>
                </Sidebar>
            </nav>
            <main>
                <Outlet/>
            </main>
        </div>
        
    )
}

export default PageSidebar;