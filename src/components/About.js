import React from "react";
import Rainbow from "../hoc/Rainbow";

const About = () => {
  return (
    <div className="container">
      <h4 className="center">About</h4>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed felis
        justo, aliquam at sapien ac, efficitur vehicula diam. Cras porttitor a
        massa ac suscipit. Nam turpis ex, lacinia vel lobortis sed, tincidunt
        vitae enim. Suspendisse tincidunt erat ut urna tincidunt viverra. Morbi
        eget risus consequat, luctus libero at, tincidunt tellus. Mauris ac arcu
        arcu. Nam semper sit amet felis id vestibulum. Curabitur quam turpis,
        elementum tempor sodales non, volutpat sed purus. Mauris at ligula a sem
        dapibus porta nec at dolor. Fusce fermentum vel mi non luctus. Mauris et
        turpis diam. Integer risus nunc, sagittis ut scelerisque ac, luctus in
        velit.
      </p>
    </div>
  );
};

export default Rainbow(About);
