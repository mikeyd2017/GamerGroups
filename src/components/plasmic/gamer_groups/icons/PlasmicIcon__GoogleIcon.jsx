// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export function GoogleIconIcon(props) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      xmlnsXlink={"http://www.w3.org/1999/xlink"}
      version={"1.1"}
      viewBox={"0 0 46 46"}
      height={"1em"}
      width={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <defs>
        <filter
          x={"-50%"}
          y={"-50%"}
          width={"200%"}
          height={"200%"}
          filterUnits={"objectBoundingBox"}
          id={"Y2hR71-GQa"}
        >
          <feOffset
            dx={"0"}
            dy={"1"}
            in={"SourceAlpha"}
            result={"shadowOffsetOuter1"}
          ></feOffset>

          <feGaussianBlur
            stdDeviation={".5"}
            in={"shadowOffsetOuter1"}
            result={"shadowBlurOuter1"}
          ></feGaussianBlur>

          <feColorMatrix
            values={"0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.168 0"}
            in={"shadowBlurOuter1"}
            type={"matrix"}
            result={"shadowMatrixOuter1"}
          ></feColorMatrix>

          <feOffset
            dx={"0"}
            dy={"0"}
            in={"SourceAlpha"}
            result={"shadowOffsetOuter2"}
          ></feOffset>

          <feGaussianBlur
            stdDeviation={".5"}
            in={"shadowOffsetOuter2"}
            result={"shadowBlurOuter2"}
          ></feGaussianBlur>

          <feColorMatrix
            values={"0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.084 0"}
            in={"shadowBlurOuter2"}
            type={"matrix"}
            result={"shadowMatrixOuter2"}
          ></feColorMatrix>

          <feMerge>
            <feMergeNode in={"shadowMatrixOuter1"}></feMergeNode>

            <feMergeNode in={"shadowMatrixOuter2"}></feMergeNode>

            <feMergeNode in={"SourceGraphic"}></feMergeNode>
          </feMerge>
        </filter>

        <rect
          id={"Y2hR71-GQb"}
          x={"0"}
          y={"0"}
          width={"40"}
          height={"40"}
          rx={"2"}
        ></rect>
      </defs>

      <g stroke={"none"} strokeWidth={"1"} fill={"none"} fillRule={"evenodd"}>
        <g transform={"translate(3 3)"} filter={"url(#Y2hR71-GQa)"}>
          <use
            fill={"#FFF"}
            fillRule={"evenodd"}
            xlinkHref={"#Y2hR71-GQb"}
          ></use>

          <use fill={"none"} xlinkHref={"#Y2hR71-GQb"}></use>

          <use fill={"none"} xlinkHref={"#Y2hR71-GQb"}></use>

          <use fill={"none"} xlinkHref={"#Y2hR71-GQb"}></use>
        </g>

        <path
          d={
            "M31.64 23.205c0-.639-.057-1.252-.164-1.841H23v3.481h4.844a4.14 4.14 0 01-1.796 2.716v2.259h2.908c1.702-1.567 2.684-3.875 2.684-6.615z"
          }
          fill={"#4285F4"}
        ></path>

        <path
          d={
            "M23 32c2.43 0 4.467-.806 5.956-2.18l-2.908-2.259c-.806.54-1.837.86-3.048.86-2.344 0-4.328-1.584-5.036-3.711h-3.007v2.332A8.997 8.997 0 0023 32z"
          }
          fill={"#34A853"}
        ></path>

        <path
          d={
            "M17.964 24.71a5.41 5.41 0 01-.282-1.71c0-.593.102-1.17.282-1.71v-2.332h-3.007a9.005 9.005 0 000 8.084l3.007-2.332z"
          }
          fill={"#FBBC05"}
        ></path>

        <path
          d={
            "M23 17.58c1.321 0 2.508.454 3.44 1.345l2.582-2.58C27.463 14.891 25.426 14 23 14a8.997 8.997 0 00-8.043 4.958l3.007 2.332c.708-2.127 2.692-3.71 5.036-3.71z"
          }
          fill={"#EA4335"}
        ></path>

        <path d={"M14 14h18v18H14V14z"}></path>
      </g>
    </svg>
  );
}

export default GoogleIconIcon;
/* prettier-ignore-end */
