window.addEventListener("load", function () {
        let btnSearch = document.getElementById("btnSearch");
        btnSearch.addEventListener("click", function () {
          let boxSearch = document.querySelectorAll(".search-box")[0];
          if (boxSearch.classList.contains("show"))
            boxSearch.classList.remove("show");
          else {
            boxSearch.classList.add("show");
            document.removeEventListener("click",clickOutSide)
            document.addEventListener("click",clickOutSide);
          }
        });
      });

      function clickOutSide(e) {
        // if(e.target.closest('.menu-search') == null);
        // {
        //     boxSearch.classList.remove("show");
        // }
        let boxSearch = document.querySelectorAll(".search-box")[0];
        if ((!e.target.classList.contains("search-box") 
        && !e.target.classList.contains("icon-search") 
        && !e.target.classList.contains("form-control") 
        &&!e.target.classList.contains("btn-primary")) &&
          e.target.id != "btnSearch"
        ) {
          boxSearch.classList.remove("show");
        }
      }