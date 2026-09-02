```

graph LR
    Rotor --> PS[Phase shifter]
    PS --> DivM["÷ m"]
    DivM --> Seq[Sequencer]
    Seq --> Laser
    Seq -- "x n" --> Laser
    Seq --> Camera
  
```

Fig. 2. Diagram of trigger system for rotor-laser synchronization

Table 1. Example solution for rotor-laser synchronization

<table border="1">
<thead>
<tr>
<th>Rotor</th>
<th>Laser flash lamps</th>
<th>Rotor frequency/flash lamp rate</th>
<th>Camera and q-switch</th>
</tr>
</thead>
<tbody>
<tr>
<td>1,041 RPM~17.35 Hz</td>
<td>9.914 Hz</td>
<td><math>m/n=7/4</math></td>
<td>2.479 Hz</td>
</tr>
</tbody>
</table>

constant rotor frequency, a very accurate and stable phase shift could be achieved.

### 3 Flow seeding

Di-ethyl-hexyl-sebacat (DEHS) atomized by Laskin nozzle particle generators was used to seed the flow. The particles were pumped through a distribution rake mounted in the settling chamber of the wind tunnel. The rake was remotely traversed to guide the homogeneous seed stream to the region of interest. The DEHS droplets generated and distributed by this arrangement have a mean diameter below  $1 \mu\text{m}$  as confirmed by previous tests. The rake and the resulting particle distribution during testing can be seen in Fig. 3. Although seed particles are visible inside the tip vortex, the seeding density is noticeably lower than in the remainder of the flow field. This can be explained by the reduced air density inside the core and centrifugal forces that affect the particle distribution (for a more detailed discussion of particle behaviour, see e.g. Grant 1994).

![Figure 3: Two photographs showing the distribution of seed particles. The left photo shows a rake in a settling chamber. The right photo shows a close-up of the test section with a 'TIP VORTEX' indicated by an arrow.](1e21a5fc6638b96720fa72fac2f38cc3_8_img.webp)

Fig. 3. The distribution of seed particles in the settling chamber and in the test section

### 4

#### Cameras and light sheet traverses

The PIV system consisted of five digital cameras and three double-pulse Nd:YAG lasers ( $2 \times 320 \text{ mJ}$  each). The output beams from the laser systems were combined to produce an intense light sheet that was approximately 1.5 m wide and 7 mm thick. The resulting sheet was oriented at an angle of  $30.6^\circ$  with respect to the axis of the wind tunnel (Fig. 4). Cameras, lasers and light sheet optics were mounted on a traversing system (the common support system of the DNW-LLF). In this set-up, the distance between the cameras and the light sheet could be kept constant during all PIV measurements. Therefore, a pixel-to-length re-calibration and camera alignment (which usually has to be performed after each change in the set-up) could be avoided. Additional traverses were mounted to the tower of the common support (Fig. 4) in order to move the cameras parallel to the light sheet in an up and down direction (along the  $z$  axis). The common support itself allows for positioning the camera view along three axes (Fig. 5), two lateral axes ( $x$  and  $y$ ) and one rotation

![Figure 4: A photograph of the PIV camera and viewing direction setup, and a schematic diagram showing the camera view angle of 30.65 degrees and a distance of 5.6m from the light sheet.](1e21a5fc6638b96720fa72fac2f38cc3_13_img.webp)

Fig. 4. PIV cameras and viewing direction (flow from above)