We built this project using a combination of audio processing, machine learning, and natural language processing techniques. Initially, we loaded and processed the audio file using the 'librosa' library. We then applied Gaussian Mixture Models (GMM) for speaker diarization to identify different speakers in the audio. The data was further analyzed using Agglomerative Clustering to group similar segments together. For text summarization, we leveraged OpenAI GPT-3, generating summaries for each text partition. We then identified action items the text summaries. To manage the audio data, we used the 'moviepy.editor' library to divide the audio into parts for further processing or analysis. This project was developed in Python and involved data management using Pandas DataFrames to organize and analyze the results, enabling us to extract meaningful insights and information from the audio data.

Our application’s backend was hosted on an EC2 server, utilizing Flask for development and an Nginx Gunicorn reverse proxy for production to facilitate communication between our API and the app.
In the post-processing stage, we utilized the Atlassian REST API endpoint for content to create pages as child pages, complete with summaries and action points. For the computational aspect, we opted for a g4dn.xlarge instance, providing ample RAM for model training, along with a Tesla T4 for GPU computing.
