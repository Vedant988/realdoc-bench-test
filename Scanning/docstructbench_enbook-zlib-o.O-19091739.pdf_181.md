**Model** We are asked to find the magnetic field due to a simple current distribution, so this example is a typical problem for which the Biot–Savart law is appropriate. We must find the field contribution from a small element of current and then integrate over the current distribution from  $\theta_1$  to  $\theta_2$ , as shown in Figure 29.3b.

**Analyse** Let's start by considering a length element  $d\vec{s}$  located a distance  $r$  from  $P$ . The direction of the magnetic field at point  $P$  due to the current in this element is out of the page because  $d\vec{s} \times \hat{t}$  is out of the page. In fact, because all the current elements  $I d\vec{s}$  lie in the plane of the page, they all produce a magnetic field directed out of the page at point  $P$ . Therefore, the direction of the magnetic field at point  $P$  is out of the page and we need only find the magnitude of the field. We place the origin at  $O$  and let point  $P$  be along the positive  $y$  axis, with  $\hat{k}$  being a unit vector pointing out of the page.

From the geometry in Figure 29.3a, we can see that the angle between the vectors  $d\vec{s}$  and  $\vec{r}$  is  $\left(\frac{\pi}{2} - \theta\right)$  radians.

Evaluate the cross product in the Biot–Savart law:

$$d\vec{B} \times \hat{t} = \left[ d\vec{s} \times \hat{t} \right] \hat{k} = \left[ dx \sin\left(\frac{\pi}{2} - \theta\right) \right] \hat{k} = (dx \cos \theta) \hat{k}$$

Substitute into Equation 29.1:

$$dB = (dB) \hat{k} = \frac{\mu_0 I}{4\pi} \frac{dx \cos \theta}{r^2} \hat{k} \quad (1)$$

From the geometry in Figure 29.3a, express  $r$  in terms of  $\theta$ :

$$r = \frac{a}{\cos \theta} \quad (2)$$

Notice that  $\tan \theta = -x/a$  from the right triangle in Figure 29.3a (the negative sign is necessary because  $d\vec{s}$  is located at a negative value of  $x$ ) and solve for  $x$ :

$$x = -a \tan \theta$$

Find the differential  $dx$ :

$$dx = -a \sec^2 \theta d\theta = -\frac{a d\theta}{\cos^2 \theta} \quad (3)$$

Substitute Equations (2) and (3) into the magnitude of the field from Equation (1):

$$dB = -\frac{\mu_0 I}{4\pi} \left( \frac{a d\theta}{\cos^2 \theta} \right) \left( \frac{\cos^2 \theta}{a^2} \right) \cos \theta = -\frac{\mu_0 I}{4\pi a} \cos \theta d\theta \quad (4)$$

Integrate Equation (4) over all length elements on the wire, where the subtending angles range from  $\theta_1$  to  $\theta_2$ , as defined in Figure 29.3b:

$$B = -\frac{\mu_0 I}{4\pi a} \int_{\theta_1}^{\theta_2} \cos \theta d\theta = -\frac{\mu_0 I}{4\pi a} (\sin \theta_1 - \sin \theta_2) \quad (29.4)$$

Check the dimensions, noting that the quantity in brackets is dimensionless:

$$[MQ^{-1}T^{-1}] = [MLQ^{-2}][QT^{-1}]/[L] = [MQ^{-1}T^{-1}] \text{ } \textcircled{C}$$

(B) Find an expression for the field at a point near a very long current-carrying wire.

## Solution

We can use Equation 29.4 to find the magnetic field of *any* straight current-carrying wire if we know the geometry and hence the angles  $\theta_1$  and  $\theta_2$ . If the wire in Figure 29.3b becomes infinitely long, we see that  $\theta_1 = \pi/2$  and  $\theta_2 = -\pi/2$  for

![Figure 29.3a: A diagram showing a thin, straight wire of length 2a along the negative x-axis. A point P is located on the positive y-axis at a distance a from the origin O. A small current element d\vec{s} is shown at a distance x from the origin. The distance from P to the element is r. The angle between the vertical axis and the line to the element is \theta. The current I flows in the positive x direction.](a5c5fe7d1f9d4b8107aca2c8005b2fa8_25_img.webp)
![Figure 29.3b: A diagram showing the wire from Figure 29.3a from a perspective view. The wire is a horizontal line segment. Point P is above the wire. The angles \theta_1 and \theta_2 are shown as the subtending angles from the ends of the wire to point P.](a5c5fe7d1f9d4b8107aca2c8005b2fa8_26_img.webp)

**Figure 29.3**  
(Example 29.1) (a) A thin, straight wire carrying a current  $I$  (b) The angles  $\theta_1$  and  $\theta_2$  are used for determining the net field.