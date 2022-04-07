import React, { useState, useRef } from "react";
import styled from "styled-components";
import { Resizable } from "react-resizable";

const Root = styled.section`
  .react-resizable {
    position: relative;
    background-clip: padding-box;
  }

  .react-resizable-handle {
    position: absolute;
    background-color: #bfbfbf;
    background-image: none;
    padding: 0;
    width: 1px;
    height: 100%;
    bottom: 0;
    right: 0;
    cursor: w-resize;
    z-index: 1;
    opacity: 0;
    transition: opacity 0.5s;
    &.active {
      opacity: 1;
      background-color: #ffb041;
    }
  }
`;

export default function Box({ width = 200, height = 200 }) {
  // eslint-disable-next-line
  const stretchRef = useRef();
  const rootRef = useRef();
  const [offset, setOffset] = useState(0);
  const [rWidth, setWidth] = useState(width);

  // eslint-disable-next-line
  const getPosition = (el) => {
    let oLeft = el.offsetLeft;
    let parent = el.offsetParent;
    while (parent) {
      oLeft += parent.offsetLeft;
      parent = parent.offsetParent;
    }
    return { x: oLeft };
  };

  const handleResize = (e, { size }) => {
    setOffset(size.width - rWidth);
    // let parentNodeWidth = getPosition(rootRef.current).x
    // let stretchDom = stretchRef.current
    // stretchDom.style.display = 'block'
    // stretchDom.style.left = `${e.clientX - parentNodeWidth + 2}px`
  };

  const handleResizeStop = (e, { size }) => {
    // 拖拽结束以后偏移量归零
    setOffset(0);

    // let stretchDom = stretchRef.current
    // stretchDom.style.display = 'none'
    // stretchDom.style.left = `0px`
    // props传进来的事件，在外部是列数据中的onHeaderCell方法提供的事件
    setWidth(size.width);
  };

  const _ResizableSpan = (
    <span
      // 有偏移量显示竖线
      className={`react-resizable-handle${offset ? " active" : ""}`}
      // 拖拽层偏移
      style={{ transform: `translateX(${offset}px)` }}
      onClick={(e) => {
        // 取消冒泡，不取消貌似容易触发排序事件
        e.stopPropagation();
        e.preventDefault();
      }}
    />
  );

  return (
    <Root ref={rootRef}>
      <Resizable
        className="box"
        width={rWidth + offset}
        height={0}
        onResize={handleResize}
        handle={_ResizableSpan}
        // handle={_ResizableSpan}
        axis="x"
        // 拖拽结束更新
        onResizeStop={handleResizeStop}
        draggableOpts={{ enableUserSelectHack: false }}
      >
        <div
          style={{
            width: rWidth + "px",
            height: height + "px",
            border: "1px solid #ddd",
          }}
        >
          <span className="text">
            {"Raw use of <Resizable> element. 200x200, no constraints."}
          </span>
          {/* 伸缩列样式 */}
          {/* <div
              ref={stretchRef}
              style={{
                display: 'none',
                height: '100%',
                width: 1,
                background: '#BFBFBF',
                position: 'absolute',
                zIndex: 999,
                bottom: 0,
                left: 0
              }}
            ></div> */}
        </div>
      </Resizable>
    </Root>
  );
}
