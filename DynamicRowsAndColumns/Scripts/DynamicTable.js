﻿$('#DynamicTableCreation').empty();
var tempS = '';
tempS += '<tr class="lightgreen">';
tempS += '    <td></td>';
tempS += '    <td style="width:10%;"><input type="text" class="form-control no-border" value="Invoice" /></td>';
tempS += '    <td style="width:20%;"><input type="text" class="form-control no-border" value="Name" /></td>';
tempS += '    <td style="width:10%;"><input type="text" class="form-control no-border" value="Rate / Ac" /></td>';
tempS += '    <td><input type="text" class="form-control no-border" value="Comments" /></td>';
tempS += '</tr><tr>';
tempS += '    <td><button type="button" class="btn btn-xs btn-default btn-remove btnSpacing"><i class="fa fa-times"></i></button><button type="button" class="btn btn-xs btn-default" onclick="appendRowNext_Drp(\'TblDynamic\', this)"><i class="fa fa-plus"></i></button></td>';
tempS += '    <td><input type="text" class="form-control no-border" value="Product" /></td>';
tempS += '    <td><input type="text" class="form-control no-border" value="Test" /></td>';
tempS += '    <td><input type="text" class="form-control no-border" value="Test" /></td>';
tempS += '    <td><input type="text" class="form-control no-border" value="Test" /></td>';
tempS += '</tr>';
var Dynamic = '';
Dynamic += '<h4>Dynamic Add-Remove Rows And Columns In jQuery</h4>';
Dynamic += '<div class="row"><textarea class="form-control bottom-border" id="tableHead" placeholder="Header Text"></textarea></div>';
Dynamic += '<div class="row">';
Dynamic += '    <div class="col-md-12">';
Dynamic += '        <div class="container" id="DivTblDYCNR">';
Dynamic += '            <div class="table-editable table-responsive">';
Dynamic += '                <div class="btn-group pull-right p-tb-10" style="margin-right:10px;margin-top:10px;margin-bottom:10px">';
Dynamic += '                    <button type="button" class="btn btn-xs btn-default" onclick="appendColumn_Drp(\'TblDynamic\')"><i class="glyphicon glyphicon-plus"></i></button>';
Dynamic += '                    <button type="button" class="btn btn-xs btn-default"> Column</button>';
Dynamic += '                    <button type="button" class="btn btn-xs btn-default" onclick="deleteColumn(\'TblDynamic\')"><i class="glyphicon glyphicon-minus"></i></button>';
Dynamic += '                </div>';
Dynamic += '            </div>';
Dynamic += '        </div>';
Dynamic += '    </div>';
Dynamic += '</div>';
Dynamic += '<div class="row">';
Dynamic += '    <div class="table-editable table-responsive">';
Dynamic += '        <table class="table table-bordered" id="TblDynamic"> ' + tempS + '</table>';
Dynamic += '    </div>';
Dynamic += '</div>';
Dynamic += '<div class="row">';
Dynamic += '    <textarea class="form-control bottom-border" id="tableFooter" placeholder="Footer Text"></textarea>';
Dynamic += '</div>';
$('#DynamicTableCreation').prepend(Dynamic);