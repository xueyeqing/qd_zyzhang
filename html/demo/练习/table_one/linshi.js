var ofixed_table_st = window.setTimeout;
window.setTimeout = function (fRef, mDelay) {

    if (typeof fRef == 'function') {
        var argu = Array.prototype.slice.call(arguments, 2);
        var f = (function () {
            fRef.apply(null, argu);
        });
        return ofixed_table_st(f, mDelay);
    }
    return ofixed_table_st(fRef, mDelay);
};

function oFixedTable(id, obj, _cfg) {
    this.id = id;
    this.obj = obj;
    this.box = this.obj.parentNode;
    this.config = {
        fixHead: _cfg.fixHead || true,
        rows: _cfg.rows || 1,
        cols: _cfg.cols || 0,
        background: _cfg.background || '#f1f1f1',
        zindex: _cfg.zindex || 9999
    };

    window.setTimeout(this._fixTable, 100, this);
}

oFixedTable.prototype._fixTable = function (_) {
    if (_.obj.rows.length <= 0) {
        return false;
    }
    var hasLeft = _.buildLeft();
    var hasHead = _.buildHead();

    _.box.onscroll = function () {
        if (_.divHead != null) {
            _.divHead.scrollLeft = this.scrollLeft;
        }
        if (_.divLeft != null) {
            _.divLeft.scrollTop = this.scrollTop;
        }
    };
    if (hasHead && hasLeft) {
        _.buildTopLeft();
    }
};

oFixedTable.prototype.buildHead = function () {
    var _ = this;
    var strDivId = _.id + '_div_head';
    var strTbId = _.id + '_tb_header';
    var div = document.createElement('div');
    div.id = strDivId;
    div.style.cssText = 'position:absolute;overflow:hidden;z-index:' + (_.config.zindex + 1) + ';';
    div.innerHTML = '<table id="' + strTbId + '" cellpadding="0" cellspacing="0" style="background:' + _.config.background + ';"></table>';

    _.box.insertBefore(div, _.obj);

    _.divHead = div;
    _.tbHead = document.getElementById(strTbId);

    //判断是否出现纵向滚动条，若出现，高度减去滚动条宽度 16px  
    var sw = _.obj.offsetHeight > _.box.offsetHeight ? 16 : 0;
    _.divHead.style.width = (_.box.offsetWidth - sw) + 'px';

    _.tbHead.style.textAlign = _.obj.style.textAlign;
    _.tbHead.style.width = _.obj.offsetWidth + 'px';

    var hasHead = false;
    if (_.config.fixHead && _.obj.tHead != null) {
        var tHead = _.obj.tHead;
        _.tbHead.appendChild(tHead.cloneNode(true));
        hasHead = true;
    } else {
        for (var i = 0; i < _.config.rows; i++) {
            var row = _.obj.rows[i];
            if (row != null) {
                _.tbHead.appendChild(row.cloneNode(true));
                hasHead = true;
            }
        }
    }
    return hasHead;
};

oFixedTable.prototype.buildLeft = function () {
    var _ = this;
    if (_.config.cols <= 0) {
        return false;
    }
    var strDivId = _.id + '_div_left';
    var strTbId = _.id + '_tb_left';
    var div = document.createElement('div');
    div.id = strDivId;
    div.style.cssText = 'position:absolute;overflow:hidden;z-index:' + _.config.zindex + ';';
    div.innerHTML = '<table id="' + strTbId + '" cellpadding="0" cellspacing="0" style="background:' + _.config.background + ';"></table>';

    _.box.insertBefore(div, _.obj);

    _.divLeft = div;
    _.tbLeft = document.getElementById(strTbId);

    _.tbLeft.style.textAlign = _.obj.style.textAlign;

    //判断是否出现横向滚动条，若出现，高度减去滚动条高度 16px  
    var sw = _.obj.offsetWidth > _.box.offsetWidth ? 16 : 0;
    _.divLeft.style.height = (_.box.offsetHeight - sw) + 'px';

    var hasLeft = false;
    for (var i = 0, rows = _.obj.rows.length; i < rows; i++) {
        var row = _.tbLeft.insertRow(_.tbLeft.rows.length);
        row.style.cssText = _.obj.rows[i].style.cssText;

        for (j = 0; j < _.config.cols; j++) {
            var cell = _.obj.rows[i].cells[j];
            if (cell != null) {
                row.appendChild(cell.cloneNode(true));
                cell.style.cssText = _.obj.rows[i].cells[j].style.cssText;
                hasLeft = true;
            }
        }
    }
    return hasLeft;
};

oFixedTable.prototype.buildTopLeft = function () {
    var _ = this;
    var strDivId = _.id + '_div_top_left';
    var strTbId = _.id + '_tb_top_left';
    var div = document.createElement('div');
    div.id = strDivId;
    div.style.cssText = 'position:absolute;overflow:hidden;z-index:' + (_.config.zindex + 2) + ';';
    div.innerHTML = '<table id="' + strTbId + '" cellpadding="0" cellspacing="0" style="background:' + _.config.background + ';"></table>';

    _.box.insertBefore(div, _.obj);

    var tbTopLeft = document.getElementById(strTbId);
    tbTopLeft.style.textAlign = _.obj.style.textAlign;

    for (var i = 0; i < _.config.rows; i++) {
        var row = tbTopLeft.insertRow(tbTopLeft.rows.length);
        row.style.cssText = _.obj.rows[i].style.cssText;

        for (j = 0; j < _.config.cols; j++) {
            var cell = _.obj.rows[i].cells[j];
            if (cell != null) {
                row.appendChild(cell.cloneNode(true));
                cell.style.cssText = _.obj.rows[i].cells[j].style.cssText;
                hasLeft = true;
            }
        }
    }
};  

/*
<!DOCTYPE html>
<html>

<head>
    <meta charset="utf-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <title>table固定表头和左侧</title>
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="stylesheet" type="text/css" media="screen" href="./main.css" />
    <script src="./main.js"></script>
    <style>
    </style>
</head>

<body>
<div id="divBox1" style="margin:20px 50px;overflow:auto;height:520px;width:450px;float:left;"></div>
<!-- <div id="divBox2" style="margin:20px 50px;overflow:auto;height:520px;width:450px;float:left;"></div> -->
</body>

</html>
<script type="text/javascript">
    function test(num) {
        var box = document.getElementById('divBox' + num);
        var strHtml = '<table id="tbTest' + num + '" cellpadding="0" cellspacing="0" style="text-align:center;width:680px;">';
        for (var i = 0; i < 1; i++) {
            strHtml += '<tr style="background:url(title_bg.png) repeat-x;">';
            for (var j = 0; j < 8; j++) {
                if (j < 8 - 1) {
                    strHtml += '<th style="width:80px;">';
                } else {
                    strHtml += '<th>';
                }
                strHtml += '第' + (i + 1) + '行第' + (j + 1) + '列';
                strHtml += '</th>';
            }
            strHtml += '</tr>';
        }
        for (var i = 1; i < 30; i++) {
            strHtml += '<tr>';
            for (var j = 0; j < 8; j++) {
                if (j < 8 - 1) {
                    strHtml += '<td style="width:80px;">';
                } else {
                    strHtml += '<td>';
                }
                strHtml += '第' + (i + 1) + '行第' + (j + 1) + '列';
                strHtml += '</td>';
            }
            strHtml += '</tr>';
        }
        strHtml += '</table>';
        box.innerHTML = strHtml;
    }
    test(1);
    // test(2);

    //调用固定表头类
    var ofix1 = new oFixedTable('ofix1', document.getElementById('tbTest1'), { rows: 1, cols: 1 });

    // var ofix2 = new oFixedTable('ofix2', document.getElementById('tbTest2'), { rows: 2, cols: 1 });

</script>
*/