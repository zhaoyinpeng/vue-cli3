## css面试题

### 盒模型
### flex
### css单位
https://zhuanlan.zhihu.com/p/122987171
```
% 百分比、cm 里面、mm 毫米、px 像素（计算机屏幕上的一个点）、in 英寸、pt 磅
rgb(x,x,x) rgb(x%,x%,x%) #rrggbb（十六进制）
em：1em 等于当前字体尺寸（继承父元素的字体尺寸）
rem：r 为 root，1rem 等于根元素字体尺寸（继承 html 的字体尺寸）
vh：1vh 等于可视窗口高度的 1/100
vw: 1vw 等于可视窗口宽度的 1/100
vmin：可视窗口宽高更小的值的 1/100
vmax：可视窗口宽高更大的值的 1/100
ex：当前字体的一个 x-height，一般为当前字体的一个 em 的一半，因为一个 'x' 字母一般为字体大小的一半
ch：设置 width:40ch 表示这个宽度可以容纳 40 个特定字体的字符
```

### css选择器

```
1）标签选择器 p
2）ID 选择器 #id
3）类选择器 .class
4）通配符 *
5）派生选择器 以空格连接多个选择器，表示 ... 的后代，可以隔代
6）子元素选择器 以 > 连接多个选择器，表示 ... 的子元素，不能隔代
7）相邻选择器 以 + 连接多个选择器，表示紧跟在 ... 的兄弟元素
8）分组选择器 以逗号连接多个选择器，同时选中这些没有关联的选择器
9）属性选择器 以 [] 来根据元素的属性名和属性值来选中具有对应信息的元素，可以写多个 [] 来多属性匹配，也可以根据具体的属性值来匹配，还可以通过正则来进行更复杂的匹配
10）伪类 以单冒号开头，可以找到不能用常规选择器获取到不存在 DOM 树中的信息，可以同时使用多个伪类
11）伪元素 以双冒号开头，可以像真正的元素那样去展现行为，但并不是真正的元素，只能同时使用一个伪元素

权重优先级：
1）内联样式
2）ID 选择器
3）类选择器、伪类、属性选择器
4）标签选择器、伪元素选择器
5）通配符、子元素选择器、相邻选择器、派生选择器、分组选择器
```

### bfc 清除浮动
```
中文叫块级格式上下文，BFC 原理（BFC 的渲染规则）如下：中文叫块级格式上下文，BFC 原理（BFC 的渲染规则）如下：
1）在 BFC 这个元素的垂直方向的边距会发生重叠，即 BFC 内部的兄弟元素中间会发生边距重叠。解决方法，给某个兄弟元素增加一个父元素，给父元素创建一个 BFC，其他兄弟元素不会和这个新增的父元素发生边距重叠；
2）BFC 区域不会与浮动元素 box 重叠，这就是用来清除浮动的原理。比如左边是浮动元素，右边是一个 div，如果两者高度不相等，整个布局就会坍塌，所以为这个 div 创建一个 BFC，就能得到我们想要的布局；
3）BFC 在页面是一个独立的容器，外面的元素不会影响里面的元素，反之亦然；
4）计算 BFC 高度时，浮动元素也会参与计算。这就是在浮动元素父元素上增加 overflow:hidden 会将浮动元素计算入内，而不会使父元素高度坍塌或者背景颜色显示不出来的原因。1）在 BFC 这个元素的垂直方向的边距会发生重叠，即 BFC 内部的兄弟元素中间会发生边距重叠。解决方法，给某个兄弟元素增加一个父元素，给父元素创建一个 BFC，其他兄弟元素不会和这个新增的父元素发生边距重叠；
2）BFC 区域不会与浮动元素 box 重叠，这就是用来清除浮动的原理。比如左边是浮动元素，右边是一个 div，如果两者高度不相等，整个布局就会坍塌，所以为这个 div 创建一个 BFC，就能得到我们想要的布局；
3）BFC 在页面是一个独立的容器，外面的元素不会影响里面的元素，反之亦然；
4）计算 BFC 高度时，浮动元素也会参与计算。这就是在浮动元素父元素上增加 overflow:hidden 会将浮动元素计算入内，而不会使父元素高度坍塌或者背景颜色显示不出来的原因。

创建 BFC 的方式：
1）只要 overflow 值不为 visible（默认值），就创建了 BFC；
2）float 值不为 noun（默认值），只要设置了浮动，就创建了 BFC；
3）position 值不为 static（默认值）或者是 relative，就创建了 BFC；
4）将 display 值设置为 inline-box 或者是 table-cell（只要跟 table 相关的那几个），就创建了 BFC。

对应的内联元素的格式化上下文叫 IFC。

通过 BFC/IFC 解决边距重叠问题，三种边距重叠的情况：

1）父子元素，父元素的高度跟子元素重叠，解决方法是为父元素创建一个 BFC；
2）兄弟元素，比如一个有上边距，一个有下边距，这个时候会发生重叠，重叠的原则是取最大值，解决方法是给其中一个元素增加一个父元素，为这个父元素创建一个 BFC；
3）空元素同时有 marging-top 和 marging-bottom 时，会取一个最大值作为边距，解决方法是为空元素创建一个 BFC。
```
### 层叠上下文
### 常见页面布局
### 响应式布局
### css预处理，后处理
```
CSS 预处理器是用一种专门定义的编程语言，为 CSS 增加编程特性，可以在 CSS 中使用变量、循环、嵌套等功能，将 CSS 作为目标生成文件，让 CSS 更加简洁、可读性强、可维护性强等好处，主要有三种 CSS 预处理器：Sass、LESS 和 Stylus，通常使用 webpack 构建工具将它们生成的文件转换成 CSS。

CSS 后处理器是对 CSS 进行处理，并最终生成 CSS 预处理器，属于广义上的预处理器。后处理器通常采用 autoprefixer 的方案，根据定义的 browser list 自动添加前缀。
```
### css3新特性
animation和transiton的相关属性
animate和translate
### display哪些取值
### 相邻的两个inline-block节点为什么会出现间隔，该如何解决

```
是换行符引起的间隔问题，间隙为 4px。
消除间隙的方法：
1）去掉换行符；
2）对父元素添加 font-size:0，将字体大小设置为 0，换行符也会为 0px，从而消除间隙，再为 inline-block 元素设置我们需要的字体大小；
3）将 inline-block 的 margin-right/left 设置为 -4px；
4）将父元素的 letter-spacing 和 word-spacing 设置为 -4px，这两个属性会增加或减少字符间隔。
inline-block 还有两个问题：即不同高度的两个 inline-block 顶部不对齐，以及 inline-block 底部多出几像素（多出空白）。解决方法是为 inline-block 元素设置 vertical-align:top。是换行符引起的间隔问题，间隙为 4px。
```

### meta viewport 移动端适配
### CSS实现宽度自适应100%，宽高16:9的比例的矩形
### rem布局的优缺点
```
相对于 em 的好处是：
  不会发生逐渐增大或者减小字体尺寸的情况，因为始终继承根元素的字体尺寸；
  rem 单位不仅可应用于字体大小，还可以用于设定宽高等其他大小，使页面可以适配不同屏幕尺寸。
缺点：
rem 一般只用于移动端。
```
### 画三角形
### 1像素边框问题
原因：有些手机分辨率比较高，是二倍屏或者三倍屏，在 CSS 中定义 border 为 1px，这些手机可能是两个物理像素或者是三个物理像素的高度（即看起来比 1px 粗）。
解决方法：通过背景图片实现、通过 transform:scale(0.5) 实现、通过 viewport + rem 实现
还可以引入 border.css 来实现

###img、input到底是行内还是块级元素？
```
一、img、input属于行内替换元素。height/width/padding/margin均可用。效果等于块元素。
      行内非替换元素，例如, height/width/padding top、bottom/margin top、bottom均无效果。只能用padding left、right和margin left、right改变宽度。
二、在文档类型定义（DTD）中对不同的元素规定了不同的类型，这也是DTD对文档之所以重要的原因之一。
从元素本身的特点来讲，可以分为不可替换元素和替换元素。

不可替换元素
(X)HTML 的大多数元素是不可替换元素，即其内容直接表现给用户端（例如浏览器）。
如：<h1>我是标题</h1>

替换元素
替换元素就是浏览器根据元素的标签和属性，来决定元素的具体显示内容。

例如浏览器会根据<img>标签的src属性的值来读取图片信息并显示出来，而如果查看(X)HTML代码，则看不到图片的实际内容；又例如根据<input>标签的type属性来决定是显示输入框，还是单选按钮等。

(X)HTML中的<img>、<input>、<textarea>、<select>、<object>都是替换元素。这些元素往往没有实际的内容，即是一个空元素。

如：
<img src="tigger.jpg"/>
<input type="submit" name="Submit" value="提交"/>

替换元素一般有内在尺寸，所以具有width和height，可以设定。例如你不指定img的width和height时，就按其内在尺寸显示，也就是图片被保存的时候的宽度和高度。

对于表单元素，浏览器也有默认的样式，包括宽度和高度。
```

### inline inline-block block
常见的inline内联元素：
span、img、a、lable、input、abbr（缩写）、em（强调）、big、cite（引用）、i（斜体）、q（短引用）、textarea、select、small、sub、sup，strong、u（下划线）、button（默认display：inline-block））

常见的block块级元素：
div、p、h1…h6、ol、ul、dl、table、address、blockquote、form

常见的inline-block内联块元素：
img、input

### inline元素
inline元素全称Inline Elements，英文原意:An inline element does not start on a new line and only takes up as much width as necessary.一个内联元素不会开始新的一行，并且只占有必要的宽度。

* 特点:
  * 和其他元素都在一行上；
  * 元素的高度、宽度、**行高及顶部和底部边距不可设置**；
  * 元素的宽度就是它包含的文字或图片的宽度，不可改变。

### block元素
block元素全称Block-level Elements，英文原意:A block-level element always starts on a new line and takes up the full width available (stretches out to the left and right as far as it can).一个块级元素总是开始新的一行，并且占据可获得的全部宽度(左右都会尽可能的延伸到它能延伸的最远)

* 特点:
  * 每个块级元素都从新的一行开始，并且其后的元素也另起一行。（一个块级元素独占一行）;
  * 元素的高度、宽度、行高以及顶和底边距都可设置;
  * 元素宽度在不设置的情况下，是它本身父容器的100%（和父元素的宽度一致），除非设定一个宽度。

### inline-block元素
inline-block元素，英文释义:inline-block elements are like inline elements but they can have a width and a height.它像内联元素，但具有宽度和高度。

* 特点:
  * 和其他元素都在一行上；
  * 元素的高度、宽度、行高以及顶和底边距都可设置