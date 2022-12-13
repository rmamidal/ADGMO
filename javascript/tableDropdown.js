// ************************************************** Table Row Dropdown Start *************************************************

$(document).ready(function () {
  $('.parent-row').click(function () {
    $(this).nextUntil('tr.parent-row').toggleClass('d-none');
  });
});

/* Formatting function for row details - modify as you need */
function format(d) {
  // `d` is the original data object for the row
  return (
    '<table cellpadding="5" cellspacing="0" border="0" style="width: 90%;">' +
    "<tr>" +
    '<td class="py-2 table-pd-top border-bottom-0 border-bottom-0 d-flex justify-content-center align-items-center"><div class="form-check mb-2"><input class="form-check-input shadow-none tb-bg-primary-checked" type="checkbox" value="" id="flexCheckDefault"></div><div class="d-flex align-items-center justify-content-center"><h6 class="bg-secondary align-self-center  rounded-pill p-1 mx-1 text-white text-center common-width-label-30 tb-fs-14 tb-fs-14">16</h6><h6 class="fs-6 fw-light">' +
    d.id +
    "</h6></div></td>" +
    '<td class="py-2 table-pd-top border-bottom-0 table-pd-left">' +
    d.type +
    "</td>" +
    '<td class="py-2 table-pd-top border-bottom-0 table-pd-left">' +
    d.assignee +
    "</td>" +
    '<td class="py-2 table-pd-top border-bottom-0 table-pd-left">' +
    d.due_date +
    "</td>" +
    '<td class="py-2 table-pd-top border-bottom-0 table-pd-left">' +
    d.last_updated +
    "</td>" +
    '<td class="py-3 border-bottom-0"><span class="d-flex align-items-center justify-content-evenly p-2 "><i class="text-base-black fa-xs fa-sharp fa-solid fa-circle "></i><p class="caption-paragraph mb-0 text-base-black">' +
    d.status +
    "</p ></span ></td > " +
    '<td class="py-2 table-pd-top border-bottom-0 table-pd-left"><i class="fa-regular fa-clock"></i>' +
    d.time_remainig +
    "</td > " +
    "</tr>" +
    "</table>"
  );
}

var table = $("#dropdownTable").DataTable({
  ajax: "../../objects.txt",
  columns: [
    {
      data: "id",
    },
    { data: "type" },
    { data: "assignee" },
    { data: "due_date" },
    { data: "last_updated" },
    { data: "status" },
    {
      className: "dt-control",
      data: "time_remainig",
      defaultContent: ""
    },
  ],
  order: [[1, "asc"]],
  columnDefs: [
    {
      targets: 0,
      data: "13765",
      render: function (data, type, row, meta) {
        return (
          '<td class="py-2 table-pd-top border-bottom-0 border-bottom-0 "><div class="d-flex justify-content-center align-items-center"><div class="form-check mb-2"><input class="form-check-input shadow-none tb-bg-primary-checked" type="checkbox" value="" id="flexCheckDefault"></div><div class="d-flex align-items-center justify-content-center"><h6 class="bg-secondary align-self-center  rounded-pill p-1 mx-1 text-white text-center common-width-label-30 tb-fs-14 tb-fs-14">16</h6><h6 class="fs-6 fw-light">' +
          data +
          "</h6></div></td>"
        );
      },
    },
    {
      targets: 1,
      data: "PRL(En)",
      render: function (data, type, row, meta) {
        return (
          '<td class="py-2 table-pd-top border-bottom-0 table-pd-left">' +
          data +
          "</td>"
        );
      },
    },
    {
      targets: 2,
      data: "Pending",
      render: function (data, type, row, meta) {
        return (
          '<td class="py-2 table-pd-top border-bottom-0 table-pd-left">' +
          data +
          "</td>"
        );
      },
    },
    {
      targets: 3,
      data: "12/06/20",
      render: function (data, type, row, meta) {
        return (
          '<td class="py-2 table-pd-top border-bottom-0 table-pd-left">' +
          data +
          "</td>"
        );
      },
    },
    {
      targets: 4,
      data: "10/0122 10:00 AM",
      render: function (data, type, row, meta) {
        return (
          '<td class="py-2 table-pd-top border-bottom-0 table-pd-left">' +
          data +
          "</td>"
        );
      },
    },
    {
      targets: 5,
      data: "Under Review",
      render: function (data, type, row, meta) {
        return (
          '<td class="py-3 border-bottom-0"><span class="d-flex align-items-center justify-content-evenly p-2 "><i class="text-base-black fa-xs fa-sharp fa-solid fa-circle "></i><p class="caption-paragraph mb-0 text-base-black">' +
          data +
          "</p ></span ></td >"
        );
      },
    },
    {
      targets: 6,
      data: "2:05:00",
      render: function (data, type, row, meta) {
        return (
          '<td class="py-2 table-pd-top border-bottom-0  table-pd-left"><i class="fa-regular fa-clock"></i> ' +
          data +
          "</td > "
        );
      },
    },
  ],
});

// Add event listener for opening and closing details
$("#dropdownTable tbody").on("click", "td.dt-control", function () {
  var tr = $(this).closest("tr");
  var row = table.row(tr);

  if (row.child.isShown()) {
    // This row is already open - close it
    row.child.hide();
    tr.removeClass("shown");
  } else {
    // Open this row
    row.child(format(row.data())).show();
    tr.addClass("shown");
  }
});

// ************************************************** Table Row Dropdown Ends *************************************************
$(document).ready(function () {
  var DT2 = $('#dataTables-1').DataTable({
    order: [[1, 'asc']],
    rowGroup: {
      dataSrc: 1
    },
    columnDefs: [{
      orderable: false,
      className: 'select-checkbox',
      targets: 0,
    }],
    select: {
      style: 'multi',
      selector: 'td:first-child'
    }
  });

  $('.selectAll6').on("click", function (e) {
    if ($(this).is(":checked")) {
      console.log("selectAll6 check");
      DT2.rows().select();
    } else {
      DT2.rows().deselect();
    }
  });
});

$(document).ready(function () {
  var selectTable = ['#exampletable-1', '#exampletable-2', '#exampletable-3', '#exampletable-4', '#exampletable-5', '#exampletable-7'];
  var allCheck = [".selectAll1", ".selectAll2", ".selectAll3", ".selectAll4", ".selectAll5", ".selectAll7"];
  var DT1 = [];
  $.each(selectTable, function (index, element) {
    DT1[index] = $(element).DataTable({
      columnDefs: [{
        orderable: false,
        className: 'select-checkbox',
        targets: 0,
      }],
      select: {
        style: 'multi',
        selector: 'td:first-child'
      },
    });
  });

  $.each(allCheck, function (index, element) {
    $(element).parent().parent().removeClass('sorting_asc');
    $(element).on("click", function (e) {
      if ($(this).is(":checked")) {
        DT1[index].rows().select();
      } else {
        DT1[index].rows().deselect();
      }
    });
  });
});

var items = $("#exampletable-7 > tbody > tr").not('.child-row-child');
var numItems = items.length;
var perPage = 10;

items.slice(perPage).hide();

$('#pagination-container').pagination({
  items: numItems,
  itemsOnPage: perPage,
  prevText: "&laquo;",
  nextText: "&raquo;",
  onPageClick: function (pageNumber) {
    var showFrom = perPage * (pageNumber - 1);
    var showTo = showFrom + perPage;
    items.hide().slice(showFrom, showTo).show();
  }
});

