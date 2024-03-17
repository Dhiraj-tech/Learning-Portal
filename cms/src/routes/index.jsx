import { BrowserRouter, Outlet, Route, Routes } from "react-router-dom"
import { Layout } from "../components"
import { Auth, Students, Dashboard, Profile, Contacts } from "../pages"
import { PrivateRoute } from "./PrivateRoute"

export const RouteList = () => {
    return <BrowserRouter>
        <Routes>
            <Route path="/" element={<Layout />}>
                <Route index element={<PrivateRoute element={<Dashboard.List />}/>} />

                <Route path="edit-profile" element={<PrivateRoute element={<Profile.Edit />}/>} />

                <Route path="change-password" element={<PrivateRoute element={<Profile.Password />}/>} />

                <Route path="students" element={<PrivateRoute element={<Outlet />} />}>
                    <Route index element={<Students.List />} />
                    <Route path="create" element={<Students.create />} />
                    <Route path=":id/edit" element={<Students.Edit />} />
                </Route>

                <Route path="contacts" element={<PrivateRoute element={<Outlet />} />}>
                    <Route index element={<Contacts.List />} />
                </Route>

                <Route path="/login" element={<Auth.Login />} />
            </Route>
        </Routes>
    </BrowserRouter>
}
