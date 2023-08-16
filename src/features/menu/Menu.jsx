/* eslint-disable react-refresh/only-export-components */
import MenuItem from "./MenuItem";

import { useLoaderData } from "react-router-dom";
import { getMenu } from "../../services/apiRestaurant";

function Menu() {
  const menu = useLoaderData();
  return (
    <div>
      <ul>
        {menu.map((pizza) => {
          return <MenuItem pizza={pizza} key={pizza.id} />;
        })}
      </ul>
    </div>
  );
}

export async function loader() {
  const menu = await getMenu();
  return menu;
}

export default Menu;
