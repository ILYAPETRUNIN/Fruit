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
      {
        path: "/shop",
        component: () => import("@/pages/shop.vue"),
        name: "Shop",
      },
      {
        path: "/pages",
        component: () => import("@/pages/pages.vue"),
        name: "Pages",
      },
      {
        path: "/blog",
        component: () => import("@/pages/blog.vue"),
        name: "Blog",
      },
      {
        path: "/contact",
        component: () => import("@/pages/contact.vue"),
        name: "Contact",
      },
    ],
  },
  
  {
    path: "/products",
    name: "Products",
    component: () => import("@/layout/mainLayout.vue"),
    children: [
        {
          path: "/products/vegetables",
          component: () => import("@/pages/prodList.vue"),
          name: "vegetables",
        },
        {
          path: "/products/fruits",
          component: () => import("@/pages/prodList.vue"),
          name: "fruits",
        },
        {
          path: "/products/berries",
          component: () => import("@/pages/prodList.vue"),
          name: "berries",
        },
        {
          path: "/products/nuts",
          component: () => import("@/pages/prodList.vue"),
          name: "nuts",
        },
        {
          path: "/products/drink",
          component: () => import("@/pages/prodList.vue"),
          name: "drinks",
        },

    ]
  } 
];
