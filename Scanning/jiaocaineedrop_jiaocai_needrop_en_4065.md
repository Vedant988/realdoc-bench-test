三、解答题：共 70 分。解答应写出文字说明、证明过程或演算步骤，第 17~21 题为必考题，每个试题考生都必须作答。第 22、23 题为选考题，考生根据要求作答。

(一) 必考题：共 60 分。

17. (本小题 12 分) 2022 年 2 月 4 日北京冬奥会正式开幕，“冰墩墩”作为冬奥会的吉祥物之一，受到各国运动员的“追捧”，成为新晋“网红”，尤其在我国，广大网友纷纷倡导“一墩一墩”。为了了解人们对“冰墩墩”需求量，某电商平台采用预售的方式，预售时段为 2022 年 2 月 5 日至 2022 年 2 月 20 日，该电商平台统计了 2 月 5 日至 2 月 9 日的相关数据，这 5 天的第  $x$  天到该电商平台参与预售的人数  $y$  (单位：万人) 的数据如下表：

<table border="1">
<thead>
<tr>
<th>日期</th>
<th>2 月 5 日</th>
<th>2 月 6 日</th>
<th>2 月 7 日</th>
<th>2 月 8 日</th>
<th>2 月 9 日</th>
</tr>
</thead>
<tbody>
<tr>
<td>第 <math>x</math> 天</td>
<td>1</td>
<td>2</td>
<td>3</td>
<td>4</td>
<td>5</td>
</tr>
<tr>
<td>人数 <math>y</math> (单位：万人)</td>
<td>45</td>
<td>56</td>
<td>64</td>
<td>68</td>
<td>72</td>
</tr>
</tbody>
</table>

(1) 依据表中的统计数据，请判断该电商平台的第  $x$  天到该电商平台参与预售的人数  $y$  (单位：万人) 是否具有较高的线性相关程度？(参考：若  $0.30 < r < 0.75$ ，则线性相关程度一般，若  $|r| \geq 0.75$ ，则线性相关程度较高。计算  $r$  时精确度为 0.01)

(2) 求参与预售人数  $y$  与预售的第  $x$  天的线性回归方程；用样本估计总体，请预测 2022 年 2 月 20 日该电商平台预售人数 (单位：万人)。

参考数据： $\sum_{i=1}^5 (y_i - \bar{y})^2 = 460$ ， $\sum_{i=1}^5 (x_i - \bar{x})(y_i - \bar{y}) = 66$ ， $\sqrt{46} = 6.78$

附：相关系数  $r = \frac{\sum_{i=1}^n (x_i - \bar{x})(y_i - \bar{y})}{\sqrt{\sum_{i=1}^n (x_i - \bar{x})^2 \sum_{i=1}^n (y_i - \bar{y})^2}}$ ， $\hat{b} = \frac{\sum_{i=1}^n (x_i - \bar{x})(y_i - \bar{y})}{\sum_{i=1}^n (x_i - \bar{x})^2}$ ， $\hat{a} = \bar{y} - \hat{b}\bar{x}$

18. (本小题 12 分) 已知数列  $\{a_n\}$  满足  $a_{n+1} = a_1 + a_2 + \cdots + a_n$ ， $n \in \mathbb{N}^*$ ， $a_1 = a_2 = 1$ 。

(1) 求数列  $\{a_n\}$  的通项公式；

(2) 设数列  $\{a_n\}$  的前  $n$  项和为  $S_n$ ， $b_n = S_n + \log_2 S_n$ ，求数列  $\{b_n\}$  的前  $n$  项和  $T_n$ 。

19. (本小题 12 分) 如图 1，四边形  $ABCD$  为矩形，四边形  $ADE_1F_1$  和  $BCE_2F_2$  都是菱形， $AB = \sqrt{6}$ ， $BC = 2$ ， $\angle DE_1F_1 = \angle CE_2F_2 = 60^\circ$ ，分别沿  $AD$ ， $BC$  将四边形  $ADE_1F_1$  和  $BCE_2F_2$  折起，使点  $E_1$ ， $E_2$  重合于点  $E$ ，点  $F_1$ ， $F_2$  重合于点  $F$ ，得到如图 2 所示的几何体。

![Figure 1: A 3D diagram showing a rectangle ABCD with two rhombi ADE1F1 and BCE2F2 attached to its sides AD and BC respectively. The rhombi are folded along their respective sides.](b6eead1a20ab4d68ef75f021ed48259b_13_img.webp)

图 1

![Figure 2: A 3D diagram showing the folded geometric solid. The rhombi are now folded up, with vertices E1 and E2 meeting at point E, and F1 and F2 meeting at point F. The base is the rectangle ABCD.](b6eead1a20ab4d68ef75f021ed48259b_15_img.webp)

图 2

(1) 证明：平面  $AFED \perp$  平面  $BCEF$ ；

(2) 求图 2 中几何体  $ABCDEF$  的体积  $V$ 。

20. (本小题 12 分) 已知函数  $f(x) = \frac{mx^3 + 2x - 2}{e^x}$  ( $m > 0$ )。

(1) 判断  $f(x)$  的单调性；

(2) 若对  $\forall x_1, x_2 \in [1, 2]$ ，不等式  $|f(x_1) - f(x_2)| \leq \frac{4}{e}$  恒成立，求实数  $m$  的取值范围。

21. (本小题 12 分) 已知椭圆  $C: \frac{x^2}{a^2} + \frac{y^2}{b^2} = 1$  ( $a > b > 0$ ) 的离心率为  $\frac{\sqrt{2}}{2}$ ，椭圆的中心  $O$  到直线  $x + y - 2b = 0$  的距离为  $5\sqrt{2}$ 。

(1) 求椭圆  $C$  的方程；

(2) 设过椭圆  $C$  的右焦点  $F$  且斜率为  $\sqrt{2}$  的直线  $l$  和椭圆交于  $A, B$  两点，对于椭圆  $C$  上任意一点  $Q$ ，若  $\overrightarrow{OQ} = \lambda \overrightarrow{OA} + \mu \overrightarrow{OB}$  ( $\lambda, \mu \in \mathbb{R}$ )，求  $\lambda\mu$  的最大值。

(二) 选考题：共 10 分。请考生在第 22、23 题中任选一题作答。如果多做，则按所做的第一题计分。

22. (本小题 10 分) 选修 4-4：坐标系与参数方程

在直角坐标系  $xOy$  中，曲线  $C_1$  的参数方程为  $\begin{cases} x = \sqrt{2}(t - t^{-1}) \\ y = t + t^{-1} \end{cases}$  ( $t$  为参数)。在以原点为极点， $x$  轴的正半轴为

极轴的极坐标系中，曲线  $C_2$  的极坐标方程为  $\rho \sin(\theta - \frac{\pi}{4}) - 2\sqrt{2} = 0$ 。

(1) 求曲线  $C_1$  和曲线  $C_2$  的直角坐标方程；

(2) 设  $M(-2, 2)$ ，若曲线  $C_1$  与曲线  $C_2$  交于  $A, B$  两点，求  $\frac{1}{|MA|} + \frac{1}{|MB|}$  的值。

23. (本小题 10 分) 选修 4-5：不等式选讲

已知函数  $f(x) = |2x - 4| + |x + 1|$ 。

(1) 求不等式  $f(x) \leq 6$  的解集；

(2) 若不等式  $f(x) \geq 2a^2 + 5a$  对一切实数  $x$  恒成立，求实数  $a$  的取值范围。