$$P_t = \frac{W}{t} \quad w = \frac{n}{N} \times 3.6 \times 10^6 \text{ 瓦秒}$$

$P_t$ ——被测功率 W;

$w$ ——电度表累积测得电能;

$N$ ——电度表每千瓦时代盘转动数;

$n$ ——电度表的转数 转;

$t$ ——测量时间 s

### 3 方差与传播系数

$$u^2(P_t) = \left(\frac{\partial P_t}{\partial w}\right)^2 u^2(w) + \left(\frac{\partial P_t}{\partial t}\right)^2 u^2(t) = c^2(w)u^2(w) + c^2(t)u^2(t)$$

$$c(w) = \frac{1}{t} \quad c(t) = -\frac{w}{t^2}$$

$$u^2(P_t) = \frac{1}{t^2} u^2(w) + \frac{w^2}{t^4} u^2(t)$$

$$\left(\frac{u(P_t)}{P_t}\right)^2 = \frac{u^2(w)}{w^2} + \frac{u^2(t)}{t^2}$$

本不确定度分析以榨汁机为例

### 4 标准不确定度一览表

表 4-1

标准不确定度一览表

<table border="1">
<thead>
<tr>
<th>标准不确定度分量 <math>u_i</math></th>
<th>不确定度来源</th>
<th>标准不确定度值</th>
<th><math>c_i = \partial f / \partial x_i</math></th>
<th><math>|c_i| \times u(x_i)</math></th>
<th>自由度</th>
</tr>
</thead>
<tbody>
<tr>
<td><math>u_1</math></td>
<td>重复性误差</td>
<td>0.2%</td>
<td>1</td>
<td>0.2%</td>
<td>2</td>
</tr>
<tr>
<td><math>u_2</math></td>
<td>表头示值误差</td>
<td>0.29%</td>
<td>1</td>
<td>0.29%</td>
<td>50</td>
</tr>
<tr>
<td><math>u_3</math></td>
<td>电子秒表误差</td>
<td>0.02%</td>
<td>1</td>
<td>0.02%</td>
<td>8</td>
</tr>
</tbody>
</table>

$$u_c(P_t) = 0.35\%$$

$$\nu_{eff} = 16$$