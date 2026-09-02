![Figure 6-19: A 3D rendering of a helmet in a side view. A red circle labeled '点' (Point) is at the top of the helmet's forehead area. A red ellipse labeled '椭圆辅助线' (Ellipse Auxiliary Line) is drawn at the bottom of the helmet's chin area.](05c7b0b371dea9dbac8073e72e2abe03_1_img.webp)

图 6-19 绘制辅助线和点

在顶视图中以刚刚绘制的水平线为直径，捕捉其两个端点绘制一个椭圆，如图 6-20 所示。

![Figure 6-20: A top-down view of the helmet. A red circle labeled '点' (Point) is at the center. A red ellipse labeled '椭圆' (Ellipse) is drawn around it. A vertical red line labeled '辅助线' (Auxiliary Line) passes through the center of the ellipse.](05c7b0b371dea9dbac8073e72e2abe03_4_img.webp)

图 6-20 绘制椭圆

### 3. 绘制曲线

在左视图中捕捉点和椭圆的四分点，参考头盔背景图绘制头盔两侧的两条曲线，并适当调整使其光滑，如图 6-21 所示。

![Figure 6-21: A side view of the helmet with two yellow curves labeled '曲线1' (Curve 1) and '曲线2' (Curve 2) drawn along the top and bottom edges of the helmet's shell.](05c7b0b371dea9dbac8073e72e2abe03_8_img.webp)

图 6-21 绘制两侧曲线

### 4. 双轨扫掠

执行“建立曲面”工具箱中的“双轨扫掠”命令，以点和椭圆为路径，以两条曲线为断面曲线，在打开的“双轨扫掠选项”对话框中，直接单击“确定”，完成头盔主体曲面的创建，如图 6-22 所示。

![Figure 6-22: A screenshot of the 'Double-Track Sweep' (双轨扫掠) dialog box in a CAD software. The dialog shows the sweep path (the helmet's shell) and the sweep direction (the two curves). The '确定' (OK) button is highlighted.](05c7b0b371dea9dbac8073e72e2abe03_12_img.webp)

图 6-22 双轨扫掠

### 5. 绘制前部侧面轮廓线

执行“控制点曲线”命令，参考背景图，在左视图中绘制头盔侧面轮廓线，如图 6-23 所示。

![Figure 6-23: A side view of the helmet with a yellow curve labeled '曲线' (Curve) drawn along the front edge of the helmet's shell.](05c7b0b371dea9dbac8073e72e2abe03_16_img.webp)

图 6-23 绘制前部侧面轮廓线

### 6. 分割前部曲面

执行左侧工具条上的“分割”命令，选择头盔曲面作为“要分割的物件”，选择刚绘制的曲线作为“切割用物件”，进行曲面分割，分割后的效果如图 6-24 所示。此时可通过执