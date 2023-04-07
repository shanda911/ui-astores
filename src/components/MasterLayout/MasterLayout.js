import { Outlet} from "react-router-dom";
import Header from "./Header/Header";

function MasterLayout() {
    return(
        <>
        <Header />
        <Outlet />
        </>
    )
}

export default MasterLayout;