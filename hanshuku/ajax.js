function ajax(方法,地址,成功函数,失败函数){var ajax=window.XMLHttpRequest?new XMLHttpRequest():new ActiveXObject("Microsoft.XMLHTTP");ajax.open(方法,地址,true);ajax.send();ajax.onreadystatechange=function(){ajax.readyState==4&&(ajax.status==200?成功函数&&成功函数(ajax):失败函数&&失败函数(ajax))}};