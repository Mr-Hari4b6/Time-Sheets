import { Route, Routes } from "react-router-dom"
import Authentication from "../Authentication";
import TimeSheets from "../forms/TimeSheetForm";

const AppRouter = () => {
return(
        <Routes>
            <Route path="*" Component={Authentication}> </Route>
            <Route path="/timesheets" Component={TimeSheets}></Route>
        </Routes>
  )
};

export default AppRouter;