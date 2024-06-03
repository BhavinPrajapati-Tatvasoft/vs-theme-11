$(document).ready(function () {
  //Prevent Page Reload on all # links
  $("body").on("click", "a[href='#']", function (e) {
    e.preventDefault();
  });

  //placeholder
  $("[placeholder]").each(function () {
    $(this).attr("data-placeholder", this.placeholder);
    $(this).bind("focus", function () {
      this.placeholder = "";
    });
    $(this).bind("blur", function () {
      this.placeholder = $(this).attr("data-placeholder");
    });
  });

  // On scroll Add Class
  $(window).scroll(function (e) {
    if ($(window).scrollTop() > 200) {
      $(".wrapper").addClass("page-scrolled");
    } else {
      $(".wrapper").removeClass("page-scrolled");
    }
  });

  var $resizeTimer;
  $(window).on("resize", function (e) {
    if (!$("body").hasClass("window-resizing")) {
      $("body").addClass("window-resizing");
    }
    clearTimeout($resizeTimer);
    $resizeTimer = setTimeout(function () {
      $("body").removeClass("window-resizing");
    }, 250);
  });

  // Add new js functions here -----------------------------------------------------------------

  // Sidebar
  $(".menu-btn").on("click", function (e) {
    $("body").toggleClass("open-menu");
  });
  $(".sidebar-overlay").on("click", function (e) {
    $("body").removeClass("open-menu");
  });

  // Search
  $(".search-btn").on("click", function (e) {
    $("body").toggleClass("open-search");
  });
  $(".search-overlay").on("click", function (e) {
    $("body").removeClass("open-search");
  });

  // Sales Chart
  let salesChartCanvas = document.getElementById("salesChart");
  if (salesChartCanvas) {
    var ctx = salesChartCanvas.getContext("2d");
    var data = {
      labels: [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
      ],
      datasets: [
        {
          label: "My First Dataset",
          data: [200, -290, 100, -100, -350, 300, 0, 0, 200],
          backgroundColor: "rgba(255, 99, 88, 0.4)",
          borderColor: "transparent",
          pointBorderColor: "#FF6358",
          fill: true,
          tension: 0.4,
          pointRadius: 4,
          pointBackgroundColor: "#ffffff",
        },
        {
          label: "My First Dataset",
          data: [0, 110, -190, 0, 200, -100, 110, 200, 90],
          backgroundColor: "rgba(0, 163, 162, 0.4)",
          borderColor: "transparent",
          fill: true,
          tension: 0.4,
          pointRadius: 4,
          pointBorderColor: "#00A3A2",
          pointBackgroundColor: "#ffffff",
        },
      ],
    };
    var options = {
      maintainAspectRatio: false,
      plugins: {
        legend: {
          display: false,
        },
      },
      scales: {
        x: {
          ticks: {
            color: "#666666",
            font: {
              size: 14,
              lineHeight: "20px",
            },
            padding: 10,
          },
          grid: {
            drawTicks: false,
            color: "#D5D5D5",
          },
          border: {
            display: false,
          },
        },
        y: {
          ticks: {
            color: "#666666",
            font: {
              size: 14,
              lineHeight: "20px",
            },
            padding: 10,
          },
          grid: {
            drawTicks: false,
            color: "#D5D5D5",
          },
          border: {
            display: false,
          },
        },
      },
      animation: {
        duration: 2000,
        easing: "easeOutSine",
      },
    };
    var salesChart = new Chart(ctx, {
      type: "line",
      data: data,
      options: options,
    });
  }

  // Total Earning Chart
  let totalEarningCanvas = document.getElementById("totalEarningChart");
  if (totalEarningCanvas) {
    var ctx1 = totalEarningCanvas.getContext("2d");
    let width, height, gradient;
    function getGradient(ctx, chartArea) {
      const chartWidth = chartArea.right - chartArea.left;
      const chartHeight = chartArea.bottom - chartArea.top;
      if (!gradient || width !== chartWidth || height !== chartHeight) {
        width = chartWidth;
        height = chartHeight;
        gradient = ctx.createLinearGradient(
          0,
          chartArea.bottom,
          0,
          chartArea.top
        );
        gradient.addColorStop(0, "rgba(246, 78, 96, 0.1)");
        gradient.addColorStop(1, "rgba(246, 78, 96, 0.49)");
      }

      return gradient;
    }
    var data = {
      labels: [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
      ],
      datasets: [
        {
          label: "My First Dataset",
          data: [100, 20, 100, 40, 60, 55, 90, 10],
          backgroundColor: function (context) {
            const chart = context.chart;
            const { ctx, chartArea } = chart;

            if (!chartArea) {
              // This case happens on initial chart load
              return;
            }
            return getGradient(ctx, chartArea);
          },
          borderColor: "#DA2020",
          borderWidth: 2,
          fill: true,
          tension: 0.4,
          pointRadius: 0,
        },
      ],
    };
    var options = {
      maintainAspectRatio: false,
      plugins: {
        legend: {
          display: false,
        },
      },
      layout: {
        padding: {
          bottom: -8,
          left: -8,
        },
      },
      scales: {
        x: {
          ticks: {
            display: false,
          },
          grid: {
            display: false,
          },
          border: {
            display: false,
          },
        },
        y: {
          ticks: {
            display: false,
          },
          grid: {
            display: false,
          },
          border: {
            display: false,
          },
        },
      },
      animation: {
        duration: 2000,
        easing: "easeOutSine",
      },
    };
    var totalEarningChart = new Chart(ctx1, {
      type: "line",
      data: data,
      options: options,
    });
  }

  // Total Order Chart
  let totalOrderCanvas = document.getElementById("totalOrdersChart");
  if (totalOrderCanvas) {
    var ctx2 = totalOrderCanvas.getContext("2d");
    let width, height, gradient;
    function getGradient(ctx, chartArea) {
      const chartWidth = chartArea.right - chartArea.left;
      const chartHeight = chartArea.bottom - chartArea.top;
      if (!gradient || width !== chartWidth || height !== chartHeight) {
        width = chartWidth;
        height = chartHeight;
        gradient = ctx.createLinearGradient(
          0,
          chartArea.bottom,
          0,
          chartArea.top
        );
        gradient.addColorStop(0, "rgba(27, 197, 189, 0.1)");
        gradient.addColorStop(1, "rgba(27, 197, 189, 0.5)");
      }

      return gradient;
    }
    var data = {
      labels: [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
      ],
      datasets: [
        {
          label: "My First Dataset",
          data: [100, 20, 100, 40, 60, 55, 90, 10],
          backgroundColor: function (context) {
            const chart = context.chart;
            const { ctx, chartArea } = chart;

            if (!chartArea) {
              // This case happens on initial chart load
              return;
            }
            return getGradient(ctx, chartArea);
          },
          borderColor: "#00A3A2",
          borderWidth: 2,
          fill: true,
          tension: 0.4,
          pointRadius: 0,
        },
      ],
    };
    var options = {
      maintainAspectRatio: false,
      plugins: {
        legend: {
          display: false,
        },
      },
      layout: {
        padding: {
          bottom: -8,
          left: -8,
        },
      },
      scales: {
        x: {
          ticks: {
            display: false,
          },
          grid: {
            display: false,
          },
          border: {
            display: false,
          },
        },
        y: {
          ticks: {
            display: false,
          },
          grid: {
            display: false,
          },
          border: {
            display: false,
          },
        },
      },
      animation: {
        duration: 2000,
        easing: "easeOutSine",
      },
    };
    var totalOrderChart = new Chart(ctx2, {
      type: "line",
      data: data,
      options: options,
    });
  }

  $(".countup1 span").counterUp();
  $(".countup2").counterUp();
  $(".countup3 span").counterUp();
  $(".countup4 span").counterUp();

  // Password Toggle
  $(".password-btn").click(function () {
    var passwordInput = $(this).siblings(".password-input");
    if (passwordInput.attr("type") === "password") {
      passwordInput.attr("type", "text");
      $(this).addClass("show-password");
    } else {
      passwordInput.attr("type", "password");
      $(this).removeClass("show-password");
    }
  });

  var dataTable1 = $("#datatable1").DataTable({
    sort: false,
    dom: '<"top">rt<"bottom custom-pagination"flip><"clear">',
    filter: false,
    info: true,
    autoWidth: false,
    pagingType: "full_numbers",
    pageLength: 10,
    order: [[0, ""]],
    language: {
      info: "_START_-_END_ of _TOTAL_",
      paginate: {
        first: false,
        last: false,
        previous:
          '<img src="images/prev-active-icon.svg" class="active-icon" alt="Prev"/><img src="images/prev-disabled-icon.svg" class="default-icon" alt="Prev"/>',
        next: '<img src="images/next-active-icon.svg" class="active-icon" alt="Next"/><img src="images/next-disabled-icon.svg" class="default-icon" alt="Next"/>',
      },
      lengthMenu: "",
    },
  });
  let $paginationNav = $(".pagination-nav");
  let $customPagination = $(".custom-pagination");
  if ($paginationNav) {
    $paginationNav.append($customPagination);
  }
  $paginationNav.prepend(`
  <div class="datatable-length-custom">
  <span class="pagination-label">Rows per page: </span>
    <select class="paging-select" id="customLengthMenu">
      <option value="10">10</option>
      <option value="15">15</option>
      <option value="20">20</option>
      <option value="25">25</option>
    </select>
  </div>
`);

  // Handle change in the custom length menu
  $("#customLengthMenu").on("change", function () {
    let pageLength = $(this).val();
    let table = $("#datatable1").DataTable();
    table.page.len(pageLength).draw();
  });

  // AOS Initialize
  AOS.init({
    once: true,
    duration: 600,
  });
  // Don't add anything below this --------------------------------------------------------------
  // Add Class on Window Load
  $("body").addClass("page-loaded");
});
