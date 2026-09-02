![Figure 4: Dispersion contours for Maxwell's equations. (a) Exact dispersion: concentric circles centered at the origin. (b) Boxscheme: concentric circles with rounded corners. (c) Symplectic method: a periodic pattern of concentric circles and lines forming a diamond grid. (d) Yee's method: concentric circles with rounded corners, similar to the boxscheme but with a different shape.](d612449a20c730f1428493a99ed2a547_3_img.webp)

Fig. 4. The dispersion contours with stepsizes  $\Delta t = 0.01$ ,  $\Delta = 0.1$  for Maxwell's equations (46) from (a) exact dispersion; (b) boxscheme; (c) symplectic method and (d) Yee's method. The constant contour values are  $\omega \in \{2, 4, 6, \dots, 24\}$ .

$$\varphi = \tan^{-1} \left( \frac{(v_g)_y}{(v_g)_x} \right), \quad |v_g| = \sqrt{(v_g)_x^2 + (v_g)_y^2}. \quad (48)$$

Substituting into (48) the vectors  $\kappa$  and  $v_g$  in polar coordinates (44), and let  $a = |\kappa|\Delta$ , this yields the propagation angle  $\varphi$  and the propagation speed  $|v_g|$  in terms of  $a$  and  $\theta$ .

For example,  $\varphi$  for the boxscheme is given by

$$\varphi = \tan^{-1} \left( \frac{\sin(\frac{1}{2} \sin(\theta)a) \cos^3(\frac{1}{2} \cos(\theta)a)}{\cos^3(\frac{1}{2} \sin(\theta)a) \sin(\frac{1}{2} \cos(\theta)a)} \right).$$

Taking the Taylor expansion of this expression with respect to  $a = 0$  yields,

$$\varphi \approx \theta - \frac{1}{12} \sin(4\theta)a^2 + O(a^3). \quad (49)$$

Similarly, the Taylor expansion of  $|v_g|$  at  $a = 0$  yields,

$$|v_g| \approx 1 + \left( \frac{1}{16} \cos(4\theta) - \frac{r^2}{4} + \frac{3}{16} \right) a^2 + O(a^4), \quad (50)$$