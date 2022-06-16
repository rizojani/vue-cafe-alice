/** @format */

export default [
  {
    label: "Deshboard",
    name: "AdminDashboard",
    iconClasses: "images/home-icon.png",
    // classes: "nav-item mt-1 active",
  },

  {
    label: "Products",
    // name: "",
    iconClasses: "images/products-icon.png",
    classes: "nav-item mt-1 has-sub",
    child: [
      {
        label: "Inventory",
        name: "ProductList",
        iconClasses: "images/inventory.png",
      },
      {
        label: "Categories",
        name: "CategoryList",
        iconClasses: "images/categories.png",
      },
    ],
  },
  {
    label: "Orders",
    // name: "orders",
    iconClasses: "images/shopping-bag.png",
    // classes: "nav-item mt-1 has-sub",
    child: [
      {
        label: "Orders",
        name: "Orders",
        iconClasses: "images/white-cart.png",
      },
      {
        label: "Payments",
        name: "Payments",
        iconClasses: "images/payments.png",
      },
    ],
  },
  {
    label: "Users",
    name: "UserList",
    iconClasses: "images/user-icon.png",
  },
  {
    label: "Riders",
    name: "RiderList",
    iconClasses: "images/bicycle.png",
  },

  {
    label: "Feedback",
    name: "FeedbackList",
    iconClasses: "images/thumbs-up.png",
  },
];
