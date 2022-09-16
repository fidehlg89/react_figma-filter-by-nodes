import { useEffect, useState } from "react";

const id = "";

const file = "";

const url = "https://api.figma.com/v1/files/" + file + "/nodes?ids=" + id;

const Typography = () => {
  const [typo, setTypo] = useState([]);

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

      setTypo(data.nodes[id].document.children[3].children);
    };
    getColors(url);
  }, []);

  return (
    <div>
      <div>
        {typo.length > 0
          ? typo[1].children.map((typoElement) => {
              return (
                <div key={typoElement.id}>
                  {typoElement.children[0].children[0].name}
                </div>
              );
            })
          : null}
      </div>
      <div>
        {typo.length > 0
          ? typo[2].children.map((typoElement) => {
              return (
                <div key={typoElement.id}>
                  {typoElement.children[0].children[0].name}
                </div>
              );
            })
          : null}
      </div>
      <div>
        {typo.length > 0
          ? typo[3].children.map((typoElement) => {
              return (
                <div key={typoElement.id}>
                  {typoElement.children[0].children[0].name}
                </div>
              );
            })
          : null}
      </div>
      <div>
        {typo.length > 0
          ? typo[4].children.map((typoElement) => {
              return (
                <div key={typoElement.id}>
                  {typoElement.children[0].children[0].name}
                </div>
              );
            })
          : null}
      </div>
      <div>
        {typo.length > 0
          ? typo[5].children.map((typoElement) => {
              return (
                <div key={typoElement.id}>
                  {typoElement.children[0].children[0].name}
                </div>
              );
            })
          : null}
      </div>
    </div>
  );
};

export default Typography;
