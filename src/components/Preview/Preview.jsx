import React from "react";

export default function Preview() {
  return (
    <div className="bg-white w-3xl h-[80vh]">
      <section className="formOne">
        <div>
          <div>
            <h1>John Doe</h1>
            <span>Sounding Expert</span>
          </div>
          <div>
            <p>johndoe@gmail.com</p>
            <p>12345678</p>
            <p>England, Asia</p>
          </div>
        </div>
        <div>
            <img src="../../../public/previewpfp.jpg" alt="preview pfp" />
        </div>
      </section>
    </div>
  );
}
