import pandas as pd


def get_prizes(n=500, num_coins=None):
    raw_df = pd.read_csv('./data/prizes.csv')
    df = raw_df[['product_name', 'coins']]
    #df = df.sample(n=500, random_state=0)
    df.sort_values(axis=0, by='coins', inplace=True)
    if num_coins:
        df = df[df['coins'] <= num_coins]
    prizes = {}
    prizes['prizes'] = df.values.tolist()
    return prizes


#get_prizes(n=200, num_coins=1000)
