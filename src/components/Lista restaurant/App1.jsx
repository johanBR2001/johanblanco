import React, { useState } from "react";
import Menu from "./Menu";
import Categories from "./Categories";
import items from "./data";
// import '../Lista restaurant/index.css'
// import '../Lista restaurant/style.css'
import '../css/estilos.css'


const allCategories = ["all", ...new Set(items.map((item) => item.category))];

const App1 = () => {
  const [menuItems, setMenuItems] = useState(items);
  const [activeCategory, setActiveCategory] = useState("");
  const [categories, setCategories] = useState(allCategories);

  const filterItems = (category) => {
    setActiveCategory(category);
    if (category === "all") {
      setMenuItems(items);
      return;
    }
    const newItems = items.filter((item) => item.category === category);
    setMenuItems(newItems);
  };
  return (
    <section id="menu" className="bg-light">
    <div className="container">
        <div className="row">
            <div className="col-12 intro-text">
                <h1>Explora nuestros mejores restaurantes</h1>
                <h6>Podras escoger entre los mejores restaurantes de Lima</h6>
            </div>
        </div>
    </div>
    
          
          
          
                     
        <Categories
          categories={categories}
          activeCategory={activeCategory}
          filterItems={filterItems}
        />
        
        
        <Menu items={menuItems} />
        
        
      </section>
  );
};

export default App1;