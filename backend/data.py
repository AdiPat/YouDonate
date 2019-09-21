import pandas as pd
import blockchain


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


def get_leaderboard():
    board = [1, 2, 3]
    return board


def get_ngos(n=500, num_coins=None):
    def str_norm(s):
        if type(s) != str:
            return s
        s = s.strip()
        words = s.split()
        lc_words = [w.lower() for w in words]
        words = [w.capitalize() for w in lc_words]
        # print(words)
        new_s = " ".join(words)
        return new_s

    raw_df = pd.read_csv('./data/ngos.csv')
    # df = raw_df[['name', 'city', 'cause', 'state']].apply(
    #    axis=0, func=str_norm)
    # print(df.head(5))
    df = raw_df
    df['state'] = df['state'].apply(str_norm)
    df = df[df['state'] == 'Maharashtra']
    res = df.values.tolist()
    # Bad
    new_res = []
    for r in res:
        new_res.append([str_norm(str(x)) for x in r])
    return new_res


get_ngos()
#get_prizes(n=200, num_coins=1000)
