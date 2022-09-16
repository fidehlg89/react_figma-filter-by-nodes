import { useEffect, useState } from "react";

const id = "";

const file = "";

const url = "https://api.figma.com/v1/files/" + file + "/nodes?ids=" + id;

const UtilityColors = () => {
  const [colors, setColors] = useState([]);

  useEffect(() => {
    const getColors = async (url) => {
      const response = await fetch(url, {
        method: "GET",
        //body: JSON.stringify(data),
        headers: {
          "X-Figma-Token": process.env.XFigmaToken,
        },
      });
      const data = await response.json();

      setColors(data.nodes[id].document.children[2].children);
    };
    getColors(url);
  }, []);

  return (
    <div>
      {colors.length > 0
        ? colors.map((item) => {
            return (
              <div key={item.id}>
                {`"${item.children[2].children[0].children[0].name.replace(
                  "colors.",
                  ""
                )}"` +
                  ": " +
                  `"${item.children[2].children[0].children[1].name}";`}
              </div>
            );
          })
        : null}
    </div>
  );
};

export default UtilityColors;
