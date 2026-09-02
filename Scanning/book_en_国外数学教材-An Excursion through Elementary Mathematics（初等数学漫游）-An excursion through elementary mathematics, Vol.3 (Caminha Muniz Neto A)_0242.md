*Proof* Firstly, from (9.14) we get

$$\begin{aligned} \left| P_n - \sum_{k=1}^n \frac{\mu(k)}{k^2} \right| &= \left| \sum_{k=1}^n \mu(k) \left( \frac{1}{n^2} \left\lfloor \frac{n}{k} \right\rfloor^2 - \frac{1}{k^2} \right) \right| \\ &\leq \sum_{k=1}^n \left| \frac{1}{k^2} - \frac{1}{n^2} \left\lfloor \frac{n}{k} \right\rfloor^2 \right|. \end{aligned} \quad (9.15)$$

In order to estimate the last sum above, we claim that, given natural numbers  $n$  and  $k$  such that  $1 \leq k \leq n$ , we have

$$\left| \frac{1}{k^2} - \frac{1}{n^2} \left\lfloor \frac{n}{k} \right\rfloor^2 \right| < \frac{2}{nk} - \frac{1}{n^2}.$$

Indeed,

$$\begin{aligned} \frac{n}{k} - 1 < \left\lfloor \frac{n}{k} \right\rfloor &\leq \frac{n}{k} \Rightarrow \frac{n^2}{k^2} - \frac{2n}{k} + 1 < \left\lfloor \frac{n}{k} \right\rfloor^2 \leq \frac{n^2}{k^2} \\ &\Rightarrow \frac{1}{k^2} - \frac{2}{kn} + \frac{1}{n^2} < \frac{1}{n^2} \left\lfloor \frac{n}{k} \right\rfloor^2 \leq \frac{1}{k^2} \\ &\Rightarrow 0 \leq \frac{1}{k^2} - \frac{1}{n^2} \left\lfloor \frac{n}{k} \right\rfloor^2 < \frac{2}{kn} - \frac{1}{n^2}, \end{aligned}$$

as wished.

Back to (9.15), we obtain from the above estimates that

$$\left| P_n - \sum_{k=1}^n \frac{\mu(k)}{k^2} \right| < \sum_{k=1}^n \left( \frac{2}{nk} - \frac{1}{n^2} \right) = \frac{2}{n} \sum_{k=1}^n \frac{1}{k} - \frac{1}{n}.$$

Now, from L'Hôpital's rule we get

$$\frac{2}{n} \sum_{k=1}^n \frac{1}{k} < \frac{2}{n} \left( 1 + \int_1^n \frac{1}{t} dt \right) = \frac{2}{n} (\log n + 1) \rightarrow 0$$

as  $n \rightarrow +\infty$ . Hence,

$$\lim_{n \rightarrow +\infty} \left( \frac{2}{n} \sum_{k=1}^n \frac{1}{k} - \frac{1}{n} \right) = 0,$$

and our previous estimates assure that