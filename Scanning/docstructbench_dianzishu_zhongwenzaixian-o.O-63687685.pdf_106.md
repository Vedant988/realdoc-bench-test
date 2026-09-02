## 避免凌乱的曲线图

在用曲线图做趋势比较时，若有超过 3 个以上数据系列，极易出现曲线之间相互交叉、乱成一团麻的情况，很难清楚地观察各个系列的变化趋势（图 3-29）。

在这种情况下，可以使用一种叫作平板图（Panel chart）的图表处理方法。

如图 3-30 所示，将各条曲线分开来绘制，彼此并不交叉影响，显得很清晰。但它们仍在一个图表中，共用一个纵坐标轴，便于观察趋势和比较大小。这种处理方法适用于多系列曲线图，系列之间量纲相同，数量级相差不是太大的情况。

其实现技巧，只是将原来的数据源进行图中所示的“错行”组织，做出的曲线图自然也就错开了。独立的格子通过设置网格线间隔实现，上面的公司名标签使用文本框或辅助系列来完成。具体做法这里不再细述，读者可参见范例文件中的步骤。

![Figure 3-29: A line chart showing market price data for six companies (Company 1 to Company 6) from 2002 to 2009. The lines are heavily overlapping and tangled, making it difficult to distinguish individual trends.](985f5af9d8e08021c2bafa6477f38e95_6_img.webp)

<table border="1">
<thead>
<tr>
<th></th>
<th>公司1</th>
<th>公司2</th>
<th>公司3</th>
<th>公司4</th>
<th>公司5</th>
<th>公司6</th>
</tr>
</thead>
<tbody>
<tr><td>2002</td><td>40</td><td>26</td><td>16</td><td>2</td><td>0</td><td>16</td></tr>
<tr><td>2003</td><td>43</td><td>23</td><td>11</td><td>3</td><td>1</td><td>19</td></tr>
<tr><td>2004</td><td>44</td><td>20</td><td>10</td><td>6</td><td>4</td><td>16</td></tr>
<tr><td>2005</td><td>43</td><td>20</td><td>11</td><td>5</td><td>5</td><td>16</td></tr>
<tr><td>2006</td><td>36</td><td>21</td><td>9</td><td>8</td><td>9</td><td>17</td></tr>
<tr><td>2007</td><td>31</td><td>21</td><td>9</td><td>9</td><td>9</td><td>21</td></tr>
<tr><td>2008</td><td>28</td><td>17</td><td>9</td><td>11</td><td>10</td><td>25</td></tr>
<tr><td>2009</td><td>22</td><td>13</td><td>9</td><td>16</td><td>11</td><td>29</td></tr>
</tbody>
</table>

图3-29 线条纠缠在一起显得异常凌乱，不利于阅读分析

![Figure 3-30: A panel chart showing the same market price data for six companies from 2002 to 2009. The chart is divided into six separate panels, one for each company, which are vertically offset. This layout prevents the lines from crossing and makes the trends much clearer.](985f5af9d8e08021c2bafa6477f38e95_8_img.webp)

图3-30 将多系列的曲线图做成彼此分离的平板图，避免了曲线的交叉凌乱