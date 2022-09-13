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
          😍17.09.16 ~ ing😍
          <br />
          스크롤을 밑으로 내려서 시작해주세요
          <br />
          👇👇
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
            🎉여러분 ~! 우리 커플이 5주년이래요눈!!!🎉
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
              안뇽 지롱띠? 🖐🖐🖐
              <br /> 우리가 20살부터 시작해서 벌써 만난지 5년이나 되었어눈 ㅎ-ㅎ
              <br /> 벌써 5번째 맞이하는 우리 기념일이구
              <br /> 20대 중반에 맞이하는 기념일인만큼
              <br /> 작년부터 계속 말했던 기념일 페이지를 부족하지만 꼭
              만들어주고 싶었어.
              <br /> 히힣 별로 대단하진 않아도 이쁘게 봐주삼 ✌✌
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
              엌ㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋ이거 너무 귀요오
              <br />
              진짜 내 완전 빼이보릿 짤이야눈
              <br /> 우리아가가 이거 보고 또 이렇게 짱 좋아해줬으면 좋겠따..
              <br /> 지연씨 20살 9월부터 항상 든든한 내편 해줘서 너무 고마워
              <br /> 내가 가정적으로 힘들 때나, 군대로 힘들 때나, 개인적으로
              힘들 때
              <br /> 지연이한테도 내가 버팀목 역할을 충분히 해줄 수 있을까??
              <br /> 요새는 뭔가 항상 내가 지연이한테 받기만 하는 것 같아
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
              그래두 항상 내가 사랑하는거 알지눈?
              <br />
              지연이가 뭘 생각해도 그 이상으로 널 사랑해
              <br /> 그 동안 그래왔고, 지금도 그렇고, 앞으로도 그럴거야
              <br /> 비록 내가 환경이나 성장 욕심 때문에 지연이 많이 못놀아줘두
              <br /> 나두 지연이랑 겜하구 쇼핑다니구 맛난거 먹으면서 놀 때가
              제일 행복해
              <br /> 나 휴대폰📞도 바꿨으니까 우리 앞으로 사진 더 많이 찍자
              <br /> 이거 만들면서 느낀건데 우리 사진 진짜 안찍는다눈,,,
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
              지연이는 못생겼다고 하지만, 나는 이렇게 지연이가 해맑아 하는
              모습이 제일 좋아
              <br />
              내가 느끼는 지연이의 가장 큰 매력은 감정이 그대로 얼굴에
              나타난다는거니까 말야
              <br /> 앞으로도 계속 내 옆에서 웃어줘 ❤❤❤❤❤
              <br /> 내가 취업하면 꼭 맛있는 것두 많이 사주고 우리아가 가지고
              싶어하는 것도 많이 사줄테니까
              <br /> 조금만 더 기다려줘. ㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋ❤
              <br /> 제발 장염 나았으면 좋겠다,,, 우리 오늘 하루도 짱 재밌고
              행복하게 놀자❤ 5주년 너무 축하해 ❤❤❤❤
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
            <Animator animation={MoveIn(-1000, 0)}>2018.09.16 1️⃣주년</Animator>
            <Animator animation={MoveIn(1000, 0)}>2019.09.16 2️⃣주년</Animator>
            <Animator animation={MoveOut(1000, 0)}>2020.09.16 3️⃣주년</Animator>
            <Animator animation={MoveOut(-1000, 0)}>2021.09.16 4️⃣주년</Animator>
            <Animator animation={MoveOut(-1000, 0)}>2022.09.16 5️⃣주년</Animator>
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
            널 만나게해준 인연에 감사해.
          </TypeIt>
        </Animator>
      </ScrollPage>
    </ScrollContainer>
  );
}

export default App;
