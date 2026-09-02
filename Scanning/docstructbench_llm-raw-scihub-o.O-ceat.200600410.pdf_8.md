![Bar chart showing the degree of similarity of case 1 in the historical dataset. The y-axis is labeled 'Similar diagnosis' and ranges from 0 to 1. The x-axis is labeled 'Case 1' and shows cases 1 through 8. Case 1 has a similarity of approximately 0.92, Case 2 is approximately 0.02, Case 3 is approximately 0.12, Case 4 is approximately 0.08, Case 5 is approximately 0.05, Case 6 is approximately 0.20, Case 7 is approximately 0.10, and Case 8 is approximately 0.08.](7d1e831539bae2515febe4ca74aed328_3_img.webp)

<table border="1">
<caption>Data for Figure 12: Degree of similarity of case 1</caption>
<thead>
<tr>
<th>Case</th>
<th>Similar diagnosis</th>
</tr>
</thead>
<tbody>
<tr><td>1</td><td>0.92</td></tr>
<tr><td>2</td><td>0.02</td></tr>
<tr><td>3</td><td>0.12</td></tr>
<tr><td>4</td><td>0.08</td></tr>
<tr><td>5</td><td>0.05</td></tr>
<tr><td>6</td><td>0.20</td></tr>
<tr><td>7</td><td>0.10</td></tr>
<tr><td>8</td><td>0.08</td></tr>
</tbody>
</table>

Figure 12. Degree of similarity of case 1 in the historical dataset.

pose is to verify the efficiency of the PCA plus kernel FDA method. The results that indicate the time consumed are shown in Tab. 3. From Tab. 3, it is seen that the proposed method is competitive with kernel FDA. The computation time is different with the different numbers of PCs reserved in PCA. The time consumed becomes longer with the increase of PCs. Although the entire time consumed with PCA plus KFDA is longer than PCA, it is much less than that for the kernel FDA method alone. The results show that if one chooses the appropriate number of PCs, then the proposed method is more preferable for real-time process monitoring and fault diagnosis.

In order to evaluate the ability of the proposed approach to identify disturbance, the detection results were classified as 4 levels (A, B, C, and D) and listed as follows:

- – A: The method can detect the occurrence of the disturbance and the result is excellent.
- – B: The method can detect the occurrence of the disturbance and the result is clear.
- – C: The method can detect the occurrence of the disturbance and the result is not very clear.

Table 3. Comparison of the time consumed for fault detection and diagnosis between PCA, KFDA and PCA + KFDA.

<table border="1">
<thead>
<tr>
<th rowspan="3">Fault Number</th>
<th colspan="2">Time consumed (s)</th>
<th colspan="2">PCs = 15 (95 % variance)</th>
<th colspan="3">PCs = 19 (99 % variance)</th>
</tr>
<tr>
<th colspan="2">PCs = 8 (60 % variance)</th>
<th colspan="2"></th>
<th colspan="3"></th>
</tr>
<tr>
<th>PCA</th>
<th>PCA + KFDA</th>
<th>PCA</th>
<th>PCA + KFDA</th>
<th>PCA</th>
<th>PCA + KFDA</th>
<th>KFDA</th>
</tr>
</thead>
<tbody>
<tr><td>1</td><td>5.2</td><td>14.1</td><td>5.4</td><td>23.7</td><td>5.5</td><td>36.2</td><td>56.3</td></tr>
<tr><td>2</td><td>4.7</td><td>13.9</td><td>4.8</td><td>21.2</td><td>4.8</td><td>32.1</td><td>51.7</td></tr>
<tr><td>3</td><td>5.0</td><td>13.4</td><td>5.1</td><td>22.1</td><td>5.0</td><td>34.4</td><td>53.6</td></tr>
<tr><td>4</td><td>6.0</td><td>16.8</td><td>6.3</td><td>27.1</td><td>6.1</td><td>45.2</td><td>64.3</td></tr>
<tr><td>5</td><td>5.5</td><td>14.7</td><td>5.7</td><td>24.6</td><td>5.5</td><td>36.8</td><td>59.5</td></tr>
<tr><td>6</td><td>5.1</td><td>14.1</td><td>5.2</td><td>23.9</td><td>5.1</td><td>35.1</td><td>57.4</td></tr>
<tr><td>7</td><td>5.1</td><td>14.9</td><td>5.3</td><td>24.2</td><td>5.2</td><td>35.8</td><td>58.9</td></tr>
<tr><td>8</td><td>5.8</td><td>16.2</td><td>6.1</td><td>26.5</td><td>6.0</td><td>43.9</td><td>61.5</td></tr>
</tbody>
</table>

Table 4. Comparison of fault detection ability among PCA, KFDA and PCA + KFDA.

<table border="1">
<thead>
<tr>
<th rowspan="3">Fault Number</th>
<th colspan="7">Detection Results</th>
</tr>
<tr>
<th colspan="2">PCs = 8 (60 % variance)</th>
<th colspan="2">PCs = 15 (95 % variance)</th>
<th colspan="3">PCs = 19 (99 % variance)</th>
</tr>
<tr>
<th>PCA</th>
<th>PCA + KFDA</th>
<th>PCA</th>
<th>PCA + KFDA</th>
<th>PCA</th>
<th>PCA + KFDA</th>
<th>KFDA</th>
</tr>
</thead>
<tbody>
<tr><td>1</td><td>C</td><td>B</td><td>C</td><td>A</td><td>C</td><td>B</td><td>B</td></tr>
<tr><td>2</td><td>D</td><td>B</td><td>C</td><td>A</td><td>D</td><td>A</td><td>A</td></tr>
<tr><td>3</td><td>D</td><td>B</td><td>C</td><td>A</td><td>C</td><td>B</td><td>B</td></tr>
<tr><td>4</td><td>C</td><td>A</td><td>B</td><td>A</td><td>C</td><td>A</td><td>A</td></tr>
<tr><td>5</td><td>C</td><td>A</td><td>B</td><td>A</td><td>C</td><td>A</td><td>A</td></tr>
<tr><td>6</td><td>B</td><td>B</td><td>C</td><td>B</td><td>B</td><td>B</td><td>B</td></tr>
<tr><td>7</td><td>C</td><td>B</td><td>C</td><td>A</td><td>C</td><td>B</td><td>B</td></tr>
<tr><td>8</td><td>D</td><td>B</td><td>B</td><td>A</td><td>C</td><td>A</td><td>A</td></tr>
</tbody>
</table>