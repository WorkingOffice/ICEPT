function 类(构造函数,初始函数,公共成员,静态成员){for(var 键 in 公共成员){构造函数.prototype[键]=公共成员[键]}for(var 键 in 静态成员){构造函数[键]=静态成员[键]}初始函数&&初始函数();return 构造函数};