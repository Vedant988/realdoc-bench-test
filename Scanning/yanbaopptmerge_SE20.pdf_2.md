## 20.2 Defect Amplification and Removal

- **Defect Amplification Model**

The diagram illustrates the Defect Amplification Model. It shows a flow of errors from a 'Previous step' into a 'Development step', which then leads to 'Detection' and finally to 'Errors passed To next step'.

<table border="1"><thead><tr><th>Defects</th><th>Detection</th></tr></thead><tbody><tr><td>Errors passed through</td><td rowspan="3">Percent Efficiency</td></tr><tr><td>Amplified errors 1:x</td></tr><tr><td>Newly generated errors</td></tr></tbody></table>

Inputs: Errors from Previous step (split into Errors passed through, Amplified errors 1:x, and Newly generated errors).  
Output: Errors passed To next step.

- Assume that an error uncovered during **design** will cost **1.5** monetary unit to correct. Relative to this cost, the same error uncovered just **before testing** commences will cost **6.5** units; **during testing**, **15** units; and **after release**, between **67** and **100** units.
- A number of studies indicate that **design activities** introduce between **50% - 65%** of all errors during the software process. However, **formal review technique** have been shown to be up to **75%** effective in uncovering design flaws.

![Illustration of three blue gears of different sizes.](ba3a2dde88cbdeebec81363b7f6fa361_5_img.webp)![Illustration of a blue building structure.](ba3a2dde88cbdeebec81363b7f6fa361_6_img.webp)