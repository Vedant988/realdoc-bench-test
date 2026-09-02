2. (18%) On FA and Regular Languages

Say whether each of the following languages is regular or not regular? Prove your answers.

(a)  $L_1 = \{w | w \in \{0, 1\}^* \text{ and } w \text{ has an equal number of 0s and 1s}\}$ .  
 (b)  $L_2 = \{w | w \in \{0, 1\}^* \text{ and } w \text{ has an equal number of 01s and 10s}\}$ .

3. (20%) On PDA and Context-Free Languages

Let  $L_3 = \{wca^m b^n | w \in \{a, b\}^*, \text{ where } w = w^R, \text{ and } m, n \in \mathbb{N}, n \leq m \leq 2n\}$ .

(a) Give a context-free grammar for the language  $L_3$ .  
 (b) Design a PDA  $M = (K, \Sigma, \Gamma, \Delta, s, F)$  accepting the language  $L_3$ .

**Solution:** (a)

(b) The PDA  $M = (K, \Sigma, \Gamma, \Delta, s, F)$  is defined below:

<table border="1">
<thead>
<tr>
<th></th>
<th><math>(q, \sigma, \beta)</math></th>
<th><math>(p, \gamma)</math></th>
</tr>
</thead>
<tbody>
<tr>
<td><math>K = \{ \rule{2cm}{0.4pt} \}</math></td>
<td></td>
<td></td>
</tr>
<tr>
<td><math>\Sigma = \{a, b, c\}</math></td>
<td></td>
<td></td>
</tr>
<tr>
<td><math>\Gamma = \{ \rule{2cm}{0.4pt} \}</math></td>
<td></td>
<td></td>
</tr>
<tr>
<td><math>s = \rule{2cm}{0.4pt}</math></td>
<td></td>
<td></td>
</tr>
<tr>
<td><math>F = \{ \rule{2cm}{0.4pt} \}</math></td>
<td></td>
<td></td>
</tr>
</tbody>
</table>