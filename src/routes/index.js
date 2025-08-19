import config from "../config";
import Pages from "../Pages";
import Layouts from "../Layouts";

const publicRoutes = [
  {
    path: config.routes.other.login,
    element: Pages.other.login,
    layout: Layouts.other.noHeader,
  },
];

const privateRoutes = [
  // User
//   { path: config.routes.user.booking, element: pages.user.booking },
//   { path: config.routes.user.payment, element: pages.user.booking },
//   { path: config.routes.user.completed, element: pages.user.booking },
//   { path: config.routes.user.bookingList, element: pages.user.bookingList },
//   { path: config.routes.user.bookingDetail, element: pages.user.bookingDetail },
//   { path: config.routes.user.profile, element: pages.user.profile },

  // Admin
  {
    // path: config.routes.admin.profile,
    // element: pages.admin.profile,
    // layout: layouts.admin.default,
    // role: "admin",
  },
  
];

export { publicRoutes, privateRoutes };
