## 数学

本试卷共 4 页，22 题。全卷满分 150 分，考试用时 120 分钟。

注意事项：

1. 答卷前，考生务必将自己的姓名、准考证号填写在答题卡上。
2. 回答选择题时，用铅笔把答题卡上对应题目的答案标号涂黑，写在试卷上无效。
3. 考试结束后，将本试卷和答题卡一并交回。
4. 本试卷由 kmath.cn 自动生成。

<table border="1" style="width: 100%; border-collapse: collapse;">
<tr>
<td style="padding: 2px;">得分</td>
<td style="width: 50px;"></td>
</tr>
<tr>
<td style="padding: 2px;">阅卷人</td>
<td></td>
</tr>
</table>

一、单选题：本题共 10 小题，每小题 5 分，共 40 分。在每小题给出的四个选项中，只有一项是符合题目要求的。

1. 已知函数  $f(x) = \int_0^x e^{\cos t} dt$ ,  $g(x) = \int_0^{\sin x} e^t dt$ , 则

A.  $f(x)$  是奇函数,  $g(x)$  是偶函数      B.  $f(x)$  足偶函数,  $g(x)$  足奇函数  
 C.  $f(x)$  与  $g(x)$  均为奇函数      D.  $f(x)$  与  $g(x)$  均为周期函数

[答案]:C [解析]:【解析】由于  $e^{\cos t}$  是偶函数, 所以  $f(x) = \int_0^x e^{\cos t} dt$  是奇函数, 又  $g'(x) = e^{\sin x} \cdot \cos x$  是偶函数, 所以  $g(x)$  是奇函数. 故选 C.

2. 设  $P = P(x, y, z) \cap Q = Q(x, y, z)$  均为连续函数,  $\sum$  为曲面  $Z = \sqrt{1-x^2-y^2} (x \leq 0, y \geq 0)$  的上侧, 则  $\iint_{\sum} P dy dz + Q dz dx =$

A.  $\iint_{\sum} (\frac{z}{2} P + \frac{y}{2} Q) dz dy$       B.  $\iint_{\sum} (-\frac{z}{2} P + \frac{y}{2} Q) dz dy$   
 C.  $\iint_{\sum} (\frac{z}{2} P - \frac{y}{2} Q) dz dy$       D.  $\iint_{\sum} (-\frac{z}{2} P - \frac{y}{2} Q) dz dy$

[答案]:A [解析]:【解析】转换投影法,  $z = \sqrt{1-x^2-y^2}$ ,  $\frac{\partial z}{\partial x} = -\frac{x}{z}$ ,  $\frac{\partial z}{\partial y} = -\frac{y}{z}$

$$\iint_{\sum} P dy dz + Q dz dx = \iint_{\sum} (\frac{z}{2} P + \frac{y}{2} Q) dz dy$$

故选 A.

3. 已知幂级数  $\sum_{n=0}^{\infty} a_n x^n$  的和函数为  $\ln(2+x)$ , 则  $\sum_{n=0}^{\infty} n a_{2n} =$

A.  $-\frac{1}{6}$       B.  $-\frac{1}{3}$       C.  $\frac{1}{6}$       D.  $\frac{1}{3}$

[答案]:A [解析]:【解析】方法 1:  $\ln(2+x) = \ln 2 (1 + \frac{1}{2}x) = \ln 2 + \ln (1 + \frac{1}{2}x)$

$$= \ln 2 + \sum_{n=1}^{\infty} (-1)^{n-1} \frac{(\frac{1}{2}x)^n}{n}$$

所以,  $a_n = \begin{cases} \ln 2, & n=0 \\ (-1)^{n-1} \frac{1}{n 2^n}, & n>0 \end{cases}$  当  $n>0$ ,  $a_{2n} = -\frac{1}{2n \cdot 2^{2n}}$ , 所以,  $\sum_{n=0}^{\infty} n a_{2n} = \sum_{n=1}^{\infty} n a_{2n} =$

$$\sum_{n=1}^{\infty} n \cdot (-\frac{1}{2n \cdot 2^{2n}}) = -\sum_{n=1}^{\infty} \frac{1}{2^{2n+1}} = -\frac{(\frac{1}{2})^3}{1-\frac{1}{4}} = -\frac{1}{6} \text{ 故选 A. 方法 2:}$$

$$[\ln(2+x)]' = \frac{1}{2+x} = \frac{1}{2(1+\frac{x}{2})} = \frac{1}{2} \sum_{n=0}^{\infty} (-1)^n (\frac{x}{2})^n$$

$$\ln(2+x) = \sum_{n=0}^{\infty} (-1)^n (\frac{1}{2}x)^{n+1} + C = \sum_{n=1}^{\infty} (-1)^{n-1} \frac{(\frac{1}{2}x)^n}{n} + C$$

$$S(0) = C = \ln(2+0) = \ln 2$$

$$\text{所以, } a_n = \begin{cases} \ln 2, & n=0 \\ (-1)^{n-1} \frac{1}{n 2^n}, & n>0 \end{cases}$$

所以,  $\sum_{n=0}^{\infty} n a_{2n} = \sum_{n=1}^{\infty} n a_{2n} = \sum_{n=1}^{\infty} n \cdot (-\frac{1}{2n \cdot 2^{2n}}) = -\sum_{n=1}^{\infty} \frac{1}{2^{2n+1}} = -\frac{(\frac{1}{2})^3}{1-\frac{1}{4}} = -\frac{1}{6}$  故选 A.

4. 设函数  $f(x)$  在区间  $(-1, 1)$  上有定义, 且  $\lim_{x \rightarrow 0} f(x) = 0$ , 则

A. 当  $\lim_{x \rightarrow 0} \frac{f(x)}{x} = m$  时,  $f'(0) = m$       B. 当  $f'(0) = m$  时,  $\lim_{x \rightarrow 0} \frac{f(x)}{x} = m$   
 C. 当  $\lim_{x \rightarrow 0} f'(x) = m$  时,  $f'(0) = m$       D. 当  $f'(0) = m$  时,  $\lim_{x \rightarrow 0} f'(x) = m$

[答案]:B [解析]:【解析】因为  $f'(0) = m$ , 所以  $f(x)$  在  $x=0$  处连续, 从而  $\lim_{x \rightarrow 0} f(x) = f(0) = 0$ , 所以

$$\lim_{x \rightarrow 0} \frac{f(x)}{x} = \lim_{x \rightarrow 0} \frac{f(x) - f(0)}{x-0} = m, \text{ 故选 B.}$$

对于 A 选项,  $\lim_{x \rightarrow 0} \frac{f(x)}{x} = m$ , 推不出来  $f'(0) = m$ ; 对于 C 选项,  $f'(x)$  在  $x=0$  处不一定连续; 对于 D 选项,  $f'(x)$  在  $x=0$  处极限未必存在.

5. 在空间直角坐标系  $O-xyz$  中, 三张平面  $\pi_1: a_1x + b_1y + c_1z = d_1 (i=1, 2, 3)$  的位置关系如下图所示,

记  $\alpha_i = (a_i, b_i, c_i)$ , 若  $\mathbf{r} \begin{pmatrix} \alpha_1 \\ \alpha_2 \\ \alpha_3 \end{pmatrix} = m \cdot \mathbf{r} \begin{pmatrix} \beta_1 \\ \beta_2 \\ \beta_3 \end{pmatrix} = n$ , 则

![Diagram showing three planes pi1, pi2, pi3 in a 3D coordinate system. pi1 and pi2 are parallel, and pi3 is perpendicular to them. The planes intersect at a common line.](951a099d24ab5108bf6990b3b047f3a4_33_img.webp)

A.  $m=1, n=2$       B.  $m=n=2$       C.  $m=2, n=3$       D.  $m=n=3$