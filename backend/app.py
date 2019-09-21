from flask import Flask
from flask import jsonify
from flask import request
from flask_cors import CORS
import pymongo
from .data import *
import os

app = Flask(__name__)
CORS(app)
# export FLASK_ENV=development
# export FLASK_DEBUG=1
os.environ['FLASK_ENV'] = 'development'
os.environ['FLASK_DEBUG'] = '1'
app.config['ENV'] = 'development'
app.config['DEBUG'] = True
app.config['TESTING'] = True


@app.route('/')
def hello_world():
    return 'Hello, World!'


@app.route('/ngos', methods=['GET'])
def api_ngos():
    def get_ngo_from_db():
        uri = "mongodb+srv://youdonate_team:chocos@42069@experimentcluster-whmfw.mongodb.net/test?retryWrites=true&w=majority"
        client = pymongo.MongoClient(uri)
        db = client.ngos

    response_data = {
        'status': False,
    }
    if request.method == 'GET':
        # TODO: Get from database
        ngo_data = {
            'asha': {
                'name': 'asha',
                'location': 'Mumbai',
                'phone': '99999',
            }
        }
        response_data['data'] = ngo_data
        response_data['status'] = True
    return jsonify(response_data)


@app.route('/users', methods=['GET'])
def api_users():
    response_data = {
        'status': False,
    }
    if request.method == 'GET':
        # TODO: Get from database
        username = request.args.get('username')
        user_data = {
            username: {
                'id': username,
                'location': 'Mumbai',
                'phone': '101010',
            }
        }
        response_data['data'] = user_data
        response_data['status'] = True
    return jsonify(response_data)


@app.route('/prizes', methods=['GET'])
def api_prizes():
    response_data = {
        'status': False,
    }
    if request.method == 'GET':
        prize_data = get_prizes(n=500, num_coins=800)
        response_data['data'] = prize_data
        response_data['status'] = True
    return jsonify(response_data)
