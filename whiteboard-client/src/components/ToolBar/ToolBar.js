import React from "react";
import styled from "styled-components";
import ColorPicker from "./Colorpicker/Colorpicker";
import ShapeSelector from "./ShapesSelector/ShapeSelector";
import PopUpButton from "./PopUpButton/PopUpButton";
import { UploadTool } from "../uploadTool/Uploadtool";
import StickyNote from "./Sticky/StickyNote";

function ToolBar({changeColor, changeColorToGrey, changeColorToBlue, changeColorToGreen, changeColorToYellow}) {
  const Wrapper = styled.div`
    margin: auto;
    border-radius: 9px;
    padding: 15px;
    display: flex;
    background-color: #fff;
    justify-content: space-around;
    align-items: center;
    box-shadow: 0px 6px 24px rgba(0, 0, 0, 0.05),
      0px 0px 0px 1px rgba(0, 184, 124, 0.08);
    border-radius: 17px;
    position: fixed;
    bottom: 30px;
    left: 50%;
    transform: translateX(-50%);
  `;

  const Icon = styled.div`
    &:hover {
      background-color: #00b87c;
      border: none;
      fill: #ffffff;
    }
    &:hover svg,
    &:hover path {
      border: none;
      fill: #ffffff;
    }
    border: 1px solid #c4c4c4;
    border-radius: 10px;
    margin-right: 15px;
    box-sizing: border-box;
    padding: 8px;
    border: 1px solid #c4c4c4;
    border-radius: 10px;
    box-sizing: border-box;
    width: 40px;
    height: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
  `;

  return (
    <Wrapper>
      <Icon>
        <svg
          width="14"
          height="21"
          viewBox="0 0 14 21"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M7.90997 11.3601L11 19.8541L8.18197 20.8801L5.08997 12.3861L0.917969 15.5421L2.40797 0.633057L13.134 11.0961L7.90997 11.3601Z"
            fill="black"
          />
        </svg>
      </Icon>

      <PopUpButton
        content={
          <Icon>
            <svg
              width="22"
              height="22"
              viewBox="0 0 22 22"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M2.92896 20.485L8.77496 14.639C9.20023 14.753 9.65123 14.7235 10.058 14.555C10.4648 14.3865 10.8046 14.0886 11.0248 13.7073C11.2449 13.326 11.3331 12.8827 11.2757 12.4462C11.2182 12.0097 11.0183 11.6043 10.707 11.293C10.3956 10.9817 9.99029 10.7818 9.55377 10.7243C9.11725 10.6668 8.67397 10.755 8.29269 10.9752C7.9114 11.1954 7.61342 11.5352 7.44495 11.942C7.27649 12.3487 7.24697 12.7997 7.36096 13.225L1.51496 19.071L0.454956 18.011C3.28196 14.711 4.34296 11.057 5.75696 4.92901L12.121 4.22201L17.778 9.87901L17.071 16.243C10.943 17.657 7.28896 18.718 3.98996 21.546L2.92896 20.486V20.485ZM14.596 1.04001L20.943 7.38601C21.0084 7.4513 21.0544 7.53344 21.0759 7.62331C21.0975 7.71318 21.0937 7.80726 21.065 7.89511C21.0363 7.98296 20.9838 8.06113 20.9134 8.12096C20.8429 8.18078 20.7573 8.21991 20.666 8.23401L19.192 8.46401L13.536 2.80801L13.748 1.32301C13.7611 1.23118 13.7996 1.14483 13.8591 1.07361C13.9185 1.0024 13.9966 0.949125 14.0846 0.919757C14.1726 0.89039 14.267 0.886083 14.3573 0.90732C14.4477 0.928557 14.5303 0.974499 14.596 1.04001Z"
                fill="black"
              />
            </svg>
          </Icon>
        }
        popUpMenu={<ColorPicker changeColor={changeColor} changeColorToGrey={changeColorToGrey} changeColorToBlue={changeColorToBlue} changeColorToGreen={changeColorToGreen} changeColorToYellow={changeColorToYellow} />}
      />

      <Icon>
        <svg
          width="14"
          height="17"
          viewBox="0 0 14 17"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M8 2V17H6V2H0V0H14V2H8Z" fill="black" />
        </svg>
      </Icon>

      <Icon>
        <svg
          width="21"
          height="20"
          viewBox="0 0 21 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M13 17H20V19H11L7.00195 19.002L0.514954 12.515C0.327483 12.3274 0.222168 12.0731 0.222168 11.808C0.222168 11.5428 0.327483 11.2885 0.514954 11.101L11.12 0.49397C11.2128 0.400994 11.3231 0.327235 11.4445 0.276911C11.5659 0.226586 11.696 0.200684 11.8275 0.200684C11.9589 0.200684 12.089 0.226586 12.2104 0.276911C12.3318 0.327235 12.4421 0.400994 12.535 0.49397L20.313 8.27197C20.5004 8.4595 20.6057 8.71381 20.6057 8.97897C20.6057 9.24413 20.5004 9.49844 20.313 9.68597L13 17ZM14.657 12.515L18.192 8.97897L11.828 2.61497L8.29295 6.15097L14.657 12.515Z"
            fill="black"
          />
        </svg>
      </Icon>

      <PopUpButton
        content={
          <Icon>
            <svg
              width="18"
              height="18"
              viewBox="0 0 18 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M0 2C0 0.89543 0.895431 0 2 0H16C17.1046 0 18 0.895431 18 2V16C18 17.1046 17.1046 18 16 18H2C0.89543 18 0 17.1046 0 16V2Z"
                fill="#585858"
              />
            </svg>
          </Icon>
        }
        popUpMenu={<ShapeSelector />}
      />

      <PopUpButton
        content={
          <Icon>
            <svg
              width="18"
              height="18"
              viewBox="0 0 18 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12 11L11.883 11.007C11.6598 11.0333 11.4519 11.1341 11.293 11.293C11.1341 11.4519 11.0333 11.6598 11.007 11.883L11 12V18H0.998C0.734017 18.0005 0.480621 17.8962 0.293488 17.71C0.106355 17.5239 0.000794596 17.271 0 17.007V0.993C0 0.445 0.445 0 0.993 0H17.007C17.555 0 18 0.447 18 0.999V11H12ZM18 13L13 17.997V13H18Z"
                fill="black"
              />
            </svg>
          </Icon>
        }
        popUpMenu={<StickyNote />}
      />
      <PopUpButton
        content={
          <Icon className="fas fa-upload">
            {/* <i className="fas fa-upload"></i> */}
          </Icon>
        }
        popUpMenu={<UploadTool />}
      />

      <Icon>
        <svg
          width="18"
          height="18"
          viewBox="0 0 18 18"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M2 8.1L4 6.1L9.5 11.6L13 8.1L16 11.1V2H2V8.1ZM1 0H17C17.2652 0 17.5196 0.105357 17.7071 0.292893C17.8946 0.48043 18 0.734784 18 1V17C18 17.2652 17.8946 17.5196 17.7071 17.7071C17.5196 17.8946 17.2652 18 17 18H1C0.734784 18 0.48043 17.8946 0.292893 17.7071C0.105357 17.5196 0 17.2652 0 17V1C0 0.734784 0.105357 0.48043 0.292893 0.292893C0.48043 0.105357 0.734784 0 1 0ZM12.5 7C12.1022 7 11.7206 6.84196 11.4393 6.56066C11.158 6.27936 11 5.89782 11 5.5C11 5.10218 11.158 4.72064 11.4393 4.43934C11.7206 4.15804 12.1022 4 12.5 4C12.8978 4 13.2794 4.15804 13.5607 4.43934C13.842 4.72064 14 5.10218 14 5.5C14 5.89782 13.842 6.27936 13.5607 6.56066C13.2794 6.84196 12.8978 7 12.5 7Z"
            fill="black"
          />
        </svg>
      </Icon>
    </Wrapper>
  );
}

export default ToolBar;
