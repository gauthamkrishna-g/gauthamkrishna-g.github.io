---
layout: page
title: Projects
#subtitle: "Persist, Percept, Practise."
---

##### * to be submitted

### <span class="fa fa-file about-icon"></span> <u>Heterogeneous Deep Federated and Active Crowdsourced Learning for Audio Sensing</u>
##### ICASSP 2020 *
Working on ubiquitous audio sensing tasks across devices in a federated learning setting to handle multiple heterogeneous neural networks which continually update themselves, using Knowledge Distillation and Bayesian Active Learning for real-time ground truthing.

### <span class="fa fa-file about-icon"></span> <u>Bayesian Incremental/Continual Learning on the Edge</u>
##### IMWUT/UbiComp *
Working on on-device incremental/continual learning wherein, the neural network continually updates on-the-fly with new incoming real-time activities, whilst retaining previously learned information (handling catastrophic forgetting), and robust to model uncertainties using Bayesian Neural Networks by utilizing dataset distillation.

### <span class="fa fa-file about-icon"></span> <u>Label Generation using Data Programming</u>
#### Language & Platform: Python | TensorFlow | PyTorch | RaspberryPi
Working on leveraging heuristic data labeling functions which are fed into a generative model and fine-tuned by a discriminative model - a data programming paradigm, aimed at ground truth generation for time- series, mobile/wearable sensing tasks.

### <span class="fa fa-file about-icon"></span> [<u>Intelligent Bus Stop Recognition System</u>](https://github.com/gauthamkrishna-g/Intelligent-Bus-Stop-Recognition-System)
#### Language & Platform: Python | Numpy | TensorFlow | Anaconda | RaspberryPi
✔ Developed a recognition engine on a RaspberryPi Zero platform that automatically identifies bus stops using images acquired from cameras placed on a bus using ConvNets and hybrid nearest-neighbor classifiers. A Day and a Night Classifier was implemented separately in run-time, so that the engine can be automated 24x7, using a light sensor or a timer.<br>
✔ A near real-time recognition engine was implemented that captured images iteratively from bus stops (in the urban city of Chennai with the bus stops being easily scalable), until a certain threshold of confidence was reached to identify them. This simulated human-like behaviour. <br>
✔ Low-resolution images were used to achieve the same result while not compromising on our accuracy. Also, accuracy and efficiency of the algorithm are explored, in terms of both memory and space.<br>
✔ Strategies like Data Augmentation, Incremental Learning and Bayesian Active Learning were used for scalability of bus stops.

### <span class="fa fa-file about-icon"></span> <u>Movie Occupancy Prediction Engine</u>
#### Tools & Framework: Python | Pandas | AWS | MS-SQL | Scikit-Learn | TensorFlow
✔ Working in collaboration with a top three Indian movie multiplex chain (with an operating volume of over 50,000 seats per day) on movie occupancy forecasting, and in turn the food produced per day.<br>
✔ Extracted terabytes of transactional data (over past 5 years) using AWS, structured them using MS-SQL & extracted behavioral features to
forecast show occupancy of a movie.<br>
✔ The prediction engine is currently designed to be able to reduce the average predicted occupancy error to about 6%, and is by far more effective than the expert predicting the same by intuition. Currently working on deploying an application into production.<br>

### <span class="fa fa-file about-icon"></span> [<u>Gest-Face</u>](https://github.com/gauthamkrishna-g/Gest-Face)
#### Language & Framework: Python | OpenCV | HaarCascade | PyQt5
✔ Developed a Gesture/Facial recognition system where the user can train and recognize gestures, as well as detect the number of faces in real-time.<br>
✔ OpenCV was used to identify the features of the gestures and faces obtained using a webcam, with Haar Cascade being used for object detection.<br>
✔ The system was rendered as an application using PyQt5.<br>

### <span class="fa fa-file about-icon"></span> <u>TamilNIST: Live Tamil Character Identification</u>
#### Tools & Framework: Python | Numpy | TensorFlow | Keras | OpenCV
✔ Developed a real-time classification of Tamil Characters (uyir ezhuthukal).<br>
✔ Utilized a 3-layer Convolutional Neural Network (CNN) followed by feed-forward nets with BatchNorm and Dropouts to achieve an efficiency of ~96%.<br>
✔ Currently working on scaling the same to other characters in Tamil (mei ezhuthukal and a combination of the same- uyir mei ezhuthukal).<br>

### <span class="fa fa-file about-icon"></span> <u>Machine Learning Specialization Course Projects</u>
#### Language & Framework: Python | Numpy | graphlab | Scikit-Learn
✔ Rigorous coursework and practical assignments for various in-depth Supervised Classification and Regression techniques, Unsupervised Clustering and Retrieval techniques, and Recommender Systems.
✔ Regression - Ridge, Lasso Regression, kNN and Kernel Regression.
✔ Classification - Logistic Regression, Decision Trees, Overfitting & Underfitting, Boosting.
✔ Clustering - Nearest neighbor search, EM with GMM, k-means, LDA, Hierarchical Clustering.
✔ The Jupyter notebooks were coded from scratch in Numpy-Python, and also using GraphLab.<br>

### <span class="fa fa-file about-icon"></span> [<u>Real-Time Sentiment Analyzer of Twitter Trends</u>](https://github.com/gauthamkrishna-g/Real-Time-Sentiment-Analyzer-of-Twitter-Trends)
#### Language & Framework: Python | NLTK | Scikit-Learn | Tweepy | PyQt5
✔ The live Twitter data correlating to a given query from the user is classified into positive or negative tweets. This real-time data is graphed, thereby giving a Trend Analysis of the given query overtime.<br>
✔ The following two classifiers were created:<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;1. An ensemble of Sentiment Analysis classifiers, resulting in a voted majority classifier trained using nltk and scikit-learn is created and pickled, returning the category ("pos" or "neg") and the confidence factor (sentiment polarity).<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;2. A TextBlob Sentiment Analysis classifier is used for returning the category and sentiment polarity.<br>
✔ When the user enters a query, the Twitter data relevant to the query is streamed using Tweepy, and are then used for graphing the live data on every hit of the query while streaming.<br>
✔ The graphs are generated separately for both the classifiers using matplotlib, along with the overall percentage of "pos" and "neg", thereby giving a comparitive analysis between the Sentiment Analyzers.<br>
✔ The users can also enter their own text and observe the sentiment of it.<br>

### <span class="fa fa-file about-icon"></span> <u>Pynsta</u>
#### Language & Framework: Python | Pandas | InstagramAPI | PyQt5
✔ An application using PyQt5 that can login into an Instagram user's account and get the profile data.<br>
✔ The application can display recent activities/notifications, timeline information, top posts of the user based on like counts and display the same.<br>
✔ Also, the list of followers, following users of a profile are tracked, thereby also tracking users who follow back (fans) and those who don't (not fans).<br>

### <span class="fa fa-file about-icon"></span> <u>Speed Control of DC Motor using Arduino</u>
#### Platform & Hardware: AtMega328 | 12V DC Motor | IR Sensor
✔ Devised a feedback based algorithm using Proportional controller to automatically self-stabilize the error between the Reference speed and the Measured speed using a proximity based sensor (Infrared Sensor).<br>
✔ The algorithm measured accurately (+/- 4 RPM) the current speed when subjected to load, for a closed loop speed-control system for a 12 V DC motor using a Micro-controller (Arduino).<br>

### <span class="fa fa-file about-icon"></span> <u>Cognitive Bot for Auto-Reply to Identified Tweets</u>
#### Platforms: IBM Watson (Bluemix) | Natural Language Classifier (NLC) | Node-RED
✔ A cognitive application using IBM Bluemix that uses a Natural Language Classifier (NLC) service from IBM Watson, which trains a set of tweets consisting of complaints, queries and feedback.<br>
✔ The application based on Node-Red reads the Twitter mentions of a particular handle, uses the NLC to identify the type of tweet and thereby, automatically replying to the tweet with an appropriate response.<br>
