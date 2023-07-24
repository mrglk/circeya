import "./Slider.css";
import { useRef, useState, useEffect } from "react";
import useWindowDimensions from "../../hooks/useWindowDimensions.js";

function Slider({ data }) {
  const $container = useRef();
  const $sticky = useRef();
  const $slider = useRef();

  const [realX, setRealX] = useState(0);
  const [scale, setScale] = useState(1);
  const { width } = useWindowDimensions();

  useEffect(() => {
    const paddings = parseFloat(window.getComputedStyle($sticky.current).paddingLeft) * 2;

    function handleScroll() {
      const offsetTop = window.scrollY + $container.current.getBoundingClientRect().top;
      const coefficient = 1 - ($container.current.offsetWidth - paddings) / $slider.current.offsetWidth;
      const transformX = (window.scrollY - offsetTop) / $container.current.offsetHeight;
      const newState = Math.max(Math.min(transformX, coefficient), 0) * 100;

      if (newState !== 0 && newState < coefficient * 100) setScale(1 + transformX / 3);

      setRealX(newState);
    }

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="Slider container">
      <div className="container__row Slider__row">
        <div className="Slider__content" ref={$container}>
          <div className="Slider__sticky" ref={$sticky}>
            <h1 className="Slider__title">
              Lorem ipsum <br />
              dolor sit amet
            </h1>
            <div className="Slider__photosWrapper">
              <div
                ref={$slider}
                className="Slider__photos"
                style={{
                  transform:
                    width > 950 ? `translateX(-${realX}%)` : `translateX(0%)`,
                }}
              >
                {data.map((src, i) => (
                  <div key={i} className="Slider__imgWrapper">
                    <img
                      className="Slider__img"
                      alt='Jewelry'
                      src={src}
                      style={{
                        transform: width > 950 ? `scale(${scale})` : `scale(1)`,
                      }}
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Slider;
