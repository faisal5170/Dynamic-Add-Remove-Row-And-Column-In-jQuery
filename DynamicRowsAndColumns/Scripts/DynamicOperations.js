function appendRowNext_Drp(id, cellId) {
    var cell = cellId.parentNode.parentNode;
    var tbl = document.getElementById(id), row = tbl.insertRow(cell.rowIndex + 1), i;
    if (id == 'TblDynamic') {
        for (i = 0; i < tbl.rows[0].cells.length; i++) {
            if (i == 0) {
                CreateAddNextRowIcon(row.insertCell(i), id);
            }
            else {
                CreateTextBox(row.insertCell(i), i, 'form-control bottom-border', id);
            }
        }
    }
}
function CreateAddNextRowIcon(cell, id) {
    var button = document.createElement('button');
    button.setAttribute('type', 'button');
    button.setAttribute('class', 'btn btn-xs btn-default btn-remove btnSpacing');
    var i = document.createElement('i');
    i.setAttribute('class', 'fa fa-times');
    button.appendChild(i);
    cell.appendChild(button);

    var button = document.createElement('button');
    button.setAttribute('type', 'button');
    button.setAttribute('class', 'btn btn-xs btn-default');
    button.setAttribute('onclick', 'appendRowNext_Drp(\'' + id + '\', this)');
    var i = document.createElement('i');
    i.setAttribute('class', 'fa fa-plus');
    button.appendChild(i);
    cell.appendChild(button);
}
function CreateTextBox(cell) {
    var input = document.createElement('input');
    input.setAttribute('type', 'text');
    input.setAttribute('class', 'form-control no-border');
    cell.appendChild(input);
}
$(document).on("click", ".btn-remove", function () {
    debugger
    var row = $(this).parents('tr');
    var tablerow = $(this).parents('tr').parents('tbody');
    var cnt = tablerow.find('tr').length;
    if (cnt > 2)
        row.detach();
});
function appendColumn_Drp(id) {
    var tbl = document.getElementById(id), i;
    if (id == 'TblDynamic') {
        for (i = 0; i < tbl.rows.length; i++) {
            createCell(tbl.rows[i].insertCell(tbl.rows[i].cells.length), i, 'form-control no-border');
        }
    }
}
function createCell(cell, text, style) {
    var input = document.createElement('input');
    input.setAttribute('type', 'text');
    input.setAttribute('class', style);
    cell.appendChild(input);
}
function deleteColumn(id) {
    var tbl = document.getElementById(id), lastCol = tbl.rows[0].cells.length - 1, i;
    if (lastCol > 2) {
        for (i = 0; i < tbl.rows.length; i++) {
            tbl.rows[i].deleteCell(lastCol);
        }
    }
}
$(document).on("click", ".btn-remove-col", function () {
    var ndx = $(this).parent().index() + 1;
    $("td", event.delegateTarget).remove(":nth-child(" + ndx + ")");
});