
# coding: utf-8

# In[1]:



get_ipython().run_line_magic('matplotlib', 'inline')
import pandas as pd
import numpy as np
import matplotlib.pyplot as plt
import seaborn as sns
from scipy import stats
from ast import literal_eval
from sklearn.feature_extraction.text import TfidfVectorizer, CountVectorizer
from sklearn.metrics.pairwise import linear_kernel, cosine_similarity

import warnings; warnings.simplefilter('ignore')


# In[2]:


def get_Data():
    colnames=['name', 'city', 'state', 'cause']
    ngo_df=pd.read_csv(r'C:\Users\Amol Rane\Desktop\Hackathons\Hackathon_Sept19\Datasets\ngo_data.csv', names=colnames,encoding='cp1252')
    return ngo_df

def preprocess(ngo_df):
    titles = ngo_df['name']
    city=ngo_df['city']
    indices = pd.Series(ngo_df.index, index=ngo_df['name'])
    return titles,city,indices

def tfidf_cos(ngo_df):
    tf = TfidfVectorizer(analyzer='word',ngram_range=(1, 2),min_df=0, stop_words='english')
    tfidf_matrix = tf.fit_transform(ngo_df['cause'])
    cosine_sim = linear_kernel(tfidf_matrix, tfidf_matrix)
    return tfidf_matrix,cosine_sim

def get_recommendations(title):
    idx = indices[title]
    sim_scores = list(enumerate(cosine_sim[idx]))
    sim_scores = sorted(sim_scores, key=lambda x: x[1], reverse=True)
    sim_scores = sim_scores[1:31]
    m_indices = [i[0] for i in sim_scores]
    obj1=city.iloc[m_indices]
    obj=titles.iloc[m_indices]
    return titles.iloc[m_indices]


# In[3]:


#We will have to fetch from our data base that is created realtime... a real user with x,y,z previous donation is required
#and then based on his top 2 charities, content based filtering wil be performed.... for now i am using dummy db...
#you'll have to integrate in backend
def user_top_ngos():
    #database has the user's donated charities and the total amount
    df1=pd.read_csv(r'C:\Users\Amol Rane\Desktop\Hackathons\Hackathon_Sept19\Datasets\user_data.csv')
    df2=df1
    df2=df2.loc[df2['username'] == 'svandermerwe0']
    #sort by amount-descending
    df3=df2.sort_values(by=['Amount_donated'],ascending=False)
    name1=df3.get_value(0,1,takeable = True)
    name2=df3.get_value(1,1,takeable = True)
    return name1,name2


# In[4]:


#Function Calling

ngo_df=get_Data()
titles,city,indices=preprocess(ngo_df)
tfidf_matrix,cosine_sim=tfidf_cos(ngo_df)
name1,name2=user_top_ngos()
rec_ngos1=get_recommendations(name1).head(10)
rec_ngos2=get_recommendations(name2).head(10)


# In[5]:


#If you want list of output
list(rec_ngos1)

