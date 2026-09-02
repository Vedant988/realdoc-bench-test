解法 4:  $F(x) = \frac{g(x)}{f(x)} = \frac{\sin(2x + \frac{\pi}{4})}{\sin(2x - \frac{\pi}{4})}$ , 定义域为  $\{x \mid x \neq \frac{\pi}{8} + \frac{k\pi}{2}, k \in \mathbb{Z}\}$

$$F'(x) = \frac{2\cos(2x + \frac{\pi}{4})\sin(2x - \frac{\pi}{4}) - 2\cos(2x - \frac{\pi}{4})\sin(2x + \frac{\pi}{4})}{\sin^2(2x - \frac{\pi}{4})} = \frac{-2}{\sin^2(2x - \frac{\pi}{4})} < 0$$

$\therefore F(x)$  的单调递减区间为  $(-\frac{3\pi}{8} + \frac{k\pi}{2}, \frac{\pi}{8} + \frac{k\pi}{2}) k \in \mathbb{Z}$ , 无递增区间.

评分标准:

1. (1)  $g(x)$  表达式正确 2 分,
2. (2) 有化简结果正确 2 分:  $-\tan(2x + \frac{\pi}{4})$ ,  $\frac{1}{\tan(2x - \frac{\pi}{4})}$ ,  $1 + \frac{2}{\tan 2x - 1}$ ,  $\frac{-2}{\sin^2(2x - \frac{\pi}{4})} < 0$
3. (3) 单调区间正确 1 分.

![Diagram of a tetrahedron A1C1D1-ABCD. A1C1D1 is a plane above ABCD. D1 is connected to A, B, C, D. A1 is connected to A, B, C, D. C1 is connected to A, B, C, D. The diagram shows the spatial relationship between the two planes.](426518c273dbc12ed54e094cd23a5512_6_img.webp)

注: 1. 有正确的体积公式, h 没算对, 这 2 分也给!

2. 没有写出以上的任何一个假分点, 去证明 A1E 垂直于平面 ABCD 的, 给 2 分

18. (本小题满分 9 分)

(1) 如图, 连接  $AB$  中点  $O$ , 连接  $OA_1, OD_1$ .

$\because AA_1 = AB, D_1D_2 = 1, AB = 2$

$\therefore OA_1 = OD_1 = AA_1 = AD_1 = 1$

$\therefore$  即  $D_1O \perp AA_1$ , 由边  $AA_1, D_1O$  是异面直线

$\therefore AA_1 \perp O$ , 即  $AA_1$  为异面直线

$ABCD - A_1B_1C_1D_1 = \frac{1}{3} \times \frac{1}{2} \times 2 \times 2 \times 1 \times 1 \times \frac{3}{2}$   
 $S_1 = (1+2) \times 1 \times 1 \times \frac{3}{2}$

有体积公式, 给 2 分

18. 解: (1) 连接  $AD_1$ , 因为  $AE \parallel D_1C_1$ , 所以  $A, E, C_1, D_1$  四点共面,

因为  $C_1E \parallel$  平面  $ADD_1A_1$ ,  $AD_1$  是过  $C_1$  的平面  $AEC_1D_1$  与平面  $ADD_1A_1$  的交线  
 由线面平行的性质定理, 知  $AD_1 \parallel C_1E$

所以四边形  $AEC_1D_1$  为平行四边形 2 分

所以  $AE = D_1C_1 = \frac{1}{2}DC = \frac{1}{2}$

易得  $\angle A_1AE = 60^\circ$ , 又  $AA_1 = 1$ ,

所以  $AE = \sqrt{AA_1^2 + AE^2 - 2AA_1 \cdot AE \cdot \cos 60^\circ} = \frac{\sqrt{3}}{2}$ , 同时可得  $A_1E \perp AB$ .

上下底面积分别为  $S_1, S_2$ , 易求得  $S_1 = \frac{3}{4}, S_2 = \frac{3}{2}$

所以  $\frac{7\sqrt{3}}{16} = \frac{h}{3} (S_1 + \sqrt{S_1 S_2} + S_2) = \frac{h}{3} (\frac{3}{4} + \frac{3}{2} + \frac{3}{2}) = \frac{7}{8} h$ , 从而有  $h = \frac{\sqrt{3}}{2}$  2 分

所以  $h = A_1E$

(2) 解法 1: 由 (1) 知平面  $AA_1B_1B \perp$  平面  $ABCD$

又  $BC \perp AB$ , 所以  $BC \perp$  平面  $AA_1B_1B$

所以平面  $BCC_1B_1 \perp$  平面  $AA_1B_1B$  2 分

过  $E$  作  $EH \perp BB_1$  于  $H$ , 则  $EH \perp$  平面  $BCC_1B_1$

从而  $\angle EC_1H$  为直线  $C_1E$  与平面  $BCC_1B_1$  所成角 2 分

$EH = BE \sin 60^\circ = \frac{3\sqrt{3}}{4}$

$C_1E^2 = C_1B_1^2 + B_1E^2 = C_1B_1^2 + BE^2 + BB_1^2 - 2 \cdot BB_1 \cdot BE \cdot \cos 60^\circ = 2$ , 即  $C_1E = \sqrt{2}$

所以  $\sin \angle EC_1H = \frac{EH}{C_1E} = \frac{3\sqrt{3}}{8}$  2 分

![Diagram of a tetrahedron A1C1D1-ABCD. A1C1D1 is a plane above ABCD. D1 is connected to A, B, C, D. A1 is connected to A, B, C, D. C1 is connected to A, B, C, D. The diagram shows the spatial relationship between the two planes.](426518c273dbc12ed54e094cd23a5512_34_img.webp)