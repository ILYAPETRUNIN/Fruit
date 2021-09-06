export const routes = [
  {
    path: "",
    component: () => import("@/layout/mainLayout.vue"),
    children: [
      {
        path: "/",
        component: () => import("@/pages/home.vue"),
        name: "Home",
      },
    ],
  },
];
