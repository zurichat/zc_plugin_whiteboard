import React from "react";
import "./SavedFileView.css";

const FileIcon = () => {
  return (
    <svg
      width="40"
      height="40"
      viewBox="0 0 18 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M10.5 1.49988H4.5C3.67157 1.49988 3 2.17145 3 2.99988V14.9999C3 15.8283 3.67157 16.4999 4.5 16.4999H13.5C14.3284 16.4999 15 15.8283 15 14.9999V5.99988L10.5 1.49988Z"
        stroke="#999999"
        stroke-width="1.22693"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M10.5 1.49988V5.99988H15"
        stroke="#999999"
        stroke-width="1.22693"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M12 9.75H6"
        stroke="#999999"
        stroke-width="1.22693"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M12 12.75H6"
        stroke="#999999"
        stroke-width="1.22693"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M7.5 6.74988H6.75H6"
        stroke="#999999"
        stroke-width="1.22693"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};

export default function SavedFileView() {
  return (
    <div className="saved-file-view">
      <div className="savedFiles">
        <h3>Saved Files</h3>
        <div className="fileSection">
          <div className="file">
            <div className="fileIcon">
              <FileIcon />
            </div>
            <p className="fileName">File 01.jpg</p>
          </div>
          <div className="file">
            <div className="fileIcon">
              <FileIcon />
            </div>
            <p className="fileName">File 02.txt</p>
          </div>
          <div className="file">
            <div className="fileIcon">
              <FileIcon />
            </div>
            <p className="fileName">File 03.png</p>
          </div>
          <div className="file">
            <div className="fileIcon">
              <FileIcon />
            </div>
            <p className="fileName">File 04.svg</p>
          </div>
          <div className="file">
            <div className="fileIcon">
              <FileIcon />
            </div>
            <p className="fileName">File 05.jpg</p>
          </div>
          <div className="file">
            <div className="fileIcon">
              <FileIcon />
            </div>
            <p className="fileName">File 06.jpg</p>
          </div>
          <div className="file">
            <div className="fileIcon">
              <FileIcon />
            </div>
            <p className="fileName">File 07.jpg</p>
          </div>
          <div className="file">
            <div className="fileIcon">
              <FileIcon />
            </div>
            <p className="fileName">File 08.jpg</p>
          </div>
          <div className="file">
            <div className="fileIcon">
              <FileIcon />
            </div>
            <p className="fileName">File 09.jpg</p>
          </div>
        </div>
      </div>
      <div className="bottomIcons">
        <div className="icon">
          <svg
            width="35"
            height="35"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M13 18V20H17V22H7.00004V20H11V18H2.99204C2.86073 17.9992 2.73086 17.9725 2.60988 17.9215C2.4889 17.8704 2.37919 17.7959 2.28703 17.7024C2.19488 17.6088 2.12209 17.498 2.07284 17.3763C2.02359 17.2546 1.99885 17.1243 2.00004 16.993V4.007C2.00004 3.451 2.45504 3 2.99204 3H21.008C21.556 3 22 3.449 22 4.007V16.993C22 17.549 21.545 18 21.008 18H13Z" />
          </svg>
        </div>

        <div className="icon">
          <svg
            width="35"
            height="35"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M13.414 5H20C20.2652 5 20.5196 5.10536 20.7071 5.29289C20.8946 5.48043 21 5.73478 21 6V7H3V4C3 3.73478 3.10536 3.48043 3.29289 3.29289C3.48043 3.10536 3.73478 3 4 3H11.414L13.414 5ZM3.087 9H20.913C21.0514 8.99994 21.1882 9.02859 21.3149 9.08413C21.4416 9.13968 21.5555 9.22092 21.6492 9.32271C21.7429 9.4245 21.8144 9.54463 21.8593 9.67549C21.9042 9.80636 21.9215 9.94512 21.91 10.083L21.076 20.083C21.0552 20.3329 20.9413 20.5658 20.7568 20.7357C20.5723 20.9055 20.3308 20.9999 20.08 21H3.92C3.66925 20.9999 3.42769 20.9055 3.24322 20.7357C3.05874 20.5658 2.94481 20.3329 2.924 20.083L2.09 10.083C2.07851 9.94512 2.09577 9.80636 2.14066 9.67549C2.18556 9.54463 2.25713 9.4245 2.35083 9.32271C2.44454 9.22092 2.55835 9.13968 2.68507 9.08413C2.81178 9.02859 2.94864 8.99994 3.087 9Z" />
          </svg>
        </div>

        <div className="icon">
          <svg
            width="35"
            height="35"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M9.827 21.763C5.35 20.771 2 16.777 2 12C2 10.178 2.487 8.47001 3.339 6.99801L7.622 14.417C8.10319 15.2891 8.83394 15.9976 9.72053 16.4516C10.6071 16.9056 11.6091 17.0844 12.598 16.965L9.828 21.763H9.827ZM12 22L16.287 14.575C16.7549 13.7977 17.0015 12.9073 17 12C17.0016 10.9179 16.6505 9.86474 16 9.00001H21.542C21.8467 9.97081 22.0012 10.9825 22 12C22 17.523 17.523 22 12 22ZM14.572 13.545C14.3033 13.9929 13.9222 14.3629 13.4666 14.6183C13.0109 14.8737 12.4965 15.0057 11.9741 15.0012C11.4518 14.9966 10.9397 14.8557 10.4886 14.5924C10.0374 14.3291 9.66287 13.9526 9.402 13.5L9.373 13.45C9.11977 12.9911 8.99118 12.4739 9.00004 11.9498C9.0089 11.4258 9.15489 10.9132 9.42349 10.4631C9.69209 10.0131 10.0739 9.64123 10.5309 9.38464C10.9879 9.12805 11.5042 8.99567 12.0283 9.00069C12.5524 9.0057 13.0661 9.14794 13.5181 9.41323C13.9701 9.67852 14.3447 10.0576 14.6047 10.5127C14.8646 10.9679 15.0008 11.4831 14.9996 12.0073C14.9984 12.5314 14.86 13.046 14.598 13.5L14.572 13.545ZM4.632 5.23901C5.56774 4.2169 6.7062 3.40099 7.97478 2.84331C9.24337 2.28564 10.6142 1.99843 12 2.00001C13.7557 1.99929 15.4807 2.46104 17.0013 3.33878C18.5219 4.21652 19.7845 5.47929 20.662 7.00001H12C11.0204 6.99988 10.0624 7.28744 9.24481 7.82698C8.42722 8.36653 7.78609 9.13431 7.401 10.035L4.632 5.23901Z" />
          </svg>
        </div>
      </div>
    </div>
  );
}
