/** @format */

export default [
  {
    label: "Deshboard",
    name: "deshboard",
    iconClasses: "images/home-icon.png",
    classes: "nav-item mt-1 active",
    child: [],
  },

  {
    label: "Products",
    name: "products",
    iconClasses: "images/products-icon.png",
    classes: "nav-item mt-1 has-sub",
    child: [
      {
        label: "Orders",
        name: "orders",
        iconClasses: "images/white-cart.png",
      },
    ],
  },
  {
    label: "Orders",
    name: "orders",
    iconClasses: "images/shopping-bag.png",
  },
  {
    label: "Users",
    name: "users",
    iconClasses: "images/user-icon.png",
  },
  {
    label: "Riders",
    name: "riders",
    iconClasses: "images/bicycle.png",
  },
];
