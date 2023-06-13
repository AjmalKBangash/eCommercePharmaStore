import { useRef } from "react";

import "./Search.css";

function Search() {
  const searchRef = useRef();

  //   searchRef.current = "type = reset";
  //   searchRef.current.addEventListener("click", function () {
  //     this.parentNode.querySelector("input").focus();
  //   });

  //   document
  //     .querySelector('.searchbox[(type = "reset")]')
  //     .addEventListener("click", function () {
  //       this.parentNode.querySelector("input").focus();
  //     });

  return (
    <div
      className="container"
      style={{
        display: "flex",
        justifyContent: "center",
        marginBottom: "5px",
      }}
    >
      <svg xmlns="http://www.w3.org/2000/svg" style={{ display: "none" }}>
        <symbol
          xmlns="http://www.w3.org/2000/svg"
          id="sbx-icon-search-6"
          viewBox="0 0 40 40"
        >
          <path
            d="M28.295 32.517c-2.93 2.086-6.51 3.312-10.38 3.312C8.02 35.83 0 27.81 0 17.914 0 8.02 8.02 0 17.915 0 27.81 0 35.83 8.02 35.83 17.915c0 3.87-1.227 7.45-3.313 10.38l6.61 6.61c1.166 1.165 1.163 3.057 0 4.22-1.167 1.167-3.057 1.167-4.226-.002l-6.605-6.606zm-10.38.326c8.245 0 14.928-6.683 14.928-14.928 0-8.245-6.683-14.93-14.928-14.93-8.245 0-14.93 6.685-14.93 14.93 0 8.245 6.685 14.928 14.93 14.928zm0-26.573c-6.43 0-11.645 5.214-11.645 11.645 0 .494.4.895.896.895.495 0 .896-.4.896-.895 0-5.442 4.41-9.853 9.853-9.853.494 0 .895-.4.895-.896 0-.495-.4-.896-.895-.896z"
            fill-rule="evenodd"
          />
        </symbol>
        <symbol
          xmlns="http://www.w3.org/2000/svg"
          id="sbx-icon-clear-3"
          viewBox="0 0 20 20"
        >
          <path
            d="M8.114 10L.944 2.83 0 1.885 1.886 0l.943.943L10 8.113l7.17-7.17.944-.943L20 1.886l-.943.943-7.17 7.17 7.17 7.17.943.944L18.114 20l-.943-.943-7.17-7.17-7.17 7.17-.944.943L0 18.114l.943-.943L8.113 10z"
            fill-rule="evenodd"
          />
        </symbol>
      </svg>

      <form
        novalidate="novalidate"
        onsubmit="return false;"
        className="searchbox sbx-custom"
        ref={searchRef}
      >
        <div role="search" className="sbx-custom__wrapper">
          <input
            type="search"
            name="search"
            placeholder="Search your website"
            autocomplete="off"
            required="required"
            className="sbx-custom__input"
          />
          <button
            type="submit"
            title="Submit your search query."
            className="sbx-custom__submit"
          >
            <svg role="img" aria-label="Search">
              <use xlinkHref="#sbx-icon-search-6"></use>
            </svg>
          </button>
          <button
            type="reset"
            title="Clear the search query."
            className="sbx-custom__reset"
          >
            <svg role="img" aria-label="Reset">
              <use xlinkHref="#sbx-icon-clear-3"></use>
            </svg>
          </button>
        </div>
      </form>
      {/* <script type="text/javascript">
                document.querySelector('.searchbox [type="reset"]').addEventListener('click', function() {
                    this.parentNode.querySelector('input').focus();
                   });
            </script> */}
    </div>
  );
}

export default Search;
