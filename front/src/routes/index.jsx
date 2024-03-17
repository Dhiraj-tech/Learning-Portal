import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Layout } from "../components";
import * as Pages from "../pages";
import * as Components from "../components"

export const RouteList = () => {

    return <BrowserRouter>
        <Routes>
            <Route path="/" element={<Layout />}>

                <Route index element={<Pages.Home />} />

                <Route path="register" element={<Pages.Register />} />

                <Route path="login" element={<Pages.Login />}></Route>
                
                <Route path="about" element={<Pages.About />} />

                <Route path="contacts" element={<Pages.Contact />} />

                <Route path="edit-profile" element={<Pages.EditProfile />} />

                <Route path="change-password" element={<Pages.ChangePassword />} />

                <Route path="playlist" element={<Pages.PlayList />} />

                <Route path="course" element={<Pages.Course />} />

                <Route path="teacherprofile" element={<Pages.TeacherProfile />} />

                <Route path="watchvideo" element={<Pages.WatchVideo />} />

                <Route path="*" element={<h1 className="text-center">404 Page Not Found</h1>} />
            </Route>
            
        </Routes>
    </BrowserRouter>
    
}