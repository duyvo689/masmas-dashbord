var React = require('react');
import Logo from './menu/logo';
import AppPages from './menu/appPages';
import Components from './menu/components';
import FormsTables from './menu/formsTables';
import Dashboard from './menu/dashboard';


export default function Menu() {
    return (
        <menu className="h-screen fixed bg-white rounded-l-3xl top-0 left-0 shadow">
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

