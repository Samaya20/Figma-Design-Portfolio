// ---------------- Scroll Up Btn ----------------

$(document).ready(function () {
  $("#btnScrollUp").click(function () {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  });
});

// ----------------------------------------------

// ---------------- Mobile menu ----------------

$(document).ready(function () {
  $("#open_btn").click(function () {
    $(".mobile_nav_links").toggleClass("mobile_nav_show");
  });
  $("#close_btn").click(function () {
    $(".mobile_nav_links").removeClass("mobile_nav_show");
  });
});

// ----------------------------------------------

// ---------------- Works List ----------------

let http = new XMLHttpRequest();

http.open("get", "works.json", true);

http.send();

http.onload = function () {
  if (this.readyState == 4 && this.status == 200) {
    let products = JSON.parse(this.responseText);

    let output = "";

    for (item of products) {
      output += `
      <div onclick="window.location='${item.url}';" class="item_box ${item.category} col-12 col-lg-4 col-md-6">
        <div class="col_container">
          <img class="img_box" src ="${item.image}">
            <div class="text_box">
                <h1>${item.workName}</h1>
                <h1>olan saytlarr</h1>
                <p>UX/UI Design</p>
                <div class="content_bottom">
                    <div class="icon_box">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
                            <path
                                d="M14 95.7924C14 42.8877 56.8878 0 109.793 0H274.161C327.066 0 369.954 42.8877 369.954 95.7924C369.954 129.292 352.758 158.776 326.711 175.897C352.758 193.019 369.954 222.502 369.954 256.002C369.954 308.907 327.066 351.795 274.161 351.795H272.081C247.279 351.795 224.678 342.369 207.666 326.904V415.167C207.666 468.777 163.657 512 110.309 512C57.5361 512 14 469.243 14 416.207C14 382.709 31.1945 353.227 57.2392 336.105C31.1945 318.983 14 289.5 14 256.002C14 222.502 31.196 193.019 57.2425 175.897C31.196 158.776 14 129.292 14 95.7924ZM176.288 191.587H109.793C74.2172 191.587 45.3778 220.427 45.3778 256.002C45.3778 291.44 73.9948 320.194 109.381 320.416C109.518 320.415 109.655 320.415 109.793 320.415H176.288V191.587ZM207.666 256.002C207.666 291.577 236.505 320.417 272.081 320.417H274.161C309.737 320.417 338.576 291.577 338.576 256.002C338.576 220.427 309.737 191.587 274.161 191.587H272.081C236.505 191.587 207.666 220.427 207.666 256.002ZM109.793 351.795C109.655 351.795 109.518 351.794 109.381 351.794C73.9948 352.015 45.3778 380.769 45.3778 416.207C45.3778 451.652 74.6025 480.622 110.309 480.622C146.591 480.622 176.288 451.186 176.288 415.167V351.795H109.793ZM109.793 31.3778C74.2172 31.3778 45.3778 60.2173 45.3778 95.7924C45.3778 131.368 74.2172 160.207 109.793 160.207H176.288V31.3778H109.793ZM207.666 160.207H274.161C309.737 160.207 338.576 131.368 338.576 95.7924C338.576 60.2173 309.737 31.3778 274.161 31.3778H207.666V160.207Z" />
                        </svg>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                            <path
                                d="M22.7 33.4c13.5-4.1 28.1 1.1 35.9 12.9L224 294.3 389.4 46.2c7.8-11.7 22.4-17 35.9-12.9S448 49.9 448 64V448c0 17.7-14.3 32-32 32s-32-14.3-32-32V169.7L250.6 369.8c-5.9 8.9-15.9 14.2-26.6 14.2s-20.7-5.3-26.6-14.2L64 169.7V448c0 17.7-14.3 32-32 32s-32-14.3-32-32V64C0 49.9 9.2 37.5 22.7 33.4z" />
                        </svg>
                    </div>
                    <a class="more_btn" href="javascript:void(0)">More</a>
                </div>
            </div>
        </div>
      </div>
      
      `;
    }

    document.querySelector("#list_row").innerHTML = output;
  }
};

// ----------------------------------------------

// ---------------- UI Carousel ----------------

$(".owl-carousel").owlCarousel({
  loop: false,
  margin: 10,
  dots: true,
  responsive: {
    0: {
      items: 1,
    },
    600: {
      items: 2,
    },
    1000: {
      items: 2,
    },
  },
});

// ----------------------------------------------

(function () {
  const buttons = document.querySelectorAll("filter_btn");
  const storeImages = document / querySelectorAll(".item_box");

  buttons.forEach((button) => {
    button.addEventListener("click", (e) => {
      e.preventDefault();
      const filter = e.target.dataset.filter;
      storeImages.forEach((item) => {
        if (filter === "all") {
          item.style.display = "block";
        } else {
          if (item.classList.contains(filter)) {
            item.style.display = "block";
          } else {
            item.style.display = "none";
          }
        }
      });
    });
  });
})();
