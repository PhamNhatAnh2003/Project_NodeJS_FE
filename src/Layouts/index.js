import UserDefault from "./user/Default/UserDefault";
// import AdminLayout from "./admin/Default/AdminLayout";
import NoHeaderLayout from "./other/NoHeader/NoHeaderLayout.jsx";
// import StaffLayout from "./staff/Default/StaffLayout";

const layouts = {
//   admin: {
//     default: AdminLayout,
//   },

  user: {
    default: UserDefault,
  },

  other: {
    noHeader: NoHeaderLayout,
  },
  
//   staff: {
//     default: StaffLayout,
//   },
};

export default layouts;
