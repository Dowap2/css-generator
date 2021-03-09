import React from "react";
import { render } from "@testing-library/react";
import { Provider, useSelector } from "react-redux";
import { CSSBox } from "components/CSSBox";

describe("css text", () => {
  const state = useSelector(state => state.boxState.state);
  const Component = () => (
    <Provider>
      <CSSBox />
    </Provider>
  );
  it("텍스트가 올바르게 적용이 되는지", async () => {
    const { findByText } = render(<Component />);
    const text = `.sampleName{
            width: ${state.boxWidth}px
            height ${state.boxHeight}px
            border ${state.borderWidth}px ${state.borderStyle} ${
      state.borderColor
    }
            background: ${
              state.colorType === "color"
                ? state.boxColor
                : `linear-gradient(${
                    state.gradientStyle === "n deg"
                      ? `${state.deg}deg`
                      : `${state.gradientStyle}`
                  }, ${state.color1}, ${state.color2})`
            }
            color: ${state.textColor}
            font-size: ${state.fontSize}px
            text-align: ${state.textStyle}
            transform: rotateX(${state.rotateX}deg) rotateY(${
      state.rotateY
    }deg) rotateZ(${state.rotateZ}deg) translateX(${
      state.transformX
    }px); translateY(${state.transformY}px);
        }`;
    await findByText("textArea").toBeVisible(text);
  });
});
