exports.createTopNavbar = function(navbarTitle, ...menuItems) {
  let navbar = document.createElement("div");
  navbar.style.backgroundImage = "linear-gradient(45deg, #ababab, #02020259)";
  navbar.style.width = "100%";

  const dropDownMenu = document.createElement("div");
  dropDownMenu.style.width = "fit-content";

  const menuIcon = document.createElement("div");
  const menuIconBar1 = document.createElement("div");
  menuIconBar1.style.cssText = `width: 30px;
  height: 5px;
  background-color: black;
  margin: 5px;`;
  const menuIconBar2 = document.createElement("div");
  menuIconBar2.style.cssText = `width: 30px;
  height: 5px;
  background-color: black;
  margin: 5px;`;
  const menuIconBar3 = document.createElement("div");
  menuIconBar3.style.cssText = `width: 30px;
  height: 5px;
  background-color: black;
  margin: 5px;`;
  menuIcon.appendChild(menuIconBar1);
  menuIcon.appendChild(menuIconBar2);
  menuIcon.appendChild(menuIconBar3);

  const dropDownButton = document.createElement("button");
  dropDownButton.style.backgroundColor = "inherit";
  dropDownButton.appendChild(menuIcon);
  dropDownButton.addEventListener("click", toggleDropDown);

  function toggleDropDown() {
    if (dropDownMenuContent.style.display === "block") {
      dropDownMenuContent.style.display = "none";
    } else {
      dropDownMenuContent.style.display = "block";
    }
  }

  const dropDownMenuContent = document.createElement("div");
  dropDownMenuContent.style.display = "none";
  dropDownMenuContent.style.backgroundColor = "#eceeef;";

  for (let i = 0; i < menuItems.length; i++) {
    let menuItem = document.createElement("div");
    menuItem.style.padding = "0.5em";
    menuItem.style.backgroundColor = "#eceeef";
    menuItem.addEventListener(
      "mouseover",
      () => (menuItem.style.backgroundColor = "#e0e0e0")
    );
    menuItem.addEventListener(
      "mouseleave",
      () => (menuItem.style.backgroundColor = "#eceeef")
    );
    menuItem.innerHTML = menuItems[i];
    dropDownMenuContent.appendChild(menuItem);
  }

  const navTitle = document.createElement("a");
  navTitle.innerHTML = navbarTitle;
  navTitle.style.float = "right";
  navTitle.style.padding = "0.5em";
  navTitle.style.fontSize = "x-large";

  dropDownMenu.appendChild(dropDownButton);
  navbar.appendChild(navTitle);
  navbar.appendChild(dropDownMenu);
  navbar.appendChild(dropDownMenuContent);

  return navbar;
}
