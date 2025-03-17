import React from "react";
import NavigatedButtons from "../components/menuComp/outPhotoCom/page";
import HeadlinesPages from "../components/globalComp/pagesheadlines/Headers";
import MenuDetail from "../components/menuComp/menuDetails/page";

export default function Menu() {
  return (
    <div>
      <HeadlinesPages h1="Our Menu" />
      <NavigatedButtons />
      <MenuDetail />
    </div>
  );
}
