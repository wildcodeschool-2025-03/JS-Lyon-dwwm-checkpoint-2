import { useEffect, useState } from "react";
import Cupcake from "../components/Cupcake";

/* ************************************************************************* */

/* you can use sampleCupcakes if you're stucked on step 1 */
/* if you're fine with step 1, just ignore this ;) */
/* ************************************************************************* */

function CupcakeList() {
  // Step 1: get all cupcakes

  const [cupcakes, setCupcakes] = useState<Cupcake[]>([]);
  const [accessories, setAccessories] = useState<Accessory[]>([]);
  const [cupcakesFiltered, setCupcakesFiltered] = useState<Cupcake[]>([]);

  useEffect(() => {
    fetch("http://localhost:3310/api/cupcakes")
      .then((resultRequest) => resultRequest.json())
      .then((cakesJson) => {
        setCupcakes(cakesJson);
        setCupcakesFiltered(cakesJson);
      });
    fetch("http://localhost:3310/api/accessories")
      .then((resultRequest) => resultRequest.json())
      .then((accessoriesJson) => {
        setAccessories(accessoriesJson);
      });
  }, []);

  console.info(accessories);

  // Step 3: get all accessories

  // Step 5: create filter state

  const cupfilter = (
    e: React.KeyboardEvent<HTMLElement> | React.MouseEvent<HTMLElement>,
  ) => {
    const target: HTMLInputElement = e.target as HTMLInputElement;

    if (target.value === "") return;

    if (target.value === "0") {
      setCupcakesFiltered(cupcakes);
    } else {
      setCupcakesFiltered(
        cupcakes.filter((cupcake) => cupcake.accessory_id === target.value),
      );
    }
  };

  return (
    <>
      <h1>My cupcakes</h1>
      <form className="center">
        <label htmlFor="cupcake-select">
          {/* Step 5: use a controlled component for select */}
          Filter by{" "}
          <select id="cupcake-select" onClick={cupfilter} onKeyDown={cupfilter}>
            <option value="0">---</option>
            {accessories.map((accessory) => (
              <option key={accessory.id} value={accessory.id}>
                {accessory.name}
              </option>
            ))}
          </select>
        </label>
      </form>
      <ul className="cupcake-list" id="cupcake-list">
        {/* Step 2: repeat this block for each cupcake */}

        {cupcakesFiltered.map((cupcake) => (
          <li className="cupcake-item" key={cupcake.id}>
            <Cupcake data={cupcake} />
          </li>
        ))}

        {/* Step 5: filter cupcakes before repeating */}

        {/* end of block */}
      </ul>
    </>
  );
}

export default CupcakeList;
