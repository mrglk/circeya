import "./Section.css";

function Section({ data }) {
  const {images, title, columns} = data;

  function createMarkupColumn1() {
    return { __html: columns[0].description };
  }

  function createMarkupColumn2() {
    return { __html: columns[1].description };
  }

  return (
    <section className="Section container">
      <div className="container__row">
        <h1 className="Section__title">{title}</h1>
      </div>
      <div className="Section__content">
        <div className="Section__row container__row">
          <div className="Section__imgWrapper">
            <img
              className="Section__img"
              alt="Jewelry"
              src={images[0]}
            />
          </div>
          <div className="Section__column">
            <h1 className="Section__columnTitle">{columns[0].title}</h1>
            <p
              className="Section__columnDescription"
              dangerouslySetInnerHTML={createMarkupColumn1()}
            ></p>
          </div>
        </div>
        <div className="Section__row container__row">
          <div className="Section__imgWrapper">
            <img
              className="Section__img"
              alt="Jewelry"
              src={images[1]}
            />
          </div>
          <div className="Section__column">
            <h1 className="Section__columnTitle">{columns[1].title}</h1>
            <p
              className="Section__columnDescription"
              dangerouslySetInnerHTML={createMarkupColumn2()}
            ></p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Section;
