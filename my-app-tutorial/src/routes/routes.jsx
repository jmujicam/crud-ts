import { Route, Routes} from "react-router-dom";
import TutorialsList from "../components/TutorialsList";

const AppRouter = ()=> {
    return(
        <Routes>
            <Route path={"/tutorials"} element={<TutorialsList/>} />
        </Routes>
    )
};

export default AppRouter;

