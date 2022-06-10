var React = require('react');
import Logo from './menu/logo';
import AppPages from './menu/appPages';
import Components from './menu/components';
import FormsTables from './menu/formsTables';
import Dashboard from './menu/dashboard';


export default function Menu(props) {
    return (

        <menu className={props.isMenu ? `block z-40 h-screen fixed lg:block bg-white rounded-l-3xl top-0 left-0 shadow` : `hidden z-50 h-screen fixed lg:block bg-white rounded-l-3xl top-0 left-0 shadow with-menu`}>
            {/* LOGO */}
            <Logo />
            <div className="overflow-y-auto h-full">
                {/* DASHBOARD & LAYOUT */}
                <Dashboard />

                {/* APP & PAGES */}
                <AppPages />

                {/* COMPONENTS */}
                <Components />

                {/* FORMS TABLES */}
                <FormsTables />
            </div>
        </menu>
    )
}

