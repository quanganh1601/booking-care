import Home from "../pages/Home";
import LayoutAdmin from "../layout/layoutAdmin";
import HomeAdmin from "../pages/admin/home";
import ManagerDoctor from "../component/manage-doctor";
import MangeUsers from "../component/manager-user";
import { router } from "../config";

export const publicRoute = [
  { path: router.path, component: Home },
  { path: router.pathAdmin, component: HomeAdmin, layout: LayoutAdmin },
  { path: router.pathManageDoctor, component: ManagerDoctor, layout: LayoutAdmin },
  { path: router.pathUsers, component: MangeUsers, layout: LayoutAdmin }
];