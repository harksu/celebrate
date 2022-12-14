import "./App.css";
import {
  Animator,
  ScrollContainer,
  ScrollPage,
  batch,
  Fade,
  FadeIn,
  FadeOut,
  Move,
  MoveIn,
  MoveOut,
  Sticky,
  StickyIn,
  StickyOut,
  Zoom,
  ZoomIn,
  ZoomOut,
} from "react-scroll-motion";
import TypeIt from "typeit-react";
import secondImage from "./asset/2.jpg";
import thirdImage from "./asset/1.jpg";
import fourImage from "./asset/3.jpg";
import fiveImage from "./asset/4.jpg";
import sixImage from "./asset/5.jpg";
function App() {
  const ZoomInScrollOut = batch(StickyIn(), FadeIn(), ZoomIn());
  const FadeUp = batch(Fade(), Move(), Sticky());

  return (
    <ScrollContainer>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          width: "100vw",
          height: "100vh",
        }}
      >
        <TypeIt
          element={"h2"}
          options={{ waitUntilVisible: true }}
          style={{
            color: "pink",
            fontSize: "42px",
            textAlign: "center",
          }}
        >
          π17.09.16 ~ ingπ
          <br />
          μ€ν¬λ‘€μ λ°μΌλ‘ λ΄λ €μ μμν΄μ£ΌμΈμ
          <br />
          ππ
        </TypeIt>
      </div>
      <ScrollPage>
        <Animator animation={batch(Fade(), Sticky(), MoveOut(0, -200))}>
          <span>
            <img
              src={require("./start.jpg")}
              style={{ width: "100vw", height: "100vh", opacity: 0.7 }}
            />
          </span>
        </Animator>
      </ScrollPage>
      <ScrollPage>
        <Animator animation={ZoomInScrollOut}>
          <h1>
            <br />
          </h1>
          <h2 style={{ textAlign: "center", color: "pink" }}>
            πμ¬λ¬λΆ ~! μ°λ¦¬ μ»€νμ΄ 5μ£Όλμ΄λμλ!!!π
          </h2>
        </Animator>
      </ScrollPage>
      <ScrollPage>
        <Animator animation={ZoomInScrollOut}>
          <div
            style={{
              backgroundImage: `url('${secondImage}')`,
              backgroundRepeat: "no-repeat",
              width: "100vw",
              height: "100vh",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              backgroundSize: "100% 100%",
            }}
          >
            <h2
              style={{
                textAlign: "center",
                color: "pink",
                opacity: "0.7",
                backgroundColor: "white",
                borderRadius: "30px",
                padding: "15px",
                fontWeight: "bold",
              }}
            >
              μλ½ μ§λ‘±λ ? πππ
              <br /> μ°λ¦¬κ° 20μ΄λΆν° μμν΄μ λ²μ¨ λ§λμ§ 5λμ΄λ λμμ΄λ γ-γ
              <br /> λ²μ¨ 5λ²μ§Έ λ§μ΄νλ μ°λ¦¬ κΈ°λμΌμ΄κ΅¬
              <br /> 20λ μ€λ°μ λ§μ΄νλ κΈ°λμΌμΈλ§νΌ
              <br /> μλλΆν° κ³μ λ§νλ κΈ°λμΌ νμ΄μ§λ₯Ό λΆμ‘±νμ§λ§ κΌ­
              λ§λ€μ΄μ£Όκ³  μΆμμ΄.
              <br /> νν£ λ³λ‘ λλ¨νμ§ μμλ μ΄μκ² λ΄μ£ΌμΌ ββ
            </h2>
          </div>
        </Animator>
      </ScrollPage>

      <ScrollPage>
        <Animator animation={ZoomInScrollOut}>
          <div
            style={{
              backgroundImage: `url('${thirdImage}')`,
              backgroundRepeat: "no-repeat",
              width: "100vw",
              height: "100vh",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              backgroundSize: "100% 100%",
            }}
          >
            <h2
              style={{
                textAlign: "center",
                color: "pink",
                opacity: "0.7",
                backgroundColor: "white",
                borderRadius: "30px",
                padding: "15px",
                fontWeight: "bold",
              }}
            >
              μγγγγγγγγγγγγγγγγμ΄κ±° λλ¬΄ κ·μμ€
              <br />
              μ§μ§ λ΄ μμ  λΉΌμ΄λ³΄λ¦Ώ μ§€μ΄μΌλ
              <br /> μ°λ¦¬μκ°κ° μ΄κ±° λ³΄κ³  λ μ΄λ κ² μ§± μ’μν΄μ€¬μΌλ©΄ μ’κ² λ°..
              <br /> μ§μ°μ¨ 20μ΄ 9μλΆν° ν­μ λ λ ν λ΄νΈ ν΄μ€μ λλ¬΄ κ³ λ§μ
              <br /> λ΄κ° κ°μ μ μΌλ‘ νλ€ λλ, κ΅°λλ‘ νλ€ λλ, κ°μΈμ μΌλ‘
              νλ€ λ
              <br /> μ§μ°μ΄ννλ λ΄κ° λ²νλͺ© μ­ν μ μΆ©λΆν ν΄μ€ μ μμκΉ??
              <br /> μμλ λ­κ° ν­μ λ΄κ° μ§μ°μ΄νν λ°κΈ°λ§ νλ κ² κ°μ
            </h2>
          </div>
        </Animator>
      </ScrollPage>
      <ScrollPage>
        <Animator animation={batch(Fade(), Sticky(), MoveOut(0, -200))}>
          <div
            style={{
              backgroundImage: `url('${fourImage}')`,
              backgroundRepeat: "no-repeat",
              width: "100vw",
              height: "100vh",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              backgroundSize: "100% 100%",
            }}
          >
            <h2
              style={{
                textAlign: "center",
                color: "pink",
                opacity: "0.7",
                backgroundColor: "white",
                borderRadius: "30px",
                padding: "15px",
                fontWeight: "bold",
              }}
            >
              κ·Έλλ ν­μ λ΄κ° μ¬λνλκ±° μμ§λ?
              <br />
              μ§μ°μ΄κ° λ­ μκ°ν΄λ κ·Έ μ΄μμΌλ‘ λ μ¬λν΄
              <br /> κ·Έ λμ κ·Έλμκ³ , μ§κΈλ κ·Έλ κ³ , μμΌλ‘λ κ·Έλ΄κ±°μΌ
              <br /> λΉλ‘ λ΄κ° νκ²½μ΄λ μ±μ₯ μμ¬ λλ¬Έμ μ§μ°μ΄ λ§μ΄ λͺ»λμμ€λ
              <br /> λλ μ§μ°μ΄λ κ²νκ΅¬ μΌνλ€λκ΅¬ λ§λκ±° λ¨ΉμΌλ©΄μ λ λκ°
              μ μΌ νλ³΅ν΄
              <br /> λ ν΄λν°πλ λ°κΏ¨μΌλκΉ μ°λ¦¬ μμΌλ‘ μ¬μ§ λ λ§μ΄ μ°μ
              <br /> μ΄κ±° λ§λ€λ©΄μ λλκ±΄λ° μ°λ¦¬ μ¬μ§ μ§μ§ μμ°λλ€λ,,,
            </h2>
          </div>
        </Animator>
      </ScrollPage>
      <ScrollPage>
        <Animator animation={batch(Fade(), Sticky(), MoveOut(0, -200))}>
          <div
            style={{
              backgroundImage: `url('${fiveImage}')`,
              backgroundRepeat: "no-repeat",
              width: "100vw",
              height: "100vh",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              backgroundSize: "100% 100%",
            }}
          >
            <h2
              style={{
                textAlign: "center",
                color: "pink",
                opacity: "0.7",
                backgroundColor: "white",
                borderRadius: "30px",
                padding: "15px",
                fontWeight: "bold",
              }}
            >
              μ§μ°μ΄λ λͺ»μκ²Όλ€κ³  νμ§λ§, λλ μ΄λ κ² μ§μ°μ΄κ° ν΄λ§μ νλ
              λͺ¨μ΅μ΄ μ μΌ μ’μ
              <br />
              λ΄κ° λλΌλ μ§μ°μ΄μ κ°μ₯ ν° λ§€λ ₯μ κ°μ μ΄ κ·Έλλ‘ μΌκ΅΄μ
              λνλλ€λκ±°λκΉ λ§μΌ
              <br /> μμΌλ‘λ κ³μ λ΄ μμμ μμ΄μ€ β€β€β€β€β€
              <br /> λ΄κ° μ·¨μνλ©΄ κΌ­ λ§μλ κ²λ λ§μ΄ μ¬μ£Όκ³  μ°λ¦¬μκ° κ°μ§κ³ 
              μΆμ΄νλ κ²λ λ§μ΄ μ¬μ€νλκΉ
              <br /> μ‘°κΈλ§ λ κΈ°λ€λ €μ€. γγγγγγγγγγγγγβ€
              <br /> μ λ° μ₯μΌ λμμΌλ©΄ μ’κ² λ€,,, μ°λ¦¬ μ€λ νλ£¨λ μ§± μ¬λ°κ³ 
              νλ³΅νκ² λμβ€ 5μ£Όλ λλ¬΄ μΆνν΄ β€β€β€β€
            </h2>
          </div>
        </Animator>
      </ScrollPage>

      <ScrollPage>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "100vh",
            width: "100vw",
            backgroundImage: `url('${sixImage}')`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "100% 100%",
          }}
        >
          <span
            style={{
              fontSize: "36px",
              textAlign: "center",
              color: "pink",
              opacity: "0.7",
              fontWeight: "bold",
            }}
          >
            <Animator animation={MoveIn(-1000, 0)}>2018.09.16 1οΈβ£μ£Όλ</Animator>
            <Animator animation={MoveIn(1000, 0)}>2019.09.16 2οΈβ£μ£Όλ</Animator>
            <Animator animation={MoveOut(1000, 0)}>2020.09.16 3οΈβ£μ£Όλ</Animator>
            <Animator animation={MoveOut(-1000, 0)}>2021.09.16 4οΈβ£μ£Όλ</Animator>
            <Animator animation={MoveOut(-1000, 0)}>2022.09.16 5οΈβ£μ£Όλ</Animator>
          </span>
        </div>
      </ScrollPage>
      <ScrollPage>
        <Animator animation={batch(Fade(), Sticky())}>
          <TypeIt
            element={"h2"}
            options={{ waitUntilVisible: true, speed: 400 }}
            style={{
              color: "pink",
              fontSize: "30px",
              textAlign: "center",
            }}
          >
            λ λ§λκ²ν΄μ€ μΈμ°μ κ°μ¬ν΄.
          </TypeIt>
        </Animator>
      </ScrollPage>
    </ScrollContainer>
  );
}

export default App;
