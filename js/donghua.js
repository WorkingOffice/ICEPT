function 添加事件(对象,事件,函数){对象.addEventListener?对象.addEventListener(事件,函数,false):对象.attachEvent("on"+事件,函数)};

添加事件(window, 'load', function ()
{
	显隐其余内容('none');
	var 动画区域 = document.getElementById('动画区域');
	var 画布 = document.getElementById('画布');
	var 时间 = document.getElementById('时间');
	var 载入 = document.getElementById('载入');
	var 公司名称 = document.getElementById('公司名称');
	var iCEPT;
	var iCEPT所占宽度 = Math.round(document.documentElement.clientWidth / 5 * 3);
	var 背景;
	var 若背景已加载 = false;
	
	//设置黑色背景(画布);

	设置区域(动画区域);
	设置iCEPT图片位置 (动画区域);
	原地放大(公司名称);
	
	//设置背景(背景);
	预加载图片('images/2000x1500.jpg', function (图片)
	{
		背景 = 图片;
		显示背景(动画区域, 背景);
		若背景已加载 = true;
	});
	
	window.onresize = function ()
	{
		
		设置区域(动画区域);
		设置iCEPT图片位置 (动画区域);
		若背景已加载 && 设置背景(背景);
		
		if (画布.宽) //iCEPT位置已经确定
		{
			设置三角形画布位置(画布);
		}
	};
	
	//=================================iCEPT画图部分====================================
	
	ajax('GET', 'iCEPT2.xml?' + new Date().getTime(), function (ajax)
	{
		var 基本信息 = ajax.responseXML.documentElement;
		var 宽 = parseInt(基本信息.getAttribute('宽'));
		var 高 = parseInt(基本信息.getAttribute('高'));
		var 缩放比 = iCEPT所占宽度 / 宽;
		画布.宽 = 宽 * 缩放比;
		画布.高 = 高 * 缩放比;
		设置三角形画布位置(画布);
		
		iCEPT = new 进度图案(画布, ajax.responseXML, [0, 0], 缩放比, function ()
		{
			iCEPT = null;
			
			动画区域.style.cursor = 'pointer';
			动画区域.onclick = function ()
			{
				$("html").css("overflow","scroll")
				显隐其余内容('block');
				
				缓速运动(动画区域, {opacity: 0}, [function ()
				{
					动画区域.style.display = 'none';
				}, null, null]);
				
    
				zjc_complete && zjc_complete();
			};
		});
	//==============================预加载图片===============================
		
//		var 隐藏区域组 = document.body.children;
//		
//		var 显示区域索引 = [];
//		
//		for (var 计数 = 0; 计数 < 隐藏区域组.length; 计数++)
//		{
//			var 正则 = /(^|\\s)zjc_xs(\\s|$)/;
//			
//			if (正则.test(隐藏区域组[计数].className))
//			{
//				显示区域索引.push(计数);
//			}
//		}
		
		
		
		
	}, function (ajax)
	{
		alert('很抱歉加载失败! 请检查您的网络是否通畅.');
	});
	
//	var 图片区域组 = 根据类名获取元素们(document, 'zjc_yjz');
//		var 已加载数 = 0;
//		
//		var 图片总数 = 0;
//		
//		var 图片组 = [];
//		for (var 计数 = 0; 计数 < 图片区域组.length; 计数++)
//		{
//			var 区域里图片组 = 图片区域组[计数].getElementsByTagName('img');
//			
//			for (var 计数2 = 0; 计数2 < 区域里图片组.length; 计数2++)
//			{
//				图片组.push(区域里图片组[计数2]);
//				
//			}
//		}
//		
//		图片总数 = 图片组.length;
//		
//		for (var 计数 = 0; 计数 < 图片总数; 计数++)
//		{
//			console.log('设置onload');
//			图片组[计数].onload = function ()
//			{
//				alert('图片onload');
//				alert(this);
//				this.onload = null;
//				加载完成(this);
//			};
//		}
		
		window.加载完成 = function 加载完成 (图片)
		{
	//		try
	//		{
			已加载数++;
//			alert('加载完成  ' + (100 / window.图片总数 * window.已加载数));
			var 进度 = parseInt(100 / window.图片总数 * window.已加载数);
//			alert('进度  ' + 进度);
			iCEPT && iCEPT.设置进度(进度);
			//document.body.appendChild(图片);
	//		}
	//		catch (错误)
	//		{
	//			alert('错误');
	//		}
		}
});

动态直线 = 类(function 动态直线 (画布, 结束函数)
{
	this.画布 = 画布;
	this.结束函数 = 结束函数;
}, null,
{
	开始: function 开始 (起始点, 终止点, 完成时间)
	{
		clearInterval(this.计时器id);
		
		var _this = this;
		
		this.起始点 = 起始点;
		this.终止点 = 终止点;
		this.完成时间 = 完成时间;
		
		this.进行次数 = 0;
		this.进行时间 = 0;
		
		this.设置次数和间隔();
		this.进行点 = [this.起始点[0], this.起始点[1]];
		
		this.计时器id = setInterval(function ()
		{
			_this.继续();
		}, 30);
	},
	
	继续: function 继续 ()
	{
		//判断有没有到达
		if (this.进行次数 === this.次数)
		{
			clearInterval(this.计时器id);
			
			this.结束函数 && this.结束函数();
		}
		
		//画线
		with(this.画布.getContext('2d'))
		{
			strokeStyle = '#E60012';
			lineWidth = 2;
			moveTo(this.进行点[0], this.进行点[1]);
			
			this.进行点[0] += this.间隔[0];
			this.进行点[1] += this.间隔[1];
			
			lineTo(this.进行点[0], this.进行点[1]);
			stroke();
		}
		
		this.进行次数++;
		this.进行时间 += 30;
	},
	
	暂停: function 暂停 ()
	{
		clearInterval(this.计时器);
	},
	
	改变: function 改变 (终止点_完成时间)
	{
		this.起始点 = [this.进行点[0], this.进行点[1]];
		this.进行次数 = 0;
		
		if (终止点_完成时间.constructor === Number)
		{
			this.完成时间 = 终止点_完成时间;
			this.设置次数和间隔(this.完成时间);
		}
		else if (终止点_完成时间.constructor === Array)
		{
			this.终止点 = 终止点_完成时间;
			this.设置次数和间隔(this.完成时间 - this.进行时间);
		}
		else
		{
			throw '动态画线.改变() ------ 参数类型错误!';
		}
	},
	
	设置次数和间隔: function 设置次数和间隔 (剩余时间)
	{
		this.次数 = Math.round((剩余时间 || this.完成时间) / 30);
		this.间隔 = [(this.终止点[0] - this.起始点[0]) / this.次数, (this.终止点[1] - this.起始点[1]) / this.次数];
		this.次数--;
	}
});

进度图案 = 类(function (画布, xml, 基准点, 缩放比, 完成函数)
{
	this.画布 = 画布;
	this.xml = xml;
	this.基准点 = 基准点;
	this.缩放比 = 缩放比;
	this.完成函数 = 完成函数;
	
	this.当前步骤 = 0;
	this.总步骤 = xml.getElementsByTagName('步骤').length - 1;
	this.若完成 = false;
	this.若开始 = false;
	
	this.调整坐标();
	this.初始化总完成时间();
	this.初始化进行点组();
	
	this.经过点组 = [];
	this.经过时间组 = [];
	this.计时器 = null;
}, null,
{
	调整坐标: function ()
	{
		var larr = this.xml.getElementsByTagName('"直线"');
		
		for (var count = 0; count < larr.length; count++)
		{
			var 坐标 = 进度图案.字串转坐标数组(larr[count].getAttribute('起始点'));
			larr[count].setAttribute('起始点', '' + Math.round((坐标[0] * this.缩放比 + this.基准点[0])) + ',' + Math.round((坐标[1] * this.缩放比 + this.基准点[1])));
			
			坐标 = 进度图案.字串转坐标数组(larr[count].getAttribute('结束点'));
			larr[count].setAttribute('结束点', '' + Math.round((坐标[0] * this.缩放比 + this.基准点[0])) + ',' + Math.round((坐标[1] * this.缩放比 + this.基准点[1])));
		}
	},
	设置经过点: function (经过点, 时间)
	{
		this.经过点组.push(经过点);
		this.经过时间组.push(时间);
	},
	开始: function ()
	{
		this.若开始 = true;
		this.经过次数 = 0;
		this.进行直线 = [];
		this.继续();
	},
	继续: function 继续 ()
	{
		var _this = this;
		var 执行函数;
		
		if (this.当前步骤 === this.总完成步骤)
		{
			执行函数 = function ()
			{
				this.完成函数();
			};
		}
		else
		{
			执行函数 = arguments.callee;
		}
		
		this.进行直线.push(new 动态直线(this.画布, function ()
		{
			_this.进行直线 = [];
			_this.经过次数++;
			
			执行函数.call(_this);
		}));
		// console.log(this.经过次数);
		try
		{
			for (var 计数 = 1; 计数 < this.经过点组[this.经过次数].length; 计数++)
			{
				this.进行直线[计数] = new 动态直线(this.画布);
			}
			
			for (var 计数 = 0; 计数 < this.经过点组[this.经过次数].length; 计数++)
			{
				this.进行直线[计数].开始(this.经过点组[this.经过次数][计数][0],
										 this.经过点组[this.经过次数][计数][1],
										 this.经过时间组[this.经过次数]);
			}
		}
		catch (错误)
		{
			//倒数第二步, 刚好结束的时候刚好判断通不过
			if (this.当前步骤 == this.总步骤)//到最后时会停下来
			{
				var 最后进行坐标 = this.经过点组[this.经过点组.length - 1];
				最后进行坐标 = 最后进行坐标[最后进行坐标.length - 1][1];
				var 直线组 = this.xml.getElementsByTagName('直线');
				var 最后坐标 = 进度图案.字串转坐标数组((直线组[直线组.length - 1].getAttribute('结束点')));
				
				// console.log('最后进行坐标', 最后进行坐标);
				// console.log('最后坐标', 最后坐标);
				
				if (最后进行坐标[0] == 最后坐标[0] && 最后进行坐标[1] == 最后坐标[1])
				{
					this.完成函数 && this.完成函数();
					this.画布 = null;
					this.xml = null;
					this.进行点组 = null;
					this.完成函数 = null;
					return;
				}
			}
			
			setTimeout(function ()
			{
				执行函数.call(_this);
			}, 500);
		}
	},
	动态画线: function (起始点, 终止点, 时间, 结束函数)
	{
		var _this = this;
		var 完成次数 = Math.ceil(时间 / 30);
		var 进行次数 = 0;
		this.进行点 = [起始点[0], 起始点[1]];
		
		clearInterval(this.计时器);
		this.计时器 = setInterval(function ()
		{
			进行次数++;
			if (进行次数 === 完成次数)
			{
				结束函数 && 结束函数.call(_this);
				clearInterval(_this.计时器);
			}
			
			var 画线点 = [起始点[0] + (终止点[0] - 起始点[0]) / 完成次数 * 进行次数,
						  起始点[1] + (终止点[1] - 起始点[1]) / 完成次数 * 进行次数];
			_this.画线(_this.进行点, 画线点);
			
			_this.进行点 = 画线点;
		}, 30);
	},
	画线: function (起始点, 终止点)
	{
		with(画布.getContext('2d'))
		{
			moveTo(起始点[0], 起始点[1]);
			lineTo(终止点[0], 终止点[1]);
			stroke();
		}
	},
	初始化总完成时间: function ()
	{
		var 步骤组 = this.xml.getElementsByTagName('步骤');
		this.总完成时间 = 0;
		
		for (var 计数 = 0; 计数 < 步骤组.length; 计数++)
		{
			this.总完成时间 += parseInt(步骤组[计数].getAttribute('完成时间'));
		}
	},
	初始化进行点组: function ()
	{
		var 匹配直线组 = this.xml.getElementsByTagName('步骤')[0].getElementsByTagName('直线');
		this.进行点组 = [];
		
		for (var 计数 = 0; 计数 < 匹配直线组.length; 计数++)
		{
			var 坐标字串 = 匹配直线组[计数].getAttribute('起始点');
		 	this.进行点组.push(进度图案.字串转坐标数组(坐标字串));
		}
	},
	计算结束点组: function (步骤索引, 步骤进度)
	{
		var 匹配直线组 = this.xml.getElementsByTagName('步骤')[步骤索引].getElementsByTagName('直线')
		var 结束点组 = [];
		
		for (var 计数 = 0; 计数 < 匹配直线组.length; 计数++)
		{
			var 起始点 = 进度图案.字串转坐标数组(匹配直线组[计数].getAttribute('起始点'));
			var 结束点 = 进度图案.字串转坐标数组(匹配直线组[计数].getAttribute('结束点'));
			
			var 计算点 = [起始点[0] + (结束点[0] - 起始点[0]) / 100 * 步骤进度, 起始点[1] + (结束点[1] - 起始点[1]) / 100 * 步骤进度];
			
			结束点组.push(计算点);
		}
		
		return 结束点组;
	},
	获取进度步骤: function (进度)
	{
		var 步骤组 = this.xml.getElementsByTagName('步骤');
		var 当前时间 = this.总完成时间 / 100 * 进度;
		
		for (var 计数 = 0; 计数 < 步骤组.length; 计数++)
		{
			当前时间 -= parseInt(步骤组[计数].getAttribute('完成时间'));
			
			if (当前时间 < 0)
			{
				return 计数;
			}
		}
		
		return this.总步骤;
	},
	获取进度步骤进度: function (进度)
	{
		var 进度步骤 = this.获取进度步骤(进度);
		var 当前时间 = this.总完成时间 / 100 * 进度;
		var 步骤组 = this.xml.getElementsByTagName('步骤');
		
		for (var 计数 = 0; 计数 < 进度步骤; 计数++)
		{
			当前时间 -= parseInt(步骤组[计数].getAttribute('完成时间'));
		}
		
		return (当前时间 / parseInt(步骤组[进度步骤].getAttribute('完成时间'))).toFixed(2) * 100;
	},
	设置进度: function (进度)
	{
		if (进度 > 100)
		{
			throw '进度图案 - 设置进度 ------ 进度大于100';
		}
		
		if (isNaN(进度))
		{
			throw '进度图案 - 设置进度 ------ 进度是一个NaN';
		}
		
		进度 == 100 && (this.若完成 = true);
		var 进度步骤 = this.获取进度步骤(进度);
		//var 经过点;
		
		if (进度步骤 > this.当前步骤)
		{
			//跨步骤画线
			for (var 计数 = this.当前步骤; 计数 < 进度步骤; 计数++)
			{
				var 步骤组 = this.xml.getElementsByTagName('步骤');
				var 匹配直线组 = 步骤组[计数].getElementsByTagName('直线');
				
				//直接画完前面的步骤
				var 经过点 = [];
				for (var 计数2 = 0; 计数2 < 匹配直线组.length; 计数2++)
				{
					var 结束点 = 进度图案.字串转坐标数组(匹配直线组[计数2].getAttribute('结束点'));
					经过点.push([this.进行点组[计数2], 结束点]);
				}
				this.设置经过点(经过点, 500);
				
				//设置新的进行点组
				this.进行点组 = [];
				var 匹配直线组 = 步骤组[计数 + 1].getElementsByTagName('直线');
				
				for (var 计数2 = 0; 计数2 < 匹配直线组.length; 计数2++)
				{
					var 进行点 = 进度图案.字串转坐标数组(匹配直线组[计数2].getAttribute('起始点'));
					this.进行点组.push(进行点);
				}
			}
		}
		
//		if (this.若完成)
//		{
//			var 匹配直线组 = this.xml.getElementsByTagName('步骤')[this.总步骤].getElementsByTagName('直线');
//			var 进行点组 = [];
//			
//			var 经过点 = [];
//			for (var 计数 = 0; 计数 < 匹配直线组.length; 计数++)
//			{
//				var 结束点 = 进度图案.字串转坐标数组(匹配直线组[计数].getAttribute('结束点'));
//				经过点.push([this.进行点组[计数], 结束点]);
//			}
//			this.设置经过点(经过点, 300);
//			
//			this.完成函数 && this.完成函数();
//			this.画布 = null;
//			this.xml = null;
//			this.进行点组 = null;
//			this.完成函数 = null;
//			return;
//		}
		
		//进度步骤画线
		var 匹配直线组 = this.xml.getElementsByTagName('步骤')[进度步骤].getElementsByTagName('直线');
		var 结束点组 = this.计算结束点组(进度步骤, this.获取进度步骤进度(进度));
		var 进行点组 = [];
		
		var 经过点 = [];
		//!经过点 && (经过点 = []);
		for (var 计数 = 0; 计数 < 匹配直线组.length; 计数++)
		{
			经过点.push([this.进行点组[计数], 结束点组[计数]]);
			进行点组.push(结束点组[计数]);
		}
		this.设置经过点(经过点, 500);
		
		
		this.当前步骤 = 进度步骤;
		this.进行点组 = 进行点组;
		
		!this.若开始 && this.开始();
	}
}, 
{
	字串转坐标数组: function (字串)
	{
		var 坐标数组 = 字串.match(/\d+/g);
		坐标数组[0] = parseInt(坐标数组[0]);
		坐标数组[1] = parseInt(坐标数组[1]);
		return 坐标数组;
	}
})

function 预加载图片 (路径, 成功函数, 失败函数)
{
	var 图片 = new Image();
	图片.src = 路径;
	if (图片.complete)
	{
		成功函数(图片);
		return;
	}
	
	图片.onload = function ()
	{
		图片.onload = null;
		成功函数(图片);
	};
}

//function 设置黑色背景 (cav)
//{
//	var c = cav.getContext('2d');
//	c.fillStyle = '#222';
//	c.fillRect(0, 0, cav.offsetWidth, cav.offsetHeight); 
//}

function 设置区域 (动画区域)
{	
	var 高 = document.documentElement.clientHeight;
	动画区域.style.height = 高 + 'px';
}

function 设置iCEPT图片位置 (动画区域)
{
	var 公司名称 = document.getElementById('公司名称');
	公司名称.style.left = document.documentElement.clientWidth / 2 - 公司名称.width / 2 + 公司名称.offsetWidth / 2 + 'px';
	公司名称.style.top = 动画区域.offsetHeight / 2 - 公司名称.height / 2 + 公司名称.offsetHeight / 2 + 'px';
}
var yy_h=null;
window.onload=function(){
	yy_h=document.documentElement.clientHeight;
	$("canvas").attr("height",yy_h)
}
function 设置三角形画布位置 (画布)
{
	var l = document.documentElement.clientWidth / 2 - 1000 / 2;
	var t = document.documentElement.clientHeight / 2 - 690 / 2;
	console.log(document.documentElement.clientWidth)
	console.log(document.documentElement.clientHeight)
	
	画布.style.left = l + 'px';
	画布.style.top = t + 'px';
}

function 设置背景 (背景)
{
	背景.width = document.documentElement.clientWidth;
	背景.height = document.documentElement.clientHeight;
	
	//var l = document.documentElement.clientWidth / 2 - 背景.width;
	//var t = document.documentElement.clientHeight / 2 - 背景.height;
	
	//背景.style.left = l + 'px';
	//背景.style.top = t + 'px';
}

function 显示背景 (动画区域, 背景)
{
	设置背景(背景);
	背景.style.opacity = 0;
	背景.style.filter = 'alpha(opacity:'+ 0 + ')';
	
	动画区域.insertBefore(背景, document.getElementById('画布'));
	缓速运动(背景, {opacity: 100}, [null, null, null], 0.005);
}

function 原地放大 (对象, json)
{
	设置中心基准点(对象);
	
	缓速运动(对象, {width: 200, height: 62}, [
	function ()
	{//临时的给他看效果, ==删掉
		window.图片总数 = 10;
		window.已加载数 = 0;
		
		for (var 计数 = 1; 计数 <= window.图片总数; 计数++)
		{
			预加载图片('图片/大图/' + 计数 + '.png', window.加载完成);
		}
	},
	function ()
	{
		设置中心基准点(对象);
	}
	, null], 0.28);
}

function 设置中心基准点 (对象)
{
	对象.style.marginLeft =- 对象.offsetWidth / 2 + 'px';
	对象.style.marginTop =- 对象.offsetHeight / 2 + 'px';
}

function 显隐其余内容 (显隐)
{
	var 其余内容 = 根据类名获取元素们(document, 'zjc_yc');
	
	for (var 计数 = 0; 计数 < 其余内容.length; 计数++)
	{
		其余内容[计数].style.display = 显隐;
		
	}
}

function 根据类名获取元素们(元素,类名){var 匹配元素们=[];if(!document.getElementsByClassName){var 元素们=元素.getElementsByTagName("*");for(var 计数=0;计数<元素们.length;计数++){var 正则=new RegExp("(^|\\s)"+类名+"(\\s|$)");if(正则.test(元素们[计数].className)){匹配元素们.push(元素们[计数])}}}else{匹配元素们=元素.getElementsByClassName(类名)}return 匹配元素们};