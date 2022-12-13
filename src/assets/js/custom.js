$(function () {
  var start = moment().subtract(29, "days");
  var end = moment();

  function cb(start, end) {
    $("#reportrange span, #dsearch span, #d-reportrange span").html(
      start.format("MMMM D, YYYY") + " - " + end.format("MMMM D, YYYY")
    );
  }

  $("#reportrange, #dsearch, #d-reportrange").daterangepicker(
    {
      startDate: start,
      endDate: end,
      ranges: {
        Today: [moment(), moment()],
        Yesterday: [moment().subtract(1, "days"), moment().subtract(1, "days")],
        "Last 7 Days": [moment().subtract(6, "days"), moment()],
        "Last 30 Days": [moment().subtract(29, "days"), moment()],
        "This Month": [moment().startOf("month"), moment().endOf("month")],
        "Last Month": [
          moment().subtract(1, "month").startOf("month"),
          moment().subtract(1, "month").endOf("month"),
        ],
      },
    },
    cb
  );

  cb(start, end);
});

$(".topbar #sidebarToggleTop").click(function (e) {
  e.preventDefault();
  $(".sidebar").toggleClass("open");
});

$(".detail").click(function () {
  // $(this).parents('tr').next('.detail-row').slideToggle(1000);
  // $(this).parents('tr').next('.detail-row').toggleClass('open');
  // $(this).parent('tr').siblings().children('.order-detail').slideUp();
  // $(this).parent('td').children('.order-detail').slideToggle();
});

$(".detail").on("click", function () {
  var accordionRow = $(this).parents("tr").next(".detail-row");
  if (!accordionRow.is(":visible")) {
    accordionRow.show().find(".order-detail").slideDown();
  } else {
    accordionRow.find(".order-detail").slideUp(function () {
      if (!$(this).is(":visible")) {
        accordionRow.hide();
      }
    });
  }
});

//   For Time Zone
const dashboardTime = new Date();
document.getElementById("timezone").innerHTML = dashboardTime;
//   For Time Zone

var xValues = ["Oct", "Nov", "Dec"];
var yValues = [55, 49, 44, 24];
var barColors = ["red", "green", "blue"];

new Chart("myChart", {
  type: "bar",
  data: {
    labels: xValues,
    datasets: [
      {
        backgroundColor: barColors,
        data: yValues,
      },
    ],
  },
  options: {
    legend: { display: false },
    title: {
      display: true,
      text: "",
    },
  },
});

var densityCanvas = document.getElementById("orderChart");

// Chart.defaults.global.defaultFontFamily = "Lato";
// Chart.defaults.global.defaultFontSize = 18;

var densityData = {
  label: "",
  data: [5427, 5243, 5514, 3933],
  backgroundColor: "rgba(0, 99, 132, 0.6)",
  borderColor: "rgba(0, 99, 132, 1)",
  yAxisID: "y-axis-density",
};

var gravityData = {
  label: "",
  data: [3.7, 8.9],
  backgroundColor: "rgba(99, 132, 0, 0.6)",
  borderColor: "rgba(99, 132, 0, 1)",
  yAxisID: "y-axis-gravity",
};

var planetData = {
  labels: ["Oct", "Nov", "Dec"],
  datasets: [densityData, gravityData],
};

var chartOptions = {
  scales: {
    xAxes: [
      {
        barPercentage: 1,
        categoryPercentage: 0.6,
      },
    ],
    yAxes: [
      {
        id: "y-axis-density",
      },
      {
        id: "y-axis-gravity",
      },
    ],
  },
};

var barChart = new Chart(densityCanvas, {
  type: "bar",
  data: planetData,
  options: chartOptions,
});
