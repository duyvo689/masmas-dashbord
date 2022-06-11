var React = require('react');
import Logo from './menu/logo';
import AppPages from './menu/appPages';
import Components from './menu/components';
import FormsTables from './menu/formsTables';
import Dashboard from './menu/dashboard';


export default function Menu(props) {

    return (
        <>
            <div className={props.isMenu ? `z-40 bg-black fixed cursor-pointer opacity-40 visible rounded-3xl h-full w-full` : `hidden opacity-0`}
                onClick={props.showMenu}
            ></div>

            <menu className={props.isMenu ? `block z-50 h-screen fixed lg:block bg-white transition-left duration-300 top-0 left-0 shadow` : `hidden z-50 h-screen fixed lg:block bg-white transition-left duration-300 rounded-l-3xl top-0 left-0 shadow with-menu`}>
                {/* LOGO */}
                <Logo />
                <div className="overflow-y-auto h-full">
                    {/* DASHBOARD & LAYOUT */}
                    <Dashboard showMenu={props.showMenu} />

                    {/* APP & PAGES */}
                    <AppPages />

                    {/* COMPONENTS */}
                    <Components />

                    {/* FORMS TABLES */}
                    <FormsTables />
                </div>
            </menu>
        </>

    )
}

