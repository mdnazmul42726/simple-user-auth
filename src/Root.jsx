import { NavLink, Outlet } from "react-router-dom";

const Root = () => {
    return (
        <div>
            {/* nav start */}
            <nav>
                <div className="navbar bg-base-100">
                    <div className="flex-1">
                        <h1 className="text-xl">Simple user auth</h1>
                    </div>
                    <div className="flex-none">
                        <ul className="menu menu-horizontal px-1">
                            <div className="hidden md:flex gap-4 ">
                                <NavLink to={"/"}>Home</NavLink>
                                <NavLink to={"/signin"}>Login</NavLink>
                                <NavLink to={"/signup"}>Registar</NavLink>
                            </div>
                            <li className="md:hidden">
                                <details>
                                    <summary>Menu</summary>
                                    <ul className="p-2 bg-base-100">
                                        <NavLink to={"/"}>Home</NavLink> <br />
                                        <NavLink to={"/signin"}>Login</NavLink> <br />
                                        <NavLink to={"/signup"}>Registar</NavLink> <br />
                                    </ul>
                                </details>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
            {/* nav end */}

            {/* outlet */}<div className="mt-20"><Outlet /></div>{/* Outlet */}

        </div>
    );
};

export default Root;