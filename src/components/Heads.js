import React from "react";

function Heads({ title }) {
  return (
    <>
      <title>{title} | Irayya Hiremath</title>
      <meta
        name="description"
        content="Irayya Hiremath portfolio using gatsby react framework"
      />
      <meta name="description" content="gatsby portfolio" />
      <link
        rel="icon"
        type="image/png"
        sizes="96x96"
        href="./static/icon-256x256.png"
      />
    </>
  );
}

export default Heads;
