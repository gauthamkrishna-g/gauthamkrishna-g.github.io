---
layout: page
title: Research
#subtitle: "Respect, Respond, Realize."
---

<p class="about-users">
<center><span class="fa fa-users about-icon"></span> <strong> Conference/Workshop Proceedings </strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
<span class="fa fa-file about-icon"></span> <strong> Poster/Extended Abstract </strong></center>

<h3><span class="fa fa-file about-icon"></span> &nbsp;<a href="https://mobiuk.org/programme2019.html" target="_blank">Handling Real-time Unlabeled Data in Activity Recognition using Deep Bayesian Active Learning and Data Programming</a></h3>
<h4><i>Second UK Mobile, Wearable and Ubiquitous Systems Research Symposium (MobiUK 2019), University of Oxford</i></h4>
<h5><center><a href="/MobiUK_2019.pdf" target="_blank">[View Abstract]</a></center></h5>

<h3><span class="fa fa-users about-icon"></span> &nbsp;<a href="https://arxiv.org/abs/1906.00108" target="_blank">ActiveHARNet: Towards On-Device Deep Bayesian Active Learning for Human Activity Recognition</a></h3>
<h4><i>ACM MobiSys 2019 (3rd International Workshop on Embedded and Mobile Deep Learning, EMDL '19)</i></h4>
<h5><center><a href="https://arxiv.org/pdf/1906.00108.pdf" target="_blank">[View Paper]</a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<a href="https://github.com/gauthamkrishna-g/ActiveHARNet" target="_blank">[View Code]</a></center></h5>
✔ Various health-care applications such as assisted living, fall detection etc., require modeling of user behavior through Human Activity Recognition (HAR). HAR using mobile- and wearable-based deep learning algorithms have been on the rise owing to the advancements in pervasive computing.<br>
✔ However, there are two other challenges that need to be addressed: first, the deep learning model should support on-device incremental training (model updation) from real-time incoming data points to learn user behavior over time, while also being resource-friendly; second, a suitable ground truthing technique (like Active Learning) should help establish labels on-the-fly while also selecting only the most informative data points to query from an oracle.<br>
✔ Hence, in this paper, we propose ActiveHARNet, a resource-efficient deep ensembled model which supports on-device Incremental Learning and inference, with capabilities to represent model uncertainties through approximations in Bayesian Neural Networks using dropout. This is combined with suitable acquisition functions for active learning.<br>
✔ Empirical results on two publicly available wrist-worn HAR and fall detection datasets indicate that ActiveHARNet achieves considerable efficiency boost during inference across different users, with a substantially low number of acquired pool points (at least 60% reduction) during incremental learning on both datasets experimented with various acquisition functions, thus demonstrating deployment and Incremental Learning feasibility.<br><br>

<h3><span class="fa fa-users about-icon"></span> &nbsp;<a href="https://dl.acm.org/citation.cfm?id=3212728" target="_blank">HARNet: Towards On-Device Incremental Learning using Deep Ensembles on Constrained Devices</a></h3>
<h4><i>ACM MobiSys 2018 (2nd International Workshop on Embedded and Mobile Deep Learning, EMDL '18)</i></h4>
<h5><center><a href="/EMDLAR_2018.pdf" target="_blank">[View Paper]</a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<a href="https://github.com/gauthamkrishna-g/HARNet" target="_blank">[View Code]</a></center></h5>
✔ Recent advancements in the domain of pervasive computing have seen the incorporation of sensor-based Deep Learning algorithms in Human Activity Recognition (HAR). Contemporary Deep Learning models are engineered to alleviate the difficulties posed by conventional Machine Learning algorithms which require extensive domain knowledge to obtain heuristic hand-crafted features.<br>
✔ Upon training and deployment of these Deep Learning models on ubiquitous mobile/embedded devices, it must be ensured that the model adheres to their computation and memory limitations, in addition to addressing the various mobile- and user-based heterogeneities prevalent in actuality.<br>
✔ To handle this, we propose HARNet - a resource-efficient and computationally viable network to enable on-line Incremental Learning and User Adaptability as a mitigation technique for anomalous user behavior in HAR. Heterogeneity Activity Recognition Dataset was used to evaluate HARNet and other proposed variants by utilizing acceleration data acquired from diverse mobile platforms across three different modes from a practical application perspective.<br>
✔ We perform Decimation as a Down-sampling technique for generalizing sampling frequencies across mobile devices, and Discrete Wavelet Transform for preserving information across frequency and time. Systematic evaluation of HARNet on User Adaptability yields an increase in accuracy by ∼35% by leveraging the model’s capability to extract discriminative features across activities in heterogeneous environments.<br><br>

<h3><span class="fa fa-users about-icon"></span> &nbsp;<a href="https://link.springer.com/chapter/10.1007/978-3-030-03405-4_42" target="_blank">A Generic Multi-modal Dynamic Gesture Recognition System using Machine Learning</a></h3>
<h4><i>IEEE Future of Information and Communications Conference (FICC 2018), Singapore</i></h4>
<h5><center><a href="/FICCGR_2018.pdf" target="_blank">[View Paper]</a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<a href="https://github.com/gauthamkrishna-g/Dynamic-Gesture-Recognition" target="_blank">[View Code]</a></center></h5>
✔ Human Computer Interaction facilitates intelligent communication between humans and computers, in which gesture recognition plays a prominent role. This paper presents a machine learning system to identify dynamic gestures using two accelerometer-based datasets, characterized by a generic set of features across time & frequency domains.<br>
✔ The engine was analyzed from an end-user perspective and was modelled to operate in three modes. The modes of operation determine the subsets of data to be used for training and testing the system. From an initial set of seven classifiers, three were chosen to evaluate each dataset across all modes rendering the system towards mode-neutrality and dataset-independence.<br>
✔ The proposed system is able to classify gestures performed at varying speeds with minimum preprocessing, making it computationally efficient. This engine runs on a low-cost embedded platform like Raspberry Pi Zero (USD 5), making it economically viable.<br><br>

<h3><span class="fa fa-users about-icon"></span> &nbsp;<a href="https://link.springer.com/chapter/10.1007/978-981-10-5780-9_13" target="_blank">Electroencephalography Based Analysis of Emotions Among Indian Film Viewers</a></h3>
<h4><i>International Conference on Advanced Informatics for Computing Research <br>(ICAICR 2017), Springer</i></h4>
<h5><center><a href="/ICAICR_2017.pdf" target="_blank">[View Paper]</a></center></h5>
✔ Neurocinematics is an emerging field of research that measures the cognitive responses of a film viewer. In this paper, the real-time brainwave frequencies of viewers watching two different genres of Indian films - horror and comedy, were captured using a Neurosky Mindwave Mobile EEG device.<br>
✔ The data was analyzed for each time interval and the resultant frequency observed was compared with various frequency ranges of brainwaves, thus attributing to the different emotions of the viewers watching the movie at every point of time.<br>
✔ The results have matched with the intended emotions, in turn the genre of the movie, which was determined based on the released movies' IMDb reviews.<br><br>

<h3><span class="fa fa-users about-icon"></span> &nbsp;<a href="http://www.sciencedirect.com/science/article/pii/S1877050916305002" target="_blank">Analysis of Routing Protocol for Low-power & Lossy Networks in IoT Real Time Applications</a></h3>
<h4><i>Fourth International Conference on Recent Trends in Computer Science & Engineering (ICRTCSE 2016), Elsevier</i></h4>
<h5><center><a href="/ICRTCSE_2016.pdf" target="_blank">[View Paper]</a></center></h5>
✔ Implemented a comparison of performance metrics in RPL between two real-time scenarios, such that they well-adapted to differentiate, thereby choosing a proper mote for the respective environment.<br>
✔ Used Contiki OS as a testbed for simulation via Cooja Simulator to process metrics of the sensory motes in a virtual WSN so that a trade-off was made between Zolertia Z1 mote and WiSMote.<br>
✔ The environments of Smart Building and Agriculture were pre-considered and patterns of Latency, Received Packets per Node and Routing Metrics were observed with an average of 10 and 20 senders, for 1 or 2 sinks.<br><br>

<h3><span class="fa fa-file about-icon"></span> &nbsp;<a href="https://pdfs.semanticscholar.org/582b/3762fc4e6ba6359d96d4f7bfc2c35e75fd66.pdf" target="_blank">Neurocinematics: The Intelligent Review System</a></h3>
<h4><i>3rd International Conference on Cognition, Brain and Computation (CBC 2015), <br>IIT Gandhinagar</i></h4>
<h5><center><a href="/CBC_Poster.pdf" target="_blank">[View Poster]</a></center></h5>
✔ While watching a film, the viewers undergo an experience that evolves over time, which grabs their attention and triggers a sequence of processes, which is perceptual, cognitive, and emotional. Each producer invests millions of dollars in a film, with the great uncertainty of getting the invested money back (leave alone the profit).<br>
✔ This article proposes to use the advancements in the EEG to address the above problem, at the same time retaining the merits of the existing methods such as FMRI. The idea is about taking a pre-release live review for a film using specially coded brainwaves from headsets (EEG) placed onto the viewers heads.<br>
✔ We propose that EEG studies of brain and its mapping will act as a fail-proof coating for each film and help the producers to bring out what they intended. All the results obtained from this experiment are solely indented to bridge the gap between mind of a viewer and the film he is viewing.


