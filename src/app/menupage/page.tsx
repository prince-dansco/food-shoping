import React from "react";
import NavigatedButtons from "../components/outPhotoCom/page";
import HeadlinesPages from "../components/pagesheadlines/page";
import MenuDetail from "../components/menuDetails/page";

export default function Menu() {
  return (
    <div>
      <HeadlinesPages h1="Our Menu" />
      <NavigatedButtons />
      <MenuDetail />
    </div>
  );
}
